n.d(e, { default: () => z }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    l = n(913527),
    s = n.n(l),
    c = n(990547),
    u = n(442837),
    f = n(755721),
    d = n(481060),
    m = n(749210),
    y = n(168107),
    b = n(480916),
    h = n(600164),
    p = n(313201),
    x = n(592125),
    _ = n(944486),
    E = n(594174),
    g = n(626135),
    v = n(63063),
    j = n(771308),
    A = n(758119),
    Z = n(622822),
    N = n(13430),
    S = n(723359),
    C = n(981631),
    R = n(388032),
    T = n(951408);
function z(t) {
    let { transitionState: e, source: o } = t,
        l = (0, u.e7)([E.default], () => E.default.getCurrentUser()),
        z = (0, u.e7)([_.Z, x.Z], () => x.Z.getChannel(_.Z.getChannelId())),
        [w, L] = i.useState(null),
        [k, I] = i.useState(null),
        [O, M] = i.useState(!1),
        [G, P] = i.useState(0),
        F = i.useRef(null),
        U = i.useRef(null),
        Y = (0, p.Dt)(),
        D = (0, Z.Kt)() && o !== S.L0.FAMILY_CENTER,
        { verifyAgreementButtonText: V, verifyGateDescription: B } = (0, Z.a1)(o),
        q = o === S.L0.NSFW_SERVER || o === S.L0.NSFW_SERVER_INVITE || o === S.L0.NSFW_SERVER_INVITE_EMBED,
        W = null != w ? s()().diff(w, "years") : null;
    function K() {
        if (o === S.L0.NSFW_SERVER_INVITE_EMBED) return void (0, A.qV)(o);
        let t = null == z ? void 0 : z.getGuildId();
        m.Z.nsfwReturnToSafety(t), (0, A.qV)(o);
    }
    async function X() {
        a()(null != w, "Cannot submit null birthday.");
        try {
            return I(null), M(!0), await (0, j.Av)(w, o);
        } catch (e) {
            if (null != e.body && null != e.body.date_of_birth) (0, A.C8)(o, e.body.date_of_birth);
            else {
                var t;
                (null == e || null == (t = e.body) ? void 0 : t.username) != null
                    ? I(R.intl.string(R.t["TGg/2t"]))
                    : I(null == e ? void 0 : e.body.message),
                    M(!1);
            }
        }
    }
    async function Q() {
        if ((a()(null != W, "Cannot submit if we haven't been able to calculate age."), W < 18)) return void P(1);
        await X();
    }
    async function J(t) {
        t.preventDefault(), O || null == w || (await Q());
    }
    async function $() {
        null == (await X()) && P(0);
    }
    i.useEffect(() => {
        null == l || null == l.nsfwAllowed || D || (0, A.qq)(o);
    }),
        i.useEffect(() => {
            g.default.track(C.rMx.AGE_GATE_ACTION, {
                source: o,
                action: S.Al.AGE_GATE_OPEN,
            });
        }, [o]);
    let H = i.useCallback(
            (t) => {
                L(t);
            },
            [L],
        ),
        tt = i.useCallback(() => {
            var t;
            null == (t = U.current) || t.focus();
        }, [U]),
        te = i.useCallback(() => {
            y.Z.showAgeVerificationGetStartedModal(b.cU.NSFW_AGE_GATE);
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
                                  src: n(559325),
                                  className: T.img,
                              }),
                              (0, r.jsx)(d.X6q, {
                                  variant: "heading-xl/semibold",
                                  className: T.title,
                                  children: q ? R.intl.string(R.t.xi46lp) : R.intl.string(R.t.ZmwvDQ),
                              }),
                              (0, r.jsx)(d.Text, {
                                  color: "header-secondary",
                                  variant: "text-sm/normal",
                                  children: B,
                              }),
                          ],
                      }),
                  }),
                  (0, r.jsxs)(d.mzw, {
                      justify: h.Z.Justify.BETWEEN,
                      children: [
                          (0, r.jsx)(d.zxk, {
                              variant: "primary",
                              size: "sm",
                              text: V,
                              onClick: te,
                          }),
                          (0, r.jsx)(f.zx, {
                              look: f.zx.Looks.LINK,
                              size: f.zx.Sizes.NONE,
                              color: f.zx.Colors.PRIMARY,
                              onClick: K,
                              children: R.intl.string(R.t.f3Pet7),
                          }),
                      ],
                  }),
              ],
          })
        : 0 === G
          ? (function () {
                let t = o === S.L0.FAMILY_CENTER ? R.intl.string(R.t.M7mt7u) : R.intl.string(R.t.F8otRk),
                    i = (() => {
                        switch (o) {
                            case S.L0.FAMILY_CENTER:
                                return R.intl.string(R.t.mhUrKS);
                            case S.L0.DEEP_LINK_PROMPT:
                                return R.intl.format(R.t.iyhg2t, { helpURL: v.Z.getArticleURL(C.BhN.AGE_GATE) });
                            default:
                                return R.intl.format(R.t.n3QjDA, { helpURL: v.Z.getArticleURL(C.BhN.AGE_GATE) });
                        }
                    })();
                return (0, r.jsxs)(d.Y0X, {
                    transitionState: e,
                    size: d.CgR.SMALL,
                    "aria-labelledby": Y,
                    parentComponent: "ExistingUserAgeGatePrompt",
                    children: [
                        (0, r.jsxs)(d.hzk, {
                            children: [
                                (0, r.jsxs)("div", {
                                    className: T.container,
                                    children: [
                                        (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(559325),
                                            className: T.img,
                                        }),
                                        (0, r.jsx)(d.X6q, {
                                            variant: "heading-xl/semibold",
                                            className: T.title,
                                            id: Y,
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
                                    onSubmit: J,
                                    children: (0, r.jsx)(N.Z, {
                                        label: R.intl.string(R.t.rhBeKS),
                                        wrapperClassName: T.birthday,
                                        name: "date_of_birth",
                                        onChange: H,
                                        onPopulated: tt,
                                        error: k,
                                        value: w,
                                        ref: F,
                                        autoFocus: !0,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(d.mzw, {
                            justify: h.Z.Justify.BETWEEN,
                            children: [
                                (0, r.jsx)(d.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: R.intl.string(R.t.uBFuoq),
                                    buttonRef: U,
                                    loading: O,
                                    disabled: null == w,
                                    onClick: Q,
                                }),
                                (0, r.jsx)(f.zx, {
                                    look: f.zx.Looks.LINK,
                                    size: f.zx.Sizes.NONE,
                                    color: f.zx.Colors.PRIMARY,
                                    onClick: K,
                                    children: R.intl.string(R.t["1MrpWF"]),
                                }),
                            ],
                        }),
                    ],
                });
            })()
          : (0, r.jsxs)(d.Y0X, {
                transitionState: d.Dvm.ENTERED,
                size: d.CgR.SMALL,
                "aria-labelledby": Y,
                parentComponent: "ExistingUserAgeGatePrompt",
                children: [
                    (0, r.jsx)(d.hzk, {
                        children: (0, r.jsxs)("div", {
                            className: T.confirmContainer,
                            children: [
                                (0, r.jsx)(d.X6q, {
                                    variant: "heading-xl/semibold",
                                    className: T.confirmTitle,
                                    id: Y,
                                    children: R.intl.format(R.t.wumolZ, { age: W }),
                                }),
                                (0, r.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: R.intl.format(R.t.n3QjDA, { helpURL: v.Z.getArticleURL(C.BhN.AGE_GATE) }),
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
                                onClick: () => P(0),
                                children: R.intl.string(R.t.cfYCra),
                            }),
                            (0, r.jsx)(d.zxk, {
                                variant: "primary",
                                text: R.intl.string(R.t["6tahio"]),
                                onClick: $,
                            }),
                        ],
                    }),
                ],
            });
}
