t.d(e, { A: () => u });
var l = t(477900);
t(582128);
var i = t(350835),
    a = t(17928),
    r = t(477782),
    d = t(908289),
    s = t(290863),
    o = t(105292);
function u(n, e) {
    let t = (0, a.bG)([s.A], () => (0, d.A)(s.A.findActivity(n, (n) => n.type === i.$.STREAMING)), [n]);
    return null == t
        ? null
        : (0, l.jsx)(r.Dr, {
              id: "watch-stream",
              label: o.intl.string(o.t["7Xq/nV"]),
              action: () => {
                  (e?.(), window.open(t, "_blank"));
              },
          });
}
