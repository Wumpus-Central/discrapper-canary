n.d(t, { S: () => f });
var r = n(255367);
n(73800);
var l = n(594174),
    i = n(971082),
    o = n(817053),
    a = n(533815),
    c = n(853072),
    s = n(388032),
    d = n(932366),
    u = n(133458);
function f(e) {
    let {
            game: t,
            userId: n,
            widgetType: f,
            guildId: p,
            channelId: m,
            loading: g = !1,
            disableInteraction: b = !1,
        } = e,
        j = (0, c.Z)(t.applicationId),
        y = j.length > 0,
        O = l.default.getCurrentUser(),
        x = (null == O ? void 0 : O.id) === n,
        h = !b && x;
    return g
        ? (0, r.jsx)("div", { className: d.loadingCover })
        : (0, r.jsxs)("div", {
              className: u.container,
              children: [
                  (0, r.jsx)(o.Z, {
                      imageSrc: t.imageSrc,
                      gameName: t.gameName,
                      applicationId: t.applicationId,
                      userId: n,
                      disableInteraction: b,
                      disableHoverEffect: h,
                      className: y ? u.socialProofBackdrop : void 0,
                  }),
                  h &&
                      (0, r.jsx)(a.Z, {
                          game: t,
                          widgetType: f,
                          className: u.removeGameButton,
                          iconSize: "xs",
                      }),
                  (0, r.jsx)("div", { className: u.hoverOverlay }),
                  !b &&
                      y &&
                      (0, r.jsx)(i.Z, {
                          label: s.intl.formatToPlainString(s.t.ujhJdH, { numFriends: j.length }),
                          className: u.socialProof,
                          users: j,
                          guildId: p,
                          channelId: m,
                          visuallyHideLabel: !0,
                      }),
              ],
          });
}
