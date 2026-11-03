a.d(t, { default: () => H });
var s = a(477900),
    l = a(582128),
    r = a(503698),
    i = a.n(r),
    n = a(132500),
    c = a(441574),
    o = a(991049),
    d = a(280645),
    h = a(952146),
    u = a(360669),
    m = a(530557),
    v = a(772707),
    g = a(331322),
    E = a(289873),
    x = a(683071),
    f = a(109112),
    p = a(939249),
    A = a(834730),
    _ = a(320448),
    w = a(975571),
    j = a(379257),
    S = a(306537),
    C = a(462714),
    I = a(36149),
    M = a(17928),
    R = a(945810),
    N = a(207913),
    V = a(393033);
let b = (0, R.mj)({
    kind: "user",
    name: "2026-08-show-expressive-modal-subtitle-alt",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var y = a(73153),
    T = a(482876),
    B = a(787301),
    O = a(750481);
let k = function (e) {
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
var L = a(40449),
    Z = a(652215),
    D = a(418528),
    G = a(105292),
    U = a(126106);
let H = function (e) {
    let t,
        a,
        r,
        { transitionState: R, entryPoint: H, onComplete: F, onClose: P, dismissable: z } = e,
        {
            loading: W,
            error: J,
            methods: X,
            footerMessage: q,
            outageBannerMessage: Y,
            refetch: $,
        } = (function () {
            let [e, t] = l.useState(() => B.A.methodsV2 ?? []),
                [a, s] = l.useState(() => B.A.methodsV2FooterMessage),
                [r, i] = l.useState(() => B.A.methodsV2OutageBannerMessage),
                [n, c] = l.useState(() => null == B.A.methodsV2),
                [o, d] = l.useState(!1),
                h = l.useRef(!0),
                u = l.useCallback(async (e) => {
                    let a = B.A.methodsV2;
                    if (!e && null != a) {
                        (t(a), s(B.A.methodsV2FooterMessage), i(B.A.methodsV2OutageBannerMessage), c(!1), d(!1));
                        return;
                    }
                    (c(!0), d(!1));
                    try {
                        let e = (0, V.qn)() ? await (0, T.j)() : await (0, T.J)();
                        (y.h.dispatch({
                            type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                            methods: e.methods,
                            footerMessage: e.footerMessage,
                            outageBannerMessage: e.outageBannerMessage,
                        }),
                            h.current && (t(e.methods), s(e.footerMessage), i(e.outageBannerMessage)));
                    } catch {
                        h.current && d(!0);
                    } finally {
                        h.current && c(!1);
                    }
                }, []);
            return (
                l.useEffect(
                    () => (
                        (h.current = !0),
                        u(!1),
                        () => {
                            h.current = !1;
                        }
                    ),
                    [u],
                ),
                {
                    loading: n,
                    error: o,
                    methods: e,
                    footerMessage: a,
                    outageBannerMessage: r,
                    refetch: l.useCallback(() => {
                        u(!0);
                    }, [u]),
                }
            );
        })(),
        K = (0, C.Z)(X),
        Q = K.length > 0,
        ee = l.useCallback(() => {
            (F?.(), P());
        }, [F, P]),
        { initiateAgeVerificationV2: et } = (0, O.N)({ onComplete: ee, entryPoint: H, onMethodUnavailable: $ }),
        ea = l.useRef(!1),
        [es, el] = l.useState(null),
        er = null != es,
        ei = l.useMemo(() => (0, n.A)(), []),
        en =
            ((t = (0, V.W$)()),
            (a = (0, M.bG)([N.A], () => N.A.getShowExpressiveModalSubtitleAlt())),
            (r = b.useConfig({ location: "age_verification_expressive_v2_modal" }).enabled),
            t ? a : r);
    l.useEffect(() => {
        (0, S.Bs)(ei, S.WU.EXPRESSIVE_V2, H);
    }, [ei, H]);
    let ec = l.useCallback(
        async (e, t) => {
            if (!ea.current) {
                ((0, S.St)(ei, S.WU.EXPRESSIVE_V2, S._7.METHOD_SELECT, e.method), (ea.current = !0), el(t));
                try {
                    await et(e);
                } finally {
                    ((ea.current = !1), el(null));
                }
            }
        },
        [et, ei],
    );
    return (0, s.jsxs)(v.k, {
        transitionState: R,
        onClose: P,
        gradientColor: "blue",
        dismissable: z,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/78be134dd5dcecb7d0b26e1aead0c61f79a95c93893a4acc82c9828c87d2165a.svg",
            aspectRatio: "21/9",
        },
        title: (0, I.ST)(H, !0),
        subtitle: (0, I.mK)(
            H,
            () => {
                (j.A.openUrl(w.A.getArticleURL(Z.MVz.AGE_VERIFICATION_LEARN_MORE)),
                    (0, S.St)(ei, S.WU.EXPRESSIVE_V2, S._7.LEARN_MORE));
            },
            void 0,
            en
                ? () => {
                      (j.A.openUrl(L.zS), (0, S.St)(ei, S.WU.EXPRESSIVE_V2, S._7.TRUSTED_PROVIDERS));
                  }
                : void 0,
            !0,
        ),
        children: [
            (0, s.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            W && (0, s.jsx)(g.B, { direction: "vertical", align: "center", children: (0, s.jsx)(E.y, {}) }),
            !W &&
                Q &&
                null != Y &&
                (0, s.jsx)("div", {
                    className: U.Ih,
                    children: (0, s.jsx)(x.w, { type: "warning", message: Y, role: "status" }),
                }),
            !W &&
                !Q &&
                (0, s.jsx)(x.w, {
                    type: "critical",
                    message: G.intl.string(J ? D.default.Bkmk4Y : D.default.cR6336),
                    role: "alert",
                    action: { text: G.intl.string(D.default.hDvmYP), onClick: $ },
                }),
            Q &&
                (0, s.jsx)(g.B, {
                    direction: "vertical",
                    gap: 8,
                    children: K.map((e) => {
                        let t,
                            a = (function (e) {
                                switch (e) {
                                    case c.mG.FACIAL_AGE_ESTIMATION:
                                        return o.t;
                                    case c.mG.ID_SELFIE_MATCH:
                                        return d.H;
                                    case c.mG.GOOGLE_WALLET:
                                        return h.A;
                                    case c.mG.CREDIT_CARD:
                                        return u.B;
                                    case c.mG.AGE_KEY:
                                        return m.R;
                                    default:
                                        return;
                                }
                            })(e.method);
                        t =
                            null != a
                                ? (0, s.jsx)(a, { size: "md", color: "var(--text-strong)" })
                                : null != e.icon
                                  ? (0, s.jsx)(k, { icon: e.icon })
                                  : (0, s.jsx)(f._, { size: "md", color: "var(--text-strong)" });
                        let l = `${e.method}-${e.vendor}`,
                            r = es === l;
                        return (0, s.jsxs)(
                            p.D,
                            {
                                className: i()(U.kZ, { [U.w1]: er }),
                                "aria-busy": r,
                                "aria-disabled": er,
                                onClick: er ? void 0 : () => ec(e, l),
                                children: [
                                    (0, s.jsx)("div", { className: U.zc, children: t }),
                                    (0, s.jsxs)("div", {
                                        className: U.Qq,
                                        children: [
                                            (0, s.jsx)(A.E, {
                                                variant: "body-md/normal",
                                                color: "text-strong",
                                                children: e.title,
                                            }),
                                            (0, s.jsx)("div", {
                                                className: U.h_,
                                                children: (0, s.jsx)(A.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-muted",
                                                    children: e.description,
                                                }),
                                            }),
                                            null != e.providedBy &&
                                                (0, s.jsx)("div", {
                                                    className: U.Vp,
                                                    children: (0, s.jsx)(A.E, {
                                                        variant: "body-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    r
                                        ? (0, s.jsx)(E.y, { type: E.t.SPINNING_CIRCLE_SIMPLE, className: U.wt })
                                        : (0, s.jsx)(_._, { size: "refresh_sm", className: U.ai }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            !W &&
                Q &&
                null != q &&
                (0, s.jsx)("div", {
                    className: U.qr,
                    children: (0, s.jsx)(A.E, { variant: "body-sm/normal", color: "text-muted", children: q }),
                }),
        ],
    });
};
