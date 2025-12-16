n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(809206),
    s = n(355497),
    l = n(430824),
    c = n(888256),
    u = n(288260),
    d = n(981631),
    f = n(388032);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
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
function h(e, t) {
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
function g(e) {
    let { currentUser: t, userTeamsLoading: n, userTeams: p } = e,
        [m, g] = i.useState(!1),
        [E, b] = i.useState(!1),
        [y, O] = i.useState(!1),
        [v, S] = i.useState(!1),
        [I, T] = i.useState(null),
        C = i.useCallback((e) => {
            if (e.body.code === d.evJ.INVALID_PASSWORD) throw e;
            S(!0), T(e.body.message);
        }, []),
        A = i.useCallback((e, t) => (0, o.ss)(e, t).then(d.dG4, C), [C]),
        N = i.useCallback(
            function () {
                var e;
                let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = l.Z.getGuildsArray().filter((e) => e.ownerId === t.id);
                return (null != (e = null == p ? void 0 : p.filter((e) => e.owner_user_id === t.id)) ? e : []).length >
                    0
                    ? void g(!0)
                    : i.length > 0
                      ? void b(!0)
                      : void (t.isClaimed()
                            ? (0, a.h7j)((e) =>
                                  (0, r.jsx)(
                                      s.default,
                                      h(_({}, e), {
                                          handleSubmit: (e) => A(e, n),
                                          title: n ? f.intl.string(f.t["8lQ2rR"]) : f.intl.string(f.t.jf5GGb),
                                          actionText: n ? f.intl.string(f.t["8lQ2rR"]) : f.intl.string(f.t.jf5GGb),
                                          children: n ? f.intl.string(f.t.FB4H1D) : f.intl.string(f.t.gk7h32),
                                      }),
                                  ),
                              )
                            : O(!0));
            },
            [t, A, p],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Z, {
                currentUser: t,
                disabled: n,
                handleDisableAccount: () => N(!1),
                handleDeleteAccount: () => N(!0),
            }),
            (0, r.jsx)(u.Z, {
                shouldRenderOwnedTeamsModal: m,
                shouldRenderOwnedGuildsModal: E,
                shouldRenderDeleteAccountConfirmModal: y,
                shouldRenderDisableAccountErrorModal: v,
                disableAccountErrorMessage: I,
                onOwnedTeamsWarningModalClose: () => g(!1),
                onOwnedGuildsWarningModalClose: () => b(!1),
                onDeleteAccountConfirmModalClose: () => O(!1),
                onDisableAccountErrorModalClose: () => {
                    S(!1), T(null);
                },
            }),
        ],
    });
}
