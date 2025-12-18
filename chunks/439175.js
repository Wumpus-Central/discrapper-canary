n.d(e, { v: () => c });
var i = n(54381),
    l = n(442837),
    s = n(509613),
    u = n(577275),
    r = n(594174),
    a = n(313789),
    o = n(47863),
    T = n(388032);
let S = (0, s.ON)(a.n.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [T.intl.string(T.t.ZKsIks), T.intl.string(T.t.jf5GGb), T.intl.string(T.t["8lQ2rR"])],
        Component: function () {
            let t = (0, l.e7)([r.default], () => r.default.getCurrentUser()),
                { teams: e, loading: n } = (0, u.Z)({ refreshOnDepChange: !0 });
            return null == t
                ? null
                : (0, i.jsx)(o.Z, {
                      currentUser: t,
                      userTeamsLoading: n,
                      userTeams: e,
                  });
        },
    }),
    c = (0, s.k4)(a.n.ACCOUNT_REMOVAL_CATEGORY, { buildLayout: () => [S] });
