l.d(t, { default: () => L });
var a = l(477900),
    s = l(582128),
    r = l(503698),
    i = l.n(r),
    n = l(132500),
    c = l(772707),
    d = l(441574),
    o = l(991049),
    h = l(280645),
    u = l(952146),
    v = l(331322),
    m = l(289873),
    p = l(512950),
    E = l(821609),
    f = l(109112),
    x = l(939249),
    A = l(834730),
    _ = l(320448),
    g = l(975571),
    w = l(31720),
    R = l(847599),
    j = l(36149),
    I = l(228366),
    C = l(562465),
    y = l(652215);
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
var S = l(787301);
let T = function (e) {
    let { icon: t, size: l = 24 } = e;
    return (0, a.jsx)("svg", {
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": !0,
        children: t.paths.map((e) => (0, a.jsx)("path", { d: e.d, fillRule: e.fillRule, clipRule: e.fillRule }, e.d)),
    });
};
var V = l(516761),
    M = l(375708),
    b = l(658103);
let L = function (e) {
    let { transitionState: t, entryPoint: l, onClose: r, dismissable: C } = e,
        {
            loading: L,
            error: O,
            methods: Z,
            refetch: k,
        } = (function () {
            let [e, t] = s.useState(() => S.A.methodsV2 ?? []),
                [l, a] = s.useState(() => null == S.A.methodsV2),
                [r, i] = s.useState(!1),
                n = s.useRef(!0),
                c = s.useCallback(async (e) => {
                    let l = S.A.methodsV2;
                    if (!e && null != l) {
                        t(l), a(!1), i(!1);
                        return;
                    }
                    a(!0), i(!1);
                    try {
                        let e = await N();
                        I.h.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: e }),
                            n.current && t(e);
                    } catch {
                        n.current && i(!0);
                    } finally {
                        n.current && a(!1);
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
                    loading: l,
                    error: r,
                    methods: e,
                    refetch: s.useCallback(() => {
                        c(!0);
                    }, [c]),
                }
            );
        })(),
        B = Z.length > 0,
        { initiateAgeVerificationV2: G } = (0, j.Ny)({ onComplete: r, entryPoint: l, onMethodUnavailable: k }),
        H = s.useRef(!1),
        [D, U] = s.useState(null),
        F = null != D,
        P = s.useMemo(() => (0, n.A)(), []);
    s.useEffect(() => {
        (0, R.Bs)(P, R.WU.EXPRESSIVE_V2, l);
    }, [P, l]);
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
    return (0, a.jsxs)(c.k, {
        transitionState: t,
        onClose: r,
        gradientColor: "blue",
        dismissable: C,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f76008165147c5af20b933379e590f857bab9a8c0d80e1222e16dcd34b4b75c2.svg",
            aspectRatio: "21/9",
        },
        title: (0, j.ST)(l),
        subtitle: (0, j.mK)(l, () => {
            w.A.openUrl(g.A.getArticleURL(y.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                (0, R.St)(P, R.WU.EXPRESSIVE_V2, R._7.LEARN_MORE);
        }),
        children: [
            L && (0, a.jsx)(v.B, { direction: "vertical", align: "center", children: (0, a.jsx)(m.y, {}) }),
            !L &&
                !B &&
                (0, a.jsx)(p.p, {
                    messageType: p.Y.ERROR,
                    action: (0, a.jsx)(E.$, {
                        variant: "overlay-secondary",
                        size: "sm",
                        text: M.intl.string(V.default.hDvmYP),
                        onClick: k,
                    }),
                    children: M.intl.string(O ? V.default.Bkmk4Y : V.default.cR6336),
                }),
            B &&
                (0, a.jsx)(v.B, {
                    direction: "vertical",
                    gap: 8,
                    children: Z.map((e) => {
                        let t,
                            l = (function (e) {
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
                            null != l
                                ? (0, a.jsx)(l, { size: "md", color: "var(--text-strong)" })
                                : null != e.icon
                                  ? (0, a.jsx)(T, { icon: e.icon })
                                  : (0, a.jsx)(f._, { size: "md", color: "var(--text-strong)" });
                        let s = `${e.method}-${e.vendor}`,
                            r = D === s;
                        return (0, a.jsxs)(
                            x.D,
                            {
                                className: i()(b.kZ, { [b.w1]: F }),
                                "aria-busy": r,
                                onClick: F ? void 0 : () => void W(e, s),
                                children: [
                                    (0, a.jsx)("div", { className: b.zc, children: t }),
                                    (0, a.jsxs)("div", {
                                        className: b.Qq,
                                        children: [
                                            (0, a.jsx)(A.E, {
                                                variant: "text-md/normal",
                                                color: "text-strong",
                                                children: e.title,
                                            }),
                                            (0, a.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: e.description,
                                            }),
                                            null != e.providedBy &&
                                                (0, a.jsx)("div", {
                                                    className: b.Vp,
                                                    children: (0, a.jsx)(A.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-subtle",
                                                        children: e.providedBy,
                                                    }),
                                                }),
                                        ],
                                    }),
                                    r
                                        ? (0, a.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: b.wt })
                                        : (0, a.jsx)(_._, { className: b.ai }),
                                ],
                            },
                            s,
                        );
                    }),
                }),
        ],
    });
};
