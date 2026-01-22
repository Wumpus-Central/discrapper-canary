n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(631670),
    o = n(662758),
    l = n(71393),
    c = n(7064),
    u = n(125040),
    d = n(652215),
    f = n(985018);

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

function h(e, t) {
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
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function g(e) {
    let { currentUser: t, userTeamsLoading: n, userTeams: p } = e,
        [h, g] = i.useState(!1),
        [E, b] = i.useState(!1),
        [y, O] = i.useState(!1),
        [A, v] = i.useState(!1),
        [S, I] = i.useState(null),
        T = i.useCallback((e) => {
            if (e.body.code === d.t02.INVALID_PASSWORD) throw e;
            v(!0), I(e.body.message);
        }, []),
        C = i.useCallback((e, t) => (0, s.U_)(e, t).then(d.tEg, T), [T]),
        N = i.useCallback(
            function () {
                var e;
                let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = l.A.getGuildsArray().filter((e) => e.ownerId === t.id);
                (null != (e = null == p ? void 0 : p.filter((e) => e.owner_user_id === t.id)) ? e : []).length > 0
                    ? g(!0)
                    : i.length > 0
                      ? b(!0)
                      : t.isClaimed()
                        ? (0, a.qfG)((e) =>
                              (0, r.jsx)(
                                  o.default,
                                  m(_({}, e), {
                                      handleSubmit: (e) => C(e, n),
                                      title: n ? f.intl.string(f.t["8lQ2rR"]) : f.intl.string(f.t.jf5GGb),
                                      actionText: n ? f.intl.string(f.t["8lQ2rR"]) : f.intl.string(f.t.jf5GGb),
                                      children: n ? f.intl.string(f.t.FB4H1D) : f.intl.string(f.t.gk7h32),
                                  }),
                              ),
                          )
                        : O(!0);
            },
            [t, C, p],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.A, {
                currentUser: t,
                disabled: n,
                handleDisableAccount: () => N(!1),
                handleDeleteAccount: () => N(!0),
            }),
            (0, r.jsx)(u.A, {
                shouldRenderOwnedTeamsModal: h,
                shouldRenderOwnedGuildsModal: E,
                shouldRenderDeleteAccountConfirmModal: y,
                shouldRenderDisableAccountErrorModal: A,
                disableAccountErrorMessage: S,
                onOwnedTeamsWarningModalClose: () => g(!1),
                onOwnedGuildsWarningModalClose: () => b(!1),
                onDeleteAccountConfirmModalClose: () => O(!1),
                onDisableAccountErrorModalClose: () => {
                    v(!1), I(null);
                },
            }),
        ],
    });
}
