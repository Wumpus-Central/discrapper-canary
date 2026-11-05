var s = n(477900);
n(582128);
var e = n(834730),
    c = n(772707),
    r = n(83107),
    a = n(960027),
    o = n(297152),
    l = n(792996),
    d = n(756537),
    h = n(973324);
function u(t) {
    let { text: i, icon: n, foreground: c } = t;
    return (0, s.jsxs)("div", {
        className: d.OI,
        children: [
            (0, s.jsx)("div", {
                className: d.zc,
                children: (0, s.jsx)(n, {
                    color: c ?? "currentColor",
                    className: d.kZ,
                    size: "custom",
                    height: 40,
                    width: 40,
                }),
            }),
            (0, s.jsx)(e.E, { variant: "body-md/normal", color: "text-default", className: d.Ct, children: i }),
        ],
    });
}
n.d(
    i,
    {},
    {
        default: function (t) {
            let { transitionState: i, onClose: n, ...e } = t;
            return (0, s.jsxs)(c.k, {
                ...e,
                graphic: { type: "image", src: h.A },
                title: l.intl.string(l.t.UVuXCs),
                onClose: n,
                transitionState: i,
                actions: [{ text: l.intl.string(l.t.obLqZ8), variant: "primary", onClick: n }],
                children: [
                    (0, s.jsx)(u, {
                        text: l.intl.string(l.t.sBDfo6),
                        icon: r.MicrophoneSlashIcon,
                        foreground: "var(--icon-feedback-critical)",
                    }),
                    (0, s.jsx)(u, { text: l.intl.string(l.t.x58YtH), icon: a.PhoneHangUpIcon }),
                    (0, s.jsx)(u, { text: l.intl.string(l.t.XtVqla), icon: o.HandRequestSpeakIcon }),
                ],
            });
        },
    },
);
