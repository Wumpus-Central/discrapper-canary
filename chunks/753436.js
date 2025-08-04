n.d(t, { S: () => c });
var r = n(255367);
n(73800);
var o = n(817053),
    i = n(919498),
    l = n(467514),
    a = n(987278);
function c(e) {
    let { game: t, userId: n, guildId: c, channelId: s, loading: u = !1, disableInteraction: d = !1 } = e;
    return u
        ? (0, r.jsx)('div', { className: l.gameCover })
        : (0, r.jsxs)('div', {
              className: a.container,
              children: [
                  (0, r.jsx)(o.Z, {
                      imageSrc: t.imageSrc,
                      gameName: t.gameName,
                      applicationId: t.applicationId,
                      userId: n,
                      disableInteraction: d
                  }),
                  (0, r.jsx)(i.Z, {
                      applicationId: t.applicationId,
                      className: a.socialProof,
                      hideLabel: !0,
                      guildId: c,
                      channelId: s
                  })
              ]
          });
}
