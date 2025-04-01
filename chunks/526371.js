n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(793030),
    l = n(704215),
    c = n(481060),
    d = n(230711),
    u = n(100527),
    m = n(906732),
    g = n(70097),
    p = n(605236),
    h = n(314910),
    f = n(498646),
    b = n(981631),
    N = n(921944),
    x = n(884479),
    _ = n(388032),
    E = n(967262),
    j = n(394637),
    O = n(373593);
function C() {
    let e = (0, i.useRef)(null),
        [t, n] = (0, i.useState)(!1),
        { analyticsLocations: s } = (0, m.ZP)(u.Z.HOLIDAY_COACHMARK),
        f = (e) => {
            (0, p.EW)(l.z.CLICKER_COACHMARK, {
                dismissAction: e,
                forceTrack: !0
            });
        };
    return (
        (0, i.useEffect)(() => {
            var n, r;
            t ? null === (n = e.current) || void 0 === n || n.play() : null === (r = e.current) || void 0 === r || r.pause();
        }, [t]),
        (0, r.jsx)(h.ZP, {
            children: (0, r.jsxs)(c.P3F, {
                className: a()(E.wrapper, { [E.wrapperHovered]: t }),
                onMouseEnter: () => n(!0),
                onMouseLeave: () => n(!1),
                onClick: () => {
                    f(N.L.PRIMARY), d.Z.open(b.oAB.CLICKER_GAME, null, { analyticsLocations: s });
                },
                children: [
                    (0, r.jsxs)('div', {
                        className: E.hiddenWhileNotHovered,
                        children: [
                            (0, r.jsxs)(c.P3F, {
                                className: E.dismiss,
                                onClick: (e) => {
                                    e.stopPropagation(), f(N.L.USER_DISMISS);
                                },
                                children: [
                                    (0, r.jsx)(c.P$X, {
                                        className: E.dismissIcon,
                                        color: 'currentColor'
                                    }),
                                    (0, r.jsx)(o.xv, {
                                        color: 'currentColor',
                                        variant: 'text-xs/bold',
                                        children: _.NW.string(x.Z.AsH93d)
                                    })
                                ]
                            }),
                            (0, r.jsx)(g.Z, {
                                className: E.video,
                                ref: e,
                                src: O.Z,
                                loop: !0,
                                muted: !0,
                                playsInline: !0
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: E.background,
                        children: (0, r.jsx)('div', { className: E.backgroundGradient })
                    }),
                    (0, r.jsxs)('div', {
                        className: E.foreground,
                        children: [
                            (0, r.jsx)('img', {
                                className: E.icon,
                                src: j,
                                alt: ''
                            }),
                            (0, r.jsxs)('div', {
                                className: E.text,
                                children: [
                                    (0, r.jsx)(o.xv, {
                                        variant: 'text-md/bold',
                                        color: 'always-white',
                                        children: _.NW.string(x.Z['7qZdOz'])
                                    }),
                                    (0, r.jsx)(o.xv, {
                                        variant: 'text-sm/medium',
                                        color: 'always-white',
                                        children: _.NW.string(x.Z.orfMLS)
                                    })
                                ]
                            }),
                            (0, r.jsx)(c.d4D, {
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
function v() {
    let e = (0, p.wE)(l.z.CLICKER_COACHMARK),
        { enableGame: t } = f.C.getCurrentConfig({ location: 'Coachmark' });
    return e || !t ? null : (0, r.jsx)(C, {});
}
