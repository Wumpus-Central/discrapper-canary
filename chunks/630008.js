a.d(t, { default: () => L });
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
    p = a(821609),
    E = a(109112),
    x = a(939249),
    f = a(834730),
    _ = a(320448),
    A = a(975571),
    w = a(31720),
    R = a(847599),
    j = a(931374);
let M = (0, a(945810).mj)({
    kind: "user",
    name: "2026-08-show-expressive-modal-subtitle-alt",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var I = a(228366),
    S = a(636537),
    C = a(652215);
async function N() {
    let e = (await S.Bo.get({ url: C.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body;
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
var T = a(40449),
    b = a(800121),
    B = a(375708),
    O = a(126106);
let L = function (e) {
    let { transitionState: t, entryPoint: a, onClose: n, dismissable: S } = e,
        {
            loading: L,
            error: k,
            methods: Z,
            footerMessage: U,
            outageBannerMessage: D,
            refetch: G,
        } = (function () {
            let [e, t] = l.useState(() => V.A.methodsV2 ?? []),
                [a, s] = l.useState(() => V.A.methodsV2FooterMessage),
                [n, r] = l.useState(() => V.A.methodsV2OutageBannerMessage),
                [i, o] = l.useState(() => null == V.A.methodsV2),
                [d, c] = l.useState(!1),
                h = l.useRef(!0),
                u = l.useCallback(async (e) => {
                    let a = V.A.methodsV2;
                    if (!e && null != a) {
                        t(a), s(V.A.methodsV2FooterMessage), r(V.A.methodsV2OutageBannerMessage), o(!1), c(!1);
                        return;
                    }
                    o(!0), c(!1);
                    try {
                        let e = await N();
                        I.h.dispatch({
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
        H = Z.length > 0,
        { initiateAgeVerificationV2: F } = (0, j.Ny)({ onComplete: n, entryPoint: a, onMethodUnavailable: G }),
        P = l.useRef(!1),
        [W, z] = l.useState(null),
        X = null != W,
        Y = l.useMemo(() => (0, i.A)(), []),
        J = M.useConfig({ location: "age_verification_expressive_v2_modal" }).enabled;
    l.useEffect(() => {
        (0, R.Bs)(Y, R.WU.EXPRESSIVE_V2, a);
    }, [Y, a]);
    let $ = l.useCallback(
        async (e, t) => {
            if (!P.current) {
                (0, R.St)(Y, R.WU.EXPRESSIVE_V2, R._7.METHOD_SELECT, e.method), (P.current = !0), z(t);
                try {
                    await F(e);
                } finally {
                    (P.current = !1), z(null);
                }
            }
        },
        [F, Y],
    );
    return (0, s.jsxs)(o.k, {
        transitionState: t,
        onClose: n,
        gradientColor: "blue",
        dismissable: S,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/78be134dd5dcecb7d0b26e1aead0c61f79a95c93893a4acc82c9828c87d2165a.svg",
            aspectRatio: "21/9",
        },
        title: (0, j.ST)(a, !0),
        subtitle: (0, j.mK)(
            a,
            () => {
                w.A.openUrl(A.A.getArticleURL(C.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                    (0, R.St)(Y, R.WU.EXPRESSIVE_V2, R._7.LEARN_MORE);
            },
            void 0,
            J
                ? () => {
                      w.A.openUrl(T.zS), (0, R.St)(Y, R.WU.EXPRESSIVE_V2, R._7.TRUSTED_PROVIDERS);
                  }
                : void 0,
            !0,
        ),
        children: [
            (0, s.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            L && (0, s.jsx)(m.B, { direction: "vertical", align: "center", children: (0, s.jsx)(v.y, {}) }),
            !L && null != D && (0, s.jsx)(g.p, { messageType: g.Y.WARNING, className: O.Ih, children: D }),
            !L &&
                !H &&
                (0, s.jsx)(g.p, {
                    messageType: g.Y.ERROR,
                    action: (0, s.jsx)(p.$, {
                        variant: "overlay-secondary",
                        size: "sm",
                        text: B.intl.string(b.default.hDvmYP),
                        onClick: G,
                    }),
                    children: B.intl.string(k ? b.default.Bkmk4Y : b.default.cR6336),
                }),
            H &&
                (0, s.jsx)(m.B, {
                    direction: "vertical",
                    gap: 8,
                    children: Z.map((e) => {
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
                                  : (0, s.jsx)(E._, { size: "md", color: "var(--text-strong)" });
                        let l = `${e.method}-${e.vendor}`,
                            n = W === l;
                        return (0, s.jsxs)(
                            x.D,
                            {
                                className: r()(O.kZ, { [O.w1]: X }),
                                "aria-busy": n,
                                "aria-disabled": X,
                                onClick: X ? void 0 : () => $(e, l),
                                children: [
                                    (0, s.jsx)("div", { className: O.zc, children: t }),
                                    (0, s.jsxs)("div", {
                                        className: O.Qq,
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
                                                    className: O.Vp,
                                                    children: (0, s.jsx)(f.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    n
                                        ? (0, s.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: O.wt })
                                        : (0, s.jsx)(_._, { className: O.ai }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            !L &&
                H &&
                null != U &&
                (0, s.jsx)("div", {
                    className: O.qr,
                    children: (0, s.jsx)(f.E, { variant: "text-sm/normal", color: "text-muted", children: U }),
                }),
        ],
    });
};
