n.r(t), n.d(t, { default: () => E }), n(388685);
var a = n(255367),
    d = n(73800),
    o = n(120356),
    r = n.n(o),
    s = n(990547),
    l = n(481060),
    i = n(213609),
    c = n(70097),
    u = n(7093),
    _ = n(553896),
    x = n(848572),
    g = n(483444),
    m = n(626135),
    p = n(981631),
    T = n(388032),
    f = n(882714);
function E(e) {
    var t;
    let { levelUpData: n } = e,
        o = d.useRef(null),
        [s, i] = d.useState(!0),
        [c, _] = d.useState(!1),
        [x, g] = d.useState(!1);
    d.useEffect(() => {
        let e = setTimeout(() => {
            g(!0);
        }, 1000);
        return () => clearTimeout(e);
    }, []),
        d.useEffect(() => () => u.Z.setState({ shouldRenderTenureLevelUp: !1 }), [n.currentBadge.id]);
    let m = d.useCallback(() => {
            _(!0);
        }, []),
        p = d.useCallback(() => {
            i(!1);
        }, []);
    if (!s) return null;
    let E = c && x,
        b = {
            '--custom-old-badge-color': 'linear-gradient(to right, '.concat(null != (t = n.prevBadgeTextGradient) ? t : 'transparent', ')'),
            '--custom-new-badge-color': 'linear-gradient(to right, '.concat(n.currentBadgeTextGradient, ')')
        };
    return (0, a.jsxs)('div', {
        ref: o,
        className: r()(f.container, { [f.loaded]: E }),
        style: b,
        children: [
            E &&
                (0, a.jsx)(l.EqS, {
                    containerRef: o,
                    children: (0, a.jsx)(l.M0o, {
                        className: f.closeButton,
                        tooltip: T.intl.string(T.t.cpT0Cg),
                        color: l.YX$.SECONDARY,
                        size: l.tT7.SIZE_24,
                        icon: (0, a.jsx)(l.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        onClick: p
                    })
                }),
            (0, a.jsx)(h, {
                onVideoLoaded: m,
                levelUpData: n
            })
        ]
    });
}
function h(e) {
    let { onVideoLoaded: t, levelUpData: n } = e,
        [o, u] = d.useState(!1),
        E = (0, x.GG)(),
        h = d.useRef(null),
        b = d.useRef(null),
        { currentBadge: v, prevBadge: B, levelUpVideoSrc: N } = n;
    (0, i.Z)(
        {
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
            properties: { new_badge_id: v.id }
        },
        { trackOnInitialLoad: !0 }
    ),
        d.useEffect(() => {
            null != b.current && b.current.load();
        }, []);
    let j = d.useCallback(() => {
        u(!1), b.current.play(), (h.current.style.display = 'none'), h.current.offsetWidth, (h.current.style.display = ''), m.default.track(p.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: v.id });
    }, [v.id]);
    return (0, a.jsxs)('div', {
        className: r()(f.content, { [f.ended]: o }),
        ref: h,
        children: [
            (0, a.jsx)(c.Z, {
                ref: b,
                className: f.video,
                src: N,
                playsInline: !0,
                onLoadedData: () => {
                    t(), b.current.play();
                },
                onEnded: () => u(!0)
            }),
            (0, a.jsx)(g.Z, {
                className: f.nitroLogo,
                width: 60,
                height: 15
            }),
            null != B &&
                (0, a.jsx)(l.Text, {
                    variant: 'display-md',
                    className: r()(f.badgeText, f.old),
                    children: T.intl.string(B.nameUnformatted)
                }),
            (0, a.jsx)(l.Text, {
                variant: 'display-md',
                className: r()(f.badgeText, f.new),
                children: T.intl.string(v.nameUnformatted)
            }),
            null != E &&
                (0, a.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: f.subscribedText,
                    children: T.intl.formatToPlainString(T.t['f/OGgI'], {
                        timeFrame: (0, _.q)(v.id, v.tenureReqNumMonths),
                        date: E
                    })
                }),
            (0, a.jsx)('div', {
                className: f.actionButtons,
                children: (0, a.jsx)(l.M0o, {
                    tooltip: T.intl.string(T.t.hsvh0t),
                    color: l.YX$.SECONDARY,
                    icon: (0, a.jsx)(l.o1U, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: j
                })
            })
        ]
    });
}
