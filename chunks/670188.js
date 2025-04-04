n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(594174),
    s = n(184301),
    l = n(347475),
    c = n(231338);
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
let m = (0, o.pxk)(o.EFr.SIZE_80),
    g = {
        onMouseDown: c.dG,
        onClick: c.dG,
        onKeyDown: c.dG,
        'aria-controls': void 0,
        'aria-expanded': !1
    },
    E = {
        isShown: !1,
        position: void 0
    };
function b(e) {
    var { userId: t, user: n, guildId: c, channelId: u, avatarUrl: f, preload: h, shouldPreload: b = !0, renderPopout: y, onClosePopout: v, children: O } = e,
        I = p(e, ['userId', 'user', 'guildId', 'channelId', 'avatarUrl', 'preload', 'shouldPreload', 'renderPopout', 'onClosePopout', 'children']);
    let S = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        T = (0, i.e7)([a.default], () => (null != n ? n : a.default.getUser(t)));
    if (null == T || null == S) return O(g, E);
    let N = () =>
            null != h
                ? h()
                : (0, s.Z)(T.id, null != f ? f : T.getAvatarURL(c, m), {
                      guildId: c,
                      channelId: u
                  }),
        A = (e) =>
            null != y
                ? y(e)
                : (0, r.jsx)(
                      l.Z,
                      _(d({}, I, e), {
                          userId: T.id,
                          user: T,
                          guildId: c,
                          channelId: u,
                          closePopout: () => {
                              e.closePopout(), null == v || v();
                          }
                      })
                  );
    return (0, r.jsx)(
        o.yRy,
        _(
            d(
                {
                    preload: b ? N : void 0,
                    renderPopout: A
                },
                I
            ),
            { children: O }
        )
    );
}
