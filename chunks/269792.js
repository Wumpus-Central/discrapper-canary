a.r(t), a.d(t, { default: () => h }), a(388685);
var n = a(255367),
    d = a(73800),
    s = a(120356),
    o = a.n(s),
    r = a(990547),
    l = a(481060),
    i = a(213609),
    c = a(70097),
    u = a(7093),
    _ = a(553896),
    x = a(848572),
    T = a(483444),
    m = a(626135),
    g = a(981631),
    E = a(474936),
    f = a(388032),
    p = a(882714);
function h(e) {
    var t;
    let { levelUpData: a } = e,
        s = d.useRef(null),
        [r, i] = d.useState(!1),
        c = d.useCallback(() => {
            i(!0);
        }, []),
        _ = d.useCallback(() => {
            u.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    d.useEffect(() => _, [_]);
    let x = {
        '--custom-old-badge-color': 'linear-gradient(to right, '.concat(null != (t = a.prevBadgeTextGradient) ? t : 'transparent', ')'),
        '--custom-new-badge-color': 'linear-gradient(to right, '.concat(a.currentBadgeTextGradient, ')')
    };
    return (0, n.jsxs)('div', {
        ref: s,
        className: o()(p.container, { [p.loaded]: r }),
        style: x,
        children: [
            r &&
                (0, n.jsx)(l.EqS, {
                    containerRef: s,
                    children: (0, n.jsx)(l.M0o, {
                        className: p.closeButton,
                        tooltip: f.intl.string(f.t.cpT0Cg),
                        color: l.YX$.SECONDARY,
                        size: l.tT7.SIZE_24,
                        icon: (0, n.jsx)(l.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        onClick: _
                    })
                }),
            (0, n.jsx)(b, {
                onVideoLoaded: c,
                levelUpData: a
            })
        ]
    });
}
function b(e) {
    let { onVideoLoaded: t, levelUpData: a } = e,
        [s, u] = d.useState(!1),
        [h, b] = d.useState(!1),
        [v, N] = d.useState(!1),
        [C, R] = d.useState(!1),
        j = (0, x.GG)(),
        B = d.useRef(null),
        L = d.useRef(null),
        { currentBadge: U, prevBadge: k, levelUpVideoSrc: w } = a;
    d.useEffect(() => {
        let e = setTimeout(() => b(!0), 1000);
        return () => clearTimeout(e);
    }, []);
    let y = d.useCallback(() => {
        let e = 1000 * (U.id !== E.VU.PREMIUM_TENURE_1_MONTH);
        (L.current.currentTime = 0),
            setTimeout(() => {
                R(!0), L.current.play();
            }, e);
    }, [U.id]);
    d.useEffect(() => {
        v && h && (t(), y());
    }, [v, h, t, y]),
        (0, i.Z)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
                properties: { new_badge_id: U.id }
            },
            { trackOnInitialLoad: !0 }
        ),
        d.useEffect(() => {
            null != L.current && L.current.load();
        }, []);
    let S = d.useCallback(() => {
        u(!1), R(!1), y(), (B.current.style.display = 'none'), B.current.offsetWidth, (B.current.style.display = ''), m.default.track(g.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: U.id });
    }, [U.id, y]);
    return (0, n.jsxs)('div', {
        className: o()(p.content, {
            [p.ended]: s,
            [p.started]: C
        }),
        ref: B,
        children: [
            (0, n.jsx)(c.Z, {
                ref: L,
                className: p.video,
                src: w,
                playsInline: !0,
                onLoadedData: () => N(!0),
                onEnded: () => u(!0)
            }),
            (0, n.jsx)(T.Z, {
                className: p.nitroLogo,
                width: 60,
                height: 15
            }),
            null != k &&
                (0, n.jsx)(l.Text, {
                    variant: 'display-md',
                    className: o()(p.badgeText, p.old),
                    children: f.intl.string(k.nameUnformatted)
                }),
            (0, n.jsx)(l.Text, {
                variant: 'display-md',
                className: o()(p.badgeText, p.new),
                children: f.intl.string(U.nameUnformatted)
            }),
            null != j &&
                (0, n.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: p.subscribedText,
                    children: f.intl.formatToPlainString(f.t['f/OGgI'], {
                        timeFrame: (0, _.q)(U.id, U.tenureReqNumMonths),
                        date: j
                    })
                }),
            (0, n.jsx)('div', {
                className: p.actionButtons,
                children: (0, n.jsx)(l.M0o, {
                    tooltip: f.intl.string(f.t.hsvh0t),
                    color: l.YX$.SECONDARY,
                    icon: (0, n.jsx)(l.o1U, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: S
                })
            })
        ]
    });
}
