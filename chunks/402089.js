i.d(e, {
    s: () => S,
});
var n = i(627968),
    l = i(311907),
    s = i(419954),
    r = i(130771),
    u = i(287809),
    a = i(780964),
    o = i(457684),
    T = i(985018);
let A = (0, s.E2)(a.X.ACCOUNT_REMOVAL_SETTING, {
        useSearchTerms: () => [T.intl.string(T.t.ZKsIks), T.intl.string(T.t.jf5GGb), T.intl.string(T.t["8lQ2rR"])],
        Component: function () {
            let t = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
                { teams: e, loading: i } = (0, r.A)({
                    refreshOnDepChange: !0,
                });
            return null == t
                ? null
                : (0, n.jsx)(o.A, {
                      currentUser: t,
                      userTeamsLoading: i,
                      userTeams: e,
                  });
        },
    }),
    S = (0, s.zZ)(a.X.ACCOUNT_REMOVAL_CATEGORY, {
        buildLayout: () => [A],
    });
