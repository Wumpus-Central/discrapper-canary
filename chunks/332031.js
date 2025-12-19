t.d(n, { Z: () => s });
var i = t(54381);
t(473749);
var l = t(442837),
    r = t(481060),
    a = t(655922),
    o = t(158776),
    u = t(981631),
    c = t(388032);
function s(e, n) {
    let t = (0, l.e7)([o.Z], () => (0, a.Z)(o.Z.findActivity(e, (e) => e.type === u.IIU.STREAMING)), [e]);
    return null == t
        ? null
        : (0, i.jsx)(r.sNh, {
              id: "watch-stream",
              label: c.intl.string(c.t["7Xq/nV"]),
              action: () => {
                  null == n || n(), window.open(t, "_blank");
              },
          });
}
