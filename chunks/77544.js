n.d(t, { A: () => u });
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(908289),
    d = n(290863),
    o = n(652215),
    s = n(985018);
function u(e, t) {
    let n = (0, i.bG)([d.A], () => (0, r.A)(d.A.findActivity(e, (e) => e.type === o.$pd.STREAMING)), [e]);
    return null == n
        ? null
        : (0, l.jsx)(a.Drp, {
              id: "watch-stream",
              label: s.intl.string(s.t["7Xq/nV"]),
              action: () => {
                  t?.(), window.open(n, "_blank");
              },
          });
}
