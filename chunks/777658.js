n.d(t, { Z: () => _ }), n(388685);
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
function _(e) {
    let { user: t, location: f = "ContextMenu", onFriendRequestSent: _, onFriendRemove: m, appContext: h } = e,
        { id: g, username: E, bot: b } = t,
        y = (0, a.e7)([u.default], () => {
            var e;
            return (null == (e = u.default.getCurrentUser()) ? void 0 : e.id) === g;
        }, [g]),
        O = (0, l.n)({ userId: g }),
        [v, S] = (0, a.Wu)([c.Z], () => [c.Z.isFriend(g), c.Z.isBlocked(g)], [g]),
        [I, T] = i.useState(!1);
    if (b || y) return null;
    function A() {
        (0, o.ZDy)(
            async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 793030));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        p(
                            {
                                title: d.intl.formatToPlainString(d.t.fPLvZd, { name: E }),
                                subtitle: d.intl.format(d.t.l5FFq6, { name: E }),
                                confirmText: d.intl.string(d.t.cvSt1J),
                                cancelText: d.intl.string(d.t["ETE/oC"]),
                                onConfirm: () => {
                                    s.Z.removeFriend(g, { location: f }), T(!1), null == m || m();
                                },
                            },
                            t,
                        ),
                    );
            },
            { contextKey: null != h ? (0, o.VnL)(h) : void 0 },
        );
    }
    return v
        ? (0, r.jsx)(o.sNh, {
              id: "remove-friend",
              label: d.intl.string(d.t.cvSt1J),
              action: A,
          })
        : (0, r.jsx)(o.sNh, {
              id: "add-friend",
              label: I ? d.intl.string(d.t.xMH6vD) : O,
              action: () => {
                  I ||
                      (s.Z.addRelationship({
                          userId: g,
                          context: { location: f },
                      }),
                      T(!0),
                      null == _ || _());
              },
              disabled: S || (I && !v),
          });
}
