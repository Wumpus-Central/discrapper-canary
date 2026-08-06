a.d(t, { default: () => L });
var l = a(477900),
    s = a(582128),
    r = a(503698),
    i = a.n(r),
    n = a(132500),
    c = a(772707),
    d = a(441574),
    o = a(991049),
    h = a(280645),
    u = a(952146),
    v = a(331322),
    m = a(289873),
    p = a(512950),
    E = a(821609),
    f = a(109112),
    x = a(939249),
    A = a(834730),
    g = a(320448),
    _ = a(975571),
    w = a(31720),
    R = a(847599),
    j = a(36149),
    I = a(228366),
    C = a(562465),
    y = a(652215);
async function N() {
    return (await C.Bo.get({ url: y.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((e) => {
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
        };
    });
}
var S = a(787301);
let T = function (e) {
    let { icon: t, size: a = 24 } = e;
    return (0, l.jsx)("svg", {
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": !0,
        children: t.paths.map((e) => (0, l.jsx)("path", { d: e.d, fillRule: e.fillRule, clipRule: e.fillRule }, e.d)),
    });
};
var V = a(516761),
    M = a(375708),
    b = a(658103);
let L = function (e) {
    let { transitionState: t, entryPoint: a, onClose: r, dismissable: C } = e,
        {
            loading: L,
            error: O,
            methods: Z,
            refetch: k,
        } = (function () {
            let [e, t] = s.useState(() => S.A.methodsV2 ?? []),
                [a, l] = s.useState(() => null == S.A.methodsV2),
                [r, i] = s.useState(!1),
                n = s.useRef(!0),
                c = s.useCallback(async (e) => {
                    let a = S.A.methodsV2;
                    if (!e && null != a) {
                        t(a), l(!1), i(!1);
                        return;
                    }
                    l(!0), i(!1);
                    try {
                        let e = await N();
                        I.h.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: e }),
                            n.current && t(e);
                    } catch {
                        n.current && i(!0);
                    } finally {
                        n.current && l(!1);
                    }
                }, []);
            return (
                s.useEffect(
                    () => (
                        (n.current = !0),
                        c(!1),
                        () => {
                            n.current = !1;
                        }
                    ),
                    [c],
                ),
                {
                    loading: a,
                    error: r,
                    methods: e,
                    refetch: s.useCallback(() => {
                        c(!0);
                    }, [c]),
                }
            );
        })(),
        B = Z.length > 0,
        { initiateAgeVerificationV2: G } = (0, j.Ny)({ onComplete: r, entryPoint: a, onMethodUnavailable: k }),
        H = s.useRef(!1),
        [D, U] = s.useState(null),
        F = null != D,
        P = s.useMemo(() => (0, n.A)(), []);
    s.useEffect(() => {
        (0, R.Bs)(P, R.WU.EXPRESSIVE_V2, a);
    }, [P, a]);
    let W = s.useCallback(
        async (e, t) => {
            if (!H.current) {
                (0, R.St)(P, R.WU.EXPRESSIVE_V2, R._7.METHOD_SELECT, e.method), (H.current = !0), U(t);
                try {
                    await G(e.method, e.vendor);
                } finally {
                    (H.current = !1), U(null);
                }
            }
        },
        [G, P],
    );
    return (0, l.jsxs)(c.k, {
        transitionState: t,
        onClose: r,
        gradientColor: "blue",
        dismissable: C,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f76008165147c5af20b933379e590f857bab9a8c0d80e1222e16dcd34b4b75c2.svg",
            aspectRatio: "21/9",
        },
        title: (0, j.ST)(a),
        subtitle: (0, j.mK)(a, () => {
            w.A.openUrl(_.A.getArticleURL(y.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                (0, R.St)(P, R.WU.EXPRESSIVE_V2, R._7.LEARN_MORE);
        }),
        children: [
            (0, l.jsx)("div", { "data-expressive-v2-graphic": !0, hidden: !0 }),
            L && (0, l.jsx)(v.B, { direction: "vertical", align: "center", children: (0, l.jsx)(m.y, {}) }),
            !L &&
                !B &&
                (0, l.jsx)(p.p, {
                    messageType: p.Y.ERROR,
                    action: (0, l.jsx)(E.$, {
                        variant: "overlay-secondary",
                        size: "sm",
                        text: M.intl.string(V.default.hDvmYP),
                        onClick: k,
                    }),
                    children: M.intl.string(O ? V.default.Bkmk4Y : V.default.cR6336),
                }),
            B &&
                (0, l.jsx)(v.B, {
                    direction: "vertical",
                    gap: 8,
                    children: Z.map((e) => {
                        let t,
                            a = (function (e) {
                                switch (e) {
                                    case d.mG.FACIAL_AGE_ESTIMATION:
                                        return o.t;
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
                                ? (0, l.jsx)(a, { size: "md", color: "var(--text-strong)" })
                                : null != e.icon
                                  ? (0, l.jsx)(T, { icon: e.icon })
                                  : (0, l.jsx)(f._, { size: "md", color: "var(--text-strong)" });
                        let s = `${e.method}-${e.vendor}`,
                            r = D === s;
                        return (0, l.jsxs)(
                            x.D,
                            {
                                className: i()(b.kZ, { [b.w1]: F }),
                                "aria-busy": r,
                                "aria-disabled": F,
                                onClick: F ? void 0 : () => W(e, s),
                                children: [
                                    (0, l.jsx)("div", { className: b.zc, children: t }),
                                    (0, l.jsxs)("div", {
                                        className: b.Qq,
                                        children: [
                                            (0, l.jsx)(A.E, {
                                                variant: "text-md/normal",
                                                color: "text-strong",
                                                children: e.title,
                                            }),
                                            (0, l.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: e.description,
                                            }),
                                            null != e.providedBy &&
                                                (0, l.jsx)("div", {
                                                    className: b.Vp,
                                                    children: (0, l.jsx)(A.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    r
                                        ? (0, l.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: b.wt })
                                        : (0, l.jsx)(g._, { className: b.ai }),
                                ],
                            },
                            s,
                        );
                    }),
                }),
        ],
    });
};
