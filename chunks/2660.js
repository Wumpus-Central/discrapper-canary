n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(204418),
    s = n(594174),
    l = n(113434),
    c = n(182294),
    u = n(723781);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
let _ = (e) => {
        let { questConfig: t, fallback: n, isFocused: d } = e,
            f = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            { avatarDecoration: _, isFetching: p } = (0, l.DU)(t);
        return p
            ? (0, r.jsx)('div', {
                  className: u.questsCollectibleReward,
                  children: (0, r.jsx)(a.$jN, {})
              })
            : null == f || null == _
              ? n
              : (0, r.jsx)('div', {
                    className: u.questsCollectibleReward,
                    children: (0, r.jsx)(o.Z, {
                        avatarSize: c.EF.SIZE_56,
                        user: f,
                        guildId: null,
                        avatarDecorationOverride: _,
                        animateOnHover: !d
                    })
                });
    },
    p = (e) => (0, r.jsx)(_, f({}, e));
