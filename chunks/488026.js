a.d(t, { default: () => L });
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
    m = a(331322),
    v = a(289873),
    E = a(512950),
    p = a(821609),
    x = a(109112),
    f = a(939249),
    g = a(834730),
    A = a(320448),
    _ = a(975571),
    w = a(31720),
    R = a(847599),
    j = a(931374),
    S = a(228366),
    I = a(636537),
    C = a(652215);
async function M() {
    let e = (await I.Bo.get({ url: C.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body;
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
var V = a(787301);
let y = function (e) {
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
var N = a(40449),
    T = a(800121),
    b = a(375708),
    O = a(126106);
let L = function (e) {
    let { transitionState: t, entryPoint: a, onClose: r, dismissable: I } = e,
        {
            loading: L,
            error: Z,
            methods: k,
            footerMessage: U,
            refetch: B,
        } = (function () {
            let [e, t] = l.useState(() => V.A.methodsV2 ?? []),
                [a, s] = l.useState(() => V.A.methodsV2FooterMessage),
                [r, i] = l.useState(() => null == V.A.methodsV2),
                [n, o] = l.useState(!1),
                d = l.useRef(!0),
                c = l.useCallback(async (e) => {
                    let a = V.A.methodsV2;
                    if (!e && null != a) {
                        t(a), s(V.A.methodsV2FooterMessage), i(!1), o(!1);
                        return;
                    }
                    i(!0), o(!1);
                    try {
                        let e = await M();
                        S.h.dispatch({
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
        D = k.length > 0,
        { initiateAgeVerificationV2: G } = (0, j.Ny)({ onComplete: r, entryPoint: a, onMethodUnavailable: B }),
        H = l.useRef(!1),
        [F, P] = l.useState(null),
        W = null != F,
        z = l.useMemo(() => (0, n.A)(), []);
    l.useEffect(() => {
        (0, R.Bs)(z, R.WU.EXPRESSIVE_V2, a);
    }, [z, a]);
    let X = l.useCallback(
        async (e, t) => {
            if (!H.current) {
                (0, R.St)(z, R.WU.EXPRESSIVE_V2, R._7.METHOD_SELECT, e.method), (H.current = !0), P(t);
                try {
                    await G(e);
                } finally {
                    (H.current = !1), P(null);
                }
            }
        },
        [G, z],
    );
    return (0, s.jsxs)(o.k, {
        transitionState: t,
        onClose: r,
        gradientColor: "blue",
        dismissable: I,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/78be134dd5dcecb7d0b26e1aead0c61f79a95c93893a4acc82c9828c87d2165a.svg",
            aspectRatio: "21/9",
        },
        title: (0, j.ST)(a, !0),
        subtitle: (0, j.mK)(
            a,
            () => {
                w.A.openUrl(_.A.getArticleURL(C.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                    (0, R.St)(z, R.WU.EXPRESSIVE_V2, R._7.LEARN_MORE);
            },
            void 0,
            () => {
                w.A.openUrl(N.zS), (0, R.St)(z, R.WU.EXPRESSIVE_V2, R._7.TRUSTED_PROVIDERS);
            },
        ),
        children: [
            (0, s.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            L && (0, s.jsx)(m.B, { direction: "vertical", align: "center", children: (0, s.jsx)(v.y, {}) }),
            !L &&
                !D &&
                (0, s.jsx)(E.p, {
                    messageType: E.Y.ERROR,
                    action: (0, s.jsx)(p.$, {
                        variant: "overlay-secondary",
                        size: "sm",
                        text: b.intl.string(T.default.hDvmYP),
                        onClick: B,
                    }),
                    children: b.intl.string(Z ? T.default.Bkmk4Y : T.default.cR6336),
                }),
            D &&
                (0, s.jsx)(m.B, {
                    direction: "vertical",
                    gap: 8,
                    children: k.map((e) => {
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
                                  ? (0, s.jsx)(y, { icon: e.icon })
                                  : (0, s.jsx)(x._, { size: "md", color: "var(--text-strong)" });
                        let l = `${e.method}-${e.vendor}`,
                            r = F === l;
                        return (0, s.jsxs)(
                            f.D,
                            {
                                className: i()(O.kZ, { [O.w1]: W }),
                                "aria-busy": r,
                                "aria-disabled": W,
                                onClick: W ? void 0 : () => X(e, l),
                                children: [
                                    (0, s.jsx)("div", { className: O.zc, children: t }),
                                    (0, s.jsxs)("div", {
                                        className: O.Qq,
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
                                                    className: O.Vp,
                                                    children: (0, s.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    r
                                        ? (0, s.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: O.wt })
                                        : (0, s.jsx)(A._, { className: O.ai }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            !L &&
                D &&
                null != U &&
                (0, s.jsx)("div", {
                    className: O.qr,
                    children: (0, s.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: U }),
                }),
        ],
    });
};
