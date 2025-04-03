n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(388905),
    a = n(703656),
    l = n(63063),
    s = n(981631),
    c = n(388032),
    u = n(963650);
let d = () => (0, a.uL)(s.Z5c.LOGIN),
    p = (e) => {
        let { authBoxClassName: t, underageMessage: a } = e;
        return (0, r.jsxs)(o.ZP, {
            className: t,
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: n(231443),
                    className: u.img
                }),
                (0, r.jsx)(o.Dx, {
                    className: u.title,
                    children: c.NW.string(c.t.nCB6GR)
                }),
                (0, r.jsx)(o.DK, {
                    className: u.subtitle,
                    children: c.NW.format(c.t.b0QzXV, {
                        underageMessage: null != a ? a : c.NW.string(c.t.WqEH4O),
                        helpURL: l.Z.getArticleURL(s.BhN.AGE_GATE)
                    })
                }),
                (0, r.jsx)(i.zxk, {
                    fullWidth: !0,
                    onClick: d,
                    children: c.NW.string(c.t.szzQ6O)
                })
            ]
        });
    };
