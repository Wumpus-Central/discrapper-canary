n.d(t, {
    A: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(297413),
    c = n(342296),
    u = n(89839);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
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

function _(e, t) {
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

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function g(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            nick: d,
            className: p,
            textClassName: m,
            disablePopout: g,
            ignoreModalClicks: E,
            onClick: b,
            onContextMenu: y,
            onPopoutRequestOpen: O,
            onPopoutRequestClose: A,
        } = e,
        v = i.useRef(null);
    return (0, r.jsx)(c.A, {
        targetElementRef: v,
        user: t,
        guildId: n,
        channelId: a,
        position: "left",
        shouldShow: !g && void 0,
        onRequestOpen: O,
        onRequestClose: A,
        ignoreModalClicks: E,
        children: (e) => {
            let { onClick: i } = e,
                a = h(e, ["onClick"]);
            return (0, r.jsxs)(
                o.DUT,
                _(f({}, a), {
                    innerRef: v,
                    className: s()(u.DV, p, {
                        [u.YR]: g,
                    }),
                    onContextMenu: y,
                    onClick: (e) => {
                        i(e), null == b || b(e);
                    },
                    children: [
                        (0, r.jsx)(o.euF, {
                            src: t.getAvatarURL(n, (0, o.FT9)(o._3J.SIZE_24)),
                            className: u.my,
                            "aria-label": t.username,
                            size: o._3J.SIZE_24,
                        }),
                        (0, r.jsx)(o.Text, {
                            className: s()(u.Ft, m),
                            variant: "text-sm/normal",
                            children: (0, r.jsx)(l.A, {
                                user: t,
                                nick: d,
                                usernameClass: u.Xh,
                                hideDiscriminator: !0,
                            }),
                        }),
                    ],
                }),
            );
        },
    });
}
