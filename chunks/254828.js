n.d(t, { A: () => d });
var i = n(627968),
    l = n(17928),
    s = n(123292),
    r = n(253932),
    a = n(994500),
    o = n(985018);
function d(e) {
    let { userId: t, onClick: n } = e;
    return (0, l.bG)([a.A], () => a.A.isIgnored(t))
        ? (0, i.jsx)(s.Q, {
              onClick: () => {
                  r.j0.updateSetting(!0), n();
              },
              variant: "primary",
              size: "sm",
              textVariant: "text-sm/medium",
              text: o.intl.string(o.t.QbcRCJ),
          })
        : null;
}
