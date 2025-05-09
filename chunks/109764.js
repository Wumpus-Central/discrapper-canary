e.d(t, { Z: () => f });
var i = e(255367);
e(73800);
var r = e(399606),
    l = e(481060),
    a = e(228392),
    o = e(592125),
    u = e(934415),
    d = e(572004),
    s = e(981631),
    c = e(388032);
function f(n, t, e) {
    let f = (0, r.e7)([o.Z], () => (null != n ? o.Z.getChannel(n.parent_id) : null));
    return null == n
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'channel-copy-link',
              label: c.intl.string(c.t.WqhZsr),
              action: () => {
                  n.isForumPost() &&
                      (0, a.B)({
                          postId: n.id,
                          location: { section: s.jXE.CONTEXT_MENU }
                      }),
                      (0, d.JG)((0, u.EO)(n, f, t, e));
              }
          });
}
