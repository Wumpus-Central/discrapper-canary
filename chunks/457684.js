n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(631670),
    l = n(662758),
    o = n(71393),
    c = n(7064),
    d = n(125040),
    u = n(652215),
    _ = n(985018);
function m(e) {
    let { currentUser: t, userTeamsLoading: n, userTeams: m } = e,
        [A, g] = s.useState(!1),
        [E, h] = s.useState(!1),
        [p, C] = s.useState(!1),
        [x, T] = s.useState(!1),
        [I, S] = s.useState(null),
        f = s.useCallback((e) => {
            if (e.body.code === u.t02.INVALID_PASSWORD) throw e;
            T(!0), S(e.body.message);
        }, []),
        N = s.useCallback((e, t) => (0, a.U_)(e, t).then(u.tEg, f), [f]),
        b = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = o.A.getGuildsArray().filter((e) => e.ownerId === t.id);
                (m?.filter((e) => e.owner_user_id === t.id) ?? []).length > 0
                    ? g(!0)
                    : n.length > 0
                      ? h(!0)
                      : t.isClaimed()
                        ? (0, r.qfG)((t) =>
                              (0, i.jsx)(l.default, {
                                  ...t,
                                  handleSubmit: (t) => N(t, e),
                                  title: e ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
                                  actionText: e ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
                                  children: e ? _.intl.string(_.t.FB4H1D) : _.intl.string(_.t.gk7h32),
                              }),
                          )
                        : C(!0);
            },
            [t, N, m],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.A, {
                currentUser: t,
                disabled: n,
                handleDisableAccount: () => b(!1),
                handleDeleteAccount: () => b(!0),
            }),
            (0, i.jsx)(d.A, {
                shouldRenderOwnedTeamsModal: A,
                shouldRenderOwnedGuildsModal: E,
                shouldRenderDeleteAccountConfirmModal: p,
                shouldRenderDisableAccountErrorModal: x,
                disableAccountErrorMessage: I,
                onOwnedTeamsWarningModalClose: () => g(!1),
                onOwnedGuildsWarningModalClose: () => h(!1),
                onDeleteAccountConfirmModalClose: () => C(!1),
                onDisableAccountErrorModalClose: () => {
                    T(!1), S(null);
                },
            }),
        ],
    });
}
