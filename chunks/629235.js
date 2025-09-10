n.d(t, { Z: () => u }), n(953529);
var r = n(647438),
    i = n(442837),
    l = n(480916),
    o = n(292263),
    a = n(352138),
    c = n(81643),
    s = n(469775),
    d = n(388032);
let u = function (e, t) {
    let { methods: n, loading: u } = (0, i.cj)([o.Z], () => ({
            methods: o.Z.methods,
            loading: o.Z.loading,
        })),
        { initiateAgeVerification: x } = (0, c.WD)(e);
    return (
        r.useEffect(() => {
            null == n && (0, a.J)();
        }, [n]),
        {
            ageVerificationMethods:
                null == n
                    ? void 0
                    : n
                          .map((e) => {
                              let n = s.ed[e];
                              if (null == n) return null;
                              let { title: r, description: i } = n;
                              return {
                                  id: e,
                                  title: d.intl.string(r),
                                  description: d.intl.string(i),
                                  onClick: async (n) => {
                                      (0, l.x3)(n, l.d_.EXPRESSIVE_PRIMARY, l.sU.METHOD_SELECT, e),
                                          null == t || t(),
                                          await x(l.cU.EXPRESSIVE_GET_STARTED, e);
                                  },
                              };
                          })
                          .filter((e) => null != e),
            loading: u,
        }
    );
};
