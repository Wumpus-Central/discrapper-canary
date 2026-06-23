e.d(i, { default: () => g });
var n = e(627968);
e(64700);
var r = e(772707),
    s = e(451394),
    a = e(139716),
    o = e(847599),
    c = e(47167),
    l = e(849736),
    h = e(418208),
    d = e(375708),
    u = e(286641),
    p = e(973324);
function g(t) {
    let { transitionState: i, onClose: e, channel: g } = t,
        C = (0, c.Ay)(g);
    function k(t) {
        if (!t && (0, h.Cf)(g.id)) {
            a.A.showAgeVerificationGetStartedModal({ entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND }), e();
            return;
        }
        (0, l.e7)(g, t), e();
    }
    return (0, n.jsx)(r.k, {
        transitionState: i,
        graphic: { type: "image", src: p.A },
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
}
