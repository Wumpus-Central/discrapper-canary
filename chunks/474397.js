var i = n(477900),
    d = n(192308),
    o = n(531685),
    s = n(723702),
    c = n(253400),
    u = n(267102),
    a = n(652215);
n.d(
    e,
    {},
    {
        A: function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.BRT.APP,
                e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                l = t ?? (0, u.zd)();
            if (l !== a.BRT.APP && null != l) {
                if (o.A.isFocused()) return;
                e
                    ? s.isPlatformEmbedded
                        ? c.Ay.focus()
                        : window.focus()
                    : (function () {
                          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.BRT.POPOUT;
                          t !== a.BRT.APP &&
                              (0, d.mM)(
                                  async () => {
                                      let { default: e } = await n.e(620570).then(n.bind(n, 368033));
                                      return (n) => (0, i.jsx)(e, { ...n, contextKey: t });
                                  },
                                  { contextKey: (0, d.TI)(t) },
                              );
                      })(t);
            }
        },
    },
);
