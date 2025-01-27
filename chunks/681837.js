r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(692547),
    s = r(981729),
    l = r(481060),
    u = r(91896),
    c = r(621853),
    d = r(228168),
    f = r(981631),
    p = r(388032),
    h = r(100757);
function _(e) {
    let { userId: n } = e,
        r = (0, a.Wu)([u.Z], () => u.Z.getGameFriendsForUser(n)),
        _ = (0, a.Wu)([u.Z], () => u.Z.getGameRelationshipsForUser(n, f.OGo.PENDING_INCOMING)),
        m = (0, a.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(n)) || void 0 === e ? void 0 : e.fetchError;
        });
    return r.length > 0 || _.length > 0 || null == m
        ? null
        : (0, i.jsx)(s.DY, {
              className: h.container,
              text: p.intl.string(p.t.p3Q9Y2),
              delay: d.vB,
              children: (0, i.jsx)(l.CircleWarningIcon, {
                  size: 'xs',
                  color: o.Z.colors.STATUS_WARNING.css
              })
          });
}
