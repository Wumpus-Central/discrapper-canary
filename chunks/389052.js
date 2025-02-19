n.d(t, { Z: () => E }), n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(442837),
    a = n(481060),
    s = n(194359),
    l = n(922611),
    c = n(681678),
    u = n(699516),
    d = n(594174),
    f = n(981631),
    p = n(388032);
function _(e, t, n) {
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { user: t, color: _, guildId: m, channelId: E, onBlock: v, onIgnore: b, onUnblock: y, location: O = 'ContextMenu', appContext: S = f.IlC.APP } = e,
        { id: I } = t,
        T = (0, o.e7)(
            [d.default],
            () => {
                var e;
                return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === I;
            },
            [I]
        ),
        N = (0, o.e7)([u.Z], () => u.Z.isBlocked(I), [I]),
        A = (0, l.Do)({ location: 'use-block-user-item-web' }),
        C = (0, i.EQ)({
            isStealthRemediationEnabled: A,
            isBlocked: N
        })
            .with(
                {
                    isStealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () => 'default'
            )
            .with(
                {
                    isStealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () => 'danger'
            )
            .otherwise(() => _);
    return T
        ? null
        : (0, r.jsx)(a.sNh, {
              id: 'block',
              color: null != C ? C : 'default',
              label: N ? p.NW.string(p.t.XyHpKC) : p.NW.string(p.t.l4EmaW),
              action: N
                  ? () => {
                        null == y || y(), s.Z.unblockUser(I, { location: O }), c.Z.showUnblockSuccessToast(I, null != E ? E : void 0);
                    }
                  : () => {
                        (0, a.ZDy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e('97652'), n.e('25726')]).then(n.bind(n, 478923));
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        g(h({}, n), {
                                            user: t,
                                            guildId: m,
                                            channelId: E,
                                            onBlock: v,
                                            onIgnore: b,
                                            location: O
                                        })
                                    );
                            },
                            { contextKey: (0, a.VnL)(S) }
                        );
                    }
          });
}
