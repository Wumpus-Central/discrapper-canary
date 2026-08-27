a.d(t, { default: () => k });
var s = a(477900),
    l = a(582128),
    r = a(503698),
    i = a.n(r),
    n = a(132500),
    o = a(772707),
    d = a(441574),
    c = a(991049),
    h = a(280645),
    u = a(952146),
    v = a(331322),
    m = a(289873),
    p = a(512950),
    E = a(821609),
    x = a(109112),
    f = a(939249),
    g = a(834730),
    _ = a(320448),
    A = a(975571),
    w = a(31720),
    R = a(847599),
    j = a(931374);
let S = (0, a(945810).mj)({
    kind: "user",
    name: "2026-08-show-expressive-modal-subtitle-alt",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var I = a(228366),
    C = a(636537),
    M = a(652215);
async function V() {
    let e = (await C.Bo.get({ url: M.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body;
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
    };
}
var y = a(787301);
let N = function (e) {
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
var T = a(40449),
    b = a(800121),
    O = a(375708),
    L = a(126106);
let k = function (e) {
    let { transitionState: t, entryPoint: a, onClose: r, dismissable: C } = e,
        {
            loading: k,
            error: Z,
            methods: U,
            footerMessage: B,
            refetch: D,
        } = (function () {
            let [e, t] = l.useState(() => y.A.methodsV2 ?? []),
                [a, s] = l.useState(() => y.A.methodsV2FooterMessage),
                [r, i] = l.useState(() => null == y.A.methodsV2),
                [n, o] = l.useState(!1),
                d = l.useRef(!0),
                c = l.useCallback(async (e) => {
                    let a = y.A.methodsV2;
                    if (!e && null != a) {
                        t(a), s(y.A.methodsV2FooterMessage), i(!1), o(!1);
                        return;
                    }
                    i(!0), o(!1);
                    try {
                        let e = await V();
                        I.h.dispatch({
                            type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                            methods: e.methods,
                            footerMessage: e.footerMessage,
                        }),
                            d.current && (t(e.methods), s(e.footerMessage));
                    } catch {
                        d.current && o(!0);
                    } finally {
                        d.current && i(!1);
                    }
                }, []);
            return (
                l.useEffect(
                    () => (
                        (d.current = !0),
                        c(!1),
                        () => {
                            d.current = !1;
                        }
                    ),
                    [c],
                ),
                {
                    loading: r,
                    error: n,
                    methods: e,
                    footerMessage: a,
                    refetch: l.useCallback(() => {
                        c(!0);
                    }, [c]),
                }
            );
        })(),
        G = U.length > 0,
        { initiateAgeVerificationV2: H } = (0, j.Ny)({ onComplete: r, entryPoint: a, onMethodUnavailable: D }),
        F = l.useRef(!1),
        [P, W] = l.useState(null),
        z = null != P,
        X = l.useMemo(() => (0, n.A)(), []),
        J = S.useConfig({ location: "age_verification_expressive_v2_modal" }).enabled;
    l.useEffect(() => {
        (0, R.Bs)(X, R.WU.EXPRESSIVE_V2, a);
    }, [X, a]);
    let Y = l.useCallback(
        async (e, t) => {
            if (!F.current) {
                (0, R.St)(X, R.WU.EXPRESSIVE_V2, R._7.METHOD_SELECT, e.method), (F.current = !0), W(t);
                try {
                    await H(e);
                } finally {
                    (F.current = !1), W(null);
                }
            }
        },
        [H, X],
    );
    return (0, s.jsxs)(o.k, {
        transitionState: t,
        onClose: r,
        gradientColor: "blue",
        dismissable: C,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/78be134dd5dcecb7d0b26e1aead0c61f79a95c93893a4acc82c9828c87d2165a.svg",
            aspectRatio: "21/9",
        },
        title: (0, j.ST)(a, !0),
        subtitle: (0, j.mK)(
            a,
            () => {
                w.A.openUrl(A.A.getArticleURL(M.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                    (0, R.St)(X, R.WU.EXPRESSIVE_V2, R._7.LEARN_MORE);
            },
            void 0,
            J
                ? () => {
                      w.A.openUrl(T.zS), (0, R.St)(X, R.WU.EXPRESSIVE_V2, R._7.TRUSTED_PROVIDERS);
                  }
                : void 0,
            !0,
        ),
        children: [
            (0, s.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            k && (0, s.jsx)(v.B, { direction: "vertical", align: "center", children: (0, s.jsx)(m.y, {}) }),
            !k &&
                !G &&
                (0, s.jsx)(p.p, {
                    messageType: p.Y.ERROR,
                    action: (0, s.jsx)(E.$, {
                        variant: "overlay-secondary",
                        size: "sm",
                        text: O.intl.string(b.default.hDvmYP),
                        onClick: D,
                    }),
                    children: O.intl.string(Z ? b.default.Bkmk4Y : b.default.cR6336),
                }),
            G &&
                (0, s.jsx)(v.B, {
                    direction: "vertical",
                    gap: 8,
                    children: U.map((e) => {
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
                                  ? (0, s.jsx)(N, { icon: e.icon })
                                  : (0, s.jsx)(x._, { size: "md", color: "var(--text-strong)" });
                        let l = `${e.method}-${e.vendor}`,
                            r = P === l;
                        return (0, s.jsxs)(
                            f.D,
                            {
                                className: i()(L.kZ, { [L.w1]: z }),
                                "aria-busy": r,
                                "aria-disabled": z,
                                onClick: z ? void 0 : () => Y(e, l),
                                children: [
                                    (0, s.jsx)("div", { className: L.zc, children: t }),
                                    (0, s.jsxs)("div", {
                                        className: L.Qq,
                                        children: [
                                            (0, s.jsx)(g.E, {
                                                variant: "text-md/normal",
                                                color: "text-strong",
                                                children: e.title,
                                            }),
                                            (0, s.jsx)(g.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: e.description,
                                            }),
                                            null != e.providedBy &&
                                                (0, s.jsx)("div", {
                                                    className: L.Vp,
                                                    children: (0, s.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    r
                                        ? (0, s.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: L.wt })
                                        : (0, s.jsx)(_._, { className: L.ai }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            !k &&
                G &&
                null != B &&
                (0, s.jsx)("div", {
                    className: L.qr,
                    children: (0, s.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: B }),
                }),
        ],
    });
};
