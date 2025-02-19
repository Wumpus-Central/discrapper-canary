n.d(t, { Z: () => O }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(194359),
    l = n(377171),
    c = n(243778),
    u = n(922611),
    d = n(699516),
    f = n(594174),
    p = n(981631),
    _ = n(921944),
    h = n(388032),
    m = n(607570);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y() {
    return (0, r.jsx)(a.IGR, {
        color: l.Z.BG_BRAND,
        text: h.NW.string(h.t.y2b7CA)
    });
}
function O(e) {
    let { user: t, guildId: l, channelId: g, onBlock: v, onIgnore: O, onUnignore: S, location: I = 'ContextMenu', appContext: T = p.IlC.APP } = e,
        { id: N } = t,
        A = (0, i.e7)(
            [f.default],
            () => {
                var e;
                return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === N;
            },
            [N]
        ),
        { isIgnored: C, isBlocked: R } = (0, i.cj)(
            [d.Z],
            () => ({
                isIgnored: d.Z.isIgnored(N),
                isBlocked: d.Z.isBlocked(N)
            }),
            [N]
        ),
        P = (0, u.Do)({ location: 'use-block-user-item-web' }),
        w = P ? [o.z.IGNORE_USER_NEW_BADGE] : [],
        [D, x] = (0, c.US)(w),
        L = D === o.z.IGNORE_USER_NEW_BADGE;
    return !P || A || R
        ? null
        : (0, r.jsx)(a.sNh, {
              id: 'ignore',
              color: 'default',
              label: C
                  ? h.NW.string(h.t['8wXU9P'])
                  : (0, r.jsxs)('div', {
                        className: m.label,
                        children: [h.NW.string(h.t.ytCpKi), L ? (0, r.jsx)(y, {}) : null]
                    }),
              action: C
                  ? () => {
                        null == S || S(), s.Z.unignoreUser(N, null != I ? I : 'use-ignore-user-item-web', null != g ? g : void 0);
                    }
                  : () => {
                        L && x(_.L.TAKE_ACTION),
                            (0, a.ZDy)(
                                async () => {
                                    let { default: e } = await Promise.all([n.e('97652'), n.e('25726')]).then(n.bind(n, 240515));
                                    return (n) =>
                                        (0, r.jsx)(
                                            e,
                                            b(E({}, n), {
                                                guildId: l,
                                                channelId: g,
                                                user: t,
                                                onIgnore: O,
                                                onBlock: v,
                                                location: I
                                            })
                                        );
                                },
                                { contextKey: (0, a.VnL)(T) }
                            );
                    }
          });
}
