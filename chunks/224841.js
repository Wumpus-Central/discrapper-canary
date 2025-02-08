n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(388905),
    l = n(703656),
    o = n(63063),
    s = n(981631),
    c = n(388032),
    d = n(514491);
let u = () => (0, l.uL)(s.Z5c.LOGIN),
    h = (e) => {
        let { authBoxClassName: t, underageMessage: l } = e;
        return (0, i.jsxs)(a.ZP, {
            className: t,
            children: [
                (0, i.jsx)('img', {
                    alt: '',
                    src: n(231443),
                    className: d.img
                }),
                (0, i.jsx)(a.Dx, {
                    className: d.title,
                    children: c.intl.string(c.t.nCB6GR)
                }),
                (0, i.jsx)(a.DK, {
                    className: d.subtitle,
                    children: c.intl.format(c.t.b0QzXV, {
                        underageMessage: null != l ? l : c.intl.string(c.t.WqEH4O),
                        helpURL: o.Z.getArticleURL(s.BhN.AGE_GATE)
                    })
                }),
                (0, i.jsx)(r.zxk, {
                    fullWidth: !0,
                    onClick: u,
                    children: c.intl.string(c.t.szzQ6O)
                })
            ]
        });
    };
