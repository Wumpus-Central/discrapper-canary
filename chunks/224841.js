var i = n(200651);
n(192379);
var r = n(481060),
    s = n(388905),
    l = n(703656),
    o = n(63063),
    a = n(981631),
    c = n(388032),
    d = n(514491);
let u = () => (0, l.uL)(a.Z5c.LOGIN);
t.Z = (e) => {
    let { authBoxClassName: t, underageMessage: l } = e;
    return (0, i.jsxs)(s.ZP, {
        className: t,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: n(231443),
                className: d.img
            }),
            (0, i.jsx)(s.Dx, {
                className: d.title,
                children: c.intl.string(c.t.nCB6GR)
            }),
            (0, i.jsx)(s.DK, {
                className: d.subtitle,
                children: c.intl.format(c.t.b0QzXV, {
                    underageMessage: null != l ? l : c.intl.string(c.t.WqEH4O),
                    helpURL: o.Z.getArticleURL(a.BhN.AGE_GATE)
                })
            }),
            (0, i.jsx)(r.Button, {
                fullWidth: !0,
                onClick: u,
                children: c.intl.string(c.t.szzQ6O)
            })
        ]
    });
};
