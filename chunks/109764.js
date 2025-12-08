e.d(n, { Z: () => h });
var i = e(54381);
e(473749);
var a = e(399606),
    l = e(481060),
    r = e(228392),
    s = e(592125),
    o = e(934415),
    d = e(572004),
    u = e(981631),
    c = e(388032);
function h(t, n, e) {
    let h = (0, a.e7)([s.Z], () => (null != t ? s.Z.getChannel(t.parent_id) : null));
    return null == t
        ? null
        : (0, i.jsx)(l.sNh, {
              id: "channel-copy-link",
              label: c.intl.string(c.t.WqhZss),
              action: () => {
                  t.isForumPost() &&
                      (0, r.B)({
                          postId: t.id,
                          location: { section: u.jXE.CONTEXT_MENU },
                      }),
                      (0, d.JG)((0, o.EO)(t, h, n, e));
              },
          });
}
