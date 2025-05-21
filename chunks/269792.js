d.r(t), d.d(t, { default: () => R }), d(388685);
var a = d(255367),
    n = d(73800),
    c = d(120356),
    s = d.n(c),
    o = d(990547),
    i = d(704215),
    l = d(481060),
    r = d(213609),
    f = d(70097),
    _ = d(605236),
    p = d(7093),
    u = d(553896),
    E = d(848572),
    b = d(765018),
    T = d(483444),
    h = d(626135),
    m = d(40347),
    U = d(981631),
    g = d(921944),
    M = d(388032),
    N = d(882714);
function R() {
    var e;
    let t = n.useRef(null),
        [d, c] = n.useState(!1),
        [o, r] = n.useState(!0),
        f = (0, m.Z)(),
        u = null == f ? void 0 : f.currentBadge.id;
    n.useEffect(() => {
        if (null != u) return (0, _.wH)(i.z.NITRO_TENURE_BADGE_LEVEL_UP, (0, b.q)(u), { dismissAction: g.L.INDIRECT_ACTION }), () => p.Z.setState({ shouldRenderTenureLevelUp: !1 });
    }, [u]);
    let E = n.useCallback(() => {
            c(!0);
        }, []),
        T = n.useCallback(() => {
            r(!1);
        }, []);
    if (!o || null == f) return null;
    let h = {
        '--custom-old-badge-color': 'linear-gradient(to right, '.concat(null != (e = f.prevBadgeTextGradient) ? e : 'transparent', ')'),
        '--custom-new-badge-color': 'linear-gradient(to right, '.concat(f.currentBadgeTextGradient, ')')
    };
    return (0, a.jsxs)('div', {
        ref: t,
        className: s()(N.container, { [N.loaded]: d }),
        style: h,
        children: [
            d &&
                (0, a.jsx)(l.EqS, {
                    containerRef: t,
                    children: (0, a.jsx)(l.M0o, {
                        className: N.closeButton,
                        tooltip: M.intl.string(M.t.cpT0Cg),
                        color: l.YX$.SECONDARY,
                        size: l.tT7.SIZE_24,
                        icon: (0, a.jsx)(l.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        onClick: T
                    })
                }),
            (0, a.jsx)(x, {
                onVideoLoaded: E,
                levelUpData: f
            })
        ]
    });
}
function x(e) {
    let { onVideoLoaded: t, levelUpData: d } = e,
        [c, i] = n.useState(!1),
        _ = (0, E.GG)(),
        p = n.useRef(null),
        b = n.useRef(null),
        { currentBadge: m, prevBadge: g, levelUpVideoSrc: R } = d;
    (0, r.Z)(
        {
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
            properties: { new_badge_id: m.id }
        },
        { trackOnInitialLoad: !0 }
    ),
        n.useEffect(() => {
            null != b.current && b.current.load();
        }, []);
    let x = n.useCallback(() => {
        i(!1), b.current.play(), (p.current.style.display = 'none'), p.current.offsetWidth, (p.current.style.display = ''), h.default.track(U.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: m.id });
    }, [m.id]);
    return (0, a.jsxs)('div', {
        className: s()(N.content, { [N.ended]: c }),
        ref: p,
        children: [
            (0, a.jsx)(f.Z, {
                ref: b,
                className: N.video,
                src: R,
                playsInline: !0,
                onLoadedData: () => {
                    t(), b.current.play();
                },
                onEnded: () => i(!0)
            }),
            (0, a.jsx)(T.Z, {
                className: N.nitroLogo,
                width: 60,
                height: 15
            }),
            null != g &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(l.Text, {
                            variant: 'display-md',
                            className: s()(N.badgeText, N.old),
                            children: M.intl.string(g.nameUnformatted)
                        }),
                        (0, a.jsx)(l.Text, {
                            variant: 'display-md',
                            className: s()(N.badgeText, N.oldWhite),
                            'aria-hidden': !0,
                            children: M.intl.string(g.nameUnformatted)
                        })
                    ]
                }),
            (0, a.jsx)(l.Text, {
                variant: 'display-md',
                className: s()(N.badgeText, N.new),
                children: M.intl.string(m.nameUnformatted)
            }),
            null != _ &&
                (0, a.jsx)(l.Text, {
                    variant: 'text-xs/medium',
                    className: N.subscribedText,
                    children: M.intl.formatToPlainString(M.t['f/OGgI'], {
                        timeFrame: (0, u.q)(m.id, m.tenureReqNumMonths),
                        date: _
                    })
                }),
            (0, a.jsx)('div', {
                className: N.actionButtons,
                children: (0, a.jsx)(l.M0o, {
                    tooltip: M.intl.string(M.t.hsvh0t),
                    color: l.YX$.SECONDARY,
                    icon: (0, a.jsx)(l.o1U, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: x
                })
            })
        ]
    });
}
