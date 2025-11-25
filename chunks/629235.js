n.d(e, { Z: () => u }), n(953529);
var i = n(473749),
    l = n(442837),
    r = n(480916),
    a = n(292263),
    o = n(352138),
    s = n(81643),
    c = n(469775),
    d = n(388032);
let u = function (t) {
    let { onClose: e, onMethodClick: n, classificationId: u } = t,
        { methods: E, loading: _ } = (0, l.cj)([a.Z], () => ({
            methods: a.Z.methods,
            loading: a.Z.loading,
        })),
        { initiateAgeVerification: f } = (0, s.WD)({
            onComplete: e,
            entryPoint: r.cU.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
            classificationId: u,
        });
    return (
        i.useEffect(() => {
            null == E && (0, o.Jh)();
        }, [E]),
        {
            ageVerificationMethods:
                null == E
                    ? void 0
                    : E.map((t) => {
                          let e = c.ed[t];
                          if (null == e) return null;
                          let { title: i, description: l } = e;
                          return {
                              id: t,
                              title: d.intl.string(i),
                              description: d.intl.string(l),
                              onClick: async (e) => {
                                  (0, r.x3)(e, r.d_.EXPRESSIVE_PRIMARY, r.sU.METHOD_SELECT, t),
                                      null == n || n(),
                                      await f(t);
                              },
                          };
                      }).filter((t) => null != t),
            loading: _,
        }
    );
};
