n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(208049),
    c = n(763296),
    u = n(388032),
    d = n(275126);
function f(e, t, n) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    var { guild: t, focused: n } = e,
        i = m(e, ['guild', 'focused']);
    let f = (0, a.e7)([c.Z], () => c.Z.getShownAllGuildIds().includes(t.id));
    return (0, r.jsx)('li', {
        className: d.soundButtonWrapper,
        children: (0, r.jsxs)(
            s.kL8,
            h(_({}, i), {
                'aria-label': u.NW.formatToPlainString(u.t.c1qVYm, { guildName: t.name }),
                className: o()(d.soundShowAllButton, { [d.focused]: n }),
                onClick: () => (0, l.HZ)(t.id),
                children: [
                    !f &&
                        (0, r.jsx)(s.CJ0, {
                            size: 'sm',
                            color: s.TVs.colors.HEADER_PRIMARY
                        }),
                    f &&
                        (0, r.jsx)(s.u04, {
                            size: 'sm',
                            color: s.TVs.colors.HEADER_PRIMARY
                        }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/semibold',
                        children: u.NW.string(f ? u.t['0aOCAA'] : u.t.ozv9NT)
                    })
                ]
            })
        )
    });
}
