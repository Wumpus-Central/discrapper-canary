n.r(t), n.d(t, { default: () => E }), n(388685);
var a = n(54381),
    d = n(473749),
    s = n(120356),
    i = n.n(s),
    r = n(990547),
    c = n(28664),
    l = n(481060),
    o = n(213609),
    b = n(70097),
    u = n(483444),
    x = n(626135),
    _ = n(553896),
    m = n(848572),
    T = n(474936),
    g = n(981631),
    h = n(388032),
    p = n(122900);
function E(e) {
    var t;
    let { levelUpData: n } = e,
        [s, E] = d.useState(!1),
        [f, v] = d.useState(!1),
        [N, y] = d.useState(!1),
        U = (0, m.GG)(),
        w = d.useRef(null),
        B = d.useRef(null),
        { currentBadge: j, prevBadge: C, levelUpVideoSrc: R } = n,
        k = d.useCallback(() => {
            let e = 700 * (j.id !== T.VU.PREMIUM_TENURE_1_MONTH);
            (B.current.currentTime = 0),
                setTimeout(() => {
                    y(!0), B.current.play();
                }, e);
        }, [j.id]);
    d.useEffect(() => {
        s && k();
    }, [s, k]),
        (0, o.Z)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
                properties: { new_badge_id: j.id },
            },
            { trackOnInitialLoad: !0 },
        ),
        d.useEffect(() => {
            null != B.current && B.current.load();
        }, []);
    let I = d.useCallback(() => {
            v(!1),
                y(!1),
                k(),
                (w.current.style.display = "none"),
                w.current.offsetWidth,
                (w.current.style.display = ""),
                x.default.track(g.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: j.id });
        }, [j.id, k]),
        L = {
            "--custom-old-badge-color": "linear-gradient(to right, ".concat(
                null != (t = n.prevBadgeTextGradient) ? t : "transparent",
                ")",
            ),
            "--custom-new-badge-color": "linear-gradient(to right, ".concat(n.currentBadgeTextGradient, ")"),
        };
    return (0, a.jsxs)("div", {
        className: i()(p.content, {
            [p.ended]: f,
            [p.loaded]: s,
            [p.started]: N,
        }),
        style: L,
        ref: w,
        children: [
            (0, a.jsx)(b.Z, {
                ref: B,
                className: p.video,
                src: R,
                playsInline: !0,
                onLoadedData: () => E(!0),
                onEnded: () => v(!0),
            }),
            (0, a.jsxs)("div", {
                className: p.textContainer,
                children: [
                    (0, a.jsx)(u.Z, {
                        width: 60,
                        height: 15,
                    }),
                    null != C &&
                        (0, a.jsx)(l.Text, {
                            variant: "display-md",
                            className: i()(p.badgeText, p.old),
                            children: h.intl.string(C.nameUnformatted),
                        }),
                    (0, a.jsx)(l.Text, {
                        variant: "display-md",
                        className: i()(p.badgeText, p.new),
                        children: h.intl.string(j.nameUnformatted),
                    }),
                    null != U &&
                        (0, a.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            className: p.subscribedText,
                            children: h.intl.formatToPlainString(h.t["f/OGgM"], {
                                timeFrame: (0, _.q)(j.id, j.tenureReqNumMonths),
                                date: U,
                            }),
                        }),
                    (0, a.jsx)("div", {
                        className: p.actionButtons,
                        children: (0, a.jsx)(c.u, {
                            text: h.intl.string(h.t.hsvh0i),
                            children: (0, a.jsx)(l.hU, {
                                icon: l.o1U,
                                variant: "secondary",
                                size: "sm",
                                onClick: I,
                                "aria-label": h.intl.string(h.t.hsvh0i),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
