t.d(n, { Z: () => f });
var i = t(200651);
t(192379);
var r = t(399606),
    a = t(481060),
    l = t(228392),
    o = t(592125),
    u = t(934415),
    c = t(572004),
    d = t(981631),
    s = t(388032);
function f(e, n, t) {
    let f = (0, r.e7)([o.Z], () => (null != e ? o.Z.getChannel(e.parent_id) : null));
    return null == e
        ? null
        : (0, i.jsx)(a.sNh, {
              id: 'channel-copy-link',
              label: s.intl.string(s.t.WqhZsr),
              action: () => {
                  e.isForumPost() &&
                      (0, l.B)({
                          postId: e.id,
                          location: { section: d.jXE.CONTEXT_MENU }
                      }),
                      (0, c.JG)((0, u.EO)(e, f, n, t));
              }
          });
}
