d.r(t), d.d(t, { default: () => h }), d(388685);
var a = d(255367),
    c = d(73800),
    n = d(120356),
    s = d.n(n),
    o = d(481060),
    l = d(70097),
    i = d(553896),
    r = d(848572),
    f = d(483444),
    p = d(40347),
    _ = d(921944),
    u = d(388032),
    b = d(882714);
function h(e) {
    var t;
    let { markAsDismissed: d } = e,
        [n, l] = c.useState(!1),
        [i, r] = c.useState(!0),
        f = (0, p.Z)(),
        h = c.useCallback(() => {
            l(!0);
        }, []),
        m = c.useCallback(() => {
            r(!1), d(_.L.USER_DISMISS);
        }, [d]);
    if ((c.useEffect(() => () => d(_.L.INDIRECT_ACTION), []), !i || null == f)) return null;
    let T = {
        '--custom-old-badge-color': 'linear-gradient(to right, '.concat(null != (t = f.prevBadgeTextGradient) ? t : 'transparent', ')'),
        '--custom-new-badge-color': 'linear-gradient(to right, '.concat(f.currentBadgeTextGradient, ')')
    };
    return (0, a.jsxs)('div', {
        className: s()(b.container, { [b.loaded]: n }),
        style: T,
        children: [
            n &&
                (0, a.jsx)(o.M0o, {
                    className: b.closeButton,
                    tooltip: u.intl.string(u.t.cpT0Cg),
                    color: o.YX$.TERTIARY,
                    icon: (0, a.jsx)(o.Dio, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: m
                }),
            (0, a.jsx)(E, {
                onVideoLoaded: h,
                levelUpData: f
            })
        ]
    });
}
function E(e) {
    let { onVideoLoaded: t, levelUpData: d } = e,
        [n, p] = c.useState(!1),
        _ = (0, r.GG)(),
        h = c.useRef(null),
        E = c.useRef(null);
    c.useEffect(() => {
        null != E.current && E.current.load();
    }, []);
    let m = c.useCallback(() => {
        p(!1), E.current.play(), (h.current.style.display = 'none'), h.current.offsetWidth, (h.current.style.display = '');
    }, []);
    if (null == _) return null;
    let { currentBadge: T, prevBadge: g, levelUpVideoSrc: U } = d;
    return (0, a.jsxs)('div', {
        className: s()(b.content, { [b.ended]: n }),
        ref: h,
        children: [
            (0, a.jsx)(l.Z, {
                ref: E,
                className: b.video,
                src: U,
                playsInline: !0,
                onLoadedData: () => {
                    t(), E.current.play();
                },
                onEnded: () => p(!0)
            }),
            (0, a.jsx)(f.Z, {
                className: b.nitroLogo,
                width: 60,
                height: 15
            }),
            null != g &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(o.Text, {
                            variant: 'display-md',
                            className: s()(b.badgeText, b.old),
                            children: u.intl.string(g.nameUnformatted)
                        }),
                        (0, a.jsx)(o.Text, {
                            variant: 'display-md',
                            className: s()(b.badgeText, b.oldWhite),
                            'aria-hidden': !0,
                            children: u.intl.string(g.nameUnformatted)
                        })
                    ]
                }),
            (0, a.jsx)(o.Text, {
                variant: 'display-md',
                className: s()(b.badgeText, b.new),
                children: u.intl.string(T.nameUnformatted)
            }),
            (0, a.jsx)(o.Text, {
                variant: 'text-xs/medium',
                className: b.subscribedText,
                children: u.intl.formatToPlainString(u.t['f/OGgI'], {
                    timeFrame: (0, i.q)(T.id, T.tenureReqNumMonths),
                    date: _
                })
            }),
            (0, a.jsx)('div', {
                className: b.actionButtons,
                children: (0, a.jsx)(o.M0o, {
                    tooltip: u.intl.string(u.t.hsvh0t),
                    color: o.YX$.SECONDARY,
                    icon: (0, a.jsx)(o.o1U, {
                        size: 'xs',
                        color: 'currentColor'
                    }),
                    onClick: m
                })
            })
        ]
    });
}
