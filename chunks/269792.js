d.r(t), d.d(t, { default: () => R }), d(388685);
var a = d(255367),
    c = d(73800),
    n = d(120356),
    s = d.n(n),
    o = d(990547),
    i = d(704215),
    l = d(481060),
    r = d(213609),
    f = d(70097),
    _ = d(605236),
    u = d(7093),
    b = d(553896),
    E = d(848572),
    p = d(765018),
    T = d(483444),
    U = d(626135),
    m = d(40347),
    h = d(981631),
    g = d(921944),
    M = d(388032),
    N = d(882714);
function R() {
    var e;
    let t = c.useRef(null),
        [d, n] = c.useState(!1),
        [o, r] = c.useState(!0),
        f = (0, m.Z)(),
        b = null == f ? void 0 : f.currentBadge.id;
    c.useEffect(() => {
        if (null != b) return (0, _.wH)(i.z.NITRO_TENURE_BADGE_LEVEL_UP, (0, p.q)(b), { dismissAction: g.L.INDIRECT_ACTION }), () => u.Z.setState({ shouldRenderTenureLevelUp: !1 });
    }, [b]);
    let E = c.useCallback(() => {
            n(!0);
        }, []),
        T = c.useCallback(() => {
            r(!1);
        }, []);
    if (!o || null == f) return null;
    let U = {
        '--custom-old-badge-color': 'linear-gradient(to right, '.concat(null != (e = f.prevBadgeTextGradient) ? e : 'transparent', ')'),
        '--custom-new-badge-color': 'linear-gradient(to right, '.concat(f.currentBadgeTextGradient, ')')
    };
    return (0, a.jsxs)('div', {
        ref: t,
        className: s()(N.container, { [N.loaded]: d }),
        style: U,
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
            (0, a.jsx)(Z, {
                onVideoLoaded: E,
                levelUpData: f
            })
        ]
    });
}
function Z(e) {
    let { onVideoLoaded: t, levelUpData: d } = e,
        [n, i] = c.useState(!1),
        _ = (0, E.GG)(),
        u = c.useRef(null),
        p = c.useRef(null),
        { currentBadge: m, prevBadge: g, levelUpVideoSrc: R } = d;
    (0, r.Z)(
        {
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
            properties: { new_badge_id: m.id }
        },
        { trackOnInitialLoad: !0 }
    ),
        c.useEffect(() => {
            null != p.current && p.current.load();
        }, []);
    let Z = c.useCallback(() => {
        i(!1), p.current.play(), (u.current.style.display = 'none'), u.current.offsetWidth, (u.current.style.display = ''), U.default.track(h.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: m.id });
    }, [m.id]);
    return (0, a.jsxs)('div', {
        className: s()(N.content, { [N.ended]: n }),
        ref: u,
        children: [
            (0, a.jsx)(f.Z, {
                ref: p,
                className: N.video,
                src: R,
                playsInline: !0,
                onLoadedData: () => {
                    t(), p.current.play();
                },
                onEnded: () => i(!0)
            }),
            (0, a.jsx)(T.Z, {
                className: N.nitroLogo,
                width: 60,
                height: 15
            }),
            null != g &&
                (0, a.jsx)(l.Text, {
                    variant: 'display-md',
                    className: s()(N.badgeText, N.old),
                    children: M.intl.string(g.nameUnformatted)
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
                        timeFrame: (0, b.q)(m.id, m.tenureReqNumMonths),
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
                    onClick: Z
                })
            })
        ]
    });
}
