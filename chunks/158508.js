n.d(t, { Z: () => v }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(194359),
    l = n(377171),
    c = n(243778),
    u = n(699516),
    d = n(594174),
    f = n(981631),
    _ = n(921944),
    p = n(388032),
    h = n(86777);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y() {
    return (0, r.jsx)(a.IGR, {
        color: l.Z.BG_BRAND,
        text: p.NW.string(p.t.y2b7CA)
    });
}
function v(e) {
    let { user: t, guildId: l, channelId: m, onBlock: E, onIgnore: v, onUnignore: O, location: I = 'ContextMenu', appContext: S = f.IlC.APP } = e,
        { id: T } = t,
        N = (0, i.e7)(
            [d.default],
            () => {
                var e;
                return (null == (e = d.default.getCurrentUser()) ? void 0 : e.id) === T;
            },
            [T]
        ),
        { isIgnored: A, isBlocked: C } = (0, i.cj)(
            [u.Z],
            () => ({
                isIgnored: u.Z.isIgnored(T),
                isBlocked: u.Z.isBlocked(T)
            }),
            [T]
        ),
        R = [o.z.IGNORE_USER_NEW_BADGE],
        [P, w] = (0, c.US)(R),
        D = P === o.z.IGNORE_USER_NEW_BADGE;
    return N || C
        ? null
        : (0, r.jsx)(a.sNh, {
              id: 'ignore',
              color: 'default',
              label: A
                  ? p.NW.string(p.t['8wXU9P'])
                  : (0, r.jsxs)('div', {
                        className: h.label,
                        children: [p.NW.string(p.t.ytCpKi), D ? (0, r.jsx)(y, {}) : null]
                    }),
              action: A
                  ? () => {
                        null == O || O(), s.Z.unignoreUser(T, null != I ? I : 'use-ignore-user-item-web', null != m ? m : void 0);
                    }
                  : () => {
                        D && w(_.L.TAKE_ACTION),
                            (0, a.ZDy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('97652'), n.e('25784')]).then(n.bind(n, 240515));
                                    return (n) =>
                                        (0, r.jsx)(
                                            e,
                                            b(g({}, n), {
                                                guildId: l,
                                                channelId: m,
                                                user: t,
                                                onIgnore: v,
                                                onBlock: E,
                                                location: I
                                            })
                                        );
                                },
                                { contextKey: (0, a.VnL)(S) }
                            );
                    }
          });
}
