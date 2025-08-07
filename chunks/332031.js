t.d(n, { Z: () => d });
var l = t(255367);
t(73800);
var i = t(442837),
    r = t(481060),
    a = t(655922),
    u = t(158776),
    o = t(981631),
    s = t(388032);
function d(e, n) {
    let t = (0, i.e7)([u.Z], () => (0, a.Z)(u.Z.findActivity(e, (e) => e.type === o.IIU.STREAMING)), [e]);
    return null == t
        ? null
        : (0, l.jsx)(r.sNh, {
              id: "watch-stream",
              label: s.intl.string(s.t["7Xq/nZ"]),
              action: () => {
                  null == n || n(), window.open(t, "_blank");
              },
          });
}
