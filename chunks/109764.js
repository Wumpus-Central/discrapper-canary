e.d(n, { Z: () => f });
var i = e(255367);
e(73800);
var r = e(399606),
    l = e(481060),
    a = e(228392),
    o = e(592125),
    s = e(934415),
    d = e(572004),
    u = e(981631),
    c = e(388032);
function f(t, n, e) {
    let f = (0, r.e7)([o.Z], () => (null != t ? o.Z.getChannel(t.parent_id) : null));
    return null == t
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'channel-copy-link',
              label: c.intl.string(c.t.WqhZsr),
              action: () => {
                  (t.isForumPost() &&
                      (0, a.B)({
                          postId: t.id,
                          location: { section: u.jXE.CONTEXT_MENU }
                      }),
                      (0, d.JG)((0, s.EO)(t, f, n, e)));
              }
          });
}
