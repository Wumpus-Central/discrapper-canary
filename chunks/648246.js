var l = n(477900);
n(582128);
var i = n(821609),
    a = n(908289),
    r = n(960076),
    s = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { activity: t, onAction: n, variant: o = "secondary", size: u = "sm", ...c } = e;
            return (0, r.A)(t)
                ? (0, l.jsx)(i.$, {
                      variant: o,
                      size: u,
                      text: s.intl.string(s.t.I6JG46),
                      onClick: function () {
                          n?.();
                          let e = (0, a.A)(t);
                          return window.open(null != e ? e : void 0);
                      },
                      fullWidth: !0,
                      ...c,
                  })
                : null;
        },
    },
);
