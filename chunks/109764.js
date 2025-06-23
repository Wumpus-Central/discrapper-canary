t.d(e, { Z: () => f });
var i = t(255367);
t(73800);
var r = t(399606),
    a = t(481060),
    l = t(228392),
    o = t(592125),
    s = t(934415),
    d = t(572004),
    u = t(981631),
    c = t(388032);
function f(n, e, t) {
    let f = (0, r.e7)([o.Z], () => (null != n ? o.Z.getChannel(n.parent_id) : null));
    return null == n
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'channel-copy-link',
              label: c.intl.string(c.t.WqhZsr),
              action: () => {
                  n.isForumPost() &&
                      (0, l.B)({
                          postId: n.id,
                          location: { section: u.jXE.CONTEXT_MENU }
                      }),
                      (0, d.JG)((0, s.EO)(n, f, e, t));
              }
          });
}
