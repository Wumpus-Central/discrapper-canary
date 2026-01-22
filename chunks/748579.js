t.r(a),
    t.d(a, {
        default: () => g,
    }),
    t(896048);
var n = t(627968),
    s = t(64700),
    r = t(503698),
    i = t.n(r),
    d = t(110259),
    c = t(990078),
    l = t(397927),
    u = t(139286),
    o = t(607470),
    m = t(224016),
    _ = t(954571),
    f = t(764231),
    h = t(112848),
    b = t(788868),
    p = t(652215),
    E = t(985018),
    x = t(962131);

function g(e) {
    var a;
    let { levelUpData: t } = e,
        [r, g] = s.useState(!1),
        [v, T] = s.useState(!1),
        [N, y] = s.useState(!1),
        k = (0, h.Xb)(),
        j = s.useRef(null),
        A = s.useRef(null),
        { currentBadge: R, prevBadge: U, levelUpVideoSrc: w } = t,
        D = s.useCallback(() => {
            let e = 700 * (R.id !== b.Ac.PREMIUM_TENURE_1_MONTH);
            (A.current.currentTime = 0),
                setTimeout(() => {
                    y(!0), A.current.play();
                }, e);
        }, [R.id]);
    s.useEffect(() => {
        r && D();
    }, [r, D]),
        (0, u.A)(
            {
                type: d.ImpressionTypes.POPOUT,
                name: d.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
                properties: {
                    new_badge_id: R.id,
                },
            },
            {
                trackOnInitialLoad: !0,
            },
        ),
        s.useEffect(() => {
            null != A.current && A.current.load();
        }, []);
    let I = s.useCallback(() => {
            T(!1),
                y(!1),
                D(),
                (j.current.style.display = "none"),
                j.current.offsetWidth,
                (j.current.style.display = ""),
                _.default.track(p.HAw.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, {
                    new_badge_id: R.id,
                });
        }, [R.id, D]),
        L = {
            "--custom-old-badge-color": "linear-gradient(to right, ".concat(
                null != (a = t.prevBadgeTextGradient) ? a : "transparent",
                ")",
            ),
            "--custom-new-badge-color": "linear-gradient(to right, ".concat(t.currentBadgeTextGradient, ")"),
        };
    return (0, n.jsxs)("div", {
        className: i()(x.Qs, {
            [x.v6]: v,
            [x.Kc]: r,
            [x.A4]: N,
        }),
        style: L,
        ref: j,
        children: [
            (0, n.jsx)(o.A, {
                ref: A,
                className: x.Ki,
                src: w,
                playsInline: !0,
                onLoadedData: () => g(!0),
                onEnded: () => T(!0),
            }),
            (0, n.jsxs)("div", {
                className: x.FS,
                children: [
                    (0, n.jsx)(m.A, {
                        width: 60,
                        height: 15,
                    }),
                    null != U &&
                        (0, n.jsx)(l.Text, {
                            variant: "display-md",
                            className: i()(x.Vv, x.km),
                            children: E.intl.string(U.nameUnformatted),
                        }),
                    (0, n.jsx)(l.Text, {
                        variant: "display-md",
                        className: i()(x.Vv, x.Hl),
                        children: E.intl.string(R.nameUnformatted),
                    }),
                    null != k &&
                        (0, n.jsx)(l.Text, {
                            variant: "text-xs/medium",
                            className: x.SD,
                            children: E.intl.formatToPlainString(E.t["f/OGgM"], {
                                timeFrame: (0, f.T)(R.id, R.tenureReqNumMonths),
                                date: k,
                            }),
                        }),
                    (0, n.jsx)("div", {
                        className: x.uu,
                        children: (0, n.jsx)(c.m, {
                            text: E.intl.string(E.t.hsvh0i),
                            children: (0, n.jsx)(l.K0, {
                                icon: l.udU,
                                variant: "secondary",
                                size: "sm",
                                onClick: I,
                                "aria-label": E.intl.string(E.t.hsvh0i),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
