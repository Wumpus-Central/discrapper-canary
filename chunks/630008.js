a.d(t, { default: () => W });
var s = a(477900),
    l = a(582128),
    n = a(503698),
    r = a.n(n),
    i = a(132500),
    o = a(772707),
    d = a(441574),
    c = a(991049),
    h = a(280645),
    u = a(952146),
    m = a(331322),
    v = a(289873),
    g = a(512950),
    E = a(821609),
    p = a(109112),
    f = a(939249),
    x = a(834730),
    _ = a(320448),
    A = a(975571),
    w = a(379257),
    S = a(847599),
    R = a(931374),
    I = a(17928),
    M = a(945810),
    j = a(207913),
    C = a(393033);
let N = (0, M.mj)({
    kind: "user",
    name: "2026-08-show-expressive-modal-subtitle-alt",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var V = a(228366),
    y = a(636537),
    T = a(280450),
    b = a(652215);
function O(e) {
    return {
        methods: e.methods.map((e) => {
            var t;
            return {
                method: e.method,
                vendor: e.vendor,
                title: e.title,
                description: e.description,
                providedBy: e.provided_by ?? null,
                icon:
                    null == (t = e.icon ?? null)
                        ? null
                        : {
                              paths: t.paths.map((e) => ({
                                  d: e.d,
                                  fillRule: "evenodd" === e.fill_rule ? "evenodd" : void 0,
                              })),
                          },
                externalWindow: e.external_window ?? null,
            };
        }),
        footerMessage: e.footer_message ?? null,
        outageBannerMessage: e.outage_banner_message ?? null,
    };
}
async function B() {
    return O((await y.Bo.get({ url: b.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body);
}
async function k() {
    let e = T.default.getSuspendedUserToken();
    return O(
        (await y.Bo.post({ url: b.Rsh.AGE_VERIFICATION_SUSPENDED_METHODS_V2, body: { token: e }, rejectWithError: !0 }))
            .body,
    );
}
var D = a(787301);
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
var U = a(40449),
    G = a(841365),
    Z = a(375708),
    H = a(126106);
let W = function (e) {
    let t,
        a,
        n,
        { transitionState: M, entryPoint: y, onComplete: T, onClose: O, dismissable: W } = e,
        {
            loading: F,
            error: P,
            methods: z,
            footerMessage: X,
            outageBannerMessage: Y,
            refetch: $,
        } = (function () {
            let [e, t] = l.useState(() => D.A.methodsV2 ?? []),
                [a, s] = l.useState(() => D.A.methodsV2FooterMessage),
                [n, r] = l.useState(() => D.A.methodsV2OutageBannerMessage),
                [i, o] = l.useState(() => null == D.A.methodsV2),
                [d, c] = l.useState(!1),
                h = l.useRef(!0),
                u = l.useCallback(async (e) => {
                    let a = D.A.methodsV2;
                    if (!e && null != a) {
                        t(a), s(D.A.methodsV2FooterMessage), r(D.A.methodsV2OutageBannerMessage), o(!1), c(!1);
                        return;
                    }
                    o(!0), c(!1);
                    try {
                        let e = (0, C.qn)() ? await k() : await B();
                        V.h.dispatch({
                            type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                            methods: e.methods,
                            footerMessage: e.footerMessage,
                            outageBannerMessage: e.outageBannerMessage,
                        }),
                            h.current && (t(e.methods), s(e.footerMessage), r(e.outageBannerMessage));
                    } catch {
                        h.current && c(!0);
                    } finally {
                        h.current && o(!1);
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
                    error: d,
                    methods: e,
                    footerMessage: a,
                    outageBannerMessage: n,
                    refetch: l.useCallback(() => {
                        u(!0);
                    }, [u]),
                }
            );
        })(),
        q = z.length > 0,
        J = l.useCallback(() => {
            T?.(), O();
        }, [T, O]),
        { initiateAgeVerificationV2: K } = (0, R.Ny)({ onComplete: J, entryPoint: y, onMethodUnavailable: $ }),
        Q = l.useRef(!1),
        [ee, et] = l.useState(null),
        ea = null != ee,
        es = l.useMemo(() => (0, i.A)(), []),
        el =
            ((t = (0, C.W$)()),
            (a = (0, I.bG)([j.A], () => j.A.getShowExpressiveModalSubtitleAlt())),
            (n = N.useConfig({ location: "age_verification_expressive_v2_modal" }).enabled),
            t ? a : n);
    l.useEffect(() => {
        (0, S.Bs)(es, S.WU.EXPRESSIVE_V2, y);
    }, [es, y]);
    let en = l.useCallback(
        async (e, t) => {
            if (!Q.current) {
                (0, S.St)(es, S.WU.EXPRESSIVE_V2, S._7.METHOD_SELECT, e.method), (Q.current = !0), et(t);
                try {
                    await K(e);
                } finally {
                    (Q.current = !1), et(null);
                }
            }
        },
        [K, es],
    );
    return (0, s.jsxs)(o.k, {
        transitionState: M,
        onClose: O,
        gradientColor: "blue",
        dismissable: W,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/78be134dd5dcecb7d0b26e1aead0c61f79a95c93893a4acc82c9828c87d2165a.svg",
            aspectRatio: "21/9",
        },
        title: (0, R.ST)(y, !0),
        subtitle: (0, R.mK)(
            y,
            () => {
                w.A.openUrl(A.A.getArticleURL(b.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                    (0, S.St)(es, S.WU.EXPRESSIVE_V2, S._7.LEARN_MORE);
            },
            void 0,
            el
                ? () => {
                      w.A.openUrl(U.zS), (0, S.St)(es, S.WU.EXPRESSIVE_V2, S._7.TRUSTED_PROVIDERS);
                  }
                : void 0,
            !0,
        ),
        children: [
            (0, s.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            F && (0, s.jsx)(m.B, { direction: "vertical", align: "center", children: (0, s.jsx)(v.y, {}) }),
            !F && null != Y && (0, s.jsx)(g.p, { messageType: g.Y.WARNING, className: H.Ih, children: Y }),
            !F &&
                !q &&
                (0, s.jsx)(g.p, {
                    messageType: g.Y.ERROR,
                    action: (0, s.jsx)(E.$, {
                        variant: "overlay-secondary",
                        size: "sm",
                        text: Z.intl.string(G.default.hDvmYP),
                        onClick: $,
                    }),
                    children: Z.intl.string(P ? G.default.Bkmk4Y : G.default.cR6336),
                }),
            q &&
                (0, s.jsx)(m.B, {
                    direction: "vertical",
                    gap: 8,
                    children: z.map((e) => {
                        let t,
                            a = (function (e) {
                                switch (e) {
                                    case d.mG.FACIAL_AGE_ESTIMATION:
                                        return c.t;
                                    case d.mG.ID_SELFIE_MATCH:
                                        return h.H;
                                    case d.mG.GOOGLE_WALLET:
                                        return u.A;
                                    default:
                                        return;
                                }
                            })(e.method);
                        t =
                            null != a
                                ? (0, s.jsx)(a, { size: "md", color: "var(--text-strong)" })
                                : null != e.icon
                                  ? (0, s.jsx)(L, { icon: e.icon })
                                  : (0, s.jsx)(p._, { size: "md", color: "var(--text-strong)" });
                        let l = `${e.method}-${e.vendor}`,
                            n = ee === l;
                        return (0, s.jsxs)(
                            f.D,
                            {
                                className: r()(H.kZ, { [H.w1]: ea }),
                                "aria-busy": n,
                                "aria-disabled": ea,
                                onClick: ea ? void 0 : () => en(e, l),
                                children: [
                                    (0, s.jsx)("div", { className: H.zc, children: t }),
                                    (0, s.jsxs)("div", {
                                        className: H.Qq,
                                        children: [
                                            (0, s.jsx)(x.E, {
                                                variant: "text-md/normal",
                                                color: "text-strong",
                                                children: e.title,
                                            }),
                                            (0, s.jsx)(x.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: e.description,
                                            }),
                                            null != e.providedBy &&
                                                (0, s.jsx)("div", {
                                                    className: H.Vp,
                                                    children: (0, s.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    n
                                        ? (0, s.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: H.wt })
                                        : (0, s.jsx)(_._, { className: H.ai }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            !F &&
                q &&
                null != X &&
                (0, s.jsx)("div", {
                    className: H.qr,
                    children: (0, s.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: X }),
                }),
        ],
    });
};
