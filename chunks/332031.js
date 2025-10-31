n.d(t, { Z: () => d });
var l = n(951288);
n(647438);
var i = n(442837),
    r = n(481060),
    a = n(655922),
    o = n(158776),
    s = n(981631),
    u = n(388032);
function d(e, t) {
    let n = (0, i.e7)([o.Z], () => (0, a.Z)(o.Z.findActivity(e, (e) => e.type === s.IIU.STREAMING)), [e]);
    return null == n
        ? null
        : (0, l.jsx)(r.sNh, {
              id: "watch-stream",
              label: u.intl.string(u.t["7Xq/nV"]),
              action: () => {
                  null == t || t(), window.open(n, "_blank");
              },
          });
}
