n.d(t, { Z: () => u }), n(953529);
var a = n(473749),
    l = n(442837),
    r = n(480916),
    i = n(292263),
    s = n(352138),
    o = n(81643),
    c = n(469775),
    d = n(388032);
let u = function (e) {
    let { onClose: t, onMethodClick: n, classificationId: u } = e,
        { methods: m, loading: p } = (0, l.cj)([i.Z], () => ({
            methods: i.Z.methods,
            loading: i.Z.loading,
        })),
        { initiateAgeVerification: h } = (0, o.WD)({
            onComplete: t,
            entryPoint: r.cU.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
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
                              let { title: a, description: l } = t;
                              return {
                                  id: e,
                                  title: d.intl.string(a),
                                  description: d.intl.string(l),
                                  onClick: async (t) => {
                                      (0, r.x3)(t, r.d_.EXPRESSIVE_PRIMARY, r.sU.METHOD_SELECT, e),
                                          null == n || n(),
                                          await h(e);
                                  },
                              };
                          })
                          .filter((e) => null != e),
            loading: p,
        }
    );
};
