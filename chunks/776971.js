n.d(e, {
    default: () => k,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    a = n(284009),
    i = n.n(a),
    o = n(989349),
    s = n.n(o),
    c = n(110259),
    u = n(158954),
    d = n(311907),
    E = n(686956),
    p = n(935649),
    f = n(847599),
    A = n(734057),
    _ = n(309010),
    y = n(287809),
    m = n(954571),
    b = n(975571),
    g = n(955437),
    h = n(612200),
    T = n(323073),
    G = n(201505),
    v = n(204925),
    O = n(652215),
    R = n(985018),
    w = n(700129);

function C(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            l.forEach(function (e) {
                var l;
                (l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = l);
            });
    }
    return t;
}

function k(t) {
    var e, n;
    let a,
        o,
        { transitionState: k, source: N } = t,
        S = (0, d.bG)([y.default], () => y.default.getCurrentUser()),
        x = (0, d.bG)([_.A, A.A], () => A.A.getChannel(_.A.getChannelId())),
        [M, j] = r.useState(null),
        [I, D] = r.useState(null),
        [P, U] = r.useState(!1),
        [V, L] = r.useState(0),
        F = r.useRef(null),
        W = r.useRef(null),
        Y = N === v.w_.FAMILY_CENTER,
        B = (0, T.a9)() && !Y,
        { verifyAgreementButtonText: H, verifyGateDescription: z, verifyTitle: K } = (0, T.Gn)(N),
        Z = (0, T.vL)(x),
        q = T.Bc.has(N),
        Q = null != M ? s()().diff(M, "years") : null;

    function X() {
        if (N === v.w_.NSFW_SERVER_INVITE_EMBED) return (0, h.IO)(N), Promise.resolve();
        let t = null == x ? void 0 : x.getGuildId();
        return E.A.nsfwReturnToSafety(t), (0, h.IO)(N), Promise.resolve();
    }
    async function $() {
        i()(null != M, "Cannot submit null birthday.");
        try {
            return D(null), U(!0), await (0, g.n7)(M, N);
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) (0, h.MP)(N, e.body.date_of_birth);
            else {
                var t;
                (null == e || null == (t = e.body) ? void 0 : t.username) != null
                    ? D(R.intl.string(R.t["TGg/2k"]))
                    : D(null == e ? void 0 : e.body.message),
                    U(!1);
            }
        }
    }
    async function J() {
        (i()(null != Q, "Cannot submit if we haven't been able to calculate age."), Q < 18) ? L(1) : await $();
    }
    async function tt(t) {
        t.preventDefault(), P || null == M || (await J());
    }
    async function te() {
        null == (await $()) && L(0);
    }
    r.useEffect(() => {
        (null == S ? void 0 : S.nsfwAllowed) !== !0 || B || (0, h.Nk)(N);
    }),
        r.useEffect(() => {
            m.default.track(O.HAw.AGE_GATE_ACTION, {
                source: N,
                action: v.AM.AGE_GATE_OPEN,
            });
        }, [N]);
    let tn = r.useCallback(
            (t) => {
                j(t);
            },
            [j],
        ),
        tl = r.useCallback(() => {
            var t;
            null == (t = W.current) || t.focus();
        }, [W]),
        tr = r.useCallback(() => {
            p.A.showAgeVerificationGetStartedModal({
                entryPoint: f.q1.NSFW_AGE_GATE,
            });
        }, []),
        ta = {
            transitionState: k,
            onClose: X,
            graphic: {
                type: "image",
                src: w.A,
            },
            gradientColor: "blue",
        };
    return B
        ? (0, l.jsx)(
              u.ExpressiveModal,
              C(
                  {
                      title: K,
                      subtitle: z,
                      actions: [
                          {
                              text: R.intl.string(R.t.f3Pet9),
                              onClick: X,
                              variant: "secondary",
                          },
                          {
                              text: null != H ? H : R.intl.string(R.t["5B+npG"]),
                              onClick: tr,
                          },
                      ],
                      trackingProps: {
                          impression: {
                              impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY,
                          },
                          impressionType: c.ImpressionTypes.MODAL,
                      },
                  },
                  ta,
              ),
          )
        : (null == S ? void 0 : S.nsfwAllowed) === !1 && (Z || q) && !Y
          ? (0, l.jsx)(
                u.ExpressiveModal,
                C(
                    {
                        title: R.intl.string(q ? R.t["H0SG/g"] : R.t.NEabBa),
                        subtitle: R.intl.format(q ? R.t["6++3cX"] : R.t["2kHZes"], {
                            helpURL: b.A.getArticleURL(O.MVz.AGE_GATE),
                        }),
                        actions: [
                            {
                                text: R.intl.string(R.t["/g10LC"]),
                                onClick: X,
                                variant: "secondary",
                            },
                        ],
                        trackingProps: {
                            impression: {
                                impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY,
                            },
                            impressionType: c.ImpressionTypes.MODAL,
                        },
                    },
                    ta,
                ),
            )
          : 0 === V
            ? ((a = (() => {
                  switch (N) {
                      case v.w_.NSFW_SERVER:
                      case v.w_.NSFW_SERVER_INVITE:
                      case v.w_.NSFW_SERVER_INVITE_EMBED:
                          return R.intl.string(R.t.vAymlG);
                      case v.w_.FAMILY_CENTER:
                          return R.intl.string(R.t.M7mt7m);
                      default:
                          return R.intl.string(R.t.F8otRo);
                  }
              })()),
              (o = (() => {
                  switch (N) {
                      case v.w_.FAMILY_CENTER:
                          return R.intl.string(R.t.mhUrKS);
                      case v.w_.DEEP_LINK_PROMPT:
                          return R.intl.format(R.t.iyhg2s, {
                              helpURL: b.A.getArticleURL(O.MVz.AGE_GATE),
                          });
                      default:
                          return R.intl.format(R.t.n3QjDE, {
                              helpURL: b.A.getArticleURL(O.MVz.AGE_GATE),
                          });
                  }
              })()),
              (0, l.jsx)("form", {
                  onSubmit: tt,
                  children: (0, l.jsx)(
                      u.Modal,
                      ((e = C(
                          {
                              title: a,
                              subtitle: o,
                              actions: [
                                  {
                                      text: R.intl.string(R.t["1MrpWO"]),
                                      onClick: X,
                                      variant: "secondary",
                                  },
                                  {
                                      text: R.intl.string(R.t.uBFuok),
                                      onClick: J,
                                      loading: P,
                                      disabled: null == M,
                                  },
                              ],
                          },
                          ta,
                      )),
                      (n = n =
                          {
                              children: (0, l.jsx)(G.A, {
                                  label: R.intl.string(R.t.rhBeKe),
                                  name: "date_of_birth",
                                  onChange: tn,
                                  onPopulated: tl,
                                  error: I,
                                  value: M,
                                  ref: F,
                                  autoFocus: !0,
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : (function (t, e) {
                                var n = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(t);
                                    n.push.apply(n, l);
                                }
                                return n;
                            })(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                            }),
                      e),
                  ),
              }))
            : (0, l.jsx)(u.Modal, {
                  transitionState: k,
                  onClose: X,
                  title: R.intl.formatToPlainString(R.t.wumolR, {
                      age: null != Q ? Q : "",
                  }),
                  subtitle: R.intl.formatToPlainString(R.t.n3QjDE, {
                      helpURL: b.A.getArticleURL(O.MVz.AGE_GATE),
                  }),
                  actions: [
                      {
                          text: R.intl.string(R.t.cfYCrb),
                          onClick: () => L(0),
                          variant: "secondary",
                      },
                      {
                          text: R.intl.string(R.t["6tahin"]),
                          onClick: te,
                      },
                  ],
              });
}
