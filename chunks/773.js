i.d(e, { Z: () => u });
var t = i(200651),
    a = i(120356),
    r = i.n(a),
    o = i(481060),
    s = i(413335),
    c = i(306685),
    l = i(388032),
    d = i(390621);
function u(n) {
    let { className: e, active: i, onPrimaryClick: a, onSecondaryClick: u } = n;
    return (0, t.jsxs)('div', {
        className: r()(d.container, e),
        children: [
            i &&
                (0, t.jsx)(o.ua7, {
                    text: l.intl.string(c.Z.R3ZG5O),
                    children: (n) =>
                        (0, t.jsx)(o.zxk, {
                            ...n,
                            className: d.secondaryButton,
                            color: o.Ttl.PRIMARY,
                            'aria-label': l.intl.string(c.Z.R3ZG5O),
                            grow: !1,
                            onClick: u,
                            children: (0, t.jsx)(s.Z, {})
                        })
                }),
            (0, t.jsx)(o.zxk, {
                className: d.primaryButton,
                grow: !0,
                onClick: a,
                children: i ? l.intl.string(c.Z['g5Ds6+']) : l.intl.string(c.Z.adzkaW)
            })
        ]
    });
}
