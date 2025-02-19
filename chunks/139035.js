n.d(t, { default: () => E });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(239091),
    c = n(108843),
    a = n(100527),
    l = n(299206),
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
    N = n(623483),
    m = n(388032);
function w(e) {
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
function _(e) {
    let { channel: t, onSelect: n } = e,
        c = (0, j.Z)(t),
        a = (0, h.ZP)(t),
        s = (0, Z.Z)(t),
        p = (0, O.Z)(t),
        g = (0, f.Z)(t),
        y = (0, d.Z)(t),
        v = (0, u.Z)(t),
        w = (0, N.Z)(t),
        _ = (0, l.Z)({
            id: t.id,
            label: m.NW.string(m.t['2visCw'])
        }),
        C = (0, b.Mn)('ChannelCategoryFavoritesMenu'),
        E = (0, P.ZP)(t);
    return (0, r.jsxs)(i.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': m.NW.string(m.t.Xm41aW),
        onSelect: n,
        children: [
            (0, r.jsxs)(i.kSQ, {
                children: [c, v, y]
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [a, C ? E : s]
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [p, g]
            }),
            (0, r.jsx)(i.kSQ, { children: w }),
            (0, r.jsx)(i.kSQ, { children: _ })
        ]
    });
}
function C(e) {
    let { channel: t, guild: n, onSelect: c } = e,
        a = (0, j.Z)(t),
        s = (0, h.ZP)(t),
        u = (0, Z.Z)(t),
        N = (0, O.Z)(t),
        w = (0, f.Z)(t),
        _ = (0, y.Z)(t),
        C = (0, d.Z)(t),
        E = (0, p.Z)(t, n),
        S = (0, g.Z)(t),
        x = (0, l.Z)({
            id: t.id,
            label: m.NW.string(m.t['2visCw'])
        }),
        k = (0, v.Z)(t),
        W = (0, b.Mn)('ChannelCategoryNormalMenu'),
        D = (0, P.ZP)(t);
    return (0, r.jsxs)(i.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': m.NW.string(m.t.Xm41aW),
        onSelect: c,
        children: [
            (0, r.jsx)(i.kSQ, { children: a }, 'mark-as-read'),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [k, N, w]
                },
                'channel-actions'
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [s, W ? D : u]
                },
                'notifications'
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [_, C, E, S]
                },
                'admin-actions'
            ),
            (0, r.jsx)(i.kSQ, { children: x }, 'developer-actions')
        ]
    });
}
let E = (0, c.Z)(
    function (e) {
        return (0, s.Z)() ? (0, r.jsx)(_, w({}, e)) : (0, r.jsx)(C, w({}, e));
    },
    [a.Z.CONTEXT_MENU, a.Z.CHANNEL_CATEGORY_MENU]
);
