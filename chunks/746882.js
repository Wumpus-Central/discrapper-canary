n.d(e, { default: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(512722),
    a = n.n(o),
    l = n(913527),
    s = n.n(l),
    c = n(990547),
    u = n(442837),
    f = n(755721),
    d = n(481060),
    m = n(749210),
    E = n(168107),
    y = n(480916),
    b = n(600164),
    h = n(313201),
    _ = n(592125),
    p = n(944486),
    x = n(594174),
    g = n(626135),
    v = n(63063),
    N = n(771308),
    S = n(758119),
    A = n(622822),
    R = n(13430),
    j = n(723359),
    Z = n(981631),
    L = n(388032),
    T = n(425816);
function C(t) {
    let { transitionState: e, source: o } = t,
        l = (0, u.e7)([x.default], () => x.default.getCurrentUser()),
        C = (0, u.e7)([p.Z, _.Z], () => _.Z.getChannel(p.Z.getChannelId())),
        [I, z] = i.useState(null),
        [w, k] = i.useState(null),
        [M, G] = i.useState(!1),
        [O, F] = i.useState(0),
        V = i.useRef(null),
        P = i.useRef(null),
        U = (0, h.Dt)(),
        D = (0, A.Kt)() && o !== j.L0.FAMILY_CENTER,
        { verifyAgreementButtonText: Y, verifyGateDescription: W } = (0, A.a1)(o),
        B = o === j.L0.NSFW_SERVER || o === j.L0.NSFW_SERVER_INVITE || o === j.L0.NSFW_SERVER_INVITE_EMBED,
        q = null != I ? s()().diff(I, "years") : null;
    function K() {
        if (o === j.L0.NSFW_SERVER_INVITE_EMBED) return void (0, S.qV)(o);
        let t = null == C ? void 0 : C.getGuildId();
        m.Z.nsfwReturnToSafety(t), (0, S.qV)(o);
    }
    async function X() {
        a()(null != I, "Cannot submit null birthday.");
        try {
            return k(null), G(!0), await (0, N.Av)(I, o);
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) (0, S.C8)(o, e.body.date_of_birth);
            else {
                var t;
                (null == e || null == (t = e.body) ? void 0 : t.username) != null
                    ? k(L.intl.string(L.t["TGg/2t"]))
                    : k(null == e ? void 0 : e.body.message),
                    G(!1);
            }
        }
    }
    async function J() {
        if ((a()(null != q, "Cannot submit if we haven't been able to calculate age."), q < 18)) return void F(1);
        await X();
    }
    async function Q(t) {
        t.preventDefault(), M || null == I || (await J());
    }
    async function $() {
        null == (await X()) && F(0);
    }
    i.useEffect(() => {
        null == l || null == l.nsfwAllowed || D || (0, S.qq)(o);
    }),
        i.useEffect(() => {
            g.default.track(Z.rMx.AGE_GATE_ACTION, {
                source: o,
                action: j.Al.AGE_GATE_OPEN,
            });
        }, [o]);
    let H = i.useCallback(
            (t) => {
                z(t);
            },
            [z],
        ),
        tt = i.useCallback(() => {
            var t;
            null == (t = P.current) || t.focus();
        }, [P]),
        te = i.useCallback(() => {
            E.Z.showAgeVerificationGetStartedModal(y.cU.NSFW_AGE_GATE);
        }, []);
    return D
        ? (0, r.jsxs)(d.Y0X, {
              impression: { impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY },
              transitionState: e,
              size: d.CgR.SMALL,
              parentComponent: "ExistingUserAgeGatePrompt",
              children: [
                  (0, r.jsx)(d.hzk, {
                      children: (0, r.jsxs)("div", {
                          className: T.container,
                          children: [
                              (0, r.jsx)("img", {
                                  alt: "",
                                  src: n(462991),
                                  className: T.img,
                              }),
                              (0, r.jsx)(d.X6q, {
                                  variant: "heading-xl/semibold",
                                  className: T.title,
                                  children: B ? L.intl.string(L.t.xi46lp) : L.intl.string(L.t.ZmwvDQ),
                              }),
                              (0, r.jsx)(d.Text, {
                                  color: "header-secondary",
                                  variant: "text-sm/normal",
                                  children: W,
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsxs)(d.mzw, {
                      justify: b.Z.Justify.BETWEEN,
                      children: [
                          (0, r.jsx)(d.zxk, {
                              variant: "primary",
                              size: "sm",
                              text: Y,
                              onClick: te,
                          }),
                          (0, r.jsx)(f.zx, {
                              look: f.zx.Looks.LINK,
                              size: f.zx.Sizes.NONE,
                              color: f.zx.Colors.PRIMARY,
                              onClick: K,
                              children: L.intl.string(L.t.f3Pet7),
                          }),
                      ],
                  }),
              ],
          })
        : 0 === O
          ? (function () {
                let t = (() => {
                        switch (o) {
                            case j.L0.NSFW_SERVER:
                            case j.L0.NSFW_SERVER_INVITE:
                            case j.L0.NSFW_SERVER_INVITE_EMBED:
                                return L.intl.string(L.t.vAymlJ);
                            case j.L0.FAMILY_CENTER:
                                return L.intl.string(L.t.M7mt7u);
                            default:
                                return L.intl.string(L.t.F8otRk);
                        }
                    })(),
                    i = (() => {
                        switch (o) {
                            case j.L0.NSFW_SERVER:
                            case j.L0.NSFW_SERVER_INVITE:
                            case j.L0.NSFW_SERVER_INVITE_EMBED:
                                return L.intl.format(L.t["6ejLER"], { helpURL: v.Z.getArticleURL(Z.BhN.AGE_GATE) });
                            case j.L0.FAMILY_CENTER:
                                return L.intl.string(L.t.mhUrKS);
                            case j.L0.DEEP_LINK_PROMPT:
                                return L.intl.format(L.t.iyhg2t, { helpURL: v.Z.getArticleURL(Z.BhN.AGE_GATE) });
                            default:
                                return L.intl.format(L.t.n3QjDA, { helpURL: v.Z.getArticleURL(Z.BhN.AGE_GATE) });
                        }
                    })();
                return (0, r.jsxs)(d.Y0X, {
                    transitionState: e,
                    size: d.CgR.SMALL,
                    "aria-labelledby": U,
                    parentComponent: "ExistingUserAgeGatePrompt",
                    children: [
                        (0, r.jsxs)(d.hzk, {
                            children: [
                                (0, r.jsxs)("div", {
                                    className: T.container,
                                    children: [
                                        (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(462991),
                                            className: T.img,
                                        }),
                                        (0, r.jsx)(d.X6q, {
                                            variant: "heading-xl/semibold",
                                            className: T.title,
                                            id: U,
                                            children: t,
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            color: "header-secondary",
                                            variant: "text-sm/normal",
                                            children: i,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("form", {
                                    onSubmit: Q,
                                    children: (0, r.jsx)(R.Z, {
                                        label: L.intl.string(L.t.rhBeKS),
                                        wrapperClassName: T.birthday,
                                        name: "date_of_birth",
                                        onChange: H,
                                        onPopulated: tt,
                                        error: w,
                                        value: I,
                                        ref: V,
                                        autoFocus: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(d.mzw, {
                            justify: b.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)(d.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: L.intl.string(L.t.uBFuoq),
                                    buttonRef: P,
                                    loading: M,
                                    disabled: null == I,
                                    onClick: J,
                                }),
                                (0, r.jsx)(f.zx, {
                                    look: f.zx.Looks.LINK,
                                    size: f.zx.Sizes.NONE,
                                    color: f.zx.Colors.PRIMARY,
                                    onClick: K,
                                    children: L.intl.string(L.t["1MrpWF"]),
                                }),
                            ],
                        }),
                    ],
                });
            })()
          : (0, r.jsxs)(d.Y0X, {
                transitionState: d.Dvm.ENTERED,
                size: d.CgR.SMALL,
                "aria-labelledby": U,
                parentComponent: "ExistingUserAgeGatePrompt",
                children: [
                    (0, r.jsx)(d.hzk, {
                        children: (0, r.jsxs)("div", {
                            className: T.confirmContainer,
                            children: [
                                (0, r.jsx)(d.X6q, {
                                    variant: "heading-xl/semibold",
                                    className: T.confirmTitle,
                                    id: U,
                                    children: L.intl.format(L.t.wumolZ, { age: q }),
                                }),
                                (0, r.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: L.intl.format(L.t.n3QjDA, { helpURL: v.Z.getArticleURL(Z.BhN.AGE_GATE) }),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)(d.mzw, {
                        className: T.confirmFooter,
                        children: [
                            (0, r.jsx)(f.zx, {
                                look: f.zx.Looks.LINK,
                                size: f.zx.Sizes.NONE,
                                color: f.zx.Colors.PRIMARY,
                                onClick: () => F(0),
                                children: L.intl.string(L.t.cfYCra),
                            }),
                            (0, r.jsx)(d.zxk, {
                                variant: "primary",
                                text: L.intl.string(L.t["6tahio"]),
                                onClick: $,
                            }),
                        ],
                    }),
                ],
            });
}
