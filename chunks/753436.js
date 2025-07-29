n.d(t, { S: () => a });
var r = n(255367);
n(73800);
var o = n(817053),
    i = n(467514);
function a(e) {
    let { userId: t, game: n, loading: a = !1, disableInteraction: l = !1 } = e;
    return a
        ? (0, r.jsx)('div', { className: i.gameCover })
        : (0, r.jsx)(o.Z, {
              imageSrc: n.imageSrc,
              gameName: n.gameName,
              applicationId: n.applicationId,
              userId: t,
              disableInteraction: l
          });
}
