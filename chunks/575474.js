n.d(t, { g: () => _ });
var i = n(627968),
    a = n(64700),
    l = n(554146),
    r = n(932001),
    s = n(866945),
    o = n(780964),
    d = n(840065),
    c = n(49999),
    u = n(835002),
    A = n(985018),
    h = n(91492);
function _() {
    let [e, t] = (0, r.kn)([l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return a.useMemo(() => e === l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, i.jsx)(s.e, {
              label: A.t.zqv4nV,
              labelHook: () => {
                  (0, d.openUserSettings)(o.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY);
              },
              dismissNotice: () => t(c.i.USER_DISMISS),
              className: h._,
              noticeType: u.YA.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
          })
        : null;
}
