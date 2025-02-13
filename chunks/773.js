i.d(e, { Z: () => u });
var t = i(200651),
    r = i(120356),
    a = i.n(r),
    s = i(481060),
    o = i(413335),
    c = i(306685),
    l = i(388032),
    d = i(390621);
function u(n) {
    let { className: e, active: i, onPrimaryClick: r, onSecondaryClick: u } = n;
    return (0, t.jsxs)('div', {
        className: a()(d.container, e),
        children: [
            i &&
                (0, t.jsx)(s.ua7, {
                    text: l.intl.string(c.Z.R3ZG5O),
                    children: (n) =>
                        (0, t.jsx)(s.zxk, {
                            ...n,
                            className: d.secondaryButton,
                            color: s.Ttl.PRIMARY,
                            'aria-label': l.intl.string(c.Z.R3ZG5O),
                            grow: !1,
                            onClick: u,
                            children: (0, t.jsx)(o.Z, {})
                        })
                }),
            (0, t.jsx)(s.zxk, {
                className: d.primaryButton,
                grow: !0,
                onClick: r,
                children: i ? l.intl.string(c.Z['g5Ds6+']) : l.intl.string(c.Z.adzkaW)
            })
        ]
    });
}
