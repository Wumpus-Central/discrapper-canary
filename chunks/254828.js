var e = s(477900),
    n = s(855986),
    a = s(123292),
    r = s(253932),
    c = s(994500),
    l = s(792996);
s.d(
    i,
    {},
    {
        A: function (t) {
            let { userId: i, onClick: s } = t;
            return (0, n.bG)([c.A], () => c.A.isIgnored(i))
                ? (0, e.jsx)(a.Q, {
                      onClick: function () {
                          (r.j0.updateSetting(!0), s());
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
