n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(194359),
    s = n(699516),
    l = n(594174),
    c = n(981631),
    u = n(388032),
    d = n(86777);
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
function m(e) {
    let { user: t, guildId: f, channelId: p, onBlock: m, onIgnore: g, onUnignore: E, location: b = 'ContextMenu', appContext: y = c.IlC.APP } = e,
        { id: O } = t,
        v = (0, i.e7)(
            [l.default],
            () => {
                var e;
                return (null == (e = l.default.getCurrentUser()) ? void 0 : e.id) === O;
            },
            [O]
        ),
        { isIgnored: I, isBlocked: S } = (0, i.cj)(
            [s.Z],
            () => ({
                isIgnored: s.Z.isIgnored(O),
                isBlocked: s.Z.isBlocked(O)
            }),
            [O]
        );
    return v || S
        ? null
        : (0, r.jsx)(a.sNh, {
              id: 'ignore',
              color: 'default',
              label: I
                  ? u.intl.string(u.t['8wXU9P'])
                  : (0, r.jsx)('div', {
                        className: d.label,
                        children: u.intl.string(u.t.ytCpKi)
                    }),
              action: I
                  ? () => {
                        null == E || E(), o.Z.unignoreUser(O, null != b ? b : 'use-ignore-user-item-web', null != p ? p : void 0);
                    }
                  : () => {
                        (0, a.ZDy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e('97652'), n.e('25784')]).then(n.bind(n, 240515));
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        h(_({}, n), {
                                            guildId: f,
                                            channelId: p,
                                            user: t,
                                            onIgnore: g,
                                            onBlock: m,
                                            location: b
                                        })
                                    );
                            },
                            { contextKey: (0, a.VnL)(y) }
                        );
                    }
          });
}
