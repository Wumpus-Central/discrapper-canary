t.d(n, { Z: () => f });
var i = t(255367);
t(73800);
var l = t(399606),
    r = t(481060),
    a = t(228392),
    o = t(592125),
    u = t(934415),
    d = t(572004),
    s = t(981631),
    c = t(388032);
function f(e, n, t) {
    let f = (0, l.e7)([o.Z], () => (null != e ? o.Z.getChannel(e.parent_id) : null));
    return null == e
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'channel-copy-link',
              label: c.intl.string(c.t.WqhZsr),
              action: () => {
                  e.isForumPost() &&
                      (0, a.B)({
                          postId: e.id,
                          location: { section: s.jXE.CONTEXT_MENU }
                      }),
                      (0, d.JG)((0, u.EO)(e, f, n, t));
              }
          });
}
