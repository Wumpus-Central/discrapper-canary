r.d(t, { S: () => p });
var n = r(951288);
r(647438);
var i = r(120356),
    a = r.n(i),
    o = r(594174),
    l = r(747101),
    c = r(817053),
    s = r(533815),
    u = r(919498),
    d = r(853072),
    f = r(932366),
    g = r(133458);
function p(e) {
    let { game: t, userId: r, widgetType: i, guildId: p, channelId: b, disableInteraction: m = !1 } = e,
        O = (0, d.Z)(t.applicationId).length > 0,
        y = o.default.getCurrentUser(),
        j = (null == y ? void 0 : y.id) === r;
    return (0, l.kO)(t.applicationId)
        ? (0, n.jsx)("div", { className: f.loadingCover })
        : (0, n.jsxs)("div", {
              className: g.container,
              children: [
                  (0, n.jsx)(c.Z, {
                      imageSrc: t.imageSrc,
                      gameName: t.gameName,
                      applicationId: t.applicationId,
                      userId: r,
                      disableInteraction: m,
                      className: a()(
                          O ? g.socialProofBackdrop : void 0,
                          (null == t ? void 0 : t.imageSrc) == null || m ? void 0 : f.hoverActiveEffect,
                      ),
                  }),
                  !m &&
                      j &&
                      (0, n.jsx)(s.Z, {
                          game: t,
                          widgetType: i,
                          className: g.removeGameButton,
                          iconSize: "xs",
                      }),
                  !m &&
                      (0, n.jsx)(u.Z, {
                          className: g.socialProof,
                          applicationId: t.applicationId,
                          guildId: p,
                          channelId: b,
                          visuallyHideLabel: !0,
                      }),
              ],
          });
}
