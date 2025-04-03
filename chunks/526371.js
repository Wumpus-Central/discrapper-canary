n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(793030),
    o = n(704215),
    c = n(481060),
    d = n(230711),
    u = n(100527),
    m = n(906732),
    g = n(605236),
    p = n(314910),
    h = n(498646),
    f = n(981631),
    b = n(921944),
    N = n(622802),
    x = n(388032),
    _ = n(631587),
    E = n(394637);
function j() {
    let e = (0, i.useRef)(null),
        [t, n] = (0, i.useState)(!1),
        { analyticsLocations: s } = (0, m.ZP)(u.Z.HOLIDAY_COACHMARK),
        h = (e) => {
            (0, g.EW)(o.z.CLICKER_COACHMARK, {
                dismissAction: e,
                forceTrack: !0
            });
        };
    return (
        (0, i.useEffect)(() => {
            var n, r;
            t ? null == (n = e.current) || n.play() : null == (r = e.current) || r.pause();
        }, [t]),
        (0, r.jsx)(p.ZP, {
            children: (0, r.jsxs)(c.P3F, {
                className: a()(_.wrapper, { [_.wrapperHovered]: t }),
                onMouseEnter: () => n(!0),
                onMouseLeave: () => n(!1),
                onClick: () => {
                    h(b.L.PRIMARY), d.Z.open(f.oAB.CLICKER_GAME, null, { analyticsLocations: s });
                },
                children: [
                    (0, r.jsxs)('div', {
                        className: _.hiddenWhileNotHovered,
                        children: [
                            (0, r.jsxs)(c.P3F, {
                                className: _.dismiss,
                                onClick: (e) => {
                                    e.stopPropagation(), h(b.L.USER_DISMISS);
                                },
                                children: [
                                    (0, r.jsx)(c.P$X, {
                                        className: _.dismissIcon,
                                        color: 'currentColor'
                                    }),
                                    (0, r.jsx)(l.xv, {
                                        color: 'currentColor',
                                        variant: 'text-xs/bold',
                                        children: x.NW.string(N.Z.AsH93d)
                                    })
                                ]
                            }),
                            (0, r.jsx)('iframe', {
                                className: _.video,
                                src: 'https://www.youtube.com/embed/'.concat('h-9SUgIeJnY', '?rel=0&showinfo=0&controls=1&origin=https://').concat(f.$R1),
                                allowFullScreen: !0,
                                sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: _.background,
                        children: (0, r.jsx)('div', { className: _.backgroundGradient })
                    }),
                    (0, r.jsxs)('div', {
                        className: _.foreground,
                        children: [
                            (0, r.jsx)('img', {
                                className: _.icon,
                                src: E,
                                alt: ''
                            }),
                            (0, r.jsxs)('div', {
                                className: _.text,
                                children: [
                                    (0, r.jsx)(l.xv, {
                                        variant: 'text-md/bold',
                                        color: 'always-white',
                                        children: x.NW.string(N.Z['7qZdOz'])
                                    }),
                                    (0, r.jsx)(l.xv, {
                                        variant: 'text-sm/medium',
                                        color: 'always-white',
                                        children: x.NW.string(N.Z.orfMLS)
                                    })
                                ]
                            }),
                            (0, r.jsx)(c.d4D, {
                                className: _.arrow,
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
    let e = (0, g.wE)(o.z.CLICKER_COACHMARK),
        { enableGame: t } = h.C.getCurrentConfig({ location: 'Coachmark' });
    return e || !t ? null : (0, r.jsx)(j, {});
}
