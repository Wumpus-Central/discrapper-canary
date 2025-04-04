n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(129861),
    l = n(184301),
    c = n(347475),
    u = n(22700);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    let { user: t, guildId: n, channelId: i, nick: d, className: _, textClassName: m, disablePopout: g, ignoreModalClicks: E, onClick: b, onContextMenu: y, onPopoutRequestOpen: v, onPopoutRequestClose: O } = e;
    return (0, r.jsx)(a.yRy, {
        preload: () =>
            (0, l.Z)(t.id, t.getAvatarURL(n, (0, a.pxk)(a.EFr.SIZE_80)), {
                guildId: n,
                channelId: i
            }),
        renderPopout: (e) =>
            (0, r.jsx)(
                c.Z,
                p(f({}, e), {
                    userId: t.id,
                    guildId: n,
                    channelId: i
                })
            ),
        position: 'left',
        shouldShow: !g && void 0,
        onRequestOpen: v,
        onRequestClose: O,
        ignoreModalClicks: E,
        clickTrap: !0,
        children: (e) => {
            var { onClick: i } = e,
                l = h(e, ['onClick']);
            return (0, r.jsxs)(
                a.P3F,
                p(f({}, l), {
                    className: o()(u.userListItem, _, { [u.popoutDisabled]: g }),
                    onContextMenu: y,
                    onClick: (e) => {
                        i(e), null == b || b(e);
                    },
                    children: [
                        (0, r.jsx)(a.qEK, {
                            src: t.getAvatarURL(n, (0, a.pxk)(a.EFr.SIZE_24)),
                            className: u.avatar,
                            'aria-label': t.username,
                            size: a.EFr.SIZE_24
                        }),
                        (0, r.jsx)(a.Text, {
                            className: o()(u.userListItemTag, m),
                            variant: 'text-sm/normal',
                            children: (0, r.jsx)(s.Z, {
                                user: t,
                                nick: d,
                                usernameClass: u.username,
                                hideDiscriminator: !0
                            })
                        })
                    ]
                })
            );
        }
    });
}
