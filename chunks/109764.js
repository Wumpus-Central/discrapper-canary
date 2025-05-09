n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(399606),
    l = n(481060),
    a = n(228392),
    u = n(592125),
    o = n(934415),
    d = n(572004),
    c = n(981631),
    s = n(388032);
function f(e, t, n) {
    let f = (0, r.e7)([u.Z], () => (null != e ? u.Z.getChannel(e.parent_id) : null));
    return null == e
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'channel-copy-link',
              label: s.intl.string(s.t.WqhZsr),
              action: () => {
                  e.isForumPost() &&
                      (0, a.B)({
                          postId: e.id,
                          location: { section: c.jXE.CONTEXT_MENU }
                      }),
                      (0, d.JG)((0, o.EO)(e, f, t, n));
              }
          });
}
