i.d(e, {
    default: () => u,
});
var r = i(627968);
i(64700);
var s = i(158954),
    n = i(397927),
    a = i(935649),
    o = i(847599),
    c = i(849736),
    l = i(418208),
    d = i(985018),
    h = i(472230),
    p = i(973324);

function u(t) {
    let { transitionState: e, onClose: i, channel: u } = t,
        g = (t) => {
            if (!t && (0, l.Cf)(u.id)) {
                a.A.showAgeVerificationGetStartedModal({
                    entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND,
                }),
                    i();
                return;
            }
            (0, c.e7)(u, t), i();
        };
    return (0, r.jsx)(s.ExpressiveModal, {
        transitionState: e,
        graphic: {
            type: "image",
            src: p.A,
        },
        title: d.intl.string(d.t.Ul1RJQ),
        subtitle: d.intl.format(d.t["Z+3bWy"], {
            stageChannelHook: () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n.qux, {
                            size: "custom",
                            color: "currentColor",
                            height: 14,
                            width: 14,
                            className: h.p,
                        }),
                        u.name,
                    ],
                }),
        }),
        onClose: () => (g(!0), Promise.resolve()),
        actions: [
            {
                text: d.intl.string(d.t.L5eIZ2),
                onClick: () => i(),
                variant: "secondary",
            },
            {
                text: d.intl.string(d.t.MMlhsr),
                onClick: () => g(!1),
                variant: "active",
            },
        ],
    });
}
