n.d(t, { A: () => S }), n(321073);
var a = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(342494),
    r = n(688810),
    o = n(704824),
    d = n(362490),
    c = n(395332),
    u = n(429913),
    m = n(379848),
    h = n(183555),
    x = n(633075),
    p = n(735321),
    g = n(667049),
    _ = n(657331),
    f = n(384377),
    v = n(961350),
    b = n(403362),
    j = n(49999),
    A = n(518477),
    C = n(985018);
function S(e) {
    let { targetElementRef: t, onClose: n } = e,
        [S, T] = s.useState(!1),
        { trackUserProfileEditAction: y } = (0, h.NJ)(),
        N = (0, i.bG)([v.default], () => v.default.getId()),
        E = (function () {
            let e,
                t,
                n = (0, i.bG)([v.default], () => v.default.getId()),
                a = (0, g.A)(n),
                l = s.useMemo(() => a.filter((e) => e instanceof x.R), [a]),
                r =
                    ((e = (0, c.ul)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    s.useMemo(() => e?.filter((e) => e.isEligibleForEditProfileUpsell()), [e])),
                m = s.useMemo(() => r?.map((e) => e.applicationId) ?? [], [r]),
                h = ((t = (0, u.A)(m)), s.useMemo(() => t.filter(b.Vq), [t])),
                { tokens: p, fetched: _ } = (0, o.j)(m),
                f = (0, d.U9)(h);
            return s.useMemo(() => {
                if (null == r || null == p || !_) return null;
                let e = [],
                    t = [];
                for (let n of r) {
                    let a = p.find((e) => e.application.id === n.applicationId),
                        s = l.find((e) => e.applicationId === n.applicationId),
                        i = h.find((e) => e.id === n.applicationId),
                        r = f.find((e) => e.context.application.id === n.applicationId);
                    if (null == i) return null;
                    null != a && null == s
                        ? e.push({
                              type: "linked",
                              config: n,
                              application: i,
                              dismissibleContent: n.editProfileLinkedDc,
                          })
                        : null == a &&
                          r?.preferredFlow != null &&
                          t.push({
                              type: "unlinked",
                              config: n,
                              application: i,
                              dismissibleContent: n.editProfileUnlinkedDc,
                              authFlow: r.preferredFlow,
                          });
                }
                return [...e, ...t];
            }, [r, p, _, l, h, f]);
        })(),
        { analyticsLocations: I } = (0, r.Ay)();
    return null == E || 0 === E.length
        ? null
        : (0, a.jsx)(m.Ay, {
              contentTypes: E.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: s, markAsDismissed: i } = e,
                      r = E.find((e) => e.dismissibleContent === s);
                  if (null == r) return null;
                  let o = "linked" === r.type,
                      d = () =>
                          (0, _.openUserProfileModal)({ userId: N, tabSection: A.RP.WIDGETS }).then(() => {
                              i(j.i.TAKE_ACTION), n();
                          });
                  return (0, a.jsx)(l.AM, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != r.config.editProfileUpsellImage
                              ? { type: "image", src: r.config.editProfileUpsellImage }
                              : void 0,
                      title: C.intl.format(C.t.TXDztH, { applicationName: r.application.name }),
                      body: o ? C.intl.string(C.t["63Kso0"]) : C.intl.string(C.t.HwXoeC),
                      onRequestClose: () => i(j.i.USER_DISMISS),
                      actions: [
                          o
                              ? {
                                    text: C.intl.string(C.t.VSLDly),
                                    onClick: () => {
                                        T(!0),
                                            d()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new x.R({ applicationId: r.application.id })),
                                                        void ((0, p.Y5)(e),
                                                        y({
                                                            action: "WIDGET_ADDED",
                                                            ...e.getProfileEditAnalyticsOptions(),
                                                        }),
                                                        (0, f.XA)(A.jM.WIDGET_ADDED))
                                                    );
                                                })
                                                .finally(() => T(!1));
                                    },
                                    loading: S,
                                }
                              : {
                                    text: C.intl.string(C.t["DSJi3+"]),
                                    onClick: () => {
                                        r.authFlow.initiate({
                                            onConfirm: () => {
                                                T(!0), d().finally(() => T(!1));
                                            },
                                            analyticsLocations: I,
                                        });
                                    },
                                    loading: S,
                                },
                      ],
                  });
              },
          });
}
