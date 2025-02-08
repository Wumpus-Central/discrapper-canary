i.d(n, { Z: () => u });
var t = i(200651),
    r = i(120356),
    a = i.n(r),
    s = i(481060),
    o = i(413335),
    c = i(306685),
    l = i(388032),
    d = i(39332);
function u(e) {
    let { className: n, active: i, onPrimaryClick: r, onSecondaryClick: u } = e;
    return (0, t.jsxs)('div', {
        className: a()(d.container, n),
        children: [
            i &&
                (0, t.jsx)(s.ua7, {
                    text: l.intl.string(c.Z.R3ZG5O),
                    children: (e) =>
                        (0, t.jsx)(s.zxk, {
                            ...e,
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
