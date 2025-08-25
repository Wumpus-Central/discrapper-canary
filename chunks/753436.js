r.d(t, { S: () => b });
var n = r(951288);
r(647438);
var i = r(120356),
    a = r.n(i),
    l = r(594174),
    o = r(971082),
    c = r(817053),
    s = r(533815),
    u = r(853072),
    d = r(388032),
    f = r(932366),
    g = r(133458);
function b(e) {
    let {
            game: t,
            userId: r,
            widgetType: i,
            guildId: b,
            channelId: p,
            loading: m = !1,
            disableInteraction: O = !1,
        } = e,
        j = (0, u.Z)(t.applicationId),
        y = j.length > 0,
        v = l.default.getCurrentUser(),
        x = (null == v ? void 0 : v.id) === r;
    return m
        ? (0, n.jsx)("div", { className: f.loadingCover })
        : (0, n.jsxs)("div", {
              className: g.container,
              children: [
                  (0, n.jsx)(c.Z, {
                      imageSrc: t.imageSrc,
                      gameName: t.gameName,
                      applicationId: t.applicationId,
                      userId: r,
                      disableInteraction: O,
                      className: a()(
                          y ? g.socialProofBackdrop : void 0,
                          (null == t ? void 0 : t.imageSrc) == null || O ? void 0 : f.hoverActiveEffect,
                      ),
                  }),
                  !O &&
                      x &&
                      (0, n.jsx)(s.Z, {
                          game: t,
                          widgetType: i,
                          className: g.removeGameButton,
                          iconSize: "xs",
                      }),
                  !O &&
                      y &&
                      (0, n.jsx)(o.Z, {
                          label: d.intl.formatToPlainString(d.t.ujhJdH, { numFriends: j.length }),
                          className: g.socialProof,
                          users: j,
                          guildId: b,
                          channelId: p,
                          visuallyHideLabel: !0,
                      }),
              ],
          });
}
