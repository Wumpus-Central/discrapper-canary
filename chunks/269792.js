a.r(t), a.d(t, { default: () => b }), a(388685);
var d = a(255367),
    n = a(73800),
    c = a(120356),
    o = a.n(c),
    s = a(481060),
    i = a(70097),
    l = a(553896),
    r = a(848572),
    f = a(483444),
    p = a(40347),
    _ = a(388032),
    u = a(882714);
function b() {
    let [e, t] = n.useState(!1),
        [a, c] = n.useState(!0),
        i = (0, p.Z)(),
        l = n.useCallback(() => {
            t(!0);
        }, []);
    if (!a || null == i) return null;
    let r = {
        '--custom-old-badge-color': 'linear-gradient(to right, '.concat(i.prevBadgeTextGradient, ')'),
        '--custom-new-badge-color': 'linear-gradient(to right, '.concat(i.currentBadgeTextGradient, ')')
    };
    return (0, d.jsxs)('div', {
        className: o()(u.container, { [u.loaded]: e }),
        style: r,
        children: [
            e &&
                (0, d.jsx)(s.M0o, {
                    className: u.closeButton,
                    tooltip: _.intl.string(_.t.cpT0Cg),
                    color: s.YX$.TERTIARY,
                    icon: (0, d.jsx)(s.Dio, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: () => c(!1)
                }),
            (0, d.jsx)(h, {
                onVideoLoaded: l,
                levelUpData: i
            })
        ]
    });
}
function h(e) {
    let { onVideoLoaded: t, levelUpData: a } = e,
        [c, p] = n.useState(!1),
        b = (0, r.GG)(),
        h = n.useRef(null),
        E = n.useRef(null),
        T = n.useCallback(() => {
            p(!1), E.current.play(), (h.current.style.display = 'none'), h.current.offsetWidth, (h.current.style.display = '');
        }, []);
    if (null == b) return null;
    let { currentBadge: m, prevBadge: g, levelUpVideoSrc: U } = a;
    return (0, d.jsxs)('div', {
        className: o()(u.content, { [u.ended]: c }),
        ref: h,
        children: [
            (0, d.jsx)(i.Z, {
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
            (0, d.jsx)(f.Z, {
                className: u.nitroLogo,
                width: 60,
                height: 15
            }),
            (0, d.jsx)(s.Text, {
                variant: 'display-md',
                className: o()(u.badgeText, u.old),
                children: _.intl.string(g.nameUnformatted)
            }),
            (0, d.jsx)(s.Text, {
                variant: 'display-md',
                className: o()(u.badgeText, u.oldWhite),
                'aria-hidden': !0,
                children: _.intl.string(g.nameUnformatted)
            }),
            (0, d.jsx)(s.Text, {
                variant: 'display-md',
                className: o()(u.badgeText, u.new),
                children: _.intl.string(m.nameUnformatted)
            }),
            (0, d.jsx)(s.Text, {
                variant: 'text-xs/medium',
                className: u.subscribedText,
                children: _.intl.formatToPlainString(_.t['f/OGgI'], {
                    timeFrame: (0, l.q)(m.id, m.tenureReqNumMonths),
                    date: b
                })
            }),
            (0, d.jsx)('div', {
                className: u.actionButtons,
                children: (0, d.jsx)(s.M0o, {
                    tooltip: _.intl.string(_.t.hsvh0t),
                    color: s.YX$.SECONDARY,
                    icon: (0, d.jsx)(s.o1U, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: T
                })
            })
        ]
    });
}
