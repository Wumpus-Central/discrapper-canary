i.d(n, { Z: () => h });
var e = i(951288);
i(647438);
var l = i(399606),
    r = i(481060),
    a = i(228392),
    d = i(592125),
    o = i(934415),
    s = i(572004),
    u = i(981631),
    c = i(388032);
function h(t, n, i) {
    let h = (0, l.e7)([d.Z], () => (null != t ? d.Z.getChannel(t.parent_id) : null));
    return null == t
        ? null
        : (0, e.jsx)(r.sNh, {
              id: "channel-copy-link",
              label: c.intl.string(c.t.WqhZsr),
              action: () => {
                  t.isForumPost() &&
                      (0, a.B)({
                          postId: t.id,
                          location: { section: u.jXE.CONTEXT_MENU },
                      }),
                      (0, s.JG)((0, o.EO)(t, h, n, i));
              },
          });
}
