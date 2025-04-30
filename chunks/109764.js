n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    a = n(228392),
    o = n(592125),
    u = n(934415),
    d = n(572004),
    c = n(981631),
    s = n(388032);
function f(e, t, n) {
    let f = (0, r.e7)([o.Z], () => (null != e ? o.Z.getChannel(e.parent_id) : null));
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
                      (0, d.JG)((0, u.EO)(e, f, t, n));
              }
          });
}
