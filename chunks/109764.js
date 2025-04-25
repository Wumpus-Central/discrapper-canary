e.d(n, { Z: () => h });
var i = e(200651);
e(192379);
var r = e(399606),
    l = e(481060),
    a = e(228392),
    s = e(592125),
    o = e(934415),
    d = e(572004),
    c = e(981631),
    u = e(388032);
function h(t, n, e) {
    let h = (0, r.e7)([s.Z], () => (null != t ? s.Z.getChannel(t.parent_id) : null));
    return null == t
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'channel-copy-link',
              label: u.intl.string(u.t.WqhZsr),
              action: () => {
                  t.isForumPost() &&
                      (0, a.B)({
                          postId: t.id,
                          location: { section: c.jXE.CONTEXT_MENU }
                      }),
                      (0, d.JG)((0, o.EO)(t, h, n, e));
              }
          });
}
