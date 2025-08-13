n.d(t, { default: () => I }), n(388685);
var i = n(255367),
    r = n(73800),
    a = n(512722),
    l = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(990547),
    u = n(442837),
    d = n(755721),
    f = n(481060),
    E = n(749210),
    m = n(168107),
    _ = n(480916),
    h = n(600164),
    x = n(313201),
    N = n(592125),
    R = n(944486),
    g = n(594174),
    b = n(626135),
    A = n(63063),
    S = n(771308),
    L = n(758119),
    p = n(622822),
    y = n(13430),
    C = n(723359),
    T = n(981631),
    j = n(388032),
    z = n(472343);
function I(e) {
    let { transitionState: t, source: a } = e,
        s = (0, u.e7)([g.default], () => g.default.getCurrentUser()),
        I = (0, u.e7)([R.Z, N.Z], () => N.Z.getChannel(R.Z.getChannelId())),
        [v, k] = r.useState(null),
        [G, M] = r.useState(null),
        [F, V] = r.useState(!1),
        [w, U] = r.useState(0),
        Z = r.useRef(null),
        D = r.useRef(null),
        Y = (0, x.Dt)(),
        W = (0, p.Kt)() && a !== C.L0.FAMILY_CENTER,
        { verifyAgreementButtonText: B, verifyGateDescription: P } = (0, p.a1)(a),
        q = a === C.L0.NSFW_SERVER || a === C.L0.NSFW_SERVER_INVITE || a === C.L0.NSFW_SERVER_INVITE_EMBED,
        K = null != v ? o()().diff(v, "years") : null;
    function O() {
        if (a === C.L0.NSFW_SERVER_INVITE_EMBED) return void (0, L.qV)(a);
        let e = null == I ? void 0 : I.getGuildId();
        E.Z.nsfwReturnToSafety(e), (0, L.qV)(a);
    }
    async function X() {
        l()(null != v, "Cannot submit null birthday.");
        try {
            return M(null), V(!0), await (0, S.Av)(v, a);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, L.C8)(a, t.body.date_of_birth);
            else {
                var e;
                (null == t || null == (e = t.body) ? void 0 : e.username) != null
                    ? M(j.intl.string(j.t["TGg/2t"]))
                    : M(null == t ? void 0 : t.body.message),
                    V(!1);
            }
        }
    }
    async function J() {
        if ((l()(null != K, "Cannot submit if we haven't been able to calculate age."), K < 18)) return void U(1);
        await X();
    }
    async function Q(e) {
        e.preventDefault(), F || null == v || (await J());
    }
    async function H() {
        null == (await X()) && U(0);
    }
    r.useEffect(() => {
        null == s || null == s.nsfwAllowed || W || (0, L.qq)(a);
    }),
        r.useEffect(() => {
            b.default.track(T.rMx.AGE_GATE_ACTION, {
                source: a,
                action: C.Al.AGE_GATE_OPEN,
            });
        }, [a]);
    let $ = r.useCallback(
            (e) => {
                k(e);
            },
            [k],
        ),
        ee = r.useCallback(() => {
            var e;
            null == (e = D.current) || e.focus();
        }, [D]),
        et = r.useCallback(() => {
            m.Z.showAgeVerificationGetStartedModal(_.cU.NSFW_AGE_GATE);
        }, []);
    return W
        ? (0, i.jsxs)(f.Y0X, {
              impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
              transitionState: t,
              size: f.CgR.SMALL,
              parentComponent: "ExistingUserAgeGatePrompt",
              children: [
                  (0, i.jsx)(f.hzk, {
                      children: (0, i.jsxs)("div", {
                          className: z.container,
                          children: [
                              (0, i.jsx)("img", {
                                  alt: "",
                                  src: n(462991),
                                  className: z.img,
                              }),
                              (0, i.jsx)(f.X6q, {
                                  variant: "heading-xl/semibold",
                                  className: z.title,
                                  children: q ? j.intl.string(j.t.xi46lp) : j.intl.string(j.t.ZmwvDQ),
                              }),
                              (0, i.jsx)(f.Text, {
                                  color: "header-secondary",
                                  variant: "text-sm/normal",
                                  children: P,
                              }),
                          ],
                      }),
                  }),
                  (0, i.jsxs)(f.mzw, {
                      justify: h.Z.Justify.BETWEEN,
                      children: [
                          (0, i.jsx)(f.zxk, {
                              variant: "primary",
                              size: "sm",
                              text: B,
                              onClick: et,
                          }),
                          (0, i.jsx)(d.zx, {
                              look: d.zx.Looks.LINK,
                              size: d.zx.Sizes.NONE,
                              color: d.zx.Colors.PRIMARY,
                              onClick: O,
                              children: j.intl.string(j.t.f3Pet7),
                          }),
                      ],
                  }),
              ],
          })
        : 0 === w
          ? (function () {
                let e = (() => {
                        switch (a) {
                            case C.L0.NSFW_SERVER:
                            case C.L0.NSFW_SERVER_INVITE:
                            case C.L0.NSFW_SERVER_INVITE_EMBED:
                                return j.intl.string(j.t.vAymlJ);
                            case C.L0.FAMILY_CENTER:
                                return j.intl.string(j.t.M7mt7u);
                            default:
                                return j.intl.string(j.t.F8otRk);
                        }
                    })(),
                    r = (() => {
                        switch (a) {
                            case C.L0.NSFW_SERVER:
                            case C.L0.NSFW_SERVER_INVITE:
                            case C.L0.NSFW_SERVER_INVITE_EMBED:
                                return j.intl.format(j.t["6ejLER"], { helpURL: A.Z.getArticleURL(T.BhN.AGE_GATE) });
                            case C.L0.FAMILY_CENTER:
                                return j.intl.string(j.t.mhUrKS);
                            case C.L0.DEEP_LINK_PROMPT:
                                return j.intl.format(j.t.iyhg2t, { helpURL: A.Z.getArticleURL(T.BhN.AGE_GATE) });
                            default:
                                return j.intl.format(j.t.n3QjDA, { helpURL: A.Z.getArticleURL(T.BhN.AGE_GATE) });
                        }
                    })();
                return (0, i.jsxs)(f.Y0X, {
                    transitionState: t,
                    size: f.CgR.SMALL,
                    "aria-labelledby": Y,
                    parentComponent: "ExistingUserAgeGatePrompt",
                    children: [
                        (0, i.jsxs)(f.hzk, {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: z.container,
                                    children: [
                                        (0, i.jsx)("img", {
                                            alt: "",
                                            src: n(462991),
                                            className: z.img,
                                        }),
                                        (0, i.jsx)(f.X6q, {
                                            variant: "heading-xl/semibold",
                                            className: z.title,
                                            id: Y,
                                            children: e,
                                        }),
                                        (0, i.jsx)(f.Text, {
                                            color: "header-secondary",
                                            variant: "text-sm/normal",
                                            children: r,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("form", {
                                    onSubmit: Q,
                                    children: (0, i.jsx)(y.Z, {
                                        label: j.intl.string(j.t.rhBeKS),
                                        wrapperClassName: z.birthday,
                                        name: "date_of_birth",
                                        onChange: $,
                                        onPopulated: ee,
                                        error: G,
                                        value: v,
                                        ref: Z,
                                        autoFocus: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(f.mzw, {
                            justify: h.Z.Justify.BETWEEN,
                            children: [
                                (0, i.jsx)(f.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: j.intl.string(j.t.uBFuoq),
                                    buttonRef: D,
                                    loading: F,
                                    disabled: null == v,
                                    onClick: J,
                                }),
                                (0, i.jsx)(d.zx, {
                                    look: d.zx.Looks.LINK,
                                    size: d.zx.Sizes.NONE,
                                    color: d.zx.Colors.PRIMARY,
                                    onClick: O,
                                    children: j.intl.string(j.t["1MrpWF"]),
                                }),
                            ],
                        }),
                    ],
                });
            })()
          : (0, i.jsxs)(f.Y0X, {
                transitionState: f.Dvm.ENTERED,
                size: f.CgR.SMALL,
                "aria-labelledby": Y,
                parentComponent: "ExistingUserAgeGatePrompt",
                children: [
                    (0, i.jsx)(f.hzk, {
                        children: (0, i.jsxs)("div", {
                            className: z.confirmContainer,
                            children: [
                                (0, i.jsx)(f.X6q, {
                                    variant: "heading-xl/semibold",
                                    className: z.confirmTitle,
                                    id: Y,
                                    children: j.intl.format(j.t.wumolZ, { age: K }),
                                }),
                                (0, i.jsx)(f.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: j.intl.format(j.t.n3QjDA, { helpURL: A.Z.getArticleURL(T.BhN.AGE_GATE) }),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)(f.mzw, {
                        className: z.confirmFooter,
                        children: [
                            (0, i.jsx)(d.zx, {
                                look: d.zx.Looks.LINK,
                                size: d.zx.Sizes.NONE,
                                color: d.zx.Colors.PRIMARY,
                                onClick: () => U(0),
                                children: j.intl.string(j.t.cfYCra),
                            }),
                            (0, i.jsx)(f.zxk, {
                                variant: "primary",
                                text: j.intl.string(j.t["6tahio"]),
                                onClick: H,
                            }),
                        ],
                    }),
                ],
            });
}
