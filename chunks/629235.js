n.d(t, { Z: () => u }), n(953529);
var a = n(647438),
    i = n(442837),
    l = n(480916),
    r = n(292263),
    s = n(352138),
    o = n(81643),
    c = n(469775),
    d = n(388032);
let u = function (e) {
    let { onClose: t, onMethodClick: n, classificationId: u } = e,
        { methods: m, loading: p } = (0, i.cj)([r.Z], () => ({
            methods: r.Z.methods,
            loading: r.Z.loading,
        })),
        { initiateAgeVerification: h } = (0, o.WD)({
            onComplete: t,
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
                              let { title: a, description: i } = t;
                              return {
                                  id: e,
                                  title: d.intl.string(a),
                                  description: d.intl.string(i),
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
