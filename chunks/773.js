i.d(n, { Z: () => l });
var t = i(200651),
    a = i(481060),
    r = i(413335),
    o = i(291775),
    s = i(388032),
    c = i(39332);
function l(e) {
    let { active: n, onPrimaryClick: i, onSecondaryClick: l } = e;
    return (0, t.jsxs)('div', {
        className: c.container,
        children: [
            n &&
                (0, t.jsx)(a.ua7, {
                    text: s.intl.string(o.Z.R3ZG5O),
                    children: (e) =>
                        (0, t.jsx)(a.zxk, {
                            ...e,
                            className: c.secondaryButton,
                            color: a.Ttl.PRIMARY,
                            'aria-label': s.intl.string(o.Z.R3ZG5O),
                            grow: !1,
                            onClick: l,
                            children: (0, t.jsx)(r.Z, {})
                        })
                }),
            (0, t.jsx)(a.zxk, {
                className: c.primaryButton,
                grow: !0,
                onClick: i,
                children: n ? s.intl.string(o.Z['g5Ds6+']) : s.intl.string(o.Z.adzkaW)
            })
        ]
    });
}
