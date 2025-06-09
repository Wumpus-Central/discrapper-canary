a.r(t), a.d(t, { default: () => f }), a(388685);
var d = a(255367),
    n = a(73800),
    r = a(120356),
    s = a.n(r),
    i = a(990547),
    o = a(481060),
    l = a(213609),
    c = a(70097),
    u = a(553896),
    _ = a(848572),
    x = a(483444),
    g = a(626135),
    m = a(981631),
    T = a(474936),
    p = a(388032),
    E = a(882714);
function f(e) {
    var t;
    let { levelUpData: a } = e,
        [r, f] = n.useState(!1),
        [h, b] = n.useState(!1),
        [v, N] = n.useState(!1),
        w = (0, _.GG)(),
        y = n.useRef(null),
        B = n.useRef(null),
        { currentBadge: L, prevBadge: R, levelUpVideoSrc: U } = a,
        j = n.useCallback(() => {
            let e = 1000 * (L.id !== T.VU.PREMIUM_TENURE_1_MONTH);
            (B.current.currentTime = 0),
                setTimeout(() => {
                    N(!0), B.current.play();
                }, e);
        }, [L.id]);
    n.useEffect(() => {
        r && j();
    }, [r, j]),
        (0, l.Z)(
            {
                type: i.ImpressionTypes.POPOUT,
                name: i.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
                properties: { new_badge_id: L.id }
            },
            { trackOnInitialLoad: !0 }
        ),
        n.useEffect(() => {
            null != B.current && B.current.load();
        }, []);
    let k = n.useCallback(() => {
            b(!1), N(!1), j(), (y.current.style.display = 'none'), y.current.offsetWidth, (y.current.style.display = ''), g.default.track(m.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: L.id });
        }, [L.id, j]),
        C = {
            '--custom-old-badge-color': 'linear-gradient(to right, '.concat(null != (t = a.prevBadgeTextGradient) ? t : 'transparent', ')'),
            '--custom-new-badge-color': 'linear-gradient(to right, '.concat(a.currentBadgeTextGradient, ')')
        };
    return (0, d.jsxs)('div', {
        className: s()(E.content, {
            [E.ended]: h,
            [E.loaded]: r,
            [E.started]: v
        }),
        style: C,
        ref: y,
        children: [
            (0, d.jsx)(c.Z, {
                ref: B,
                className: E.video,
                src: U,
                playsInline: !0,
                onLoadedData: () => f(!0),
                onEnded: () => b(!0)
            }),
            (0, d.jsx)(x.Z, {
                className: E.nitroLogo,
                width: 60,
                height: 15
            }),
            null != R &&
                (0, d.jsx)(o.Text, {
                    variant: 'display-md',
                    className: s()(E.badgeText, E.old),
                    children: p.intl.string(R.nameUnformatted)
                }),
            (0, d.jsx)(o.Text, {
                variant: 'display-md',
                className: s()(E.badgeText, E.new),
                children: p.intl.string(L.nameUnformatted)
            }),
            null != w &&
                (0, d.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    className: E.subscribedText,
                    children: p.intl.formatToPlainString(p.t['f/OGgI'], {
                        timeFrame: (0, u.q)(L.id, L.tenureReqNumMonths),
                        date: w
                    })
                }),
            (0, d.jsx)('div', {
                className: E.actionButtons,
                children: (0, d.jsx)(o.M0o, {
                    tooltip: p.intl.string(p.t.hsvh0t),
                    color: o.YX$.SECONDARY,
                    icon: (0, d.jsx)(o.o1U, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: k
                })
            })
        ]
    });
}
