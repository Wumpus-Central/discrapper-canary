a.r(t);
var n = a(477900),
    s = a(582128),
    r = a(503698),
    i = a.n(r),
    l = a(613412),
    d = a(834730),
    c = a(866665),
    u = a(408278),
    o = a(782134),
    m = a(139286),
    E = a(607470),
    h = a(224016),
    p = a(129230),
    _ = a(764231),
    f = a(105909),
    g = a(682901),
    v = a(652215),
    x = a(792996),
    T = a(31233);
a.d(
    t,
    {},
    {
        default: function (e) {
            let { levelUpData: t } = e,
                [a, r] = s.useState(!1),
                [N, y] = s.useState(!1),
                [b, j] = s.useState(!1),
                k = (0, f.Xb)(),
                R = s.useRef(null),
                A = s.useRef(null),
                { currentBadge: I, prevBadge: U, levelUpVideoSrc: L } = t,
                P = s.useCallback(() => {
                    let e = 700 * (I.id !== g.Ac.PREMIUM_TENURE_1_MONTH);
                    ((A.current.currentTime = 0),
                        setTimeout(() => {
                            (j(!0), A.current.play());
                        }, e));
                }, [I.id]);
            (s.useEffect(() => {
                a && P();
            }, [a, P]),
                (0, m.A)(
                    {
                        type: l.ImpressionTypes.POPOUT,
                        name: l.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
                        properties: { new_badge_id: I.id },
                    },
                    { trackOnInitialLoad: !0 },
                ),
                s.useEffect(() => {
                    null != A.current && A.current.load();
                }, []));
            let w = s.useCallback(() => {
                    (y(!1),
                        j(!1),
                        P(),
                        (R.current.style.display = "none"),
                        R.current.offsetWidth,
                        (R.current.style.display = ""),
                        p.default.track(v.HAw.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: I.id }));
                }, [I.id, P]),
                C = {
                    "--custom-old-badge-color": `linear-gradient(to right, ${t.prevBadgeTextGradient ?? "transparent"})`,
                    "--custom-new-badge-color": `linear-gradient(to right, ${t.currentBadgeTextGradient})`,
                };
            return (0, n.jsxs)("div", {
                className: i()(T.Qs, { [T.v6]: N, [T.Kc]: a, [T.A4]: b }),
                style: C,
                ref: R,
                children: [
                    (0, n.jsx)(E.A, {
                        ref: A,
                        className: T.Ki,
                        src: L,
                        playsInline: !0,
                        onLoadedData: () => r(!0),
                        onEnded: () => y(!0),
                    }),
                    (0, n.jsxs)("div", {
                        className: T.FS,
                        children: [
                            (0, n.jsx)(h.A, { width: 60, height: 15 }),
                            null != U &&
                                (0, n.jsx)(d.E, {
                                    variant: "nitro-md",
                                    className: i()(T.Vv, T.km),
                                    children: x.intl.string(U.nameUnformatted),
                                }),
                            (0, n.jsx)(d.E, {
                                variant: "nitro-md",
                                className: i()(T.Vv, T.Hl),
                                children: x.intl.string(I.nameUnformatted),
                            }),
                            null != k &&
                                (0, n.jsx)(d.E, {
                                    variant: "body-xs/medium",
                                    className: T.SD,
                                    children: x.intl.formatToPlainString(x.t["f/OGgM"], {
                                        timeFrame: (0, _.T)(I.id, I.tenureReqNumMonths),
                                        date: k,
                                    }),
                                }),
                            (0, n.jsx)("div", {
                                className: T.uu,
                                children: (0, n.jsx)(c.m, {
                                    text: x.intl.string(x.t.hsvh0i),
                                    children: (0, n.jsx)(u.K, {
                                        icon: o.PlayIcon,
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: w,
                                        "aria-label": x.intl.string(x.t.hsvh0i),
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);
