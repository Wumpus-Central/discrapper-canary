n.d(t, { A: () => d });
var i = n(627968),
    l = n(311907),
    s = n(123292),
    a = n(253932),
    r = n(994500),
    o = n(985018);
function d(e) {
    let { userId: t, onClick: n } = e;
    return (0, l.bG)([r.A], () => r.A.isIgnored(t))
        ? (0, i.jsx)(s.Q, {
              onClick: () => {
                  a.j0.updateSetting(!0), n();
              },
              variant: "primary",
              size: "sm",
              textVariant: "text-sm/medium",
              text: o.intl.string(o.t.QbcRCJ),
          })
        : null;
}
