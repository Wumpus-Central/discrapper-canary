var r = t(477900),
    s = t(582128),
    a = t(520923),
    i = t(28863),
    o = t(403581),
    c = t(217838);
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 189958e3,
        [n] = s.useState(() => new Date(Date.now() + e));
    return n;
}
function u() {
    return (0, r.jsx)("img", { src: c.A, alt: "" });
}
function d() {
    return (0, r.jsxs)("svg", {
        width: "200",
        height: "20",
        viewBox: "0 0 200 20",
        fill: "currentColor",
        children: [
            (0, r.jsx)("rect", { x: "0", y: "2", width: "56", height: "16", rx: "8" }),
            (0, r.jsx)("rect", { x: "64", y: "4", width: "64", height: "12", rx: "6" }),
            (0, r.jsx)("rect", { x: "136", y: "4", width: "64", height: "12", rx: "6" }),
        ],
    });
}
function m(e) {
    return [e, (0, r.jsx)(i.Anchor, { href: "https://discordstatus.com", children: "Discord Status" }, "link"), "."];
}
function f(e) {
    return "promotion" === e.variant || "critical" !== e.type || e.dismissible;
}
t.d(
    n,
    {},
    {
        A8: l,
        CF: function (e) {
            let { ref: n, config: t, onDismiss: s, actionLoading: i = !1 } = e,
                c = l(),
                p = {
                    title: "" === t.title ? void 0 : t.title,
                    message: t.sampleLink
                        ? m(
                              "Discord will be down for maintenance tonight from 10pm to 11pm, and you can follow along on ",
                          )
                        : t.message,
                },
                v =
                    "" === t.primaryAction
                        ? {}
                        : {
                              primaryAction: {
                                  text: t.primaryAction,
                                  icon: t.primaryActionIcon ? o.NitroWheelIcon : void 0,
                                  onClick: () => {},
                                  loading: i,
                              },
                              secondaryAction:
                                  "" === t.secondaryAction ? void 0 : { text: t.secondaryAction, onClick: () => {} },
                          },
                h = (function (e) {
                    switch (e) {
                        case "none":
                        case "voice":
                        case "video":
                        case "stage":
                            return;
                        case "icon":
                            return (0, r.jsx)(o.NitroWheelIcon, { size: "md", color: "currentColor" });
                        case "image":
                            return (0, r.jsx)(u, {});
                        case "wide-image":
                            return (0, r.jsx)(d, {});
                    }
                })(t.leadingAccessory);
            if ("promotion" === t.variant)
                return (0, r.jsx)(a.q, {
                    ref: n,
                    variant: "promotion",
                    type: "nitro" === t.type ? "nitro" : "expressive",
                    ...p,
                    ...v,
                    leadingAccessory: h,
                    countdown: t.countdown
                        ? "days-left" === t.countdownAppearance
                            ? { endsAt: c, appearance: "days-left" }
                            : {
                                  endsAt: c,
                                  appearance: "timer",
                                  showDays: t.countdownShowDays,
                                  showSeconds: t.countdownShowSeconds,
                              }
                        : void 0,
                    onDismiss: s,
                });
            switch (t.type) {
                case "critical":
                    return (0, r.jsx)(a.q, {
                        ref: n,
                        variant: "status",
                        type: "critical",
                        role: t.role,
                        ...p,
                        ...v,
                        onDismiss: f(t) ? s : void 0,
                    });
                case "connected":
                    return (0, r.jsx)(a.q, {
                        ref: n,
                        variant: "status",
                        type: "connected",
                        leadingAccessory:
                            "video" === t.leadingAccessory || "stage" === t.leadingAccessory
                                ? t.leadingAccessory
                                : "voice",
                        role: t.role,
                        ...p,
                        ...v,
                        onDismiss: s,
                    });
                case "warning":
                    return (0, r.jsx)(a.q, {
                        ref: n,
                        variant: "status",
                        type: "warning",
                        role: t.role,
                        ...p,
                        ...v,
                        onDismiss: s,
                    });
                case "expressive":
                case "nitro":
                case "info":
                    return (0, r.jsx)(a.q, {
                        ref: n,
                        variant: "status",
                        type: "info",
                        role: t.role,
                        ...p,
                        ...v,
                        leadingAccessory: h,
                        onDismiss: s,
                    });
            }
        },
        S0: f,
        St: m,
        lv: d,
        s8: 17158e3,
        vy: u,
    },
);
