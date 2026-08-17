a.r(t), a.d(t, { default: () => y });
var n = a(477900),
    s = a(582128),
    i = a(503698),
    r = a.n(i),
    l = a(562708),
    d = a(834730),
    c = a(866665),
    u = a(408278),
    o = a(782134),
    m = a(139286),
    E = a(607470),
    h = a(224016),
    p = a(174459),
    _ = a(764231),
    f = a(878784),
    g = a(202541),
    x = a(652215),
    v = a(375708),
    T = a(312094);
function y(e) {
    let { levelUpData: t } = e,
        [a, i] = s.useState(!1),
        [y, N] = s.useState(!1),
        [b, j] = s.useState(!1),
        k = (0, f.Xb)(),
        R = s.useRef(null),
        A = s.useRef(null),
        { currentBadge: I, prevBadge: U, levelUpVideoSrc: L } = t,
        P = s.useCallback(() => {
            let e = 700 * (I.id !== g.Ac.PREMIUM_TENURE_1_MONTH);
            (A.current.currentTime = 0),
                setTimeout(() => {
                    j(!0), A.current.play();
                }, e);
        }, [I.id]);
    s.useEffect(() => {
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
        }, []);
    let w = s.useCallback(() => {
            N(!1),
                j(!1),
                P(),
                (R.current.style.display = "none"),
                R.current.offsetWidth,
                (R.current.style.display = ""),
                p.default.track(x.HAw.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: I.id });
        }, [I.id, P]),
        C = {
            "--custom-old-badge-color": `linear-gradient(to right, ${t.prevBadgeTextGradient ?? "transparent"})`,
            "--custom-new-badge-color": `linear-gradient(to right, ${t.currentBadgeTextGradient})`,
        };
    return (0, n.jsxs)("div", {
        className: r()(T.Qs, { [T.v6]: y, [T.Kc]: a, [T.A4]: b }),
        style: C,
        ref: R,
        children: [
            (0, n.jsx)(E.A, {
                ref: A,
                className: T.Ki,
                src: L,
                playsInline: !0,
                onLoadedData: () => i(!0),
                onEnded: () => N(!0),
            }),
            (0, n.jsxs)("div", {
                className: T.FS,
                children: [
                    (0, n.jsx)(h.A, { width: 60, height: 15 }),
                    null != U &&
                        (0, n.jsx)(d.E, {
                            variant: "display-md",
                            className: r()(T.Vv, T.km),
                            children: v.intl.string(U.nameUnformatted),
                        }),
                    (0, n.jsx)(d.E, {
                        variant: "display-md",
                        className: r()(T.Vv, T.Hl),
                        children: v.intl.string(I.nameUnformatted),
                    }),
                    null != k &&
                        (0, n.jsx)(d.E, {
                            variant: "text-xs/medium",
                            className: T.SD,
                            children: v.intl.formatToPlainString(v.t["f/OGgM"], {
                                timeFrame: (0, _.T)(I.id, I.tenureReqNumMonths),
                                date: k,
                            }),
                        }),
                    (0, n.jsx)("div", {
                        className: T.uu,
                        children: (0, n.jsx)(c.m, {
                            text: v.intl.string(v.t.hsvh0i),
                            children: (0, n.jsx)(u.K, {
                                icon: o.PlayIcon,
                                variant: "secondary",
                                size: "sm",
                                onClick: w,
                                "aria-label": v.intl.string(v.t.hsvh0i),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
