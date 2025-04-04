n.d(t, {
    KO: () => f,
    X2: () => p,
    o0: () => _
});
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(317257),
    s = n(499997),
    l = n(215023),
    c = n(157570),
    u = n(593639),
    d = n(26028);
let f = {
        [l.Vt.FRACTIONAL_PREMIUM]: {
            render: (e) => {
                let { alt: t, className: n } = e;
                return (0, r.jsx)('img', {
                    src: u,
                    className: n,
                    alt: t,
                    height: 120
                });
            }
        },
        [l.Vt.ORB_PROFILE_BADGE]: {
            render: (e) => {
                let { animationState: t = 'on', className: n } = e;
                return (0, r.jsx)(s.Z, {
                    animationState: t,
                    className: o()(c.orbProfileBadgeAsset, n)
                });
            }
        }
    },
    _ = (e) => e in f,
    p = () => ({
        id: a.l.ORB_PROFILE_BADGE,
        icon: a.l.ORB_PROFILE_BADGE,
        iconSrc: d.Z,
        description: '',
        isPreviewMode: !0
    });
