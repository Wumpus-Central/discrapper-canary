(n.d(t, { Z: () => C }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(793030),
    o = n(704215),
    c = n(481060),
    d = n(230711),
    u = n(100527),
    m = n(906732),
    p = n(266454),
    g = n(314910),
    h = n(498646),
    f = n(981631),
    b = n(921944),
    x = n(603571),
    _ = n(388032),
    j = n(631587),
    E = n(394637);
function O() {
    let e = (0, r.useRef)(null),
        [t, n] = (0, r.useState)(!1),
        { analyticsLocations: s } = (0, m.ZP)(u.Z.HOLIDAY_COACHMARK),
        h = (e) => {
            (0, p.Q3)(o.z.CLICKER_COACHMARK, {
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
                className: a()(j.wrapper, { [j.wrapperHovered]: t }),
                onMouseEnter: () => n(!0),
                onMouseLeave: () => n(!1),
                onClick: () => {
                    (h(b.L.PRIMARY), d.Z.open(f.oAB.CLICKER_GAME, null, { analyticsLocations: s }));
                },
                children: [
                    (0, i.jsxs)('div', {
                        className: j.hiddenWhileNotHovered,
                        children: [
                            (0, i.jsxs)(c.P3F, {
                                className: j.dismiss,
                                onClick: (e) => {
                                    (e.stopPropagation(), h(b.L.USER_DISMISS));
                                },
                                children: [
                                    (0, i.jsx)(c.P$X, {
                                        className: j.dismissIcon,
                                        color: 'currentColor'
                                    }),
                                    (0, i.jsx)(l.xv, {
                                        color: 'currentColor',
                                        variant: 'text-xs/bold',
                                        children: _.intl.string(x.default.AsH93d)
                                    })
                                ]
                            }),
                            (0, i.jsx)('iframe', {
                                className: j.video,
                                src: 'https://www.youtube.com/embed/'.concat('h-9SUgIeJnY', '?rel=0&showinfo=0&controls=1&origin=https://').concat(f.$R1),
                                allowFullScreen: !0,
                                sandbox: 'allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: j.background,
                        children: (0, i.jsx)('div', { className: j.backgroundGradient })
                    }),
                    (0, i.jsxs)('div', {
                        className: j.foreground,
                        children: [
                            (0, i.jsx)('img', {
                                className: j.icon,
                                src: E,
                                alt: ''
                            }),
                            (0, i.jsxs)('div', {
                                className: j.text,
                                children: [
                                    (0, i.jsx)(l.xv, {
                                        variant: 'text-md/bold',
                                        color: 'always-white',
                                        children: _.intl.string(x.default['7qZdOz'])
                                    }),
                                    (0, i.jsx)(l.xv, {
                                        variant: 'text-sm/medium',
                                        color: 'always-white',
                                        children: _.intl.string(x.default.orfMLS)
                                    })
                                ]
                            }),
                            (0, i.jsx)(c.d4D, {
                                className: j.arrow,
                                color: 'black'
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function C() {
    let e = (0, p.Nj)(o.z.CLICKER_COACHMARK),
        { enableGame: t } = h.C.getCurrentConfig({ location: 'Coachmark' });
    return e || !t ? null : (0, i.jsx)(O, {});
}
