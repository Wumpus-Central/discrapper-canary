n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(129861),
    l = n(670188),
    c = n(22700);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    let { user: t, guildId: n, channelId: i, nick: u, className: f, textClassName: h, disablePopout: m, ignoreModalClicks: g, onClick: E, onContextMenu: b, onPopoutRequestOpen: y, onPopoutRequestClose: v } = e;
    return (0, r.jsx)(l.Z, {
        user: t,
        guildId: n,
        channelId: i,
        position: 'left',
        shouldShow: !m && void 0,
        onRequestOpen: y,
        onRequestClose: v,
        ignoreModalClicks: g,
        children: (e) => {
            var { onClick: i } = e,
                l = p(e, ['onClick']);
            return (0, r.jsxs)(
                a.P3F,
                _(d({}, l), {
                    className: o()(c.userListItem, f, { [c.popoutDisabled]: m }),
                    onContextMenu: b,
                    onClick: (e) => {
                        i(e), null == E || E(e);
                    },
                    children: [
                        (0, r.jsx)(a.qEK, {
                            src: t.getAvatarURL(n, (0, a.pxk)(a.EFr.SIZE_24)),
                            className: c.avatar,
                            'aria-label': t.username,
                            size: a.EFr.SIZE_24
                        }),
                        (0, r.jsx)(a.Text, {
                            className: o()(c.userListItemTag, h),
                            variant: 'text-sm/normal',
                            children: (0, r.jsx)(s.Z, {
                                user: t,
                                nick: u,
                                usernameClass: c.username,
                                hideDiscriminator: !0
                            })
                        })
                    ]
                })
            );
        }
    });
}
