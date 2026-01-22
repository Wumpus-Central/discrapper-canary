n.d(t, { A: () => C }), n(321073), n(896048), n(492834);
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(342494),
    s = n(688810),
    o = n(704824),
    c = n(362490),
    d = n(395332),
    u = n(429913),
    m = n(379848),
    p = n(183555),
    h = n(633075),
    f = n(735321),
    x = n(667049),
    b = n(657331),
    g = n(384377),
    v = n(961350),
    j = n(403362),
    y = n(49999),
    _ = n(518477),
    A = n(985018);
function C(e) {
    let { targetElementRef: t, onClose: n } = e,
        [C, S] = l.useState(!1),
        { trackUserProfileEditAction: O } = (0, p.NJ)(),
        E = (0, i.bG)([v.default], () => v.default.getId()),
        N = (function () {
            let e,
                t,
                n = (0, i.bG)([v.default], () => v.default.getId()),
                a = (0, x.A)(n),
                r = l.useMemo(() => a.filter((e) => e instanceof h.R), [a]),
                s =
                    ((e = (0, d.ul)({ location: "UserProfileAccountPopoutApplicationWidgetCoachmark" })),
                    l.useMemo(() => (null == e ? void 0 : e.filter((e) => e.isEligibleForEditProfileUpsell())), [e])),
                m = l.useMemo(() => {
                    var e;
                    return null != (e = null == s ? void 0 : s.map((e) => e.applicationId)) ? e : [];
                }, [s]),
                p = ((t = (0, u.A)(m)), l.useMemo(() => t.filter(j.Vq), [t])),
                { tokens: f, fetched: b } = (0, o.j)(m),
                g = (0, c.U9)(p);
            return l.useMemo(() => {
                if (null == s || null == f || !b) return null;
                let e = [],
                    t = [];
                for (let n of s) {
                    let a = f.find((e) => e.application.id === n.applicationId),
                        l = r.find((e) => e.applicationId === n.applicationId),
                        i = p.find((e) => e.id === n.applicationId),
                        s = g.find((e) => e.context.application.id === n.applicationId);
                    if (null == i) return null;
                    null != a && null == l
                        ? e.push({
                              type: "linked",
                              config: n,
                              application: i,
                              dismissibleContent: n.editProfileLinkedDc,
                          })
                        : null == a &&
                          (null == s ? void 0 : s.preferredFlow) != null &&
                          t.push({
                              type: "unlinked",
                              config: n,
                              application: i,
                              dismissibleContent: n.editProfileUnlinkedDc,
                              authFlow: s.preferredFlow,
                          });
                }
                return [...e, ...t];
            }, [s, f, b, r, p, g]);
        })(),
        { analyticsLocations: T } = (0, s.Ay)();
    return null == N || 0 === N.length
        ? null
        : (0, a.jsx)(m.Ay, {
              contentTypes: N.map((e) => e.dismissibleContent),
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: i } = e,
                      s = N.find((e) => e.dismissibleContent === l);
                  if (null == s) return null;
                  let o = "linked" === s.type,
                      c = () =>
                          (0, b.openUserProfileModal)({
                              userId: E,
                              tabSection: _.RP.WIDGETS,
                          }).then(() => {
                              i(y.i.TAKE_ACTION), n();
                          });
                  return (0, a.jsx)(r.AM, {
                      targetElementRef: t,
                      position: "right",
                      gradientColor: "blue",
                      graphic:
                          null != s.config.editProfileUpsellImage
                              ? {
                                    type: "image",
                                    src: s.config.editProfileUpsellImage,
                                }
                              : void 0,
                      title: A.intl.format(A.t.TXDztH, { applicationName: s.application.name }),
                      body: o ? A.intl.string(A.t["63Kso0"]) : A.intl.string(A.t.HwXoeC),
                      onRequestClose: () => i(y.i.USER_DISMISS),
                      actions: [
                          o
                              ? {
                                    text: A.intl.string(A.t.VSLDly),
                                    onClick: () => {
                                        S(!0),
                                            c()
                                                .then(() => {
                                                    let e;
                                                    return (
                                                        (e = new h.R({ applicationId: s.application.id })),
                                                        void ((0, f.Y5)(e),
                                                        O(
                                                            (function (e) {
                                                                for (var t = 1; t < arguments.length; t++) {
                                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                                        a = Object.keys(n);
                                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                                        (a = a.concat(
                                                                            Object.getOwnPropertySymbols(n).filter(
                                                                                function (e) {
                                                                                    return Object.getOwnPropertyDescriptor(
                                                                                        n,
                                                                                        e,
                                                                                    ).enumerable;
                                                                                },
                                                                            ),
                                                                        )),
                                                                        a.forEach(function (t) {
                                                                            var a;
                                                                            (a = n[t]),
                                                                                t in e
                                                                                    ? Object.defineProperty(e, t, {
                                                                                          value: a,
                                                                                          enumerable: !0,
                                                                                          configurable: !0,
                                                                                          writable: !0,
                                                                                      })
                                                                                    : (e[t] = a);
                                                                        });
                                                                }
                                                                return e;
                                                            })(
                                                                { action: "WIDGET_ADDED" },
                                                                e.getProfileEditAnalyticsOptions(),
                                                            ),
                                                        ),
                                                        (0, g.XA)(_.jM.WIDGET_ADDED))
                                                    );
                                                })
                                                .finally(() => S(!1));
                                    },
                                    loading: C,
                                }
                              : {
                                    text: A.intl.string(A.t["DSJi3+"]),
                                    onClick: () => {
                                        s.authFlow.initiate({
                                            onConfirm: () => {
                                                S(!0), c().finally(() => S(!1));
                                            },
                                            analyticsLocations: T,
                                        });
                                    },
                                    loading: C,
                                },
                      ],
                  });
              },
          });
}
