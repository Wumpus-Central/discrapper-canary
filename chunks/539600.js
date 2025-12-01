n.d(t, {
    If: () => h,
    an: () => g,
    gp: () => _,
    qt: () => f,
    wD: () => p,
}),
    n(388685),
    n(997841),
    n(953529);
var r = n(149765),
    i = n(866442),
    a = n(311929),
    o = n(606318),
    s = n(345162);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    let n = {};
    for (let r of t) n[r.id] = p(e, r);
    return n;
}
function p(e, t) {
    var n, a, s, l, c;
    return _({
        id: t.id,
        name: t.name,
        guildId: e,
        permissions: r.vB(t.permissions),
        mentionable: t.mentionable,
        position: t.position,
        color: t.color,
        colorString: 0 !== t.color ? (0, i.Rf)(t.color) : null,
        colors: null != (n = t.colors) ? n : null,
        colorStrings: null != t.colors ? (0, o.DX)(t.colors) : null,
        hoist: t.hoist,
        managed: null != (a = t.managed) && a,
        tags: null != (s = t.tags) ? s : {},
        icon: t.icon,
        unicodeEmoji: t.unicode_emoji,
        flags: null != (l = t.flags) ? l : 0,
        description: null != (c = t.description) ? c : null,
        version: t.version,
    });
}
function _(e) {
    return (0, a.bk)(s.X4, e);
}
function m(e, t) {
    var n, a, s, l, c;
    return _({
        id: t.id,
        name: t.name,
        guildId: e,
        permissions: r.vB(t.permissions),
        mentionable: t.mentionable,
        position: t.position,
        color: t.color,
        colorString: null != t.color && 0 !== t.color ? (0, i.Rf)(t.color) : null,
        colors: null != (n = t.colors) ? n : null,
        colorStrings: null != t.colors ? (0, o.DX)(t.colors) : null,
        hoist: t.hoist,
        managed: null != (a = t.managed) && a,
        tags: null != (s = t.tags) ? s : {},
        icon: t.icon,
        unicodeEmoji: t.unicodeEmoji,
        flags: null != (l = t.flags) ? l : 0,
        description: null != (c = t.description) ? c : null,
        version: t.version,
    });
}
function h(e, t) {
    let n = {};
    for (let r in t) n[r] = m(e, t[r]);
    return n;
}
function g(e) {
    let t = {};
    for (let n in e) {
        let r = e[n];
        t[n] = d(c({}, r), { permissions: r.permissions.toString() });
    }
    return t;
}
