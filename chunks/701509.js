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
    f = n(749210),
    E = n(168107),
    p = n(480916),
    A = n(592125),
    _ = n(944486),
    y = n(594174),
    h = n(626135),
    m = n(63063),
    b = n(771308),
    g = n(758119),
    v = n(622822),
    T = n(13430),
    G = n(723359),
    N = n(981631),
    O = n(388032),
    R = n(736056);
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
        U = n === G.L0.FAMILY_CENTER,
        F = (0, v.Kt)() && !U,
        { verifyAgreementButtonText: Z, verifyGateDescription: V, verifyTitle: Y } = (0, v.a1)(n),
        W = (0, v.$5)(o),
        B = v.Lj.has(n),
        q = null != C ? s()().diff(C, "years") : null;
    function K() {
        if (n === G.L0.NSFW_SERVER_INVITE_EMBED) return (0, g.qV)(n), Promise.resolve();
        let t = null == o ? void 0 : o.getGuildId();
        return f.Z.nsfwReturnToSafety(t), (0, g.qV)(n), Promise.resolve();
    }
    async function Q() {
        i()(null != C, "Cannot submit null birthday.");
        try {
            return j(null), I(!0), await (0, b.Av)(C, n);
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) (0, g.C8)(n, e.body.date_of_birth);
            else {
                var t;
                (null == e || null == (t = e.body) ? void 0 : t.username) != null
                    ? j(O.intl.string(O.t["TGg/2t"]))
                    : j(null == e ? void 0 : e.body.message),
                    I(!1);
            }
        }
    }
    async function H() {
        if ((i()(null != q, "Cannot submit if we haven't been able to calculate age."), q < 18)) return void D(1);
        await Q();
    }
    async function J(t) {
        t.preventDefault(), w || null == C || (await H());
    }
    async function z() {
        null == (await Q()) && D(0);
    }
    r.useEffect(() => {
        (null == a ? void 0 : a.nsfwAllowed) !== !0 || F || (0, g.qq)(n);
    }),
        r.useEffect(() => {
            h.default.track(N.rMx.AGE_GATE_ACTION, {
                source: n,
                action: G.Al.AGE_GATE_OPEN,
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
            E.Z.showAgeVerificationGetStartedModal({ entryPoint: p.cU.NSFW_AGE_GATE });
        }, []),
        te = {
            transitionState: e,
            onClose: K,
            graphic: {
                type: "image",
                src: R.Z,
            },
            gradientColor: "blue",
        };
    return F
        ? (0, l.jsx)(
              u.ExpressiveModal,
              x(
                  {
                      title: Y,
                      subtitle: V,
                      actions: [
                          {
                              text: O.intl.string(O.t.f3Pet7),
                              onClick: K,
                              variant: "secondary",
                          },
                          {
                              text: null != Z ? Z : O.intl.string(O.t["5B+npK"]),
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
        : (null == a ? void 0 : a.nsfwAllowed) === !1 && (W || B) && !U
          ? (0, l.jsx)(
                u.ExpressiveModal,
                x(
                    {
                        title: O.intl.string(B ? O.t["H0SG/v"] : O.t.NEabBQ),
                        subtitle: O.intl.format(B ? O.t["6++3cX"] : O.t["2kHZen"], {
                            helpURL: m.Z.getArticleURL(N.BhN.AGE_GATE),
                        }),
                        actions: [
                            {
                                text: O.intl.string(O.t["/g10LC"]),
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
                              case G.L0.NSFW_SERVER:
                              case G.L0.NSFW_SERVER_INVITE:
                              case G.L0.NSFW_SERVER_INVITE_EMBED:
                                  return O.intl.string(O.t.vAymlJ);
                              case G.L0.FAMILY_CENTER:
                                  return O.intl.string(O.t.M7mt7u);
                              default:
                                  return O.intl.string(O.t.F8otRk);
                          }
                      })(),
                      a = (() => {
                          switch (n) {
                              case G.L0.FAMILY_CENTER:
                                  return O.intl.string(O.t.mhUrKS);
                              case G.L0.DEEP_LINK_PROMPT:
                                  return O.intl.format(O.t.iyhg2t, { helpURL: m.Z.getArticleURL(N.BhN.AGE_GATE) });
                              default:
                                  return O.intl.format(O.t.n3QjDA, { helpURL: m.Z.getArticleURL(N.BhN.AGE_GATE) });
                          }
                      })();
                  return (0, l.jsx)("form", {
                      onSubmit: J,
                      children: (0, l.jsx)(
                          u.ExpressiveModal,
                          ((t = x(
                              {
                                  title: r,
                                  subtitle: a,
                                  actions: [
                                      {
                                          text: O.intl.string(O.t["1MrpWF"]),
                                          onClick: K,
                                          variant: "secondary",
                                      },
                                      {
                                          text: O.intl.string(O.t.uBFuoq),
                                          onClick: H,
                                          loading: w,
                                          disabled: null == C,
                                      },
                                  ],
                              },
                              te,
                          )),
                          (e = e =
                              {
                                  children: (0, l.jsx)(T.Z, {
                                      label: O.intl.string(O.t.rhBeKS),
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
                  title: O.intl.formatToPlainString(O.t.wumolZ, { age: q }),
                  subtitle: O.intl.formatToPlainString(O.t.n3QjDA, { helpURL: m.Z.getArticleURL(N.BhN.AGE_GATE) }),
                  actions: [
                      {
                          text: O.intl.string(O.t.cfYCra),
                          onClick: () => D(0),
                          variant: "secondary",
                      },
                      {
                          text: O.intl.string(O.t["6tahio"]),
                          onClick: z,
                      },
                  ],
              });
}
