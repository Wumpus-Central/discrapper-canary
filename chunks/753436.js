r.d(t, { S: () => f });
var n = r(951288);
r(647438);
var i = r(594174),
    a = r(971082),
    l = r(817053),
    o = r(533815),
    c = r(853072),
    s = r(388032),
    u = r(932366),
    d = r(133458);
function f(e) {
    let {
            game: t,
            userId: r,
            widgetType: f,
            guildId: g,
            channelId: b,
            loading: p = !1,
            disableInteraction: m = !1,
        } = e,
        O = (0, c.Z)(t.applicationId),
        j = O.length > 0,
        y = i.default.getCurrentUser(),
        x = (null == y ? void 0 : y.id) === r;
    return p
        ? (0, n.jsx)("div", { className: u.loadingCover })
        : (0, n.jsxs)("div", {
              className: d.container,
              children: [
                  (0, n.jsx)(l.Z, {
                      imageSrc: t.imageSrc,
                      gameName: t.gameName,
                      applicationId: t.applicationId,
                      userId: r,
                      disableInteraction: m,
                      className: j ? d.socialProofBackdrop : void 0,
                  }),
                  !m &&
                      x &&
                      (0, n.jsx)(o.Z, {
                          game: t,
                          widgetType: f,
                          className: d.removeGameButton,
                          iconSize: "xs",
                      }),
                  !m &&
                      j &&
                      (0, n.jsx)(a.Z, {
                          label: s.intl.formatToPlainString(s.t.ujhJdH, { numFriends: O.length }),
                          className: d.socialProof,
                          users: O,
                          guildId: g,
                          channelId: b,
                          visuallyHideLabel: !0,
                      }),
              ],
          });
}
