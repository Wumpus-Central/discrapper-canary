i.d(e, { default: () => u });
var n = i(627968);
i(64700);
var r = i(158954),
    s = i(397927),
    a = i(935649),
    o = i(847599),
    c = i(849736),
    l = i(418208),
    h = i(985018),
    d = i(472230),
    p = i(973324);
function u(t) {
    let { transitionState: e, onClose: i, channel: u } = t,
        g = (t) => {
            if (!t && (0, l.Cf)(u.id)) {
                a.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND }), i();
                return;
            }
            (0, c.e7)(u, t), i();
        };
    return (0, n.jsx)(r.ExpressiveModal, {
        transitionState: e,
        graphic: { type: "image", src: p.A },
        title: h.intl.string(h.t.Ul1RJQ),
        subtitle: h.intl.format(h.t["Z+3bWy"], {
            stageChannelHook: () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(s.qux, {
                            size: "custom",
                            color: "currentColor",
                            height: 14,
                            width: 14,
                            className: d.p,
                        }),
                        u.name,
                    ],
                }),
        }),
        onClose: () => (g(!0), Promise.resolve()),
        actions: [
            { text: h.intl.string(h.t.L5eIZ2), onClick: () => i(), variant: "secondary" },
            { text: h.intl.string(h.t.MMlhsr), onClick: () => g(!1), variant: "active" },
        ],
    });
}
