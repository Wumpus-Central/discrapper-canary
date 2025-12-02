n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(399606),
    l = n(481060),
    u = n(228392),
    a = n(592125),
    o = n(934415),
    c = n(572004),
    d = n(981631),
    s = n(388032);
function f(e, t, n) {
    let f = (0, i.e7)([a.Z], () => (null != e ? a.Z.getChannel(e.parent_id) : null));
    return null == e
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "channel-copy-link",
              label: s.intl.string(s.t.WqhZss),
              action: () => {
                  e.isForumPost() &&
                      (0, u.B)({
                          postId: e.id,
                          location: { section: d.jXE.CONTEXT_MENU },
                      }),
                      (0, c.JG)((0, o.EO)(e, f, t, n));
              },
          });
}
