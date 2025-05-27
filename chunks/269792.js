n.r(t), n.d(t, { default: () => h }), n(388685);
var a = n(255367),
    d = n(73800),
    r = n(120356),
    s = n.n(r),
    o = n(990547),
    l = n(481060),
    i = n(213609),
    c = n(70097),
    u = n(7093),
    _ = n(553896),
    x = n(848572),
    g = n(483444),
    T = n(626135),
    m = n(981631),
    p = n(474936),
    f = n(388032),
    E = n(882714);
function h(e) {
    var t;
    let { levelUpData: n } = e,
        r = d.useRef(null),
        [o, i] = d.useState(!0),
        [c, _] = d.useState(!1);
    d.useEffect(() => () => u.Z.setState({ shouldRenderTenureLevelUp: !1 }), [n.currentBadge.id]);
    let x = d.useCallback(() => {
            _(!0);
        }, []),
        g = d.useCallback(() => {
            i(!1);
        }, []);
    if (!o) return null;
    let T = {
        '--custom-old-badge-color': 'linear-gradient(to right, '.concat(null != (t = n.prevBadgeTextGradient) ? t : 'transparent', ')'),
        '--custom-new-badge-color': 'linear-gradient(to right, '.concat(n.currentBadgeTextGradient, ')')
    };
    return (0, a.jsxs)('div', {
        ref: r,
        className: s()(E.container, { [E.loaded]: c }),
        style: T,
        children: [
            c &&
                (0, a.jsx)(l.EqS, {
                    containerRef: r,
                    children: (0, a.jsx)(l.M0o, {
                        className: E.closeButton,
                        tooltip: f.intl.string(f.t.cpT0Cg),
                        color: l.YX$.SECONDARY,
                        size: l.tT7.SIZE_24,
                        icon: (0, a.jsx)(l.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        onClick: g
                    })
                }),
            (0, a.jsx)(b, {
                onVideoLoaded: x,
                levelUpData: n
            })
        ]
    });
}
function b(e) {
    let { onVideoLoaded: t, levelUpData: n } = e,
        [r, u] = d.useState(!1),
        [h, b] = d.useState(!1),
        [v, N] = d.useState(!1),
        [y, B] = d.useState(!1),
        R = (0, x.GG)(),
        j = d.useRef(null),
        C = d.useRef(null),
        { currentBadge: L, prevBadge: U, levelUpVideoSrc: S } = n,
        k = L.id === p.VU.PREMIUM_TENURE_1_MONTH;
    d.useEffect(() => {
        let e = setTimeout(() => b(!0), 1000);
        return () => clearTimeout(e);
    }, []),
        d.useEffect(() => {
            v &&
                h &&
                (t(),
                (C.current.currentTime = 0),
                setTimeout(() => {
                    B(!0), C.current.play();
                }, 1000 * !k));
        }, [v, h, k, t]),
        (0, i.Z)(
            {
                type: o.ImpressionTypes.POPOUT,
                name: o.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
                properties: { new_badge_id: L.id }
            },
            { trackOnInitialLoad: !0 }
        ),
        d.useEffect(() => {
            null != C.current && C.current.load();
        }, []);
    let w = d.useCallback(() => {
        u(!1), C.current.play(), (j.current.style.display = 'none'), j.current.offsetWidth, (j.current.style.display = ''), T.default.track(m.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: L.id });
    }, [L.id]);
    return (0, a.jsxs)('div', {
        className: s()(E.content, {
            [E.ended]: r,
            [E.playing]: y
        }),
        ref: j,
        children: [
            (0, a.jsx)(c.Z, {
                ref: C,
                className: E.video,
                src: S,
                playsInline: !0,
                onLoadedData: () => N(!0),
                onEnded: () => u(!0)
            }),
            (0, a.jsx)(g.Z, {
                className: E.nitroLogo,
                width: 60,
                height: 15
            }),
            null != U &&
                (0, a.jsx)(l.Text, {
                    variant: 'display-md',
                    className: s()(E.badgeText, E.old),
                    children: f.intl.string(U.nameUnformatted)
                }),
            (0, a.jsx)(l.Text, {
                variant: 'display-md',
                className: s()(E.badgeText, E.new),
                children: f.intl.string(L.nameUnformatted)
            }),
            null != R &&
                (0, a.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: E.subscribedText,
                    children: f.intl.formatToPlainString(f.t['f/OGgI'], {
                        timeFrame: (0, _.q)(L.id, L.tenureReqNumMonths),
                        date: R
                    })
                }),
            (0, a.jsx)('div', {
                className: E.actionButtons,
                children: (0, a.jsx)(l.M0o, {
                    tooltip: f.intl.string(f.t.hsvh0t),
                    color: l.YX$.SECONDARY,
                    icon: (0, a.jsx)(l.o1U, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: w
                })
            })
        ]
    });
}
