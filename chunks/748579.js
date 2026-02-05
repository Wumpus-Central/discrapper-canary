a.r(t), a.d(t, { default: () => v });
var n = a(627968),
    s = a(64700),
    i = a(503698),
    r = a.n(i),
    d = a(110259),
    l = a(990078),
    c = a(397927),
    _ = a(139286),
    u = a(607470),
    o = a(224016),
    m = a(954571),
    x = a(764231),
    h = a(112848),
    p = a(788868),
    E = a(652215),
    T = a(985018),
    g = a(962131);
function v(e) {
    let { levelUpData: t } = e,
        [a, i] = s.useState(!1),
        [v, f] = s.useState(!1),
        [b, N] = s.useState(!1),
        y = (0, h.Xb)(),
        k = s.useRef(null),
        j = s.useRef(null),
        { currentBadge: w, prevBadge: A, levelUpVideoSrc: R } = t,
        U = s.useCallback(() => {
            let e = 700 * (w.id !== p.Ac.PREMIUM_TENURE_1_MONTH);
            (j.current.currentTime = 0),
                setTimeout(() => {
                    N(!0), j.current.play();
                }, e);
        }, [w.id]);
    s.useEffect(() => {
        a && U();
    }, [a, U]),
        (0, _.A)(
            {
                type: d.ImpressionTypes.POPOUT,
                name: d.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
                properties: { new_badge_id: w.id },
            },
            { trackOnInitialLoad: !0 },
        ),
        s.useEffect(() => {
            null != j.current && j.current.load();
        }, []);
    let C = s.useCallback(() => {
            f(!1),
                N(!1),
                U(),
                (k.current.style.display = "none"),
                k.current.offsetWidth,
                (k.current.style.display = ""),
                m.default.track(E.HAw.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: w.id });
        }, [w.id, U]),
        D = {
            "--custom-old-badge-color": `linear-gradient(to right, ${t.prevBadgeTextGradient ?? "transparent"})`,
            "--custom-new-badge-color": `linear-gradient(to right, ${t.currentBadgeTextGradient})`,
        };
    return (0, n.jsxs)("div", {
        className: r()(g.Qs, { [g.v6]: v, [g.Kc]: a, [g.A4]: b }),
        style: D,
        ref: k,
        children: [
            (0, n.jsx)(u.A, {
                ref: j,
                className: g.Ki,
                src: R,
                playsInline: !0,
                onLoadedData: () => i(!0),
                onEnded: () => f(!0),
            }),
            (0, n.jsxs)("div", {
                className: g.FS,
                children: [
                    (0, n.jsx)(o.A, { width: 60, height: 15 }),
                    null != A &&
                        (0, n.jsx)(c.Text, {
                            variant: "display-md",
                            className: r()(g.Vv, g.km),
                            children: T.intl.string(A.nameUnformatted),
                        }),
                    (0, n.jsx)(c.Text, {
                        variant: "display-md",
                        className: r()(g.Vv, g.Hl),
                        children: T.intl.string(w.nameUnformatted),
                    }),
                    null != y &&
                        (0, n.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            className: g.SD,
                            children: T.intl.formatToPlainString(T.t["f/OGgM"], {
                                timeFrame: (0, x.T)(w.id, w.tenureReqNumMonths),
                                date: y,
                            }),
                        }),
                    (0, n.jsx)("div", {
                        className: g.uu,
                        children: (0, n.jsx)(l.m, {
                            text: T.intl.string(T.t.hsvh0i),
                            children: (0, n.jsx)(c.K0, {
                                icon: c.udU,
                                variant: "secondary",
                                size: "sm",
                                onClick: C,
                                "aria-label": T.intl.string(T.t.hsvh0i),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
