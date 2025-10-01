n.d(e, { default: () => S }), n(388685);
var l = n(951288),
    r = n(647438),
    a = n(512722),
    i = n.n(a),
    o = n(913527),
    s = n.n(o),
    c = n(990547),
    u = n(442837),
    d = n(667202),
    f = n(82659),
    E = n(749210),
    p = n(168107),
    A = n(480916),
    _ = n(592125),
    y = n(944486),
    h = n(594174),
    m = n(626135),
    b = n(63063),
    g = n(771308),
    v = n(758119),
    T = n(622822),
    G = n(13430),
    O = n(723359),
    R = n(981631),
    x = n(388032),
    N = n(736056);
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
function S(t) {
    let { transitionState: e, source: n } = t,
        a = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        o = (0, u.e7)([y.Z, _.Z], () => _.Z.getChannel(y.Z.getChannelId())),
        [S, k] = r.useState(null),
        [j, w] = r.useState(null),
        [I, D] = r.useState(!1),
        [M, P] = r.useState(0),
        L = r.useRef(null),
        U = r.useRef(null),
        F = n === O.L0.FAMILY_CENTER,
        Z = (0, T.Kt)() && !F,
        { verifyAgreementButtonText: V, verifyGateDescription: Y, verifyTitle: W } = (0, T.a1)(n),
        B = (0, T.$5)(o),
        q = T.Lj.has(n),
        K = null != S ? s()().diff(S, "years") : null;
    function Q() {
        if (n === O.L0.NSFW_SERVER_INVITE_EMBED) return (0, v.qV)(n), Promise.resolve();
        let t = null == o ? void 0 : o.getGuildId();
        return E.Z.nsfwReturnToSafety(t), (0, v.qV)(n), Promise.resolve();
    }
    async function H() {
        i()(null != S, "Cannot submit null birthday.");
        try {
            return w(null), D(!0), await (0, g.Av)(S, n);
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) (0, v.C8)(n, e.body.date_of_birth);
            else {
                var t;
                (null == e || null == (t = e.body) ? void 0 : t.username) != null
                    ? w(x.intl.string(x.t["TGg/2t"]))
                    : w(null == e ? void 0 : e.body.message),
                    D(!1);
            }
        }
    }
    async function J() {
        if ((i()(null != K, "Cannot submit if we haven't been able to calculate age."), K < 18)) return void P(1);
        await H();
    }
    async function X(t) {
        t.preventDefault(), I || null == S || (await J());
    }
    async function z() {
        null == (await H()) && P(0);
    }
    r.useEffect(() => {
        (null == a ? void 0 : a.nsfwAllowed) !== !0 || Z || (0, v.qq)(n);
    }),
        r.useEffect(() => {
            m.default.track(R.rMx.AGE_GATE_ACTION, {
                source: n,
                action: O.Al.AGE_GATE_OPEN,
            });
        }, [n]);
    let $ = r.useCallback(
            (t) => {
                k(t);
            },
            [k],
        ),
        tt = r.useCallback(() => {
            var t;
            null == (t = U.current) || t.focus();
        }, [U]),
        te = r.useCallback(() => {
            p.Z.showAgeVerificationGetStartedModal({ entryPoint: A.cU.NSFW_AGE_GATE });
        }, []),
        tn = {
            transitionState: e,
            onClose: Q,
            graphic: {
                type: "image",
                src: N.Z,
            },
            gradientColor: "blue",
        };
    return Z
        ? (0, l.jsx)(
              d.ExpressiveModal,
              C(
                  {
                      title: W,
                      subtitle: Y,
                      actions: [
                          {
                              text: x.intl.string(x.t.f3Pet7),
                              onClick: Q,
                              variant: "secondary",
                          },
                          {
                              text: null != V ? V : x.intl.string(x.t["5B+npK"]),
                              onClick: te,
                          },
                      ],
                      trackingProps: {
                          impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
                          impressionType: c.ImpressionTypes.MODAL,
                      },
                  },
                  tn,
              ),
          )
        : (null == a ? void 0 : a.nsfwAllowed) === !1 && (B || q) && !F
          ? (0, l.jsx)(
                d.ExpressiveModal,
                C(
                    {
                        title: x.intl.string(q ? x.t["H0SG/v"] : x.t.NEabBQ),
                        subtitle: x.intl.format(q ? x.t["6++3cX"] : x.t["2kHZen"], {
                            helpURL: b.Z.getArticleURL(R.BhN.AGE_GATE),
                        }),
                        actions: [
                            {
                                text: x.intl.string(x.t["/g10LC"]),
                                onClick: Q,
                                variant: "secondary",
                            },
                        ],
                        trackingProps: {
                            impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
                            impressionType: c.ImpressionTypes.MODAL,
                        },
                    },
                    tn,
                ),
            )
          : 0 === M
            ? (function () {
                  var t, e;
                  let r = (() => {
                          switch (n) {
                              case O.L0.NSFW_SERVER:
                              case O.L0.NSFW_SERVER_INVITE:
                              case O.L0.NSFW_SERVER_INVITE_EMBED:
                                  return x.intl.string(x.t.vAymlJ);
                              case O.L0.FAMILY_CENTER:
                                  return x.intl.string(x.t.M7mt7u);
                              default:
                                  return x.intl.string(x.t.F8otRk);
                          }
                      })(),
                      a = (() => {
                          switch (n) {
                              case O.L0.FAMILY_CENTER:
                                  return x.intl.string(x.t.mhUrKS);
                              case O.L0.DEEP_LINK_PROMPT:
                                  return x.intl.format(x.t.iyhg2t, { helpURL: b.Z.getArticleURL(R.BhN.AGE_GATE) });
                              default:
                                  return x.intl.format(x.t.n3QjDA, { helpURL: b.Z.getArticleURL(R.BhN.AGE_GATE) });
                          }
                      })();
                  return (0, l.jsx)("form", {
                      onSubmit: X,
                      children: (0, l.jsx)(
                          d.ExpressiveModal,
                          ((t = C(
                              {
                                  title: r,
                                  subtitle: a,
                                  actions: [
                                      {
                                          text: x.intl.string(x.t["1MrpWF"]),
                                          onClick: Q,
                                          variant: "secondary",
                                      },
                                      {
                                          text: x.intl.string(x.t.uBFuoq),
                                          onClick: J,
                                          loading: I,
                                          disabled: null == S,
                                      },
                                  ],
                              },
                              tn,
                          )),
                          (e = e =
                              {
                                  children: (0, l.jsx)(G.Z, {
                                      label: x.intl.string(x.t.rhBeKS),
                                      name: "date_of_birth",
                                      onChange: $,
                                      onPopulated: tt,
                                      error: j,
                                      value: S,
                                      ref: L,
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
            : (0, l.jsx)(f.Modal, {
                  transitionState: e,
                  onClose: Q,
                  title: x.intl.formatToPlainString(x.t.wumolZ, { age: K }),
                  subtitle: x.intl.formatToPlainString(x.t.n3QjDA, { helpURL: b.Z.getArticleURL(R.BhN.AGE_GATE) }),
                  actions: [
                      {
                          text: x.intl.string(x.t.cfYCra),
                          onClick: () => P(0),
                          variant: "secondary",
                      },
                      {
                          text: x.intl.string(x.t["6tahio"]),
                          onClick: z,
                      },
                  ],
              });
}
