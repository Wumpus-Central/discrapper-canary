var a = n(477900);
n(582128);
var r = n(520923),
    i = n(403581),
    t = n(792996),
    c = n(217838);
function o() {
    return (0, a.jsx)("img", { src: c.A, alt: "" });
}
function l() {
    return (0, a.jsxs)("svg", {
        width: "200",
        height: "20",
        viewBox: "0 0 200 20",
        fill: "currentColor",
        children: [
            (0, a.jsx)("rect", { x: "0", y: "2", width: "56", height: "16", rx: "8" }),
            (0, a.jsx)("rect", { x: "64", y: "4", width: "64", height: "12", rx: "6" }),
            (0, a.jsx)("rect", { x: "136", y: "4", width: "64", height: "12", rx: "6" }),
        ],
    });
}
n.d(
    s,
    {},
    {
        CF: function (e) {
            let { config: s, onDismiss: n, actionLoading: c = !1 } = e,
                d = {
                    title: "" === s.title ? void 0 : s.title,
                    message: s.sampleLink
                        ? t.intl.format(t.t.MOIaNd, { keyboardNavArticle: "https://support.discord.com" })
                        : s.message,
                },
                u =
                    "" === s.primaryAction
                        ? {}
                        : {
                              primaryAction: {
                                  text: s.primaryAction,
                                  icon: s.primaryActionIcon ? i.t : void 0,
                                  onClick: () => {},
                                  loading: c,
                              },
                              secondaryAction:
                                  "" === s.secondaryAction ? void 0 : { text: s.secondaryAction, onClick: () => {} },
                          },
                m = (function (e) {
                    switch (e) {
                        case "none":
                        case "voice":
                        case "video":
                        case "stage":
                            return;
                        case "icon":
                            return (0, a.jsx)(i.t, { size: "md", color: "currentColor" });
                        case "image":
                            return (0, a.jsx)(o, {});
                        case "wide-image":
                            return (0, a.jsx)(l, {});
                    }
                })(s.leadingAccessory);
            if ("promotion" === s.variant)
                return (0, a.jsx)(r.q, {
                    variant: "promotion",
                    type: "nitro" === s.type || "brand" === s.type ? s.type : "expressive",
                    ...d,
                    ...u,
                    leadingAccessory: m,
                    onDismiss: n,
                });
            switch (s.type) {
                case "critical":
                    return (0, a.jsx)(r.q, {
                        variant: "status",
                        type: "critical",
                        role: s.role,
                        ...d,
                        ...u,
                        onDismiss: s.dismissible ? n : void 0,
                    });
                case "connected":
                    return (0, a.jsx)(r.q, {
                        variant: "status",
                        type: "connected",
                        leadingAccessory:
                            "video" === s.leadingAccessory || "stage" === s.leadingAccessory
                                ? s.leadingAccessory
                                : "voice",
                        role: s.role,
                        ...d,
                        ...u,
                        onDismiss: n,
                    });
                case "warning":
                    return (0, a.jsx)(r.q, {
                        variant: "status",
                        type: "warning",
                        role: s.role,
                        ...d,
                        ...u,
                        onDismiss: n,
                    });
                case "expressive":
                case "nitro":
                case "brand":
                case "info":
                    return (0, a.jsx)(r.q, {
                        variant: "status",
                        type: "info" === s.type ? "info" : "brand",
                        role: s.role,
                        ...d,
                        ...u,
                        leadingAccessory: m,
                        onDismiss: n,
                    });
            }
        },
        lv: l,
        vy: o,
    },
);
