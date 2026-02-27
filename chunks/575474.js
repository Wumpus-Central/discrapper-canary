n.d(t, { g: () => E });
var i = n(627968),
    r = n(64700),
    l = n(554146),
    a = n(932001),
    s = n(866945),
    o = n(780964),
    d = n(358776),
    c = n(840065),
    u = n(652215),
    A = n(49999),
    h = n(835002),
    _ = n(355097),
    m = n(531525),
    p = n(985018),
    g = n(91492);
function E() {
    let [e, t] = (0, a.kn)([l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return r.useMemo(() => e === l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, i.jsx)(s.e, {
              label: p.t.zqv4nV,
              labelHook: () => {
                  let e = (0, d.WJ)("RestrictedAccountsSettingNotice");
                  (0, c.openUserSettings)(
                      e ? o.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY : o.X.CONTENT_AND_SOCIAL_PANEL,
                      {
                          section: u.nc_.CONTENT_AND_SOCIAL,
                          subsection: m.H.RESTRICTED_USERS,
                          scrollPosition: e ? void 0 : _.d1.RESTRICTED_ACCOUNTS,
                      },
                  );
              },
              dismissNotice: () => t(A.i.USER_DISMISS),
              className: g._,
              noticeType: h.YA.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
          })
        : null;
}
