a.d(t, { default: () => z });
var s = a(477900),
    l = a(582128),
    r = a(503698),
    n = a.n(r),
    i = a(115560),
    o = a(76573),
    c = a(991049),
    d = a(280645),
    u = a(952146),
    m = a(360669),
    h = a(530557),
    E = a(772707),
    g = a(331322),
    v = a(289873),
    x = a(683071),
    p = a(109112),
    S = a(939249),
    _ = a(834730),
    f = a(320448),
    A = a(975571),
    I = a(871309),
    C = a(171576),
    j = a(462714),
    R = a(36149),
    b = a(855986),
    V = a(945810),
    y = a(207913),
    M = a(393033);
let N = (0, V.mj)({
    kind: "user",
    name: "2026-08-show-expressive-modal-subtitle-alt",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var k = a(73153),
    w = a(482876),
    G = a(787301),
    O = a(750481);
let T = function (e) {
    let { icon: t, size: a = 24 } = e;
    return (0, s.jsx)("svg", {
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": !0,
        children: t.paths.map((e) => (0, s.jsx)("path", { d: e.d, fillRule: e.fillRule, clipRule: e.fillRule }, e.d)),
    });
};
var B = a(40449),
    L = a(652215),
    U = a(664188),
    D = a(792996),
    P = a(126106);
let z = function (e) {
    let t,
        a,
        r,
        { transitionState: V, entryPoint: z, onComplete: F, onClose: W, dismissable: X } = e,
        {
            loading: q,
            error: H,
            methods: K,
            footerMessage: Y,
            outageBannerMessage: $,
            refetch: Z,
        } = (function () {
            let [e, t] = l.useState(() => G.A.methodsV2 ?? []),
                [a, s] = l.useState(() => G.A.methodsV2FooterMessage),
                [r, n] = l.useState(() => G.A.methodsV2OutageBannerMessage),
                [i, o] = l.useState(() => null == G.A.methodsV2),
                [c, d] = l.useState(!1),
                u = l.useRef(!0),
                m = l.useCallback(async (e) => {
                    let a = G.A.methodsV2;
                    if (!e && null != a) {
                        (t(a), s(G.A.methodsV2FooterMessage), n(G.A.methodsV2OutageBannerMessage), o(!1), d(!1));
                        return;
                    }
                    (o(!0), d(!1));
                    try {
                        let e = (0, M.qn)() ? await (0, w.j)() : await (0, w.J)();
                        (k.h.dispatch({
                            type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                            methods: e.methods,
                            footerMessage: e.footerMessage,
                            outageBannerMessage: e.outageBannerMessage,
                        }),
                            u.current && (t(e.methods), s(e.footerMessage), n(e.outageBannerMessage)));
                    } catch {
                        u.current && d(!0);
                    } finally {
                        u.current && o(!1);
                    }
                }, []);
            return (
                l.useEffect(
                    () => (
                        (u.current = !0),
                        m(!1),
                        () => {
                            u.current = !1;
                        }
                    ),
                    [m],
                ),
                {
                    loading: i,
                    error: c,
                    methods: e,
                    footerMessage: a,
                    outageBannerMessage: r,
                    refetch: l.useCallback(() => {
                        m(!0);
                    }, [m]),
                }
            );
        })(),
        J = (0, j.Z)(K),
        Q = J.length > 0,
        ee = l.useCallback(() => {
            (F?.(), W());
        }, [F, W]),
        { initiateAgeVerificationV2: et } = (0, O.N)({ onComplete: ee, entryPoint: z, onMethodUnavailable: Z }),
        ea = l.useRef(!1),
        [es, el] = l.useState(null),
        er = null != es,
        en = l.useMemo(() => (0, i.A)(), []),
        ei =
            ((t = (0, M.W$)()),
            (a = (0, b.bG)([y.A], () => y.A.getShowExpressiveModalSubtitleAlt())),
            (r = N.useConfig({ location: "age_verification_expressive_v2_modal" }).enabled),
            t ? a : r);
    l.useEffect(() => {
        (0, C.Bs)(en, C.WU.EXPRESSIVE_V2, z);
    }, [en, z]);
    let eo = l.useCallback(
        async (e, t) => {
            if (!ea.current) {
                ((0, C.St)(en, C.WU.EXPRESSIVE_V2, C._7.METHOD_SELECT, e.method), (ea.current = !0), el(t));
                try {
                    await et(e);
                } finally {
                    ((ea.current = !1), el(null));
                }
            }
        },
        [et, en],
    );
    return (0, s.jsxs)(E.k, {
        transitionState: V,
        onClose: W,
        gradientColor: "blue",
        dismissable: X,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/78be134dd5dcecb7d0b26e1aead0c61f79a95c93893a4acc82c9828c87d2165a.svg",
            aspectRatio: "21/9",
        },
        title: (0, R.ST)(z, !0),
        subtitle: (0, R.mK)(
            z,
            () => {
                (I.A.openUrl(A.A.getArticleURL(L.MVz.AGE_VERIFICATION_LEARN_MORE)),
                    (0, C.St)(en, C.WU.EXPRESSIVE_V2, C._7.LEARN_MORE));
            },
            void 0,
            ei
                ? () => {
                      (I.A.openUrl(B.zS), (0, C.St)(en, C.WU.EXPRESSIVE_V2, C._7.TRUSTED_PROVIDERS));
                  }
                : void 0,
            !0,
        ),
        children: [
            (0, s.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            q && (0, s.jsx)(g.B, { direction: "vertical", align: "center", children: (0, s.jsx)(v.y, {}) }),
            !q &&
                Q &&
                null != $ &&
                (0, s.jsx)("div", {
                    className: P.Ih,
                    children: (0, s.jsx)(x.w, { type: "warning", message: $, role: "status" }),
                }),
            !q &&
                !Q &&
                (0, s.jsx)(x.w, {
                    type: "critical",
                    message: D.intl.string(H ? U.default.Bkmk4Y : U.default.cR6336),
                    role: "alert",
                    action: { text: D.intl.string(U.default.hDvmYP), onClick: Z },
                }),
            Q &&
                (0, s.jsx)(g.B, {
                    direction: "vertical",
                    gap: 8,
                    children: J.map((e) => {
                        let t,
                            a = (function (e) {
                                switch (e) {
                                    case o.mG.FACIAL_AGE_ESTIMATION:
                                        return c.VideoSelfieIcon;
                                    case o.mG.ID_SELFIE_MATCH:
                                        return d.IdCardIcon;
                                    case o.mG.GOOGLE_WALLET:
                                        return u.GoogleNeutralIcon;
                                    case o.mG.CREDIT_CARD:
                                        return m.CreditCardIcon;
                                    case o.mG.AGE_KEY:
                                        return h.KeyIcon;
                                    default:
                                        return;
                                }
                            })(e.method);
                        t =
                            null != a
                                ? (0, s.jsx)(a, { size: "md", color: "var(--text-strong)" })
                                : null != e.icon
                                  ? (0, s.jsx)(T, { icon: e.icon })
                                  : (0, s.jsx)(p.UnknownGameIcon, { size: "md", color: "var(--text-strong)" });
                        let l = `${e.method}-${e.vendor}`,
                            r = es === l;
                        return (0, s.jsxs)(
                            S.D,
                            {
                                className: n()(P.kZ, { [P.w1]: er }),
                                "aria-busy": r,
                                "aria-disabled": er,
                                onClick: er ? void 0 : () => eo(e, l),
                                children: [
                                    (0, s.jsx)("div", { className: P.zc, children: t }),
                                    (0, s.jsxs)("div", {
                                        className: P.Qq,
                                        children: [
                                            (0, s.jsx)(_.E, {
                                                variant: "body-md/normal",
                                                color: "text-strong",
                                                children: e.title,
                                            }),
                                            (0, s.jsx)("div", {
                                                className: P.h_,
                                                children: (0, s.jsx)(_.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    children: e.description,
                                                }),
                                            }),
                                            null != e.providedBy &&
                                                (0, s.jsx)("div", {
                                                    className: P.Vp,
                                                    children: (0, s.jsx)(_.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    r
                                        ? (0, s.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: P.wt })
                                        : (0, s.jsx)(f.ChevronSmallRightIcon, { size: "refresh_sm", className: P.ai }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            !q &&
                Q &&
                null != Y &&
                (0, s.jsx)("div", {
                    className: P.qr,
                    children: (0, s.jsx)(_.E, { variant: "body-sm/normal", color: "text-muted", children: Y }),
                }),
        ],
    });
};
