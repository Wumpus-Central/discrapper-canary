n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(194359),
    l = n(320582),
    c = n(699516),
    u = n(594174),
    d = n(388032);
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
function p(e) {
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
function h(e, t) {
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
function m(e) {
    let { user: t, location: f = 'ContextMenu', onFriendRequestSent: _, onFriendRemove: m, appContext: g } = e,
        { id: E, username: v, bot: b } = t,
        y = (0, o.e7)(
            [u.default],
            () => {
                var e;
                return (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === E;
            },
            [E]
        ),
        O = (0, l.VQ)(E),
        [S, I] = (0, o.Wu)([c.Z], () => [c.Z.isFriend(E), c.Z.isBlocked(E)], [E]),
        [T, N] = i.useState(!1);
    if (b || y) return null;
    function A() {
        (0, a.ZDy)(
            async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        h(
                            p(
                                {
                                    header: d.NW.formatToPlainString(d.t.fPLvZW, { name: v }),
                                    confirmText: d.NW.string(d.t.cvSt1N),
                                    cancelText: d.NW.string(d.t['ETE/oK']),
                                    onConfirm: () => {
                                        s.Z.removeFriend(E, { location: f }), N(!1), null == m || m();
                                    }
                                },
                                t
                            ),
                            {
                                children: (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    children: d.NW.format(d.t.l5FFq6, { name: v })
                                })
                            }
                        )
                    );
            },
            { contextKey: null != g ? (0, a.VnL)(g) : void 0 }
        );
    }
    if (S)
        return (0, r.jsx)(a.sNh, {
            id: 'remove-friend',
            label: d.NW.string(d.t.cvSt1N),
            action: A
        });
    {
        let e = O ? d.t.tfnAkJ : d.t.w5uwoK;
        return (0, r.jsx)(a.sNh, {
            id: 'add-friend',
            label: T ? d.NW.string(d.t.xMH6vL) : d.NW.string(e),
            action: () => {
                T ||
                    (s.Z.addRelationship({
                        userId: E,
                        context: { location: f }
                    }),
                    N(!0),
                    null == _ || _());
            },
            disabled: I || (T && !S)
        });
    }
}
