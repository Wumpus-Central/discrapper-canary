n.d(t, { default: () => k }), n(388685);
var l = n(951288),
    a = n(647438),
    i = n(512722),
    r = n.n(i),
    s = n(913527),
    o = n.n(s),
    c = n(990547),
    u = n(442837),
    d = n(755721),
    E = n(481060),
    f = n(749210),
    h = n(168107),
    m = n(480916),
    x = n(600164),
    A = n(313201),
    _ = n(592125),
    p = n(944486),
    N = n(594174),
    y = n(626135),
    R = n(63063),
    g = n(771308),
    T = n(758119),
    C = n(622822),
    G = n(13430),
    b = n(723359),
    v = n(981631),
    S = n(388032),
    j = n(425816);
function k(e) {
    let { transitionState: t, source: i } = e,
        s = (0, u.e7)([N.default], () => N.default.getCurrentUser()),
        k = (0, u.e7)([p.Z, _.Z], () => _.Z.getChannel(p.Z.getChannelId())),
        [L, I] = a.useState(null),
        [z, M] = a.useState(null),
        [U, D] = a.useState(!1),
        [w, F] = a.useState(0),
        O = a.useRef(null),
        V = a.useRef(null),
        Z = (0, A.Dt)(),
        Y = (0, C.Kt)() && i !== b.L0.FAMILY_CENTER,
        { verifyAgreementButtonText: P, verifyGateDescription: W, verifyTitle: q } = (0, C.a1)(i),
        B = null != L ? o()().diff(L, "years") : null;
    function K() {
        if (i === b.L0.NSFW_SERVER_INVITE_EMBED) return void (0, T.qV)(i);
        let e = null == k ? void 0 : k.getGuildId();
        f.Z.nsfwReturnToSafety(e), (0, T.qV)(i);
    }
    async function X() {
        r()(null != L, "Cannot submit null birthday.");
        try {
            return M(null), D(!0), await (0, g.Av)(L, i);
        } catch (t) {
            if (null != t.body && null != t.body.date_of_birth) (0, T.C8)(i, t.body.date_of_birth);
            else {
                var e;
                (null == t || null == (e = t.body) ? void 0 : e.username) != null
                    ? M(S.intl.string(S.t["TGg/2t"]))
                    : M(null == t ? void 0 : t.body.message),
                    D(!1);
            }
        }
    }
    async function J() {
        if ((r()(null != B, "Cannot submit if we haven't been able to calculate age."), B < 18)) return void F(1);
        await X();
    }
    async function Q(e) {
        e.preventDefault(), U || null == L || (await J());
    }
    async function H() {
        null == (await X()) && F(0);
    }
    a.useEffect(() => {
        null == s || null == s.nsfwAllowed || Y || (0, T.qq)(i);
    }),
        a.useEffect(() => {
            y.default.track(v.rMx.AGE_GATE_ACTION, {
                source: i,
                action: b.Al.AGE_GATE_OPEN,
            });
        }, [i]);
    let $ = a.useCallback(
            (e) => {
                I(e);
            },
            [I],
        ),
        ee = a.useCallback(() => {
            var e;
            null == (e = V.current) || e.focus();
        }, [V]),
        et = a.useCallback(() => {
            h.Z.showAgeVerificationGetStartedModal({ entryPoint: m.cU.NSFW_AGE_GATE });
        }, []);
    return Y
        ? (0, l.jsxs)(E.Y0X, {
              impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
              transitionState: t,
              size: E.CgR.SMALL,
              parentComponent: "ExistingUserAgeGatePrompt",
              children: [
                  (0, l.jsx)(E.hzk, {
                      children: (0, l.jsxs)("div", {
                          className: j.container,
                          children: [
                              (0, l.jsx)("img", {
                                  alt: "",
                                  src: n(462991),
                                  className: j.img,
                              }),
                              (0, l.jsx)(E.X6q, {
                                  variant: "heading-xl/semibold",
                                  className: j.title,
                                  children: q,
                              }),
                              (0, l.jsx)(E.Text, {
                                  color: "header-secondary",
                                  variant: "text-sm/normal",
                                  children: W,
                              }),
                          ],
                      }),
                  }),
                  (0, l.jsxs)(E.mzw, {
                      justify: x.Z.Justify.BETWEEN,
                      children: [
                          (0, l.jsx)(E.zxk, {
                              variant: "primary",
                              size: "sm",
                              text: P,
                              onClick: et,
                          }),
                          (0, l.jsx)(d.zx, {
                              look: d.zx.Looks.LINK,
                              size: d.zx.Sizes.NONE,
                              color: d.zx.Colors.PRIMARY,
                              onClick: K,
                              children: S.intl.string(S.t.f3Pet7),
                          }),
                      ],
                  }),
              ],
          })
        : 0 === w
          ? (function () {
                let e = (() => {
                        switch (i) {
                            case b.L0.NSFW_SERVER:
                            case b.L0.NSFW_SERVER_INVITE:
                            case b.L0.NSFW_SERVER_INVITE_EMBED:
                                return S.intl.string(S.t.vAymlJ);
                            case b.L0.FAMILY_CENTER:
                                return S.intl.string(S.t.M7mt7u);
                            default:
                                return S.intl.string(S.t.F8otRk);
                        }
                    })(),
                    a = (() => {
                        switch (i) {
                            case b.L0.NSFW_SERVER:
                            case b.L0.NSFW_SERVER_INVITE:
                            case b.L0.NSFW_SERVER_INVITE_EMBED:
                                return S.intl.format(S.t["6ejLER"], { helpURL: R.Z.getArticleURL(v.BhN.AGE_GATE) });
                            case b.L0.FAMILY_CENTER:
                                return S.intl.string(S.t.mhUrKS);
                            case b.L0.DEEP_LINK_PROMPT:
                                return S.intl.format(S.t.iyhg2t, { helpURL: R.Z.getArticleURL(v.BhN.AGE_GATE) });
                            default:
                                return S.intl.format(S.t.n3QjDA, { helpURL: R.Z.getArticleURL(v.BhN.AGE_GATE) });
                        }
                    })();
                return (0, l.jsxs)(E.Y0X, {
                    transitionState: t,
                    size: E.CgR.SMALL,
                    "aria-labelledby": Z,
                    parentComponent: "ExistingUserAgeGatePrompt",
                    children: [
                        (0, l.jsxs)(E.hzk, {
                            children: [
                                (0, l.jsxs)("div", {
                                    className: j.container,
                                    children: [
                                        (0, l.jsx)("img", {
                                            alt: "",
                                            src: n(462991),
                                            className: j.img,
                                        }),
                                        (0, l.jsx)(E.X6q, {
                                            variant: "heading-xl/semibold",
                                            className: j.title,
                                            id: Z,
                                            children: e,
                                        }),
                                        (0, l.jsx)(E.Text, {
                                            color: "header-secondary",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("form", {
                                    onSubmit: Q,
                                    children: (0, l.jsx)(G.Z, {
                                        label: S.intl.string(S.t.rhBeKS),
                                        wrapperClassName: j.birthday,
                                        name: "date_of_birth",
                                        onChange: $,
                                        onPopulated: ee,
                                        error: z,
                                        value: L,
                                        ref: O,
                                        autoFocus: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)(E.mzw, {
                            justify: x.Z.Justify.BETWEEN,
                            children: [
                                (0, l.jsx)(E.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: S.intl.string(S.t.uBFuoq),
                                    buttonRef: V,
                                    loading: U,
                                    disabled: null == L,
                                    onClick: J,
                                }),
                                (0, l.jsx)(d.zx, {
                                    look: d.zx.Looks.LINK,
                                    size: d.zx.Sizes.NONE,
                                    color: d.zx.Colors.PRIMARY,
                                    onClick: K,
                                    children: S.intl.string(S.t["1MrpWF"]),
                                }),
                            ],
                        }),
                    ],
                });
            })()
          : (0, l.jsxs)(E.Y0X, {
                transitionState: E.Dvm.ENTERED,
                size: E.CgR.SMALL,
                "aria-labelledby": Z,
                parentComponent: "ExistingUserAgeGatePrompt",
                children: [
                    (0, l.jsx)(E.hzk, {
                        children: (0, l.jsxs)("div", {
                            className: j.confirmContainer,
                            children: [
                                (0, l.jsx)(E.X6q, {
                                    variant: "heading-xl/semibold",
                                    className: j.confirmTitle,
                                    id: Z,
                                    children: S.intl.format(S.t.wumolZ, { age: B }),
                                }),
                                (0, l.jsx)(E.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: S.intl.format(S.t.n3QjDA, { helpURL: R.Z.getArticleURL(v.BhN.AGE_GATE) }),
                                }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)(E.mzw, {
                        className: j.confirmFooter,
                        children: [
                            (0, l.jsx)(d.zx, {
                                look: d.zx.Looks.LINK,
                                size: d.zx.Sizes.NONE,
                                color: d.zx.Colors.PRIMARY,
                                onClick: () => F(0),
                                children: S.intl.string(S.t.cfYCra),
                            }),
                            (0, l.jsx)(E.zxk, {
                                variant: "primary",
                                text: S.intl.string(S.t["6tahio"]),
                                onClick: H,
                            }),
                        ],
                    }),
                ],
            });
}
