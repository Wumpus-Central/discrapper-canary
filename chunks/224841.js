n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(388905),
    s = n(703656),
    o = n(63063),
    a = n(981631),
    c = n(388032),
    u = n(963650);
let d = () => (0, s.uL)(a.Z5c.LOGIN, { source: 'age_gate_underage' }),
    h = (e) => {
        let { authBoxClassName: t, underageMessage: s } = e;
        return (0, r.jsxs)(l.ZP, {
            className: t,
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: n(231443),
                    className: u.img
                }),
                (0, r.jsx)(l.Dx, {
                    className: u.title,
                    children: c.intl.string(c.t.nCB6GR)
                }),
                (0, r.jsx)(l.DK, {
                    className: u.subtitle,
                    children: c.intl.format(c.t.b0QzXV, {
                        underageMessage: null != s ? s : c.intl.string(c.t.WqEH4O),
                        helpURL: o.Z.getArticleURL(a.BhN.AGE_GATE)
                    })
                }),
                (0, r.jsx)(i.zxk, {
                    fullWidth: !0,
                    onClick: d,
                    children: c.intl.string(c.t.szzQ6O)
                })
            ]
        });
    };
