n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(399606),
    l = n(481060),
    a = n(228392),
    o = n(592125),
    s = n(934415),
    d = n(572004),
    u = n(981631),
    c = n(388032);
function f(e, t, n) {
    let f = (0, r.e7)([o.Z], () => (null != e ? o.Z.getChannel(e.parent_id) : null));
    return null == e
        ? null
        : (0, i.jsx)(l.sNh, {
              id: 'channel-copy-link',
              label: c.intl.string(c.t.WqhZsr),
              action: () => {
                  e.isForumPost() &&
                      (0, a.B)({
                          postId: e.id,
                          location: { section: u.jXE.CONTEXT_MENU }
                      }),
                      (0, d.JG)((0, s.EO)(e, f, t, n));
              }
          });
}
