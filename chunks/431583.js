(n.r(t), n.d(t, { default: () => T }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(525654),
    s = n.n(o),
    c = n(873546),
    u = n(213919),
    d = n(442837),
    p = n(755721),
    h = n(481060),
    f = n(391650),
    g = n(313201),
    m = n(314897),
    b = n(594174),
    _ = n(626135),
    O = n(361207),
    E = n(981631),
    y = n(388032),
    v = n(246404);
let I = [
        {
            getOs: () => y.intl.string(y.t.NK5ySE),
            icon: v.apple,
            url: () => (0, O.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => y.intl.string(y.t.OvKGEx),
            icon: v.windows,
            url: () => (0, O.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => y.intl.string(y.t.dJB4PD),
            icon: v.linux,
            url: [
                {
                    url: () => (0, O.w4)('linux', !1, 'deb'),
                    getText: () => y.intl.string(y.t.Sodsur)
                },
                {
                    url: () => (0, O.w4)('linux', !1, 'tar.gz'),
                    getText: () => y.intl.string(y.t.G3U6IS)
                }
            ],
            platformKey: 2
        }
    ],
    C = [
        {
            getOs: () => y.intl.string(y.t.wCVyNT),
            icon: v.ios,
            url: () => E.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => y.intl.string(y.t.wuQpJC),
            icon: v.android,
            url: () => E.fzT.ANDROID,
            platformKey: 4
        }
    ],
    S = (e) => {
        let { url: t, text: n, onClick: i } = e,
            l = (0, p.nY)({ grow: !0 });
        return (0, r.jsx)(h.eee, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: a()(l, v.refreshDownloadButton),
            onClick: i,
            children: n
        });
    },
    N = (e) => {
        let t,
            { platform: n, onClick: i, onMouseEnter: l, isActive: o, claimed: s } = e,
            { getOs: c, icon: u, url: d, platformKey: p } = n,
            f = c(),
            g = a()(v.icon, u);
        if (Array.isArray(d))
            t = d.map((e, t) => {
                let n = s ? e.url() : '';
                return (0, r.jsx)(
                    S,
                    {
                        url: n,
                        onClick: () => i(f),
                        text: e.getText()
                    },
                    ''.concat(n, '-').concat(t)
                );
            });
        else {
            let e = s ? d() : void 0;
            t = (0, r.jsx)(S, {
                url: e,
                onClick: () => i(f),
                text: y.intl.string(y.t['1WjMbG'])
            });
        }
        return (0, r.jsx)('li', {
            className: a()(v.platform, { [v.active]: o }),
            onMouseEnter: () => l(p),
            children: (0, r.jsxs)('div', {
                className: v.contentWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.iconWrap,
                        children: [(0, r.jsx)('div', { className: g }), (0, r.jsx)('div', { className: a()(v.active, g) })]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(h.X6q, {
                                className: v.platformName,
                                variant: 'heading-lg/semibold',
                                children: f
                            }),
                            (0, r.jsx)('div', {
                                className: a()(v.downloadButtons, { [v.list]: Array.isArray(t) }),
                                children: t
                            })
                        ]
                    })
                ]
            })
        });
    };
function T(e) {
    let { source: t, onClose: n, transitionState: l } = e,
        a = (0, d.e7)([b.default], () => b.default.getCurrentUser()),
        o = (0, d.e7)([m.default], () => m.default.getFingerprint()),
        p = null == a || a.isClaimed(),
        [O, S] = i.useState(
            (function () {
                var e;
                switch (null == (e = s().os) ? void 0 : e.family) {
                    case 'OS X':
                        return 0;
                    case 'Windows':
                        return 1;
                    case 'Ubuntu':
                    case 'Debian':
                    case 'Fedora':
                    case 'Red Hat':
                    case 'SuSE':
                    case 'Linux':
                        return 2;
                    case 'iOS':
                        return 3;
                    case 'Android':
                        return 4;
                    default:
                        return;
                }
            })()
        );
    function T(e) {
        ((null != u.getToken() || null != o) &&
            _.default.track(E.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: p,
                referring_location: t,
                qr_code: !1
            }),
            p || (n(), f.j()));
    }
    function P(e) {
        S(e);
    }
    i.useEffect(() => {
        _.default.track(E.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let j = (0, g.Dt)();
    return (0, r.jsxs)(h.Y0X, {
        className: v.downloadApps,
        transitionState: l,
        'aria-labelledby': j,
        parentComponent: 'DownloadAppsModal',
        children: [
            (0, r.jsx)(h.olH, {
                onClick: n,
                className: v.modalCloseButton
            }),
            (0, r.jsxs)(h.hzk, {
                className: v.inner,
                children: [
                    (0, r.jsx)(h.nn4, {
                        children: (0, r.jsx)(h.H, {
                            id: j,
                            children: y.intl.string(y.t.BK8LKy)
                        })
                    }),
                    !c.tq &&
                        (0, r.jsxs)('div', {
                            className: v.platformsWrap,
                            children: [
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: v.header,
                                    children: y.intl.string(y.t['0KK0bG'])
                                }),
                                (0, r.jsx)('ul', {
                                    className: v.platforms,
                                    children: I.map((e) =>
                                        (0, r.jsx)(
                                            N,
                                            {
                                                isActive: O === e.platformKey,
                                                platform: e,
                                                onClick: T,
                                                onMouseEnter: P,
                                                claimed: p
                                            },
                                            e.platformKey
                                        )
                                    )
                                })
                            ]
                        }),
                    (0, r.jsxs)('div', {
                        className: v.platformsWrap,
                        children: [
                            !c.tq &&
                                (0, r.jsx)(h.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: v.header,
                                    children: y.intl.string(y.t.RdSNWV)
                                }),
                            (0, r.jsx)('ul', {
                                className: v.platforms,
                                children: C.map((e) =>
                                    (0, r.jsx)(
                                        N,
                                        {
                                            isActive: O === e.platformKey,
                                            platform: e,
                                            onClick: T,
                                            onMouseEnter: P,
                                            claimed: p
                                        },
                                        e.platformKey
                                    )
                                )
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(h.mzw, {
                className: v.footer,
                children: (0, r.jsx)(h.Text, {
                    variant: 'text-sm/normal',
                    children: y.intl.format(y.t['RJS+1N'], {})
                })
            })
        ]
    });
}
