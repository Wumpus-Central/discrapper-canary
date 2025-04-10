n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(103450),
    a = n(915863);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function _(e) {
    var { activity: t, embeddedActivity: n, user: s, onAction: c, ButtonComponent: f = a.Z } = e,
        _ = d(e, ['activity', 'embeddedActivity', 'user', 'onAction', 'ButtonComponent']);
    let p = (0, o.e)({
        activity: null != t ? t : void 0,
        embeddedActivity: n,
        user: s,
        onGameJoin: c
    });
    if (null == p) return null;
    let { isJoining: h, handleJoinRequest: m, buttonCTA: g, tooltip: E, isEnabled: b } = p;
    return (0, r.jsx)(
        i.ua7,
        {
            text: E,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: n } = e;
                return (0, r.jsx)(
                    f,
                    u(
                        l(
                            {
                                onClick: m,
                                onMouseEnter: t,
                                onMouseLeave: n,
                                disabled: !b,
                                submitting: h,
                                fullWidth: !0
                            },
                            _
                        ),
                        { children: g }
                    )
                );
            }
        },
        'join'
    );
}
