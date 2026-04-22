i.d(e, { default: () => g });
var n = i(627968);
i(64700);
var r = i(772707),
    s = i(451394),
    a = i(935649),
    o = i(847599),
    c = i(47167),
    l = i(849736),
    h = i(418208),
    d = i(985018),
    p = i(286641),
    u = i(973324);
function g(t) {
    let { transitionState: e, onClose: i, channel: g } = t,
        C = (0, c.Ay)(g),
        f = (t) => {
            if (!t && (0, h.Cf)(g.id)) {
                a.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND }), i();
                return;
            }
            (0, l.e7)(g, t), i();
        };
    return (0, n.jsx)(r.k, {
        transitionState: e,
        graphic: { type: "image", src: u.A },
        title: d.intl.string(d.t.Ul1RJQ),
        subtitle: d.intl.format(d.t["Z+3bWy"], {
            stageChannelHook: () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(s.q, {
                            size: "custom",
                            color: "currentColor",
                            height: 14,
                            width: 14,
                            className: p.p,
                        }),
                        C,
                    ],
                }),
        }),
        onClose: () => (f(!0), Promise.resolve()),
        actions: [
            { text: d.intl.string(d.t.L5eIZ2), onClick: () => i(), variant: "secondary" },
            { text: d.intl.string(d.t.MMlhsr), onClick: () => f(!1), variant: "active" },
        ],
    });
}
