n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(194359),
    l = n(276506),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
function m(e, t) {
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
function h(e) {
    let { user: t, location: f = "ContextMenu", onFriendRequestSent: _, onFriendRemove: h, appContext: g } = e,
        { id: E, username: b, bot: y } = t,
        O = (0, a.e7)([u.default], () => {
            var e;
            return (null == (e = u.default.getCurrentUser()) ? void 0 : e.id) === E;
        }, [E]),
        v = (0, l.n)({ userId: E }),
        [S, I] = (0, a.Wu)([c.Z], () => [c.Z.isFriend(E), c.Z.isBlocked(E)], [E]),
        [T, A] = i.useState(!1);
    if (y || O) return null;
    function C() {
        (0, o.ZDy)(
            async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        m(
                            p(
                                {
                                    header: d.intl.formatToPlainString(d.t.fPLvZd, { name: b }),
                                    confirmText: d.intl.string(d.t.cvSt1J),
                                    cancelText: d.intl.string(d.t["ETE/oC"]),
                                    onConfirm: () => {
                                        s.Z.removeFriend(E, { location: f }), A(!1), null == h || h();
                                    },
                                },
                                t,
                            ),
                            {
                                children: (0, r.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: d.intl.format(d.t.l5FFq6, { name: b }),
                                }),
                            },
                        ),
                    );
            },
            { contextKey: null != g ? (0, o.VnL)(g) : void 0 },
        );
    }
    return S
        ? (0, r.jsx)(o.sNh, {
              id: "remove-friend",
              label: d.intl.string(d.t.cvSt1J),
              action: C,
          })
        : (0, r.jsx)(o.sNh, {
              id: "add-friend",
              label: T ? d.intl.string(d.t.xMH6vD) : v,
              action: () => {
                  T ||
                      (s.Z.addRelationship({
                          userId: E,
                          context: { location: f },
                      }),
                      A(!0),
                      null == _ || _());
              },
              disabled: I || (T && !S),
          });
}
