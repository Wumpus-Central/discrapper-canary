n.d(e, { default: () => C }), n(388685);
var l = n(951288),
    r = n(647438),
    a = n(512722),
    i = n.n(a),
    o = n(913527),
    s = n.n(o),
    c = n(990547),
    u = n(793030),
    d = n(442837),
    E = n(749210),
    f = n(168107),
    p = n(480916),
    A = n(592125),
    _ = n(944486),
    y = n(594174),
    h = n(626135),
    m = n(63063),
    b = n(771308),
    g = n(758119),
    T = n(622822),
    G = n(13430),
    v = n(723359),
    O = n(981631),
    R = n(388032),
    N = n(736056);
function x(t) {
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
function C(t) {
    let { transitionState: e, source: n } = t,
        a = (0, d.e7)([y.default], () => y.default.getCurrentUser()),
        o = (0, d.e7)([_.Z, A.Z], () => A.Z.getChannel(_.Z.getChannelId())),
        [C, S] = r.useState(null),
        [k, j] = r.useState(null),
        [w, I] = r.useState(!1),
        [M, D] = r.useState(0),
        P = r.useRef(null),
        L = r.useRef(null),
        U = n === v.L0.FAMILY_CENTER,
        V = (0, T.Kt)() && !U,
        { verifyAgreementButtonText: Z, verifyGateDescription: F, verifyTitle: W } = (0, T.a1)(n),
        Y = (0, T.$5)(o),
        B = T.Lj.has(n),
        q = null != C ? s()().diff(C, "years") : null;
    function K() {
        if (n === v.L0.NSFW_SERVER_INVITE_EMBED) return (0, g.qV)(n), Promise.resolve();
        let t = null == o ? void 0 : o.getGuildId();
        return E.Z.nsfwReturnToSafety(t), (0, g.qV)(n), Promise.resolve();
    }
    async function H() {
        i()(null != C, "Cannot submit null birthday.");
        try {
            return j(null), I(!0), await (0, b.Av)(C, n);
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) (0, g.C8)(n, e.body.date_of_birth);
            else {
                var t;
                (null == e || null == (t = e.body) ? void 0 : t.username) != null
                    ? j(R.intl.string(R.t["TGg/2k"]))
                    : j(null == e ? void 0 : e.body.message),
                    I(!1);
            }
        }
    }
    async function Q() {
        if ((i()(null != q, "Cannot submit if we haven't been able to calculate age."), q < 18)) return void D(1);
        await H();
    }
    async function z(t) {
        t.preventDefault(), w || null == C || (await Q());
    }
    async function J() {
        null == (await H()) && D(0);
    }
    r.useEffect(() => {
        (null == a ? void 0 : a.nsfwAllowed) !== !0 || V || (0, g.qq)(n);
    }),
        r.useEffect(() => {
            h.default.track(O.rMx.AGE_GATE_ACTION, {
                source: n,
                action: v.Al.AGE_GATE_OPEN,
            });
        }, [n]);
    let X = r.useCallback(
            (t) => {
                S(t);
            },
            [S],
        ),
        $ = r.useCallback(() => {
            var t;
            null == (t = L.current) || t.focus();
        }, [L]),
        tt = r.useCallback(() => {
            f.Z.showAgeVerificationGetStartedModal({ entryPoint: p.cU.NSFW_AGE_GATE });
        }, []),
        te = {
            transitionState: e,
            onClose: K,
            graphic: {
                type: "image",
                src: N.Z,
            },
            gradientColor: "blue",
        };
    return V
        ? (0, l.jsx)(
              u.ExpressiveModal,
              x(
                  {
                      title: W,
                      subtitle: F,
                      actions: [
                          {
                              text: R.intl.string(R.t.f3Pet9),
                              onClick: K,
                              variant: "secondary",
                          },
                          {
                              text: null != Z ? Z : R.intl.string(R.t["5B+npG"]),
                              onClick: tt,
                          },
                      ],
                      trackingProps: {
                          impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
                          impressionType: c.ImpressionTypes.MODAL,
                      },
                  },
                  te,
              ),
          )
        : (null == a ? void 0 : a.nsfwAllowed) === !1 && (Y || B) && !U
          ? (0, l.jsx)(
                u.ExpressiveModal,
                x(
                    {
                        title: R.intl.string(B ? R.t["H0SG/g"] : R.t.NEabBa),
                        subtitle: R.intl.format(B ? R.t["6++3cX"] : R.t["2kHZes"], {
                            helpURL: m.Z.getArticleURL(O.BhN.AGE_GATE),
                        }),
                        actions: [
                            {
                                text: R.intl.string(R.t["/g10LC"]),
                                onClick: K,
                                variant: "secondary",
                            },
                        ],
                        trackingProps: {
                            impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
                            impressionType: c.ImpressionTypes.MODAL,
                        },
                    },
                    te,
                ),
            )
          : 0 === M
            ? (function () {
                  var t, e;
                  let r = (() => {
                          switch (n) {
                              case v.L0.NSFW_SERVER:
                              case v.L0.NSFW_SERVER_INVITE:
                              case v.L0.NSFW_SERVER_INVITE_EMBED:
                                  return R.intl.string(R.t.vAymlG);
                              case v.L0.FAMILY_CENTER:
                                  return R.intl.string(R.t.M7mt7m);
                              default:
                                  return R.intl.string(R.t.F8otRo);
                          }
                      })(),
                      a = (() => {
                          switch (n) {
                              case v.L0.FAMILY_CENTER:
                                  return R.intl.string(R.t.mhUrKS);
                              case v.L0.DEEP_LINK_PROMPT:
                                  return R.intl.format(R.t.iyhg2s, { helpURL: m.Z.getArticleURL(O.BhN.AGE_GATE) });
                              default:
                                  return R.intl.format(R.t.n3QjDE, { helpURL: m.Z.getArticleURL(O.BhN.AGE_GATE) });
                          }
                      })();
                  return (0, l.jsx)("form", {
                      onSubmit: z,
                      children: (0, l.jsx)(
                          u.Modal,
                          ((t = x(
                              {
                                  title: r,
                                  subtitle: a,
                                  actions: [
                                      {
                                          text: R.intl.string(R.t["1MrpWO"]),
                                          onClick: K,
                                          variant: "secondary",
                                      },
                                      {
                                          text: R.intl.string(R.t.uBFuok),
                                          onClick: Q,
                                          loading: w,
                                          disabled: null == C,
                                      },
                                  ],
                              },
                              te,
                          )),
                          (e = e =
                              {
                                  children: (0, l.jsx)(G.Z, {
                                      label: R.intl.string(R.t.rhBeKe),
                                      name: "date_of_birth",
                                      onChange: X,
                                      onPopulated: $,
                                      error: k,
                                      value: C,
                                      ref: P,
                                      autoFocus: !0,
                                  }),
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                              : (function (t, e) {
                                    var n = Object.keys(t);
                                    if (Object.getOwnPropertySymbols) {
                                        var l = Object.getOwnPropertySymbols(t);
                                        n.push.apply(n, l);
                                    }
                                    return n;
                                })(Object(e)).forEach(function (n) {
                                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                                }),
                          t),
                      ),
                  });
              })()
            : (0, l.jsx)(u.Modal, {
                  transitionState: e,
                  onClose: K,
                  title: R.intl.formatToPlainString(R.t.wumolR, { age: null != q ? q : "" }),
                  subtitle: R.intl.formatToPlainString(R.t.n3QjDE, { helpURL: m.Z.getArticleURL(O.BhN.AGE_GATE) }),
                  actions: [
                      {
                          text: R.intl.string(R.t.cfYCrb),
                          onClick: () => D(0),
                          variant: "secondary",
                      },
                      {
                          text: R.intl.string(R.t["6tahin"]),
                          onClick: J,
                      },
                  ],
              });
}
