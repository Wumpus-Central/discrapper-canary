var i = t(477900);
t(582128);
var l = t(350835),
    a = t(855986),
    r = t(477782),
    d = t(908289),
    s = t(290863),
    u = t(792996);
t.d(
    e,
    {},
    {
        A: function (n, e) {
            let t = (0, a.bG)([s.A], () => (0, d.A)(s.A.findActivity(n, (n) => n.type === l.$.STREAMING)), [n]);
            return null == t
                ? null
                : (0, i.jsx)(r.Dr, {
                      id: "watch-stream",
                      label: u.intl.string(u.t["7Xq/nV"]),
                      action: () => {
                          (e?.(), window.open(t, "_blank"));
                      },
                  });
        },
    },
);
