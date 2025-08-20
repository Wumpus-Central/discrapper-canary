r.d(t, { S: () => f });
var n = r(951288);
r(647438);
var l = r(594174),
    i = r(971082),
    a = r(817053),
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
            disableInteraction: O = !1,
        } = e,
        m = (0, c.Z)(t.applicationId),
        j = m.length > 0,
        y = l.default.getCurrentUser(),
        v = (null == y ? void 0 : y.id) === r;
    return p
        ? (0, n.jsx)("div", { className: u.loadingCover })
        : (0, n.jsxs)("div", {
              className: d.container,
              children: [
                  (0, n.jsx)(a.Z, {
                      imageSrc: t.imageSrc,
                      gameName: t.gameName,
                      applicationId: t.applicationId,
                      userId: r,
                      disableInteraction: O,
                      className: j ? d.socialProofBackdrop : void 0,
                  }),
                  !O &&
                      v &&
                      (0, n.jsx)(o.Z, {
                          game: t,
                          widgetType: f,
                          className: d.removeGameButton,
                          iconSize: "xs",
                      }),
                  !O &&
                      j &&
                      (0, n.jsx)(i.Z, {
                          label: s.intl.formatToPlainString(s.t.ujhJdH, { numFriends: m.length }),
                          className: d.socialProof,
                          users: m,
                          guildId: g,
                          channelId: b,
                          visuallyHideLabel: !0,
                      }),
              ],
          });
}
