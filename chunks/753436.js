n.d(t, { S: () => d });
var r = n(255367);
n(73800);
var l = n(971082),
    i = n(817053),
    o = n(853072),
    a = n(388032),
    c = n(896270),
    s = n(598439);
function d(e) {
    let { game: t, userId: n, guildId: d, channelId: u, loading: f = !1, disableInteraction: p = !1 } = e,
        m = (0, o.Z)(t.applicationId),
        g = m.length > 0;
    return f
        ? (0, r.jsx)("div", { className: c.loadingCover })
        : (0, r.jsxs)("div", {
              className: s.container,
              children: [
                  (0, r.jsx)(i.Z, {
                      imageSrc: t.imageSrc,
                      gameName: t.gameName,
                      applicationId: t.applicationId,
                      userId: n,
                      disableInteraction: p,
                      className: g ? s.socialProofBackdrop : void 0,
                  }),
                  !p &&
                      g &&
                      (0, r.jsx)(l.Z, {
                          label: a.intl.formatToPlainString(a.t.ujhJdH, { numFriends: m.length }),
                          className: s.socialProof,
                          users: m,
                          guildId: d,
                          channelId: u,
                          visuallyHideLabel: !0,
                      }),
              ],
          });
}
