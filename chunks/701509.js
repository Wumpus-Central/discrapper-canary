n.d(e, { default: () => S }), n(388685);
var l = n(951288),
    r = n(647438),
    a = n(512722),
    i = n.n(a),
    o = n(913527),
    s = n.n(o),
    c = n(990547),
    u = n(442837),
    f = n(667202),
    d = n(82659),
    E = n(749210),
    p = n(168107),
    A = n(480916),
    _ = n(592125),
    y = n(944486),
    h = n(594174),
    m = n(626135),
    b = n(63063),
    g = n(771308),
    T = n(758119),
    v = n(622822),
    G = n(13430),
    O = n(723359),
    R = n(981631),
    N = n(388032),
    C = n(736056);
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
function S(t) {
    let { transitionState: e, source: n } = t,
        a = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        o = (0, u.e7)([y.Z, _.Z], () => _.Z.getChannel(y.Z.getChannelId())),
        [S, k] = r.useState(null),
        [j, I] = r.useState(null),
        [w, D] = r.useState(!1),
        [P, L] = r.useState(0),
        U = r.useRef(null),
        M = r.useRef(null),
        F = n === O.L0.FAMILY_CENTER,
        Z = (0, v.Kt)() && !F,
        { verifyAgreementButtonText: V, verifyGateDescription: Y, verifyTitle: W } = (0, v.a1)(n),
        B = (0, v.$5)(o),
        q = v.Lj.has(n),
        K = null != S ? s()().diff(S, "years") : null;
    function Q() {
        if (n === O.L0.NSFW_SERVER_INVITE_EMBED) return (0, T.qV)(n), Promise.resolve();
        let t = null == o ? void 0 : o.getGuildId();
        return E.Z.nsfwReturnToSafety(t), (0, T.qV)(n), Promise.resolve();
    }
    async function H() {
        i()(null != S, "Cannot submit null birthday.");
        try {
            return I(null), D(!0), await (0, g.Av)(S, n);
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) (0, T.C8)(n, e.body.date_of_birth);
            else {
                var t;
                (null == e || null == (t = e.body) ? void 0 : t.username) != null
                    ? I(N.intl.string(N.t["TGg/2t"]))
                    : I(null == e ? void 0 : e.body.message),
                    D(!1);
            }
        }
    }
    async function J() {
        if ((i()(null != K, "Cannot submit if we haven't been able to calculate age."), K < 18)) return void L(1);
        await H();
    }
    async function X(t) {
        t.preventDefault(), w || null == S || (await J());
    }
    async function z() {
        null == (await H()) && L(0);
    }
    r.useEffect(() => {
        (null == a ? void 0 : a.nsfwAllowed) !== !0 || Z || (0, T.qq)(n);
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
            null == (t = M.current) || t.focus();
        }, [M]),
        te = r.useCallback(() => {
            p.Z.showAgeVerificationGetStartedModal({ entryPoint: A.cU.NSFW_AGE_GATE });
        }, []),
        tn = {
            transitionState: e,
            onClose: Q,
            graphic: {
                type: "image",
                src: C.Z,
            },
            gradientColor: "blue",
        };
    return Z
        ? (0, l.jsx)(
              f.I,
              x(
                  {
                      title: W,
                      subtitle: Y,
                      actions: [
                          {
                              text: N.intl.string(N.t.f3Pet7),
                              onClick: Q,
                              variant: "secondary",
                          },
                          {
                              text: null != V ? V : N.intl.string(N.t["5B+npK"]),
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
                f.I,
                x(
                    {
                        title: N.intl.string(q ? N.t["H0SG/v"] : N.t.NEabBQ),
                        subtitle: N.intl.format(q ? N.t["6++3cX"] : N.t["2kHZen"], {
                            helpURL: b.Z.getArticleURL(R.BhN.AGE_GATE),
                        }),
                        actions: [
                            {
                                text: N.intl.string(N.t["/g10LC"]),
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
          : 0 === P
            ? (function () {
                  var t, e;
                  let r = (() => {
                          switch (n) {
                              case O.L0.NSFW_SERVER:
                              case O.L0.NSFW_SERVER_INVITE:
                              case O.L0.NSFW_SERVER_INVITE_EMBED:
                                  return N.intl.string(N.t.vAymlJ);
                              case O.L0.FAMILY_CENTER:
                                  return N.intl.string(N.t.M7mt7u);
                              default:
                                  return N.intl.string(N.t.F8otRk);
                          }
                      })(),
                      a = (() => {
                          switch (n) {
                              case O.L0.FAMILY_CENTER:
                                  return N.intl.string(N.t.mhUrKS);
                              case O.L0.DEEP_LINK_PROMPT:
                                  return N.intl.format(N.t.iyhg2t, { helpURL: b.Z.getArticleURL(R.BhN.AGE_GATE) });
                              default:
                                  return N.intl.format(N.t.n3QjDA, { helpURL: b.Z.getArticleURL(R.BhN.AGE_GATE) });
                          }
                      })();
                  return (0, l.jsx)("form", {
                      onSubmit: X,
                      children: (0, l.jsx)(
                          f.I,
                          ((t = x(
                              {
                                  title: r,
                                  subtitle: a,
                                  actions: [
                                      {
                                          text: N.intl.string(N.t["1MrpWF"]),
                                          onClick: Q,
                                          variant: "secondary",
                                      },
                                      {
                                          text: N.intl.string(N.t.uBFuoq),
                                          onClick: J,
                                          loading: w,
                                          disabled: null == S,
                                      },
                                  ],
                              },
                              tn,
                          )),
                          (e = e =
                              {
                                  children: (0, l.jsx)(G.Z, {
                                      label: N.intl.string(N.t.rhBeKS),
                                      name: "date_of_birth",
                                      onChange: $,
                                      onPopulated: tt,
                                      error: j,
                                      value: S,
                                      ref: U,
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
            : (0, l.jsx)(d.Modal, {
                  transitionState: e,
                  onClose: Q,
                  title: N.intl.formatToPlainString(N.t.wumolZ, { age: K }),
                  subtitle: N.intl.formatToPlainString(N.t.n3QjDA, { helpURL: b.Z.getArticleURL(R.BhN.AGE_GATE) }),
                  actions: [
                      {
                          text: N.intl.string(N.t.cfYCra),
                          onClick: () => L(0),
                          variant: "secondary",
                      },
                      {
                          text: N.intl.string(N.t["6tahio"]),
                          onClick: z,
                      },
                  ],
              });
}
