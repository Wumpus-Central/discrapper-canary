i.d(e, { Z: () => l });
var t = i(200651),
    r = i(481060),
    a = i(413335),
    s = i(291775),
    o = i(388032),
    c = i(39332);
function l(n) {
    let { active: e, onPrimaryClick: i, onSecondaryClick: l } = n;
    return (0, t.jsxs)('div', {
        className: c.container,
        children: [
            e &&
                (0, t.jsx)(r.ua7, {
                    text: o.intl.string(s.Z.R3ZG5O),
                    children: (n) =>
                        (0, t.jsx)(r.zxk, {
                            ...n,
                            className: c.secondaryButton,
                            color: r.Ttl.PRIMARY,
                            'aria-label': o.intl.string(s.Z.R3ZG5O),
                            grow: !1,
                            onClick: l,
                            children: (0, t.jsx)(a.Z, {})
                        })
                }),
            (0, t.jsx)(r.zxk, {
                className: c.primaryButton,
                grow: !0,
                onClick: i,
                children: e ? o.intl.string(s.Z['g5Ds6+']) : o.intl.string(s.Z.adzkaW)
            })
        ]
    });
}
