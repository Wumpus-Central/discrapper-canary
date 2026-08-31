s.d(i, { A: () => d });
var e = s(477900),
    a = s(17928),
    r = s(123292),
    n = s(885386),
    c = s(994500),
    l = s(375708);
function d(t) {
    let { userId: i, onClick: s } = t;
    return (0, a.bG)([c.A], () => c.A.isIgnored(i))
        ? (0, e.jsx)(r.Q, {
              onClick: function () {
                  n.j0.updateSetting(!0), s();
              },
              variant: "primary",
              size: "sm",
              textVariant: "text-sm/medium",
              text: l.intl.string(l.t.QbcRCJ),
          })
        : null;
}
