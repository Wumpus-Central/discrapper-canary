n.d(t, { Z: () => O }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(793030),
    o = n(704215),
    c = n(481060),
    d = n(230711),
    u = n(100527),
    m = n(906732),
    p = n(605236),
    g = n(314910),
    h = n(498646),
    f = n(981631),
    b = n(921944),
    _ = n(622802),
    x = n(388032),
    E = n(631587),
    j = n(394637);
function C() {
    let e = (0, r.useRef)(null),
        [t, n] = (0, r.useState)(!1),
        { analyticsLocations: s } = (0, m.ZP)(u.Z.HOLIDAY_COACHMARK),
        h = (e) => {
            (0, p.EW)(o.z.CLICKER_COACHMARK, {
                dismissAction: e,
                forceTrack: !0
            });
        };
    return (
        (0, r.useEffect)(() => {
            var n, i;
            t ? null == (n = e.current) || n.play() : null == (i = e.current) || i.pause();
        }, [t]),
        (0, i.jsx)(g.ZP, {
            children: (0, i.jsxs)(c.P3F, {
                className: l()(E.wrapper, { [E.wrapperHovered]: t }),
                onMouseEnter: () => n(!0),
                onMouseLeave: () => n(!1),
                onClick: () => {
                    h(b.L.PRIMARY), d.Z.open(f.oAB.CLICKER_GAME, null, { analyticsLocations: s });
                },
                children: [
                    (0, i.jsxs)('div', {
                        className: E.hiddenWhileNotHovered,
                        children: [
                            (0, i.jsxs)(c.P3F, {
                                className: E.dismiss,
                                onClick: (e) => {
                                    e.stopPropagation(), h(b.L.USER_DISMISS);
                                },
                                children: [
                                    (0, i.jsx)(c.P$X, {
                                        className: E.dismissIcon,
                                        color: 'currentColor'
                                    }),
                                    (0, i.jsx)(a.xv, {
                                        color: 'currentColor',
                                        variant: 'text-xs/bold',
                                        children: x.intl.string(_.default.AsH93d)
                                    })
                                ]
                            }),
                            (0, i.jsx)('iframe', {
                                className: E.video,
                                src: 'https://www.youtube.com/embed/'.concat('h-9SUgIeJnY', '?rel=0&showinfo=0&controls=1&origin=https://').concat(f.$R1),
                                allowFullScreen: !0,
                                sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: E.background,
                        children: (0, i.jsx)('div', { className: E.backgroundGradient })
                    }),
                    (0, i.jsxs)('div', {
                        className: E.foreground,
                        children: [
                            (0, i.jsx)('img', {
                                className: E.icon,
                                src: j,
                                alt: ''
                            }),
                            (0, i.jsxs)('div', {
                                className: E.text,
                                children: [
                                    (0, i.jsx)(a.xv, {
                                        variant: 'text-md/bold',
                                        color: 'always-white',
                                        children: x.intl.string(_.default['7qZdOz'])
                                    }),
                                    (0, i.jsx)(a.xv, {
                                        variant: 'text-sm/medium',
                                        color: 'always-white',
                                        children: x.intl.string(_.default.orfMLS)
                                    })
                                ]
                            }),
                            (0, i.jsx)(c.d4D, {
                                className: E.arrow,
                                color: 'black'
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function O() {
    let e = (0, p.wE)(o.z.CLICKER_COACHMARK),
        { enableGame: t } = h.C.getCurrentConfig({ location: 'Coachmark' });
    return e || !t ? null : (0, i.jsx)(C, {});
}
