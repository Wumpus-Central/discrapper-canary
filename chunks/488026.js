l.d(t, { default: () => M });
var a = l(477900),
    s = l(582128),
    r = l(132500),
    i = l(772707),
    n = l(441574),
    c = l(991049),
    d = l(280645),
    o = l(952146),
    h = l(331322),
    u = l(289873),
    v = l(512950),
    m = l(821609),
    p = l(109112),
    E = l(939249),
    f = l(834730),
    x = l(320448),
    A = l(975571),
    g = l(31720),
    _ = l(847599),
    w = l(36149),
    R = l(228366),
    j = l(562465),
    C = l(652215);
async function I() {
    return (await j.Bo.get({ url: C.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((e) => {
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
var T = l(787301);
let y = function (e) {
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
    N = l(375708),
    S = l(658103);
let M = function (e) {
    let { transitionState: t, entryPoint: l, onClose: j, dismissable: M } = e,
        {
            loading: b,
            error: O,
            methods: Z,
            refetch: k,
        } = (function () {
            let [e, t] = s.useState(() => T.A.methodsV2 ?? []),
                [l, a] = s.useState(() => null == T.A.methodsV2),
                [r, i] = s.useState(!1),
                n = s.useRef(!0),
                c = s.useCallback(async (e) => {
                    let l = T.A.methodsV2;
                    if (!e && null != l) {
                        t(l), a(!1), i(!1);
                        return;
                    }
                    a(!0), i(!1);
                    try {
                        let e = await I();
                        R.h.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: e }),
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
        L = Z.length > 0,
        { initiateAgeVerificationV2: B } = (0, w.Ny)({ onComplete: j, entryPoint: l }),
        H = s.useRef(!1),
        D = s.useMemo(() => (0, r.A)(), []);
    s.useEffect(() => {
        (0, _.Bs)(D, _.WU.EXPRESSIVE_V2, l);
    }, [D, l]);
    let G = s.useCallback(
        async (e) => {
            if (!H.current) {
                (0, _.St)(D, _.WU.EXPRESSIVE_V2, _._7.METHOD_SELECT, e.method), (H.current = !0);
                try {
                    await B(e.method, e.vendor);
                } finally {
                    H.current = !1;
                }
            }
        },
        [B, D],
    );
    return (0, a.jsxs)(i.k, {
        transitionState: t,
        onClose: j,
        gradientColor: "blue",
        dismissable: M,
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/f76008165147c5af20b933379e590f857bab9a8c0d80e1222e16dcd34b4b75c2.svg",
            aspectRatio: "21/9",
        },
        title: (0, w.ST)(l),
        subtitle: (0, w.mK)(l, () => {
            g.A.openUrl(A.A.getArticleURL(C.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                (0, _.St)(D, _.WU.EXPRESSIVE_V2, _._7.LEARN_MORE);
        }),
        children: [
            b && (0, a.jsx)(h.B, { direction: "vertical", align: "center", children: (0, a.jsx)(u.y, {}) }),
            !b &&
                !L &&
                (0, a.jsx)(v.p, {
                    messageType: v.Y.ERROR,
                    action: (0, a.jsx)(m.$, {
                        variant: "overlay-secondary",
                        size: "sm",
                        text: N.intl.string(V.default.hDvmYP),
                        onClick: k,
                    }),
                    children: N.intl.string(O ? V.default.Bkmk4Y : V.default.cR6336),
                }),
            L &&
                (0, a.jsx)(h.B, {
                    direction: "vertical",
                    gap: 8,
                    children: Z.map((e) => {
                        let t,
                            l = (function (e) {
                                switch (e) {
                                    case n.mG.FACIAL_AGE_ESTIMATION:
                                        return c.t;
                                    case n.mG.ID_SELFIE_MATCH:
                                        return d.H;
                                    case n.mG.GOOGLE_WALLET:
                                        return o.A;
                                    default:
                                        return;
                                }
                            })(e.method);
                        return (
                            (t =
                                null != l
                                    ? (0, a.jsx)(l, { size: "md", color: "var(--text-strong)" })
                                    : null != e.icon
                                      ? (0, a.jsx)(y, { icon: e.icon })
                                      : (0, a.jsx)(p._, { size: "md", color: "var(--text-strong)" })),
                            (0, a.jsxs)(
                                E.D,
                                {
                                    className: S.kZ,
                                    onClick: () => {
                                        G(e);
                                    },
                                    children: [
                                        (0, a.jsx)("div", { className: S.zc, children: t }),
                                        (0, a.jsxs)("div", {
                                            className: S.Qq,
                                            children: [
                                                (0, a.jsx)(f.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-strong",
                                                    children: e.title,
                                                }),
                                                (0, a.jsx)(f.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: e.description,
                                                }),
                                                null != e.providedBy &&
                                                    (0, a.jsx)("div", {
                                                        className: S.Vp,
                                                        children: (0, a.jsx)(f.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: e.providedBy,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, a.jsx)(x._, { className: S.ai }),
                                    ],
                                },
                                `${e.method}-${e.vendor}`,
                            )
                        );
                    }),
                }),
        ],
    });
};
