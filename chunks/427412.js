var n = e(477900);
e(582128);
var r = e(772707),
    s = e(451394),
    a = e(871309),
    o = e(171576),
    c = e(47167),
    l = e(849736),
    h = e(418208),
    d = e(792996),
    u = e(998012),
    g = e(973324);
e.d(
    i,
    {},
    {
        default: function (t) {
            let { transitionState: i, onClose: e, channel: p } = t,
                C = (0, c.Ay)(p);
            function k(t) {
                if (!t && (0, h.Cf)(p.id)) {
                    (a.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND }), e());
                    return;
                }
                ((0, l.e7)(p, t), e());
            }
            return (0, n.jsx)(r.k, {
                transitionState: i,
                graphic: { type: "image", src: g.A },
                title: d.intl.string(d.t.Ul1RJQ),
                subtitle: d.intl.format(d.t["Z+3bWy"], {
                    stageChannelHook: () =>
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.StageIcon, {
                                    size: "custom",
                                    color: "currentColor",
                                    height: 14,
                                    width: 14,
                                    className: u.p,
                                }),
                                C,
                            ],
                        }),
                }),
                onClose: () => (k(!0), Promise.resolve()),
                actions: [
                    { text: d.intl.string(d.t.L5eIZ2), onClick: () => e(), variant: "secondary" },
                    { text: d.intl.string(d.t.MMlhsr), onClick: () => k(!1), variant: "active" },
                ],
            });
        },
    },
);
