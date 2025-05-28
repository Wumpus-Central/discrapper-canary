n.r(t), n.d(t, { default: () => h }), n(388685);
var a = n(255367),
    d = n(73800),
    s = n(120356),
    o = n.n(s),
    r = n(990547),
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
    E = n(388032),
    f = n(882714);
function h(e) {
    var t;
    let { levelUpData: n } = e,
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
        '--custom-old-badge-color': 'linear-gradient(to right, '.concat(null != (t = n.prevBadgeTextGradient) ? t : 'transparent', ')'),
        '--custom-new-badge-color': 'linear-gradient(to right, '.concat(n.currentBadgeTextGradient, ')')
    };
    return (0, a.jsxs)('div', {
        ref: s,
        className: o()(f.container, { [f.loaded]: r }),
        style: x,
        children: [
            r &&
                (0, a.jsx)(l.EqS, {
                    containerRef: s,
                    children: (0, a.jsx)(l.M0o, {
                        className: f.closeButton,
                        tooltip: E.intl.string(E.t.cpT0Cg),
                        color: l.YX$.SECONDARY,
                        size: l.tT7.SIZE_24,
                        icon: (0, a.jsx)(l.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        onClick: _
                    })
                }),
            (0, a.jsx)(b, {
                onVideoLoaded: c,
                levelUpData: n
            })
        ]
    });
}
function b(e) {
    let { onVideoLoaded: t, levelUpData: n } = e,
        [s, u] = d.useState(!1),
        [h, b] = d.useState(!1),
        [v, N] = d.useState(!1),
        [y, R] = d.useState(!1),
        j = (0, x.GG)(),
        B = d.useRef(null),
        C = d.useRef(null),
        { currentBadge: L, prevBadge: U, levelUpVideoSrc: k } = n,
        w = L.id === p.VU.PREMIUM_TENURE_1_MONTH;
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
                    R(!0), C.current.play();
                }, 1000 * !w));
        }, [v, h, w, t]),
        (0, i.Z)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
                properties: { new_badge_id: L.id }
            },
            { trackOnInitialLoad: !0 }
        ),
        d.useEffect(() => {
            null != C.current && C.current.load();
        }, []);
    let S = d.useCallback(() => {
        u(!1), C.current.play(), (B.current.style.display = 'none'), B.current.offsetWidth, (B.current.style.display = ''), T.default.track(m.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: L.id });
    }, [L.id]);
    return (0, a.jsxs)('div', {
        className: o()(f.content, {
            [f.ended]: s,
            [f.playing]: y
        }),
        ref: B,
        children: [
            (0, a.jsx)(c.Z, {
                ref: C,
                className: f.video,
                src: k,
                playsInline: !0,
                onLoadedData: () => N(!0),
                onEnded: () => u(!0)
            }),
            (0, a.jsx)(g.Z, {
                className: f.nitroLogo,
                width: 60,
                height: 15
            }),
            null != U &&
                (0, a.jsx)(l.Text, {
                    variant: 'display-md',
                    className: o()(f.badgeText, f.old),
                    children: E.intl.string(U.nameUnformatted)
                }),
            (0, a.jsx)(l.Text, {
                variant: 'display-md',
                className: o()(f.badgeText, f.new),
                children: E.intl.string(L.nameUnformatted)
            }),
            null != j &&
                (0, a.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: f.subscribedText,
                    children: E.intl.formatToPlainString(E.t['f/OGgI'], {
                        timeFrame: (0, _.q)(L.id, L.tenureReqNumMonths),
                        date: j
                    })
                }),
            (0, a.jsx)('div', {
                className: f.actionButtons,
                children: (0, a.jsx)(l.M0o, {
                    tooltip: E.intl.string(E.t.hsvh0t),
                    color: l.YX$.SECONDARY,
                    icon: (0, a.jsx)(l.o1U, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: S
                })
            })
        ]
    });
}
