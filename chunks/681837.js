n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(692547),
    s = n(981729),
    o = n(481060),
    l = n(91896),
    u = n(621853),
    c = n(228168),
    d = n(981631),
    f = n(388032),
    _ = n(100757);
function p(e) {
    let { userId: t } = e,
        n = (0, r.Wu)([l.Z], () => l.Z.getGameFriendsForUser(t)),
        p = (0, r.Wu)([l.Z], () => l.Z.getGameRelationshipsForUserOfType(t, d.OGo.PENDING_INCOMING)),
        h = (0, r.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(t)) || void 0 === e ? void 0 : e.fetchError;
        });
    return n.length > 0 || p.length > 0 || null == h
        ? null
        : (0, i.jsx)(s.DY, {
              className: _.container,
              text: f.intl.string(f.t.p3Q9Y2),
              delay: c.vB,
              children: (0, i.jsx)(o.P4T, {
                  size: 'xs',
                  color: a.Z.colors.STATUS_WARNING.css
              })
          });
}
