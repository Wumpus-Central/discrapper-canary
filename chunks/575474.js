n.d(t, { g: () => m });
var i = n(627968),
    r = n(64700),
    l = n(554146),
    a = n(932001),
    s = n(866945),
    o = n(780964),
    d = n(840065),
    c = n(652215),
    u = n(49999),
    A = n(835002),
    h = n(985018),
    _ = n(91492);
function m() {
    let [e, t] = (0, a.kn)([l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return r.useMemo(() => e === l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, i.jsx)(s.e, {
              label: h.t.zqv4nV,
              labelHook: () => {
                  (0, d.openUserSettings)(o.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
                      section: c.nc_.CONTENT_AND_SOCIAL,
                  });
              },
              dismissNotice: () => t(u.i.USER_DISMISS),
              className: _._,
              noticeType: A.YA.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
          })
        : null;
}
