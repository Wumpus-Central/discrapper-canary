var a = s(477900),
    e = s(855986),
    r = s(123292),
    n = s(253932),
    c = s(994500),
    l = s(792996);
s.d(
    i,
    {},
    {
        A: function (t) {
            let { userId: i, onClick: s } = t;
            return (0, e.bG)([c.A], () => c.A.isIgnored(i))
                ? (0, a.jsx)(r.Q, {
                      onClick: function () {
                          (n.j0.updateSetting(!0), s());
                      },
                      variant: "primary",
                      size: "sm",
                      textVariant: "body-sm/medium",
                      text: l.intl.string(l.t.QbcRCJ),
                  })
                : null;
        },
    },
);
