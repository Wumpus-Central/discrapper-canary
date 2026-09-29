a.d(t, { default: () => H });
var s = a(477900),
    l = a(582128),
    r = a(503698),
    n = a.n(r),
    i = a(132500),
    c = a(441574),
    o = a(991049),
    d = a(280645),
    h = a(952146),
    u = a(360669),
    m = a(530557),
    v = a(772707),
    g = a(331322),
    E = a(289873),
    x = a(512950),
    p = a(821609),
    f = a(109112),
    A = a(939249),
    _ = a(834730),
    R = a(320448),
    j = a(975571),
    w = a(379257),
    S = a(306537),
    M = a(462714),
    C = a(36149),
    I = a(17928),
    N = a(945810),
    T = a(207913),
    V = a(393033);
let y = (0, N.mj)({
    kind: "user",
    name: "2026-08-show-expressive-modal-subtitle-alt",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var b = a(228366),
    O = a(482876),
    B = a(787301);
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
    D = a(799719),
    G = a(375708),
    U = a(126106);
let H = function (e) {
    let t,
        a,
        r,
        { transitionState: N, entryPoint: H, onComplete: P, onClose: W, dismissable: F } = e,
        {
            loading: z,
            error: J,
            methods: X,
            footerMessage: Y,
            outageBannerMessage: $,
            refetch: q,
        } = (function () {
            let [e, t] = l.useState(() => B.A.methodsV2 ?? []),
                [a, s] = l.useState(() => B.A.methodsV2FooterMessage),
                [r, n] = l.useState(() => B.A.methodsV2OutageBannerMessage),
                [i, c] = l.useState(() => null == B.A.methodsV2),
                [o, d] = l.useState(!1),
                h = l.useRef(!0),
                u = l.useCallback(async (e) => {
                    let a = B.A.methodsV2;
                    if (!e && null != a) {
                        (t(a), s(B.A.methodsV2FooterMessage), n(B.A.methodsV2OutageBannerMessage), c(!1), d(!1));
                        return;
                    }
                    (c(!0), d(!1));
                    try {
                        let e = (0, V.qn)() ? await (0, O.j)() : await (0, O.J)();
                        (b.h.dispatch({
                            type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                            methods: e.methods,
                            footerMessage: e.footerMessage,
                            outageBannerMessage: e.outageBannerMessage,
                        }),
                            h.current && (t(e.methods), s(e.footerMessage), n(e.outageBannerMessage)));
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
                    loading: i,
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
        K = (0, M.Z)(X),
        Q = K.length > 0,
        ee = l.useCallback(() => {
            (P?.(), W());
        }, [P, W]),
        { initiateAgeVerificationV2: et } = (0, C.Ny)({ onComplete: ee, entryPoint: H, onMethodUnavailable: q }),
        ea = l.useRef(!1),
        [es, el] = l.useState(null),
        er = null != es,
        en = l.useMemo(() => (0, i.A)(), []),
        ei =
            ((t = (0, V.W$)()),
            (a = (0, I.bG)([T.A], () => T.A.getShowExpressiveModalSubtitleAlt())),
            (r = y.useConfig({ location: "age_verification_expressive_v2_modal" }).enabled),
            t ? a : r);
    l.useEffect(() => {
        (0, S.Bs)(en, S.WU.EXPRESSIVE_V2, H);
    }, [en, H]);
    let ec = l.useCallback(
        async (e, t) => {
            if (!ea.current) {
                ((0, S.St)(en, S.WU.EXPRESSIVE_V2, S._7.METHOD_SELECT, e.method), (ea.current = !0), el(t));
                try {
                    await et(e);
                } finally {
                    ((ea.current = !1), el(null));
                }
            }
        },
        [et, en],
    );
    return (0, s.jsxs)(v.k, {
        transitionState: N,
        onClose: W,
        gradientColor: "blue",
        dismissable: F,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/78be134dd5dcecb7d0b26e1aead0c61f79a95c93893a4acc82c9828c87d2165a.svg",
            aspectRatio: "21/9",
        },
        title: (0, C.ST)(H, !0),
        subtitle: (0, C.mK)(
            H,
            () => {
                (w.A.openUrl(j.A.getArticleURL(Z.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                    (0, S.St)(en, S.WU.EXPRESSIVE_V2, S._7.LEARN_MORE));
            },
            void 0,
            ei
                ? () => {
                      (w.A.openUrl(L.zS), (0, S.St)(en, S.WU.EXPRESSIVE_V2, S._7.TRUSTED_PROVIDERS));
                  }
                : void 0,
            !0,
        ),
        children: [
            (0, s.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            z && (0, s.jsx)(g.B, { direction: "vertical", align: "center", children: (0, s.jsx)(E.y, {}) }),
            !z && Q && null != $ && (0, s.jsx)(x.p, { messageType: x.Y.WARNING, className: U.Ih, children: $ }),
            !z &&
                !Q &&
                (0, s.jsx)(x.p, {
                    messageType: x.Y.ERROR,
                    action: (0, s.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: G.intl.string(D.default.hDvmYP),
                        onClick: q,
                    }),
                    children: G.intl.string(J ? D.default.Bkmk4Y : D.default.cR6336),
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
                                    case c.mG.NEW_METHOD:
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
                            A.D,
                            {
                                className: n()(U.kZ, { [U.w1]: er }),
                                "aria-busy": r,
                                "aria-disabled": er,
                                onClick: er ? void 0 : () => ec(e, l),
                                children: [
                                    (0, s.jsx)("div", { className: U.zc, children: t }),
                                    (0, s.jsxs)("div", {
                                        className: U.Qq,
                                        children: [
                                            (0, s.jsx)(_.E, {
                                                variant: "text-md/normal",
                                                color: "text-strong",
                                                children: e.title,
                                            }),
                                            (0, s.jsx)(_.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: e.description,
                                            }),
                                            null != e.providedBy &&
                                                (0, s.jsx)("div", {
                                                    className: U.Vp,
                                                    children: (0, s.jsx)(_.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    r
                                        ? (0, s.jsx)(E.y, { type: E.t.SPINNING_CIRCLE_SIMPLE, className: U.wt })
                                        : (0, s.jsx)(R._, { className: U.ai }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            !z &&
                Q &&
                null != Y &&
                (0, s.jsx)("div", {
                    className: U.qr,
                    children: (0, s.jsx)(_.E, { variant: "text-sm/normal", color: "text-muted", children: Y }),
                }),
        ],
    });
};
