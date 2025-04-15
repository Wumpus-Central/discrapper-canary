n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(388905),
    l = n(703656),
    o = n(63063),
    a = n(981631),
    c = n(388032),
    u = n(963650);
let d = () => (0, l.uL)(a.Z5c.LOGIN, { source: 'age_gate_underage' }),
    h = (e) => {
        let { authBoxClassName: t, underageMessage: l } = e;
        return (0, r.jsxs)(s.ZP, {
            className: t,
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: n(231443),
                    className: u.img
                }),
                (0, r.jsx)(s.Dx, {
                    className: u.title,
                    children: c.NW.string(c.t.nCB6GR)
                }),
                (0, r.jsx)(s.DK, {
                    className: u.subtitle,
                    children: c.NW.format(c.t.b0QzXV, {
                        underageMessage: null != l ? l : c.NW.string(c.t.WqEH4O),
                        helpURL: o.Z.getArticleURL(a.BhN.AGE_GATE)
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
