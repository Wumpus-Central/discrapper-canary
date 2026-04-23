n.d(t, { g: () => h });
var i = n(627968),
    s = n(64700),
    l = n(554146),
    a = n(932001),
    r = n(866945),
    o = n(780964),
    c = n(858897),
    d = n(49999),
    u = n(835002),
    m = n(985018),
    A = n(613755);
function h() {
    let [e, t] = (0, a.kn)([l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return s.useMemo(() => e === l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, i.jsx)(r.e, {
              label: m.t.zqv4nV,
              labelHook: () => {
                  (0, c.openUserSettings)(o.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY);
              },
              dismissNotice: () => t(d.i.USER_DISMISS),
              className: A._,
              noticeType: u.YA.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
          })
        : null;
}
