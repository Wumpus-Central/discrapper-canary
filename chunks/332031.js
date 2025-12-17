t.d(n, { Z: () => d });
var l = t(54381);
t(473749);
var i = t(442837),
    r = t(481060),
    a = t(655922),
    o = t(158776),
    u = t(981631),
    s = t(388032);
function d(e, n) {
    let t = (0, i.e7)([o.Z], () => (0, a.Z)(o.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)), [e]);
    return null == t
        ? null
        : (0, l.jsx)(r.sNh, {
              id: "watch-stream",
              label: s.intl.string(s.t["7Xq/nV"]),
              action: () => {
                  null == n || n(), window.open(t, "_blank");
              },
          });
}
