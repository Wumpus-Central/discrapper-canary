n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(388905),
    a = n(703656),
    o = n(63063),
    s = n(981631),
    c = n(388032),
    d = n(981469);
let u = () => (0, a.uL)(s.Z5c.LOGIN),
    h = (e) => {
        let { authBoxClassName: t, underageMessage: a } = e;
        return (0, i.jsxs)(l.ZP, {
            className: t,
            children: [
                (0, i.jsx)('img', {
                    alt: '',
                    src: n(231443),
                    className: d.img
                }),
                (0, i.jsx)(l.Dx, {
                    className: d.title,
                    children: c.intl.string(c.t.nCB6GR)
                }),
                (0, i.jsx)(l.DK, {
                    className: d.subtitle,
                    children: c.intl.format(c.t.b0QzXV, {
                        underageMessage: null != a ? a : c.intl.string(c.t.WqEH4O),
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
