a.r(t), a.d(t, { default: () => h }), a(388685);
var n = a(255367),
    d = a(73800),
    r = a(120356),
    s = a.n(r),
    i = a(990547),
    l = a(481060),
    o = a(213609),
    c = a(70097),
    u = a(553896),
    _ = a(848572),
    x = a(483444),
    m = a(626135),
    T = a(981631),
    g = a(474936),
    p = a(388032),
    E = a(882714);
function h(e) {
    var t;
    let { levelUpData: a } = e,
        [r, h] = d.useState(!1),
        [f, b] = d.useState(!1),
        [v, N] = d.useState(!1),
        C = (0, _.GG)(),
        w = d.useRef(null),
        y = d.useRef(null),
        { currentBadge: B, prevBadge: R, levelUpVideoSrc: U } = a,
        j = d.useCallback(() => {
            let e = 700 * (B.id !== g.VU.PREMIUM_TENURE_1_MONTH);
            (y.current.currentTime = 0),
                setTimeout(() => {
                    N(!0), y.current.play();
                }, e);
        }, [B.id]);
    d.useEffect(() => {
        r && j();
    }, [r, j]),
        (0, o.Z)(
            {
                type: i.ImpressionTypes.POPOUT,
                name: i.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
                properties: { new_badge_id: B.id }
            },
            { trackOnInitialLoad: !0 }
        ),
        d.useEffect(() => {
            null != y.current && y.current.load();
        }, []);
    let k = d.useCallback(() => {
            b(!1), N(!1), j(), (w.current.style.display = 'none'), w.current.offsetWidth, (w.current.style.display = ''), m.default.track(T.rMx.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, { new_badge_id: B.id });
        }, [B.id, j]),
        I = {
            '--custom-old-badge-color': 'linear-gradient(to right, '.concat(null != (t = a.prevBadgeTextGradient) ? t : 'transparent', ')'),
            '--custom-new-badge-color': 'linear-gradient(to right, '.concat(a.currentBadgeTextGradient, ')')
        };
    return (0, n.jsxs)('div', {
        className: s()(E.content, {
            [E.ended]: f,
            [E.loaded]: r,
            [E.started]: v
        }),
        style: I,
        ref: w,
        children: [
            (0, n.jsx)(c.Z, {
                ref: y,
                className: E.video,
                src: U,
                playsInline: !0,
                onLoadedData: () => h(!0),
                onEnded: () => b(!0)
            }),
            (0, n.jsxs)('div', {
                className: E.textContainer,
                children: [
                    (0, n.jsx)(x.Z, {
                        width: 60,
                        height: 15
                    }),
                    null != R &&
                        (0, n.jsx)(l.Text, {
                            variant: 'display-md',
                            className: s()(E.badgeText, E.old),
                            children: p.intl.string(R.nameUnformatted)
                        }),
                    (0, n.jsx)(l.Text, {
                        variant: 'display-md',
                        className: s()(E.badgeText, E.new),
                        children: p.intl.string(B.nameUnformatted)
                    }),
                    null != C &&
                        (0, n.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            className: E.subscribedText,
                            children: p.intl.formatToPlainString(p.t['f/OGgI'], {
                                timeFrame: (0, u.q)(B.id, B.tenureReqNumMonths),
                                date: C
                            })
                        }),
                    (0, n.jsx)('div', {
                        className: E.actionButtons,
                        children: (0, n.jsx)(l.M0o, {
                            tooltip: p.intl.string(p.t.hsvh0t),
                            color: l.YX$.SECONDARY,
                            icon: (0, n.jsx)(l.o1U, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            onClick: k
                        })
                    })
                ]
            })
        ]
    });
}
