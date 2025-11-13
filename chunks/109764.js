n.d(t, { Z: () => f });
var i = n(951288);
n(647438);
var r = n(399606),
    l = n(481060),
    u = n(228392),
    a = n(592125),
    o = n(934415),
    c = n(572004),
    s = n(981631),
    d = n(388032);
function f(e, t, n) {
    let f = (0, r.e7)([a.Z], () => (null != e ? a.Z.getChannel(e.parent_id) : null));
    return null == e
        ? null
        : (0, i.jsx)(l.sNh, {
              id: "channel-copy-link",
              label: d.intl.string(d.t.WqhZss),
              action: () => {
                  e.isForumPost() &&
                      (0, u.B)({
                          postId: e.id,
                          location: { section: s.jXE.CONTEXT_MENU },
                      }),
                      (0, c.JG)((0, o.EO)(e, f, t, n));
              },
          });
}
