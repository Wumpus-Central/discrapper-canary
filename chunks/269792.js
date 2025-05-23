n.r(t), n.d(t, { default: () => v }), n(388685);
var a = n(255367),
    d = n(73800),
    s = n(120356),
    r = n.n(s),
    o = n(990547),
    l = n(704215),
    i = n(481060),
    c = n(213609),
    u = n(70097),
    _ = n(605236),
    x = n(7093),
    T = n(553896),
    g = n(848572),
    m = n(765018),
    E = n(483444),
    p = n(626135),
    f = n(981631),
    h = n(921944),
    b = n(388032),
    N = n(882714);
function v(e) {
    var t;
    let { levelUpData: n } = e,
        s = d.useRef(null),
        [o, c] = d.useState(!0),
        [u, T] = d.useState(!1),
        [g, E] = d.useState(!1);
    d.useEffect(() => {
        let e = setTimeout(() => {
            E(!0);
        }, 1000);
        return () => clearTimeout(e);
    }, []),
        d.useEffect(() => ((0, _.wH)(l.z.NITRO_TENURE_BADGE_LEVEL_UP, (0, m.q)(n.currentBadge.id), { dismissAction: h.L.INDIRECT_ACTION }), () => x.Z.setState({ shouldRenderTenureLevelUp: !1 })), [n.currentBadge.id]);
    let p = d.useCallback(() => {
            T(!0);
        }, []),
        f = d.useCallback(() => {
            c(!1);
        }, []);
    if (!o) return null;
    let v = u && g,
        C = {
            '--custom-old-badge-color': 'linear-gradient(to right, '.concat(null != (t = n.prevBadgeTextGradient) ? t : 'transparent', ')'),
            '--custom-new-badge-color': 'linear-gradient(to right, '.concat(n.currentBadgeTextGradient, ')')
        };
    return (0, a.jsxs)('div', {
        ref: s,
        className: r()(N.container, { [N.loaded]: v }),
        style: C,
        children: [
            v &&
                (0, a.jsx)(i.EqS, {
                    containerRef: s,
                    children: (0, a.jsx)(i.M0o, {
                        className: N.closeButton,
                        tooltip: b.intl.string(b.t.cpT0Cg),
                        color: i.YX$.SECONDARY,
                        size: i.tT7.SIZE_24,
                        icon: (0, a.jsx)(i.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        onClick: f
                    })
                }),
            (0, a.jsx)(B, {
                onVideoLoaded: p,
                levelUpData: n
            })
        ]
    });
}
function B(e) {
    let { onVideoLoaded: t, levelUpData: n } = e,
        [s, l] = d.useState(!1),
        _ = (0, g.GG)(),
        x = d.useRef(null),
        m = d.useRef(null),
        { currentBadge: h, prevBadge: v, levelUpVideoSrc: B } = n;
    (0, c.Z)(
        {
            type: o.ImpressionTypes.POPOUT,
            name: o.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
            properties: { new_badge_id: h.id }
        },
        { trackOnInitialLoad: !0 }
    ),
        d.useEffect(() => {
            null != m.current && m.current.load();
        }, []);
    let C = d.useCallback(() => {
        l(!1), m.current.play(), (x.current.style.display = 'none'), x.current.offsetWidth, (x.current.style.display = ''), p.default.track(f.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: h.id });
    }, [h.id]);
    return (0, a.jsxs)('div', {
        className: r()(N.content, { [N.ended]: s }),
        ref: x,
        children: [
            (0, a.jsx)(u.Z, {
                ref: m,
                className: N.video,
                src: B,
                playsInline: !0,
                onLoadedData: () => {
                    t(), m.current.play();
                },
                onEnded: () => l(!0)
            }),
            (0, a.jsx)(E.Z, {
                className: N.nitroLogo,
                width: 60,
                height: 15
            }),
            null != v &&
                (0, a.jsx)(i.Text, {
                    variant: 'display-md',
                    className: r()(N.badgeText, N.old),
                    children: b.intl.string(v.nameUnformatted)
                }),
            (0, a.jsx)(i.Text, {
                variant: 'display-md',
                className: r()(N.badgeText, N.new),
                children: b.intl.string(h.nameUnformatted)
            }),
            null != _ &&
                (0, a.jsx)(i.Text, {
                    variant: 'text-xs/medium',
                    className: N.subscribedText,
                    children: b.intl.formatToPlainString(b.t['f/OGgI'], {
                        timeFrame: (0, T.q)(h.id, h.tenureReqNumMonths),
                        date: _
                    })
                }),
            (0, a.jsx)('div', {
                className: N.actionButtons,
                children: (0, a.jsx)(i.M0o, {
                    tooltip: b.intl.string(b.t.hsvh0t),
                    color: i.YX$.SECONDARY,
                    icon: (0, a.jsx)(i.o1U, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: C
                })
            })
        ]
    });
}
