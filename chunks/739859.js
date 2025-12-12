n.r(t), n.d(t, { default: () => b }), n(388685);
var a = n(54381),
    d = n(473749),
    s = n(120356),
    i = n.n(s),
    r = n(990547),
    l = n(28664),
    o = n(481060),
    c = n(213609),
    u = n(70097),
    _ = n(483444),
    x = n(626135),
    m = n(553896),
    T = n(848572),
    g = n(474936),
    h = n(981631),
    p = n(388032),
    E = n(43860);
function b(e) {
    var t;
    let { levelUpData: n } = e,
        [s, b] = d.useState(!1),
        [f, v] = d.useState(!1),
        [N, y] = d.useState(!1),
        U = (0, T.GG)(),
        w = d.useRef(null),
        B = d.useRef(null),
        { currentBadge: j, prevBadge: C, levelUpVideoSrc: R } = n,
        k = d.useCallback(() => {
            let e = 700 * (j.id !== g.VU.PREMIUM_TENURE_1_MONTH);
            (B.current.currentTime = 0),
                setTimeout(() => {
                    y(!0), B.current.play();
                }, e);
        }, [j.id]);
    d.useEffect(() => {
        s && k();
    }, [s, k]),
        (0, c.Z)(
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
                x.default.track(h.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: j.id });
        }, [j.id, k]),
        L = {
            "--custom-old-badge-color": "linear-gradient(to right, ".concat(
                null != (t = n.prevBadgeTextGradient) ? t : "transparent",
                ")",
            ),
            "--custom-new-badge-color": "linear-gradient(to right, ".concat(n.currentBadgeTextGradient, ")"),
        };
    return (0, a.jsxs)("div", {
        className: i()(E.content, {
            [E.ended]: f,
            [E.loaded]: s,
            [E.started]: N,
        }),
        style: L,
        ref: w,
        children: [
            (0, a.jsx)(u.Z, {
                ref: B,
                className: E.video,
                src: R,
                playsInline: !0,
                onLoadedData: () => b(!0),
                onEnded: () => v(!0),
            }),
            (0, a.jsxs)("div", {
                className: E.textContainer,
                children: [
                    (0, a.jsx)(_.Z, {
                        width: 60,
                        height: 15,
                    }),
                    null != C &&
                        (0, a.jsx)(o.Text, {
                            variant: "display-md",
                            className: i()(E.badgeText, E.old),
                            children: p.intl.string(C.nameUnformatted),
                        }),
                    (0, a.jsx)(o.Text, {
                        variant: "display-md",
                        className: i()(E.badgeText, E.new),
                        children: p.intl.string(j.nameUnformatted),
                    }),
                    null != U &&
                        (0, a.jsx)(o.Text, {
                            variant: "text-xs/medium",
                            className: E.subscribedText,
                            children: p.intl.formatToPlainString(p.t["f/OGgM"], {
                                timeFrame: (0, m.q)(j.id, j.tenureReqNumMonths),
                                date: U,
                            }),
                        }),
                    (0, a.jsx)("div", {
                        className: E.actionButtons,
                        children: (0, a.jsx)(l.u, {
                            text: p.intl.string(p.t.hsvh0i),
                            children: (0, a.jsx)(o.hU, {
                                icon: o.o1U,
                                variant: "secondary",
                                size: "sm",
                                onClick: I,
                                "aria-label": p.intl.string(p.t.hsvh0i),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
