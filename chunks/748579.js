a.r(t), a.d(t, { default: () => b });
var n = a(627968),
    s = a(64700),
    i = a(503698),
    r = a.n(i),
    d = a(110259),
    l = a(990078),
    c = a(834730),
    _ = a(408278),
    u = a(782134),
    o = a(139286),
    m = a(607470),
    E = a(224016),
    h = a(954571),
    p = a(764231),
    x = a(112848),
    g = a(788868),
    v = a(652215),
    T = a(985018),
    f = a(669622);
function b(e) {
    let { levelUpData: t } = e,
        [a, i] = s.useState(!1),
        [b, N] = s.useState(!1),
        [y, k] = s.useState(!1),
        j = (0, x.Xb)(),
        w = s.useRef(null),
        A = s.useRef(null),
        { currentBadge: R, prevBadge: U, levelUpVideoSrc: C } = t,
        D = s.useCallback(() => {
            let e = 700 * (R.id !== g.Ac.PREMIUM_TENURE_1_MONTH);
            (A.current.currentTime = 0),
                setTimeout(() => {
                    k(!0), A.current.play();
                }, e);
        }, [R.id]);
    s.useEffect(() => {
        a && D();
    }, [a, D]),
        (0, o.A)(
            {
                type: d.ImpressionTypes.POPOUT,
                name: d.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
                properties: { new_badge_id: R.id },
            },
            { trackOnInitialLoad: !0 },
        ),
        s.useEffect(() => {
            null != A.current && A.current.load();
        }, []);
    let I = s.useCallback(() => {
            N(!1),
                k(!1),
                D(),
                (w.current.style.display = "none"),
                w.current.offsetWidth,
                (w.current.style.display = ""),
                h.default.track(v.HAw.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: R.id });
        }, [R.id, D]),
        L = {
            "--custom-old-badge-color": `linear-gradient(to right, ${t.prevBadgeTextGradient ?? "transparent"})`,
            "--custom-new-badge-color": `linear-gradient(to right, ${t.currentBadgeTextGradient})`,
        };
    return (0, n.jsxs)("div", {
        className: r()(f.Qs, { [f.v6]: b, [f.Kc]: a, [f.A4]: y }),
        style: L,
        ref: w,
        children: [
            (0, n.jsx)(m.A, {
                ref: A,
                className: f.Ki,
                src: C,
                playsInline: !0,
                onLoadedData: () => i(!0),
                onEnded: () => N(!0),
            }),
            (0, n.jsxs)("div", {
                className: f.FS,
                children: [
                    (0, n.jsx)(E.A, { width: 60, height: 15 }),
                    null != U &&
                        (0, n.jsx)(c.E, {
                            variant: "display-md",
                            className: r()(f.Vv, f.km),
                            children: T.intl.string(U.nameUnformatted),
                        }),
                    (0, n.jsx)(c.E, {
                        variant: "display-md",
                        className: r()(f.Vv, f.Hl),
                        children: T.intl.string(R.nameUnformatted),
                    }),
                    null != j &&
                        (0, n.jsx)(c.E, {
                            variant: "text-xs/medium",
                            className: f.SD,
                            children: T.intl.formatToPlainString(T.t["f/OGgM"], {
                                timeFrame: (0, p.T)(R.id, R.tenureReqNumMonths),
                                date: j,
                            }),
                        }),
                    (0, n.jsx)("div", {
                        className: f.uu,
                        children: (0, n.jsx)(l.m, {
                            text: T.intl.string(T.t.hsvh0i),
                            children: (0, n.jsx)(_.K, {
                                icon: u.u,
                                variant: "secondary",
                                size: "sm",
                                onClick: I,
                                "aria-label": T.intl.string(T.t.hsvh0i),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
