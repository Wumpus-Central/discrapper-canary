t.d(n, { Z: () => v });
var d = t(951288);
t(647438);
var i = t(399606),
    a = t(481060),
    r = t(228392),
    l = t(592125),
    o = t(934415),
    u = t(572004),
    c = t(981631),
    s = t(388032);
function v(e, n, t) {
    let v = (0, i.e7)([l.Z], () => (null != e ? l.Z.getChannel(e.parent_id) : null));
    return null == e
        ? null
        : (0, d.jsx)(a.sNh, {
              id: "channel-copy-link",
              label: s.intl.string(s.t.WqhZsr),
              action: () => {
                  e.isForumPost() &&
                      (0, r.B)({
                          postId: e.id,
                          location: { section: c.jXE.CONTEXT_MENU },
                      }),
                      (0, u.JG)((0, o.EO)(e, v, n, t));
              },
          });
}
