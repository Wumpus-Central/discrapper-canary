n.d(e, { default: () => S }), n(388685);
var l = n(951288),
    r = n(647438),
    a = n(512722),
    o = n.n(a),
    i = n(913527),
    s = n.n(i),
    c = n(990547),
    u = n(442837),
    d = n(667202),
    f = n(82659),
    E = n(749210),
    p = n(168107),
    b = n(480916),
    A = n(592125),
    y = n(944486),
    _ = n(594174),
    h = n(626135),
    m = n(63063),
    g = n(771308),
    T = n(758119),
    v = n(622822),
    G = n(13430),
    O = n(723359),
    C = n(981631),
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
function S(t) {
    let { transitionState: e, source: n } = t,
        a = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
        i = (0, u.e7)([y.Z, A.Z], () => A.Z.getChannel(y.Z.getChannelId())),
        [S, k] = r.useState(null),
        [j, w] = r.useState(null),
        [I, D] = r.useState(!1),
        [P, M] = r.useState(0),
        U = r.useRef(null),
        L = r.useRef(null),
        F = (0, v.Kt)() && n !== O.L0.FAMILY_CENTER,
        { verifyAgreementButtonText: Z, verifyGateDescription: V, verifyTitle: Y } = (0, v.a1)(n),
        W = null != S ? s()().diff(S, "years") : null;
    function q() {
        if (n === O.L0.NSFW_SERVER_INVITE_EMBED) return (0, T.qV)(n), Promise.resolve();
        let t = null == i ? void 0 : i.getGuildId();
        return E.Z.nsfwReturnToSafety(t), (0, T.qV)(n), Promise.resolve();
    }
    async function B() {
        o()(null != S, "Cannot submit null birthday.");
        try {
            return w(null), D(!0), await (0, g.Av)(S, n);
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) (0, T.C8)(n, e.body.date_of_birth);
            else {
                var t;
                (null == e || null == (t = e.body) ? void 0 : t.username) != null
                    ? w(R.intl.string(R.t["TGg/2t"]))
                    : w(null == e ? void 0 : e.body.message),
                    D(!1);
            }
        }
    }
    async function K() {
        if ((o()(null != W, "Cannot submit if we haven't been able to calculate age."), W < 18)) return void M(1);
        await B();
    }
    async function J(t) {
        t.preventDefault(), I || null == S || (await K());
    }
    async function Q() {
        null == (await B()) && M(0);
    }
    r.useEffect(() => {
        null == a || null == a.nsfwAllowed || F || (0, T.qq)(n);
    }),
        r.useEffect(() => {
            h.default.track(C.rMx.AGE_GATE_ACTION, {
                source: n,
                action: O.Al.AGE_GATE_OPEN,
            });
        }, [n]);
    let z = r.useCallback(
            (t) => {
                k(t);
            },
            [k],
        ),
        X = r.useCallback(() => {
            var t;
            null == (t = L.current) || t.focus();
        }, [L]),
        H = r.useCallback(() => {
            p.Z.showAgeVerificationGetStartedModal({ entryPoint: b.cU.NSFW_AGE_GATE });
        }, []),
        $ = {
            transitionState: e,
            onClose: q,
            graphic: {
                type: "image",
                src: N.Z,
            },
            gradientColor: "blue",
        };
    return F
        ? (0, l.jsx)(
              d.I,
              x(
                  {
                      title: Y,
                      subtitle: V,
                      actions: [
                          {
                              text: R.intl.string(R.t.f3Pet7),
                              onClick: q,
                              variant: "secondary",
                          },
                          {
                              text: Z,
                              onClick: H,
                          },
                      ],
                      trackingProps: {
                          impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
                          impressionType: c.ImpressionTypes.MODAL,
                      },
                  },
                  $,
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
                                return R.intl.string(R.t.vAymlJ);
                            case O.L0.FAMILY_CENTER:
                                return R.intl.string(R.t.M7mt7u);
                            default:
                                return R.intl.string(R.t.F8otRk);
                        }
                    })(),
                    a = (() => {
                        switch (n) {
                            case O.L0.FAMILY_CENTER:
                                return R.intl.string(R.t.mhUrKS);
                            case O.L0.DEEP_LINK_PROMPT:
                                return R.intl.format(R.t.iyhg2t, { helpURL: m.Z.getArticleURL(C.BhN.AGE_GATE) });
                            default:
                                return R.intl.format(R.t.n3QjDA, { helpURL: m.Z.getArticleURL(C.BhN.AGE_GATE) });
                        }
                    })();
                return (0, l.jsx)("form", {
                    onSubmit: J,
                    children: (0, l.jsx)(
                        d.I,
                        ((t = x(
                            {
                                title: r,
                                subtitle: a,
                                actions: [
                                    {
                                        text: R.intl.string(R.t["1MrpWF"]),
                                        onClick: q,
                                        variant: "secondary",
                                    },
                                    {
                                        text: R.intl.string(R.t.uBFuoq),
                                        onClick: K,
                                        loading: I,
                                        disabled: null == S,
                                    },
                                ],
                            },
                            $,
                        )),
                        (e = e =
                            {
                                children: (0, l.jsx)(G.Z, {
                                    label: R.intl.string(R.t.rhBeKS),
                                    name: "date_of_birth",
                                    onChange: z,
                                    onPopulated: X,
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
          : (0, l.jsx)(f.Modal, {
                transitionState: e,
                onClose: q,
                title: R.intl.formatToPlainString(R.t.wumolZ, { age: W }),
                subtitle: R.intl.formatToPlainString(R.t.n3QjDA, { helpURL: m.Z.getArticleURL(C.BhN.AGE_GATE) }),
                actions: [
                    {
                        text: R.intl.string(R.t.cfYCra),
                        onClick: () => M(0),
                        variant: "secondary",
                    },
                    {
                        text: R.intl.string(R.t["6tahio"]),
                        onClick: Q,
                    },
                ],
            });
}
