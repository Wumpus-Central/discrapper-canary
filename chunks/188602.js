a.d(t, { default: () => P });
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
let b = (0, N.mj)({
    kind: "user",
    name: "2026-08-show-expressive-modal-subtitle-alt",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var y = a(73153),
    O = a(482876),
    B = a(787301),
    k = a(750481);
let L = function (e) {
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
var Z = a(40449),
    D = a(652215),
    G = a(841365),
    U = a(660183),
    H = a(126106);
let P = function (e) {
    let t,
        a,
        r,
        { transitionState: N, entryPoint: P, onComplete: W, onClose: F, dismissable: z } = e,
        {
            loading: J,
            error: X,
            methods: Y,
            footerMessage: $,
            outageBannerMessage: q,
            refetch: K,
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
                        (y.h.dispatch({
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
        Q = (0, M.Z)(Y),
        ee = Q.length > 0,
        et = l.useCallback(() => {
            (W?.(), F());
        }, [W, F]),
        { initiateAgeVerificationV2: ea } = (0, k.N)({ onComplete: et, entryPoint: P, onMethodUnavailable: K }),
        es = l.useRef(!1),
        [el, er] = l.useState(null),
        en = null != el,
        ei = l.useMemo(() => (0, i.A)(), []),
        ec =
            ((t = (0, V.W$)()),
            (a = (0, I.bG)([T.A], () => T.A.getShowExpressiveModalSubtitleAlt())),
            (r = b.useConfig({ location: "age_verification_expressive_v2_modal" }).enabled),
            t ? a : r);
    l.useEffect(() => {
        (0, S.Bs)(ei, S.WU.EXPRESSIVE_V2, P);
    }, [ei, P]);
    let eo = l.useCallback(
        async (e, t) => {
            if (!es.current) {
                ((0, S.St)(ei, S.WU.EXPRESSIVE_V2, S._7.METHOD_SELECT, e.method), (es.current = !0), er(t));
                try {
                    await ea(e);
                } finally {
                    ((es.current = !1), er(null));
                }
            }
        },
        [ea, ei],
    );
    return (0, s.jsxs)(v.k, {
        transitionState: N,
        onClose: F,
        gradientColor: "blue",
        dismissable: z,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/78be134dd5dcecb7d0b26e1aead0c61f79a95c93893a4acc82c9828c87d2165a.svg",
            aspectRatio: "21/9",
        },
        title: (0, C.ST)(P, !0),
        subtitle: (0, C.mK)(
            P,
            () => {
                (w.A.openUrl(j.A.getArticleURL(D.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                    (0, S.St)(ei, S.WU.EXPRESSIVE_V2, S._7.LEARN_MORE));
            },
            void 0,
            ec
                ? () => {
                      (w.A.openUrl(Z.zS), (0, S.St)(ei, S.WU.EXPRESSIVE_V2, S._7.TRUSTED_PROVIDERS));
                  }
                : void 0,
            !0,
        ),
        children: [
            (0, s.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            J && (0, s.jsx)(g.B, { direction: "vertical", align: "center", children: (0, s.jsx)(E.y, {}) }),
            !J && ee && null != q && (0, s.jsx)(x.p, { messageType: x.Y.WARNING, className: H.Ih, children: q }),
            !J &&
                !ee &&
                (0, s.jsx)(x.p, {
                    messageType: x.Y.ERROR,
                    action: (0, s.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: U.intl.string(G.default.hDvmYP),
                        onClick: K,
                    }),
                    children: U.intl.string(X ? G.default.Bkmk4Y : G.default.cR6336),
                }),
            ee &&
                (0, s.jsx)(g.B, {
                    direction: "vertical",
                    gap: 8,
                    children: Q.map((e) => {
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
                                  ? (0, s.jsx)(L, { icon: e.icon })
                                  : (0, s.jsx)(f._, { size: "md", color: "var(--text-strong)" });
                        let l = `${e.method}-${e.vendor}`,
                            r = el === l;
                        return (0, s.jsxs)(
                            A.D,
                            {
                                className: n()(H.kZ, { [H.w1]: en }),
                                "aria-busy": r,
                                "aria-disabled": en,
                                onClick: en ? void 0 : () => eo(e, l),
                                children: [
                                    (0, s.jsx)("div", { className: H.zc, children: t }),
                                    (0, s.jsxs)("div", {
                                        className: H.Qq,
                                        children: [
                                            (0, s.jsx)(_.E, {
                                                variant: "text-md/normal",
                                                color: "text-strong",
                                                children: e.title,
                                            }),
                                            (0, s.jsx)("div", {
                                                className: H.h_,
                                                children: (0, s.jsx)(_.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: e.description,
                                                }),
                                            }),
                                            null != e.providedBy &&
                                                (0, s.jsx)("div", {
                                                    className: H.Vp,
                                                    children: (0, s.jsx)(_.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    r
                                        ? (0, s.jsx)(E.y, { type: E.t.SPINNING_CIRCLE_SIMPLE, className: H.wt })
                                        : (0, s.jsx)(R._, { size: "refresh_sm", className: H.ai }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            !J &&
                ee &&
                null != $ &&
                (0, s.jsx)("div", {
                    className: H.qr,
                    children: (0, s.jsx)(_.E, { variant: "text-sm/normal", color: "text-muted", children: $ }),
                }),
        ],
    });
};
