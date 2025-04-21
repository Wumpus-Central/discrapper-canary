n.d(t, { default: () => S });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(239091),
    o = n(108843),
    c = n(100527),
    a = n(299206),
    s = n(916069),
    u = n(697229),
    d = n(212205),
    b = n(423589),
    f = n(411567),
    O = n(672824),
    p = n(3689),
    g = n(323597),
    y = n(852245),
    j = n(461535),
    h = n(776568),
    Z = n(218035),
    P = n(775666),
    v = n(442754),
    m = n(623483),
    w = n(388032);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function C(e) {
    let { channel: t, onSelect: n } = e,
        o = (0, j.Z)(t),
        c = (0, h.ZP)(t),
        s = (0, Z.Z)(t),
        p = (0, O.Z)(t),
        g = (0, f.Z)(t),
        y = (0, d.Z)(t),
        v = (0, u.Z)(t),
        _ = (0, m.Z)(t),
        C = (0, a.Z)({
            id: t.id,
            label: w.intl.string(w.t['2visCw'])
        }),
        E = (0, b.Mn)('ChannelCategoryFavoritesMenu'),
        S = (0, P.ZP)(t);
    return (0, r.jsxs)(i.v2r, {
        navId: 'channel-context',
        onClose: l.Zy,
        'aria-label': w.intl.string(w.t.Xm41aW),
        onSelect: n,
        children: [
            (0, r.jsxs)(i.kSQ, {
                children: [o, v, y]
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [c, E ? S : s]
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [p, g]
            }),
            (0, r.jsx)(i.kSQ, { children: _ }),
            (0, r.jsx)(i.kSQ, { children: C })
        ]
    });
}
function E(e) {
    let { channel: t, guild: n, onSelect: o } = e,
        c = (0, j.Z)(t),
        s = (0, h.ZP)(t),
        u = (0, Z.Z)(t),
        m = (0, O.Z)(t),
        _ = (0, f.Z)(t),
        C = (0, y.Z)(t),
        E = (0, d.Z)(t),
        S = (0, p.Z)(t, n),
        x = (0, g.Z)(t),
        N = (0, a.Z)({
            id: t.id,
            label: w.intl.string(w.t['2visCw'])
        }),
        k = (0, v.Z)(t),
        D = (0, b.Mn)('ChannelCategoryNormalMenu'),
        I = (0, P.ZP)(t);
    return (0, r.jsxs)(i.v2r, {
        navId: 'channel-context',
        onClose: l.Zy,
        'aria-label': w.intl.string(w.t.Xm41aW),
        onSelect: o,
        children: [
            (0, r.jsx)(i.kSQ, { children: c }, 'mark-as-read'),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [k, m, _]
                },
                'channel-actions'
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [s, D ? I : u]
                },
                'notifications'
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [C, E, S, x]
                },
                'admin-actions'
            ),
            (0, r.jsx)(i.kSQ, { children: N }, 'developer-actions')
        ]
    });
}
let S = (0, o.Z)(
    function (e) {
        return (0, s.Z)() ? (0, r.jsx)(C, _({}, e)) : (0, r.jsx)(E, _({}, e));
    },
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_CATEGORY_MENU]
);
