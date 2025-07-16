(n.r(t), n.d(t, { default: () => S }), n(388685));
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
    m = n(481060),
    f = n(391650),
    _ = n(313201),
    h = n(314897),
    g = n(594174),
    b = n(626135),
    E = n(361207),
    y = n(981631),
    C = n(388032),
    x = n(246404);
let v = [
        {
            getOs: () => C.intl.string(C.t.NK5ySE),
            icon: x.apple,
            url: () => (0, E.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => C.intl.string(C.t.OvKGEx),
            icon: x.windows,
            url: () => (0, E.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => C.intl.string(C.t.dJB4PD),
            icon: x.linux,
            url: [
                {
                    url: () => (0, E.w4)('linux', !1, 'deb'),
                    getText: () => C.intl.string(C.t.Sodsur)
                },
                {
                    url: () => (0, E.w4)('linux', !1, 'tar.gz'),
                    getText: () => C.intl.string(C.t.G3U6IS)
                }
            ],
            platformKey: 2
        }
    ],
    O = [
        {
            getOs: () => C.intl.string(C.t.wCVyNT),
            icon: x.ios,
            url: () => y.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => C.intl.string(C.t.wuQpJC),
            icon: x.android,
            url: () => y.fzT.ANDROID,
            platformKey: 4
        }
    ],
    j = (e) => {
        let { url: t, text: n, onClick: i } = e,
            l = (0, p.nY)({ grow: !0 });
        return (0, r.jsx)(m.eee, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: a()(l, x.refreshDownloadButton),
            onClick: i,
            children: n
        });
    },
    I = (e) => {
        let t,
            { platform: n, onClick: i, onMouseEnter: l, isActive: o, claimed: s } = e,
            { getOs: c, icon: u, url: d, platformKey: p } = n,
            f = c(),
            _ = a()(x.icon, u);
        if (Array.isArray(d))
            t = d.map((e, t) => {
                let n = s ? e.url() : '';
                return (0, r.jsx)(
                    j,
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
            t = (0, r.jsx)(j, {
                url: e,
                onClick: () => i(f),
                text: C.intl.string(C.t['1WjMbG'])
            });
        }
        return (0, r.jsx)('li', {
            className: a()(x.platform, { [x.active]: o }),
            onMouseEnter: () => l(p),
            children: (0, r.jsxs)('div', {
                className: x.contentWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: x.iconWrap,
                        children: [(0, r.jsx)('div', { className: _ }), (0, r.jsx)('div', { className: a()(x.active, _) })]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(m.X6q, {
                                className: x.platformName,
                                variant: 'heading-lg/semibold',
                                children: f
                            }),
                            (0, r.jsx)('div', {
                                className: a()(x.downloadButtons, { [x.list]: Array.isArray(t) }),
                                children: t
                            })
                        ]
                    })
                ]
            })
        });
    };
function S(e) {
    let { source: t, onClose: n, transitionState: l } = e,
        a = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        o = (0, d.e7)([h.default], () => h.default.getFingerprint()),
        p = null == a || a.isClaimed(),
        [E, j] = i.useState(
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
    function S(e) {
        ((null != u.getToken() || null != o) &&
            b.default.track(y.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: p,
                referring_location: t,
                qr_code: !1
            }),
            p || (n(), f.j()));
    }
    function T(e) {
        j(e);
    }
    i.useEffect(() => {
        b.default.track(y.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let N = (0, _.Dt)();
    return (0, r.jsxs)(m.Y0X, {
        className: x.downloadApps,
        transitionState: l,
        'aria-labelledby': N,
        parentComponent: 'DownloadAppsModal',
        children: [
            (0, r.jsx)(m.olH, {
                onClick: n,
                className: x.modalCloseButton
            }),
            (0, r.jsxs)(m.hzk, {
                className: x.inner,
                children: [
                    (0, r.jsx)(m.nn4, {
                        children: (0, r.jsx)(m.H, {
                            id: N,
                            children: C.intl.string(C.t.BK8LKy)
                        })
                    }),
                    !c.tq &&
                        (0, r.jsxs)('div', {
                            className: x.platformsWrap,
                            children: [
                                (0, r.jsx)(m.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: x.header,
                                    children: C.intl.string(C.t['0KK0bG'])
                                }),
                                (0, r.jsx)('ul', {
                                    className: x.platforms,
                                    children: v.map((e) =>
                                        (0, r.jsx)(
                                            I,
                                            {
                                                isActive: E === e.platformKey,
                                                platform: e,
                                                onClick: S,
                                                onMouseEnter: T,
                                                claimed: p
                                            },
                                            e.platformKey
                                        )
                                    )
                                })
                            ]
                        }),
                    (0, r.jsxs)('div', {
                        className: x.platformsWrap,
                        children: [
                            !c.tq &&
                                (0, r.jsx)(m.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: x.header,
                                    children: C.intl.string(C.t.RdSNWV)
                                }),
                            (0, r.jsx)('ul', {
                                className: x.platforms,
                                children: O.map((e) =>
                                    (0, r.jsx)(
                                        I,
                                        {
                                            isActive: E === e.platformKey,
                                            platform: e,
                                            onClick: S,
                                            onMouseEnter: T,
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
            (0, r.jsx)(m.mzw, {
                className: x.footer,
                children: (0, r.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    children: C.intl.format(C.t['RJS+1N'], {})
                })
            })
        ]
    });
}
