a.d(t, { default: () => G });
var s = a(477900),
    l = a(582128),
    n = a(503698),
    r = a.n(n),
    i = a(132500),
    c = a(772707),
    o = a(441574),
    d = a(991049),
    h = a(280645),
    u = a(952146),
    m = a(331322),
    v = a(289873),
    g = a(512950),
    x = a(821609),
    E = a(109112),
    p = a(939249),
    f = a(834730),
    A = a(320448),
    _ = a(975571),
    j = a(379257),
    w = a(847599),
    S = a(462714),
    R = a(36149),
    M = a(17928),
    C = a(945810),
    I = a(207913),
    N = a(393033);
let V = (0, C.mj)({
    kind: "user",
    name: "2026-08-show-expressive-modal-subtitle-alt",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var T = a(228366),
    y = a(482876),
    b = a(787301);
let O = function (e) {
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
var k = a(40449),
    B = a(652215),
    L = a(799719),
    Z = a(375708),
    U = a(126106);
let G = function (e) {
    let t,
        a,
        n,
        { transitionState: C, entryPoint: G, onComplete: D, onClose: H, dismissable: P } = e,
        {
            loading: F,
            error: W,
            methods: z,
            footerMessage: J,
            outageBannerMessage: X,
            refetch: Y,
        } = (function () {
            let [e, t] = l.useState(() => b.A.methodsV2 ?? []),
                [a, s] = l.useState(() => b.A.methodsV2FooterMessage),
                [n, r] = l.useState(() => b.A.methodsV2OutageBannerMessage),
                [i, c] = l.useState(() => null == b.A.methodsV2),
                [o, d] = l.useState(!1),
                h = l.useRef(!0),
                u = l.useCallback(async (e) => {
                    let a = b.A.methodsV2;
                    if (!e && null != a) {
                        t(a), s(b.A.methodsV2FooterMessage), r(b.A.methodsV2OutageBannerMessage), c(!1), d(!1);
                        return;
                    }
                    c(!0), d(!1);
                    try {
                        let e = (0, N.qn)() ? await (0, y.j)() : await (0, y.J)();
                        T.h.dispatch({
                            type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                            methods: e.methods,
                            footerMessage: e.footerMessage,
                            outageBannerMessage: e.outageBannerMessage,
                        }),
                            h.current && (t(e.methods), s(e.footerMessage), r(e.outageBannerMessage));
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
                    outageBannerMessage: n,
                    refetch: l.useCallback(() => {
                        u(!0);
                    }, [u]),
                }
            );
        })(),
        $ = (0, S.Z)(z),
        q = $.length > 0,
        K = l.useCallback(() => {
            D?.(), H();
        }, [D, H]),
        { initiateAgeVerificationV2: Q } = (0, R.Ny)({ onComplete: K, entryPoint: G, onMethodUnavailable: Y }),
        ee = l.useRef(!1),
        [et, ea] = l.useState(null),
        es = null != et,
        el = l.useMemo(() => (0, i.A)(), []),
        en =
            ((t = (0, N.W$)()),
            (a = (0, M.bG)([I.A], () => I.A.getShowExpressiveModalSubtitleAlt())),
            (n = V.useConfig({ location: "age_verification_expressive_v2_modal" }).enabled),
            t ? a : n);
    l.useEffect(() => {
        (0, w.Bs)(el, w.WU.EXPRESSIVE_V2, G);
    }, [el, G]);
    let er = l.useCallback(
        async (e, t) => {
            if (!ee.current) {
                (0, w.St)(el, w.WU.EXPRESSIVE_V2, w._7.METHOD_SELECT, e.method), (ee.current = !0), ea(t);
                try {
                    await Q(e);
                } finally {
                    (ee.current = !1), ea(null);
                }
            }
        },
        [Q, el],
    );
    return (0, s.jsxs)(c.k, {
        transitionState: C,
        onClose: H,
        gradientColor: "blue",
        dismissable: P,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/78be134dd5dcecb7d0b26e1aead0c61f79a95c93893a4acc82c9828c87d2165a.svg",
            aspectRatio: "21/9",
        },
        title: (0, R.ST)(G, !0),
        subtitle: (0, R.mK)(
            G,
            () => {
                j.A.openUrl(_.A.getArticleURL(B.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                    (0, w.St)(el, w.WU.EXPRESSIVE_V2, w._7.LEARN_MORE);
            },
            void 0,
            en
                ? () => {
                      j.A.openUrl(k.zS), (0, w.St)(el, w.WU.EXPRESSIVE_V2, w._7.TRUSTED_PROVIDERS);
                  }
                : void 0,
            !0,
        ),
        children: [
            (0, s.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            F && (0, s.jsx)(m.B, { direction: "vertical", align: "center", children: (0, s.jsx)(v.y, {}) }),
            !F && null != X && (0, s.jsx)(g.p, { messageType: g.Y.WARNING, className: U.Ih, children: X }),
            !F &&
                !q &&
                (0, s.jsx)(g.p, {
                    messageType: g.Y.ERROR,
                    action: (0, s.jsx)(x.$, {
                        variant: "overlay-secondary",
                        size: "sm",
                        text: Z.intl.string(L.default.hDvmYP),
                        onClick: Y,
                    }),
                    children: Z.intl.string(W ? L.default.Bkmk4Y : L.default.cR6336),
                }),
            q &&
                (0, s.jsx)(m.B, {
                    direction: "vertical",
                    gap: 8,
                    children: $.map((e) => {
                        let t,
                            a = (function (e) {
                                switch (e) {
                                    case o.mG.FACIAL_AGE_ESTIMATION:
                                        return d.t;
                                    case o.mG.ID_SELFIE_MATCH:
                                        return h.H;
                                    case o.mG.GOOGLE_WALLET:
                                        return u.A;
                                    default:
                                        return;
                                }
                            })(e.method);
                        t =
                            null != a
                                ? (0, s.jsx)(a, { size: "md", color: "var(--text-strong)" })
                                : null != e.icon
                                  ? (0, s.jsx)(O, { icon: e.icon })
                                  : (0, s.jsx)(E._, { size: "md", color: "var(--text-strong)" });
                        let l = `${e.method}-${e.vendor}`,
                            n = et === l;
                        return (0, s.jsxs)(
                            p.D,
                            {
                                className: r()(U.kZ, { [U.w1]: es }),
                                "aria-busy": n,
                                "aria-disabled": es,
                                onClick: es ? void 0 : () => er(e, l),
                                children: [
                                    (0, s.jsx)("div", { className: U.zc, children: t }),
                                    (0, s.jsxs)("div", {
                                        className: U.Qq,
                                        children: [
                                            (0, s.jsx)(f.E, {
                                                variant: "text-md/normal",
                                                color: "text-strong",
                                                children: e.title,
                                            }),
                                            (0, s.jsx)(f.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: e.description,
                                            }),
                                            null != e.providedBy &&
                                                (0, s.jsx)("div", {
                                                    className: U.Vp,
                                                    children: (0, s.jsx)(f.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    n
                                        ? (0, s.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: U.wt })
                                        : (0, s.jsx)(A._, { className: U.ai }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            !F &&
                q &&
                null != J &&
                (0, s.jsx)("div", {
                    className: U.qr,
                    children: (0, s.jsx)(f.E, { variant: "text-sm/normal", color: "text-muted", children: J }),
                }),
        ],
    });
};
