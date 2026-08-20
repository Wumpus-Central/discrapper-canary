a.d(t, { default: () => L });
var s = a(477900),
    l = a(582128),
    r = a(503698),
    i = a.n(r),
    n = a(132500),
    o = a(772707),
    c = a(441574),
    d = a(991049),
    h = a(280645),
    u = a(952146),
    m = a(331322),
    v = a(289873),
    p = a(512950),
    x = a(821609),
    E = a(109112),
    f = a(939249),
    g = a(834730),
    A = a(320448),
    _ = a(975571),
    w = a(31720),
    j = a(847599),
    R = a(931374),
    I = a(228366),
    C = a(636537),
    M = a(652215);
async function y() {
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
var N = a(787301);
let S = function (e) {
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
var T = a(800121),
    V = a(375708),
    b = a(126106);
let L = function (e) {
    let { transitionState: t, entryPoint: a, onClose: r, dismissable: C } = e,
        {
            loading: L,
            error: O,
            methods: Z,
            footerMessage: k,
            refetch: B,
        } = (function () {
            let [e, t] = l.useState(() => N.A.methodsV2 ?? []),
                [a, s] = l.useState(() => N.A.methodsV2FooterMessage),
                [r, i] = l.useState(() => null == N.A.methodsV2),
                [n, o] = l.useState(!1),
                c = l.useRef(!0),
                d = l.useCallback(async (e) => {
                    let a = N.A.methodsV2;
                    if (!e && null != a) {
                        t(a), s(N.A.methodsV2FooterMessage), i(!1), o(!1);
                        return;
                    }
                    i(!0), o(!1);
                    try {
                        let e = await y();
                        I.h.dispatch({
                            type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS",
                            methods: e.methods,
                            footerMessage: e.footerMessage,
                        }),
                            c.current && (t(e.methods), s(e.footerMessage));
                    } catch {
                        c.current && o(!0);
                    } finally {
                        c.current && i(!1);
                    }
                }, []);
            return (
                l.useEffect(
                    () => (
                        (c.current = !0),
                        d(!1),
                        () => {
                            c.current = !1;
                        }
                    ),
                    [d],
                ),
                {
                    loading: r,
                    error: n,
                    methods: e,
                    footerMessage: a,
                    refetch: l.useCallback(() => {
                        d(!0);
                    }, [d]),
                }
            );
        })(),
        G = Z.length > 0,
        { initiateAgeVerificationV2: H } = (0, R.Ny)({ onComplete: r, entryPoint: a, onMethodUnavailable: B }),
        D = l.useRef(!1),
        [U, F] = l.useState(null),
        P = null != U,
        W = l.useMemo(() => (0, n.A)(), []);
    l.useEffect(() => {
        (0, j.Bs)(W, j.WU.EXPRESSIVE_V2, a);
    }, [W, a]);
    let z = l.useCallback(
        async (e, t) => {
            if (!D.current) {
                (0, j.St)(W, j.WU.EXPRESSIVE_V2, j._7.METHOD_SELECT, e.method), (D.current = !0), F(t);
                try {
                    await H(e);
                } finally {
                    (D.current = !1), F(null);
                }
            }
        },
        [H, W],
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
        title: (0, R.ST)(a),
        subtitle: (0, R.mK)(a, () => {
            w.A.openUrl(_.A.getArticleURL(M.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                (0, j.St)(W, j.WU.EXPRESSIVE_V2, j._7.LEARN_MORE);
        }),
        children: [
            (0, s.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            L && (0, s.jsx)(m.B, { direction: "vertical", align: "center", children: (0, s.jsx)(v.y, {}) }),
            !L &&
                !G &&
                (0, s.jsx)(p.p, {
                    messageType: p.Y.ERROR,
                    action: (0, s.jsx)(x.$, {
                        variant: "overlay-secondary",
                        size: "sm",
                        text: V.intl.string(T.default.hDvmYP),
                        onClick: B,
                    }),
                    children: V.intl.string(O ? T.default.Bkmk4Y : T.default.cR6336),
                }),
            G &&
                (0, s.jsx)(m.B, {
                    direction: "vertical",
                    gap: 8,
                    children: Z.map((e) => {
                        let t,
                            a = (function (e) {
                                switch (e) {
                                    case c.mG.FACIAL_AGE_ESTIMATION:
                                        return d.t;
                                    case c.mG.ID_SELFIE_MATCH:
                                        return h.H;
                                    case c.mG.GOOGLE_WALLET:
                                        return u.A;
                                    default:
                                        return;
                                }
                            })(e.method);
                        t =
                            null != a
                                ? (0, s.jsx)(a, { size: "md", color: "var(--text-strong)" })
                                : null != e.icon
                                  ? (0, s.jsx)(S, { icon: e.icon })
                                  : (0, s.jsx)(E._, { size: "md", color: "var(--text-strong)" });
                        let l = `${e.method}-${e.vendor}`,
                            r = U === l;
                        return (0, s.jsxs)(
                            f.D,
                            {
                                className: i()(b.kZ, { [b.w1]: P }),
                                "aria-busy": r,
                                "aria-disabled": P,
                                onClick: P ? void 0 : () => z(e, l),
                                children: [
                                    (0, s.jsx)("div", { className: b.zc, children: t }),
                                    (0, s.jsxs)("div", {
                                        className: b.Qq,
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
                                                    className: b.Vp,
                                                    children: (0, s.jsx)(g.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    r
                                        ? (0, s.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: b.wt })
                                        : (0, s.jsx)(A._, { className: b.ai }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            !L &&
                G &&
                null != k &&
                (0, s.jsx)("div", {
                    className: b.qr,
                    children: (0, s.jsx)(g.E, { variant: "text-sm/normal", color: "text-muted", children: k }),
                }),
        ],
    });
};
