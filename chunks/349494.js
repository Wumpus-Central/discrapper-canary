var i = s(477900),
    n = s(582128),
    o = s(520923),
    r = s(403581),
    c = s(217838);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 189958e3,
        [t] = n.useState(() => new Date(Date.now() + e));
    return t;
}
function d() {
    return (0, i.jsx)("img", { src: c.A, alt: "" });
}
function u() {
    return (0, i.jsxs)("svg", {
        width: "200",
        height: "20",
        viewBox: "0 0 200 20",
        fill: "currentColor",
        children: [
            (0, i.jsx)("rect", { x: "0", y: "2", width: "56", height: "16", rx: "8" }),
            (0, i.jsx)("rect", { x: "64", y: "4", width: "64", height: "12", rx: "6" }),
            (0, i.jsx)("rect", { x: "136", y: "4", width: "64", height: "12", rx: "6" }),
        ],
    });
}
function l(e) {
    return "promotion" === e.variant || "critical" !== e.type || e.dismissible;
}
s.d(
    t,
    {},
    {
        A8: a,
        CF: function (e) {
            let { ref: t, config: s, onDismiss: n, actionLoading: c = !1 } = e,
                p = a(),
                h = {
                    title: "" === s.title ? void 0 : s.title,
                    message: s.message,
                    link: "" === s.link ? void 0 : { text: s.link, href: "https://discordstatus.com" },
                },
                y =
                    "" === s.primaryAction
                        ? {}
                        : {
                              primaryAction: {
                                  text: s.primaryAction,
                                  icon: s.primaryActionIcon ? r.NitroWheelIcon : void 0,
                                  onClick: () => {},
                                  loading: c,
                              },
                              secondaryAction:
                                  "" === s.secondaryAction ? void 0 : { text: s.secondaryAction, onClick: () => {} },
                          },
                v = (function (e) {
                    switch (e) {
                        case "none":
                        case "voice":
                        case "video":
                        case "stage":
                            return;
                        case "icon":
                            return (0, i.jsx)(r.NitroWheelIcon, { size: "md", color: "currentColor" });
                        case "image":
                            return (0, i.jsx)(d, {});
                        case "wide-image":
                            return (0, i.jsx)(u, {});
                    }
                })(s.leadingAccessory);
            if ("promotion" === s.variant)
                return (0, i.jsx)(o.q, {
                    ref: t,
                    variant: "promotion",
                    type: "nitro" === s.type ? "nitro" : "expressive",
                    ...h,
                    ...y,
                    leadingAccessory: v,
                    countdown: s.countdown
                        ? "days-left" === s.countdownAppearance
                            ? { endsAt: p, appearance: "days-left" }
                            : {
                                  endsAt: p,
                                  appearance: "timer",
                                  showDays: s.countdownShowDays,
                                  showSeconds: s.countdownShowSeconds,
                              }
                        : void 0,
                    onDismiss: n,
                });
            switch (s.type) {
                case "critical":
                    return (0, i.jsx)(o.q, {
                        ref: t,
                        variant: "status",
                        type: "critical",
                        ...h,
                        ...y,
                        onDismiss: l(s) ? n : void 0,
                    });
                case "connected":
                    return (0, i.jsx)(o.q, {
                        ref: t,
                        variant: "status",
                        type: "connected",
                        leadingAccessory:
                            "video" === s.leadingAccessory || "stage" === s.leadingAccessory
                                ? s.leadingAccessory
                                : "voice",
                        ...h,
                        ...y,
                        onDismiss: n,
                    });
                case "warning":
                    return (0, i.jsx)(o.q, { ref: t, variant: "status", type: "warning", ...h, ...y, onDismiss: n });
                case "expressive":
                case "nitro":
                case "info":
                    return (0, i.jsx)(o.q, {
                        ref: t,
                        variant: "status",
                        type: "info",
                        ...h,
                        ...y,
                        leadingAccessory: v,
                        onDismiss: n,
                    });
            }
        },
        S0: l,
        lv: u,
        s8: 17158e3,
        vy: d,
    },
);
