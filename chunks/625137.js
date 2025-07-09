(n.d(t, {
    C5: () => f,
    CL: () => u,
    EO: () => _,
    iw: () => d,
    k0: () => c
}),
    n(997841),
    n(642613),
    n(388685));
var r = n(149765),
    i = n(866442),
    a = n(606318),
    o = n(709054);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            }));
    }
    return e;
}
function c(e) {
    e.permissions = r.vB(e.permissions);
}
function u(e) {
    var t;
    return {
        id: e.id,
        name: e.name,
        permissions: r.vB(e.permissions),
        mentionable: e.mentionable,
        position: e.position,
        originalPosition: e.position,
        color: e.color,
        colorString: null != e.color && 0 !== e.color ? (0, i.Rf)(e.color) : null,
        colors: e.colors,
        colorStrings: null != e.colors ? (0, a.DX)(e.colors) : null,
        hoist: e.hoist,
        managed: e.managed,
        tags: e.tags,
        icon: e.icon,
        unicodeEmoji: e.unicode_emoji,
        flags: null != (t = e.flags) ? t : 0
    };
}
function d(e, t) {
    if (null == t) return {};
    let n = t.length - 1,
        r = {};
    return (
        t
            .sort((t, n) => {
                var r, i;
                let a = e === t.id ? 1 / 0 : -(null != (r = t.originalPosition) ? r : t.position),
                    s = e === n.id ? 1 / 0 : -(null != (i = n.originalPosition) ? i : n.position);
                return a === s ? o.default.compare(t.id, n.id) : a < s ? -1 : +(a !== s);
            })
            .forEach((e, t) => {
                ((e.position = n - t), (r[e.id] = e));
            }),
        r
    );
}
function f(e, t) {
    return null == t ? {} : d(e, t.map(u));
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
    if (r.length + n.length === 0) return t;
    if (((t = l({}, t)), null != r)) for (let e of r) delete t[e];
    for (let e of n) t[e.id] = u(e);
    return d(e, Object.values(t));
}
