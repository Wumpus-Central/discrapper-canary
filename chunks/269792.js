d.r(t), d.d(t, { default: () => b }), d(388685);
var a = d(255367),
    n = d(73800),
    c = d(120356),
    o = d.n(c),
    s = d(481060),
    i = d(70097),
    l = d(553896),
    r = d(848572),
    f = d(483444),
    p = d(40347),
    _ = d(388032),
    u = d(882714);
function b() {
    var e;
    let [t, d] = n.useState(!1),
        [c, i] = n.useState(!0),
        l = (0, p.Z)(),
        r = n.useCallback(() => {
            d(!0);
        }, []);
    if (!c || null == l) return null;
    let f = {
        '--custom-old-badge-color': 'linear-gradient(to right, '.concat(null != (e = l.prevBadgeTextGradient) ? e : 'transparent', ')'),
        '--custom-new-badge-color': 'linear-gradient(to right, '.concat(l.currentBadgeTextGradient, ')')
    };
    return (0, a.jsxs)('div', {
        className: o()(u.container, { [u.loaded]: t }),
        style: f,
        children: [
            t &&
                (0, a.jsx)(s.M0o, {
                    className: u.closeButton,
                    tooltip: _.intl.string(_.t.cpT0Cg),
                    color: s.YX$.TERTIARY,
                    icon: (0, a.jsx)(s.Dio, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: () => i(!1)
                }),
            (0, a.jsx)(h, {
                onVideoLoaded: r,
                levelUpData: l
            })
        ]
    });
}
function h(e) {
    let { onVideoLoaded: t, levelUpData: d } = e,
        [c, p] = n.useState(!1),
        b = (0, r.GG)(),
        h = n.useRef(null),
        E = n.useRef(null),
        m = n.useCallback(() => {
            p(!1), E.current.play(), (h.current.style.display = 'none'), h.current.offsetWidth, (h.current.style.display = '');
        }, []);
    if (null == b) return null;
    let { currentBadge: T, prevBadge: g, levelUpVideoSrc: U } = d;
    return (0, a.jsxs)('div', {
        className: o()(u.content, { [u.ended]: c }),
        ref: h,
        children: [
            (0, a.jsx)(i.Z, {
                ref: E,
                className: u.video,
                src: U,
                preload: 'auto',
                playsInline: !0,
                onLoadedData: () => {
                    t(), E.current.play();
                },
                onEnded: () => p(!0)
            }),
            (0, a.jsx)(f.Z, {
                className: u.nitroLogo,
                width: 60,
                height: 15
            }),
            null != g &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(s.Text, {
                            variant: 'display-md',
                            className: o()(u.badgeText, u.old),
                            children: _.intl.string(g.nameUnformatted)
                        }),
                        (0, a.jsx)(s.Text, {
                            variant: 'display-md',
                            className: o()(u.badgeText, u.oldWhite),
                            'aria-hidden': !0,
                            children: _.intl.string(g.nameUnformatted)
                        })
                    ]
                }),
            (0, a.jsx)(s.Text, {
                variant: 'display-md',
                className: o()(u.badgeText, u.new),
                children: _.intl.string(T.nameUnformatted)
            }),
            (0, a.jsx)(s.Text, {
                variant: 'text-xs/medium',
                className: u.subscribedText,
                children: _.intl.formatToPlainString(_.t['f/OGgI'], {
                    timeFrame: (0, l.q)(T.id, T.tenureReqNumMonths),
                    date: b
                })
            }),
            (0, a.jsx)('div', {
                className: u.actionButtons,
                children: (0, a.jsx)(s.M0o, {
                    tooltip: _.intl.string(_.t.hsvh0t),
                    color: s.YX$.SECONDARY,
                    icon: (0, a.jsx)(s.o1U, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: m
                })
            })
        ]
    });
}
