n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    a = n(692547),
    o = n(198168),
    s = n(481060),
    l = n(799607),
    c = n(787528),
    u = n(474936),
    d = n(388032);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {
        bronze: {
            type: "custom",
            start: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
            end: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END,
        },
        silver: {
            type: "custom",
            start: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
            end: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END,
        },
        gold: {
            type: "custom",
            start: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
            end: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END,
        },
        platinum: {
            type: "custom",
            start: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
            end: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END,
        },
        diamond: {
            type: "custom",
            start: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
            end: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END,
        },
        emerald: {
            type: "custom",
            start: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
            end: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END,
        },
        ruby: {
            type: "custom",
            start: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
            end: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END,
        },
        opal: {
            type: "custom",
            start: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
            end: a.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END,
        },
    },
    g = (e) => {
        let {
                title: t,
                body: n,
                showGraphic: a,
                showActions: f,
                badgeId: _,
                showProgress: g,
                progressCircleText: E,
                progressCirclePercent: b,
                progressCircleUrgency: y,
                delay: O,
                size: v,
                gradientColor: S,
                estimatedTooltipHeight: I,
            } = e,
            T = i.useRef(null),
            A = i.useRef(null),
            C = i.useMemo(
                () =>
                    ({
                        bronze: u.VU.PREMIUM_TENURE_1_MONTH,
                        silver: u.VU.PREMIUM_TENURE_3_MONTH,
                        gold: u.VU.PREMIUM_TENURE_6_MONTH,
                        platinum: u.VU.PREMIUM_TENURE_12_MONTH,
                        diamond: u.VU.PREMIUM_TENURE_24_MONTH,
                        emerald: u.VU.PREMIUM_TENURE_36_MONTH,
                        ruby: u.VU.PREMIUM_TENURE_60_MONTH,
                        opal: u.VU.PREMIUM_TENURE_72_MONTH,
                    })[_],
                [_],
            ),
            N = null != C ? (0, c.J)(C) : null,
            P = i.useMemo(() => {
                if (null == C) return "";
                let e = u.vK[C];
                return (d.intl.string(d.t.lG6a5x) + " " + d.intl.string(e.nameUnformatted)).toLocaleUpperCase();
            }, [C]),
            R = i.useMemo(() => {
                if (!a || null == N) return;
                let e = g
                    ? {
                          progressCircleText: E,
                          progressCirclePercent: b,
                          progressCircleUrgency: y,
                      }
                    : {};
                return {
                    type: "dynamic",
                    component: o.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                    aspectRatio: "6/4",
                    props: p(
                        {
                            src: N,
                            alt: P,
                        },
                        e,
                    ),
                };
            }, [a, N, P, g, E, b, y]),
            w = {
                title: t,
                body: n,
                graphic: R,
                actions: i.useMemo(() => {
                    if (f)
                        return [
                            {
                                text: "Got it",
                                variant: "primary",
                            },
                        ];
                }, [f]),
                delay: O,
                size: v,
                gradientColor: i.useMemo(() => ("string" == typeof S && S in h ? h[S] : S), [S]),
                estimatedTooltipHeight: I,
            };
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "Hover or focus these buttons.",
                }),
                (0, r.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "16px",
                        width: "100%",
                        marginTop: "200px",
                    },
                    children: [
                        (0, r.jsx)(
                            l.B,
                            m(p({ targetElementRef: T }, w), {
                                children: (0, r.jsx)(s.Button, {
                                    buttonRef: T,
                                    variant: "primary",
                                    text: "Left",
                                }),
                            }),
                        ),
                        (0, r.jsx)(
                            l.B,
                            m(p({ targetElementRef: A }, w), {
                                children: (0, r.jsx)(s.Button, {
                                    buttonRef: A,
                                    variant: "primary",
                                    text: "Right",
                                }),
                            }),
                        ),
                    ],
                }),
            ],
        });
    };
