n.d(t, { S: () => p });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(594174),
    l = n(747101),
    c = n(817053),
    s = n(533815),
    u = n(919498),
    d = n(853072),
    f = n(932366),
    g = n(133458);
function p(e) {
    let { game: t, userId: n, widgetType: i, guildId: p, channelId: b, disableInteraction: m = !1 } = e,
        O = (0, d.Z)(t.applicationId).length > 0,
        y = o.default.getCurrentUser(),
        j = (null == y ? void 0 : y.id) === n;
    return (0, l.kO)(t.applicationId)
        ? (0, r.jsx)("div", { className: f.loadingCover })
        : (0, r.jsxs)("div", {
              className: g.container,
              children: [
                  (0, r.jsx)(c.Z, {
                      imageSrc: t.imageSrc,
                      gameName: t.gameName,
                      applicationId: t.applicationId,
                      userId: n,
                      disableInteraction: m,
                      className: a()(
                          O ? g.socialProofBackdrop : void 0,
                          (null == t ? void 0 : t.imageSrc) == null || m ? void 0 : f.hoverActiveEffect,
                      ),
                  }),
                  !m &&
                      j &&
                      (0, r.jsx)(s.Z, {
                          game: t,
                          widgetType: i,
                          className: g.removeGameButton,
                          iconSize: "xs",
                      }),
                  !m &&
                      (0, r.jsx)(u.Z, {
                          className: g.socialProof,
                          applicationId: t.applicationId,
                          guildId: p,
                          channelId: b,
                          visuallyHideLabel: !0,
                      }),
              ],
          });
}
