n.d(t, { Z: () => d }), n(953529);
var r = n(647438),
    i = n(442837),
    l = n(480916),
    a = n(292263),
    o = n(352138),
    c = n(81643),
    s = n(469775),
    u = n(388032);
let d = function (e, t) {
    let { methods: n, loading: d } = (0, i.cj)([a.Z], () => ({
            methods: a.Z.methods,
            loading: a.Z.loading,
        })),
        { initiateAgeVerification: f } = (0, c.WD)(e, !1, null, !0);
    return (
        r.useEffect(() => {
            null == n && (0, o.J)();
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
                                  title: u.intl.string(r),
                                  description: u.intl.string(i),
                                  onClick: async (n) => {
                                      (0, l.x3)(n, l.d_.EXPRESSIVE_PRIMARY, l.sU.METHOD_SELECT, e),
                                          null == t || t(),
                                          await f(l.cU.EXPRESSIVE_GET_STARTED, e);
                                  },
                              };
                          })
                          .filter((e) => null != e),
            loading: d,
        }
    );
};
