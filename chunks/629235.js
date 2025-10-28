n.d(t, { Z: () => u }), n(953529);
var a = n(647438),
    r = n(442837),
    l = n(480916),
    i = n(292263),
    o = n(352138),
    s = n(81643),
    c = n(469775),
    d = n(388032);
let u = function (e) {
    let { onClose: t, onMethodClick: n, classificationId: u } = e,
        { methods: m, loading: p } = (0, r.cj)([i.Z], () => ({
            methods: i.Z.methods,
            loading: i.Z.loading,
        })),
        { initiateAgeVerification: h } = (0, s.WD)({
            onComplete: t,
            shouldShowExpressiveModal: !0,
            classificationId: u,
        });
    return (
        a.useEffect(() => {
            null == m && (0, o.Jh)();
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
                                      (0, l.x3)(t, l.d_.EXPRESSIVE_PRIMARY, l.sU.METHOD_SELECT, e),
                                          null == n || n(),
                                          await h(l.cU.EXPRESSIVE_GET_STARTED, e);
                                  },
                              };
                          })
                          .filter((e) => null != e),
            loading: p,
        }
    );
};
