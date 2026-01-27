n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(631670),
    a = n(662758),
    o = n(71393),
    c = n(7064),
    d = n(125040),
    u = n(652215),
    _ = n(985018);

function p(e) {
    let { currentUser: t, userTeamsLoading: n, userTeams: p } = e,
        [m, g] = i.useState(!1),
        [A, f] = i.useState(!1),
        [h, b] = i.useState(!1),
        [E, x] = i.useState(!1),
        [O, C] = i.useState(null),
        I = i.useCallback((e) => {
            if (e.body.code === u.t02.INVALID_PASSWORD) throw e;
            x(!0), C(e.body.message);
        }, []),
        T = i.useCallback((e, t) => (0, s.U_)(e, t).then(u.tEg, I), [I]),
        S = i.useCallback(
            function () {
                var e;
                let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = o.A.getGuildsArray().filter((e) => e.ownerId === t.id);
                (null != (e = null == p ? void 0 : p.filter((e) => e.owner_user_id === t.id)) ? e : []).length > 0
                    ? g(!0)
                    : i.length > 0
                      ? f(!0)
                      : t.isClaimed()
                        ? (0, l.qfG)((e) => {
                              var t, i;
                              return (0, r.jsx)(
                                  a.default,
                                  ((t = (function (e) {
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
                                                  var r;
                                                  (r = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: r,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0,
                                                            })
                                                          : (e[t] = r);
                                              });
                                      }
                                      return e;
                                  })({}, e)),
                                  (i = i =
                                      {
                                          handleSubmit: (e) => T(e, n),
                                          title: n ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
                                          actionText: n ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
                                          children: n ? _.intl.string(_.t.FB4H1D) : _.intl.string(_.t.gk7h32),
                                      }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r);
                                            }
                                            return n;
                                        })(Object(i)).forEach(function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                        }),
                                  t),
                              );
                          })
                        : b(!0);
            },
            [t, T, p],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.A, {
                currentUser: t,
                disabled: n,
                handleDisableAccount: () => S(!1),
                handleDeleteAccount: () => S(!0),
            }),
            (0, r.jsx)(d.A, {
                shouldRenderOwnedTeamsModal: m,
                shouldRenderOwnedGuildsModal: A,
                shouldRenderDeleteAccountConfirmModal: h,
                shouldRenderDisableAccountErrorModal: E,
                disableAccountErrorMessage: O,
                onOwnedTeamsWarningModalClose: () => g(!1),
                onOwnedGuildsWarningModalClose: () => f(!1),
                onDeleteAccountConfirmModalClose: () => b(!1),
                onDisableAccountErrorModalClose: () => {
                    x(!1), C(null);
                },
            }),
        ],
    });
}
