n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var a = n(399606),
    r = n(481060),
    l = n(228392),
    o = n(592125),
    d = n(934415),
    u = n(572004),
    s = n(981631),
    c = n(388032);
function f(e, t, n) {
    let f = (0, a.e7)([o.Z], () => (null != e ? o.Z.getChannel(e.parent_id) : null));
    return null == e
        ? null
        : (0, i.jsx)(r.sNh, {
              id: "channel-copy-link",
              label: c.intl.string(c.t.WqhZsr),
              action: () => {
                  e.isForumPost() &&
                      (0, l.B)({
                          postId: e.id,
                          location: { section: s.jXE.CONTEXT_MENU },
                      }),
                      (0, u.JG)((0, d.EO)(e, f, t, n));
              },
          });
}
