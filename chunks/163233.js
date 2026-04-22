n.d(t, { A: () => S }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(265486),
    r = n(688810),
    o = n(704824),
    d = n(362490),
    c = n(395332),
    u = n(429913),
    p = n(379848),
    h = n(183555),
    m = n(633075),
    _ = n(735321),
    A = n(667049),
    f = n(657331),
    g = n(606758),
    x = n(961350),
    E = n(403362),
    C = n(49999),
    T = n(518477),
    v = n(985018);
function S(e) {
    let { targetElementRef: t, onClose: n } = e,
        [S, b] = s.useState(!1),
        { trackUserProfileEditAction: j } = (0, h.NJ)(),
        I = (0, l.bG)([x.default], () => x.default.getId()),
        R = (function () {
            let e,
                t,
                n = (0, l.bG)([x.default], () => x.default.getId()),
                i = (0, A.A)(n),
                a = s.useMemo(() => i.filter((e) => e instanceof m.R), [i]),
                r =
                    ((e = (0, c.VA)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    s.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                p = s.useMemo(() => r?.map((e) => e.applicationId) ?? [], [r]),
                h = ((t = (0, u.A)(p)), s.useMemo(() => t.filter(E.Vq), [t])),
                { tokens: _, fetched: f } = (0, o.j)(p),
                g = (0, d.U9)(h);
            return s.useMemo(() => {
                if (null == r || null == _ || !f) return null;
                let e = [],
                    t = [];
                for (let n of r) {
                    let i = _.find((e) => e.application.id === n.applicationId),
                        s = a.find((e) => e.applicationId === n.applicationId),
                        l = h.find((e) => e.id === n.applicationId),
                        r = g.find((e) => e.context.application.id === n.applicationId);
                    if (null == l) return null;
                    null != i && null == s
                        ? e.push({
                              type: "linked",
                              config: n,
                              application: l,
                              dismissibleContent: n.editProfileLinkedDc,
                          })
                        : null == i &&
                          r?.preferredFlow != null &&
                          t.push({
                              type: "unlinked",
                              config: n,
                              application: l,
                              dismissibleContent: n.editProfileUnlinkedDc,
                              authFlow: r.preferredFlow,
                          });
                }
                return [...e, ...t];
            }, [r, _, f, a, h, g]);
        })(),
        { analyticsLocations: N } = (0, r.Ay)();
    return null == R || 0 === R.length
        ? null
        : (0, i.jsx)(p.Ay, {
              contentTypes: R.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: s, markAsDismissed: l } = e,
                      r = R.find((e) => e.dismissibleContent === s);
                  if (null == r) return null;
                  let o = "linked" === r.type,
                      d = () =>
                          (0, f.openUserProfileModal)({ userId: I, tabSection: T.RP.WIDGETS }).then(() => {
                              l(C.i.TAKE_ACTION), n();
                          });
                  return (0, i.jsx)(a.A, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != r.config.editProfileUpsellImage
                              ? { type: "image", src: r.config.editProfileUpsellImage }
                              : void 0,
                      title: v.intl.format(v.t.TXDztH, { applicationName: r.application.name }),
                      body: o ? v.intl.string(v.t["63Kso0"]) : v.intl.string(v.t.HwXoeC),
                      onRequestClose: () => l(C.i.USER_DISMISS),
                      actions: [
                          o
                              ? {
                                    text: v.intl.string(v.t.VSLDly),
                                    onClick: () => {
                                        b(!0),
                                            d()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new m.R({ applicationId: r.application.id })),
                                                        void ((0, _.Y5)(e),
                                                        j({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, g.XA)(T.jM.WIDGET_ADDED))
                                                    );
                                                })
                                                .finally(() => b(!1));
                                    },
                                    loading: S,
                                }
                              : {
                                    text: v.intl.string(v.t["DSJi3+"]),
                                    onClick: () => {
                                        r.authFlow.initiate({
                                            onConfirm: () => {
                                                b(!0), d().finally(() => b(!1));
                                            },
                                            analyticsLocations: N,
                                        });
                                    },
                                    loading: S,
                                },
                      ],
                  });
              },
          });
}
