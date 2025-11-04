n.d(t, { Z: () => u }), n(953529);
var a = n(647438),
    r = n(442837),
    i = n(480916),
    l = n(292263),
    s = n(352138),
    o = n(81643),
    c = n(469775),
    d = n(388032);
let u = function (e) {
    let { onClose: t, onMethodClick: n, classificationId: u } = e,
        { methods: m, loading: p } = (0, r.cj)([l.Z], () => ({
            methods: l.Z.methods,
            loading: l.Z.loading,
        })),
        { initiateAgeVerification: h } = (0, o.WD)({
            onComplete: t,
            classificationId: u,
        });
    return (
        a.useEffect(() => {
            null == m && (0, s.Jh)();
        }, [m]),
        {
            ageVerificationMethods:
                null == m
                    ? void 0
                    : m
                          .map((e) => {
                              let t = c.ed[e];
                              if (null == t) return null;
                              let { title: a, description: r } = t;
                              return {
                                  id: e,
                                  title: d.intl.string(a),
                                  description: d.intl.string(r),
                                  onClick: async (t) => {
                                      (0, i.x3)(t, i.d_.EXPRESSIVE_PRIMARY, i.sU.METHOD_SELECT, e),
                                          null == n || n(),
                                          await h(i.cU.EXPRESSIVE_GET_STARTED, e);
                                  },
                              };
                          })
                          .filter((e) => null != e),
            loading: p,
        }
    );
};
