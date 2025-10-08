n.d(t, { Z: () => u }), n(953529);
var a = n(647438),
    r = n(442837),
    i = n(480916),
    l = n(292263),
    s = n(352138),
    o = n(81643),
    c = n(469775),
    d = n(388032);
let u = function (e, t) {
    let { methods: n, loading: u } = (0, r.cj)([l.Z], () => ({
            methods: l.Z.methods,
            loading: l.Z.loading,
        })),
        { initiateAgeVerification: m } = (0, o.WD)({
            onComplete: e,
            shouldShowExpressiveModal: !0,
        });
    return (
        a.useEffect(() => {
            null == n && (0, s.J)();
        }, [n]),
        {
            ageVerificationMethods:
                null == n
                    ? void 0
                    : n
                          .map((e) => {
                              let n = c.ed[e];
                              if (null == n) return null;
                              let { title: a, description: r } = n;
                              return {
                                  id: e,
                                  title: d.intl.string(a),
                                  description: d.intl.string(r),
                                  onClick: async (n) => {
                                      (0, i.x3)(n, i.d_.EXPRESSIVE_PRIMARY, i.sU.METHOD_SELECT, e),
                                          null == t || t(),
                                          await m(i.cU.EXPRESSIVE_GET_STARTED, e);
                                  },
                              };
                          })
                          .filter((e) => null != e),
            loading: u,
        }
    );
};
