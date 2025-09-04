r.d(t, { S: () => p });
var n = r(951288);
r(647438);
var i = r(120356),
    l = r.n(i),
    a = r(594174),
    o = r(747101),
    c = r(971082),
    s = r(817053),
    u = r(533815),
    d = r(853072),
    f = r(388032),
    g = r(932366),
    b = r(133458);
function p(e) {
    let { game: t, userId: r, widgetType: i, guildId: p, channelId: m, disableInteraction: O = !1 } = e,
        y = (0, d.Z)(t.applicationId),
        j = y.length > 0,
        v = a.default.getCurrentUser(),
        x = (null == v ? void 0 : v.id) === r;
    return (0, o.kO)(t.applicationId)
        ? (0, n.jsx)("div", { className: g.loadingCover })
        : (0, n.jsxs)("div", {
              className: b.container,
              children: [
                  (0, n.jsx)(s.Z, {
                      imageSrc: t.imageSrc,
                      gameName: t.gameName,
                      applicationId: t.applicationId,
                      userId: r,
                      disableInteraction: O,
                      className: l()(
                          j ? b.socialProofBackdrop : void 0,
                          (null == t ? void 0 : t.imageSrc) == null || O ? void 0 : g.hoverActiveEffect,
                      ),
                  }),
                  !O &&
                      x &&
                      (0, n.jsx)(u.Z, {
                          game: t,
                          widgetType: i,
                          className: b.removeGameButton,
                          iconSize: "xs",
                      }),
                  !O &&
                      j &&
                      (0, n.jsx)(c.Z, {
                          label: f.intl.formatToPlainString(f.t.ujhJdH, { numFriends: y.length }),
                          className: b.socialProof,
                          users: y,
                          guildId: p,
                          channelId: m,
                          visuallyHideLabel: !0,
                      }),
              ],
          });
}
