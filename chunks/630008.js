a.d(t, { default: () => Z });
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
    R = a(847599),
    S = a(931374);
let I = (0, a(945810).mj)({
    kind: "user",
    name: "2026-08-show-expressive-modal-subtitle-alt",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var j = a(228366),
    M = a(393033),
    C = a(636537),
    N = a(280450),
    V = a(652215);
function y(e) {
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
async function T() {
    return y((await C.Bo.get({ url: V.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body);
}
async function b() {
    let e = N.default.getSuspendedUserToken();
    return y(
        (await C.Bo.post({ url: V.Rsh.AGE_VERIFICATION_SUSPENDED_METHODS_V2, body: { token: e }, rejectWithError: !0 }))
            .body,
    );
}
var O = a(787301);
let B = function (e) {
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
    D = a(841365),
    L = a(375708),
    U = a(126106);
let Z = function (e) {
    let { transitionState: t, entryPoint: a, onComplete: n, onClose: C, dismissable: N } = e,
        {
            loading: y,
            error: Z,
            methods: G,
            footerMessage: H,
            outageBannerMessage: F,
            refetch: P,
        } = (function () {
            let [e, t] = l.useState(() => O.A.methodsV2 ?? []),
                [a, s] = l.useState(() => O.A.methodsV2FooterMessage),
                [n, r] = l.useState(() => O.A.methodsV2OutageBannerMessage),
                [i, o] = l.useState(() => null == O.A.methodsV2),
                [d, c] = l.useState(!1),
                h = l.useRef(!0),
                u = l.useCallback(async (e) => {
                    let a = O.A.methodsV2;
                    if (!e && null != a) {
                        t(a), s(O.A.methodsV2FooterMessage), r(O.A.methodsV2OutageBannerMessage), o(!1), c(!1);
                        return;
                    }
                    o(!0), c(!1);
                    try {
                        let e = (0, M.qn)() ? await b() : await T();
                        j.h.dispatch({
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
        W = G.length > 0,
        z = l.useCallback(() => {
            n?.(), C();
        }, [n, C]),
        { initiateAgeVerificationV2: X } = (0, S.Ny)({ onComplete: z, entryPoint: a, onMethodUnavailable: P }),
        Y = l.useRef(!1),
        [q, J] = l.useState(null),
        $ = null != q,
        K = l.useMemo(() => (0, i.A)(), []),
        Q = I.useConfig({ location: "age_verification_expressive_v2_modal" }).enabled;
    l.useEffect(() => {
        (0, R.Bs)(K, R.WU.EXPRESSIVE_V2, a);
    }, [K, a]);
    let ee = l.useCallback(
        async (e, t) => {
            if (!Y.current) {
                (0, R.St)(K, R.WU.EXPRESSIVE_V2, R._7.METHOD_SELECT, e.method), (Y.current = !0), J(t);
                try {
                    await X(e);
                } finally {
                    (Y.current = !1), J(null);
                }
            }
        },
        [X, K],
    );
    return (0, s.jsxs)(o.k, {
        transitionState: t,
        onClose: C,
        gradientColor: "blue",
        dismissable: N,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/78be134dd5dcecb7d0b26e1aead0c61f79a95c93893a4acc82c9828c87d2165a.svg",
            aspectRatio: "21/9",
        },
        title: (0, S.ST)(a, !0),
        subtitle: (0, S.mK)(
            a,
            () => {
                w.A.openUrl(A.A.getArticleURL(V.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                    (0, R.St)(K, R.WU.EXPRESSIVE_V2, R._7.LEARN_MORE);
            },
            void 0,
            Q
                ? () => {
                      w.A.openUrl(k.zS), (0, R.St)(K, R.WU.EXPRESSIVE_V2, R._7.TRUSTED_PROVIDERS);
                  }
                : void 0,
            !0,
        ),
        children: [
            (0, s.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            y && (0, s.jsx)(m.B, { direction: "vertical", align: "center", children: (0, s.jsx)(v.y, {}) }),
            !y && null != F && (0, s.jsx)(g.p, { messageType: g.Y.WARNING, className: U.Ih, children: F }),
            !y &&
                !W &&
                (0, s.jsx)(g.p, {
                    messageType: g.Y.ERROR,
                    action: (0, s.jsx)(E.$, {
                        variant: "overlay-secondary",
                        size: "sm",
                        text: L.intl.string(D.default.hDvmYP),
                        onClick: P,
                    }),
                    children: L.intl.string(Z ? D.default.Bkmk4Y : D.default.cR6336),
                }),
            W &&
                (0, s.jsx)(m.B, {
                    direction: "vertical",
                    gap: 8,
                    children: G.map((e) => {
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
                                  ? (0, s.jsx)(B, { icon: e.icon })
                                  : (0, s.jsx)(p._, { size: "md", color: "var(--text-strong)" });
                        let l = `${e.method}-${e.vendor}`,
                            n = q === l;
                        return (0, s.jsxs)(
                            f.D,
                            {
                                className: r()(U.kZ, { [U.w1]: $ }),
                                "aria-busy": n,
                                "aria-disabled": $,
                                onClick: $ ? void 0 : () => ee(e, l),
                                children: [
                                    (0, s.jsx)("div", { className: U.zc, children: t }),
                                    (0, s.jsxs)("div", {
                                        className: U.Qq,
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
                                                    className: U.Vp,
                                                    children: (0, s.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    n
                                        ? (0, s.jsx)(v.y, { type: v.t.SPINNING_CIRCLE_SIMPLE, className: U.wt })
                                        : (0, s.jsx)(_._, { className: U.ai }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            !y &&
                W &&
                null != H &&
                (0, s.jsx)("div", {
                    className: U.qr,
                    children: (0, s.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: H }),
                }),
        ],
    });
};
