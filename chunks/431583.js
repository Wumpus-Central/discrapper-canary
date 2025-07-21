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
    g = n(313201),
    h = n(314897),
    _ = n(594174),
    b = n(626135),
    E = n(361207),
    x = n(981631),
    v = n(388032),
    y = n(246404);
let C = [
        {
            getOs: () => v.intl.string(v.t.NK5ySE),
            icon: y.apple,
            url: () => (0, E.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => v.intl.string(v.t.OvKGEx),
            icon: y.windows,
            url: () => (0, E.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => v.intl.string(v.t.dJB4PD),
            icon: y.linux,
            url: [
                {
                    url: () => (0, E.w4)('linux', !1, 'deb'),
                    getText: () => v.intl.string(v.t.Sodsur)
                },
                {
                    url: () => (0, E.w4)('linux', !1, 'tar.gz'),
                    getText: () => v.intl.string(v.t.G3U6IS)
                }
            ],
            platformKey: 2
        }
    ],
    O = [
        {
            getOs: () => v.intl.string(v.t.wCVyNT),
            icon: y.ios,
            url: () => x.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => v.intl.string(v.t.wuQpJC),
            icon: y.android,
            url: () => x.fzT.ANDROID,
            platformKey: 4
        }
    ],
    j = (e) => {
        let { url: t, text: n, onClick: i } = e,
            l = (0, p.nY)({ grow: !0 });
        return (0, r.jsx)(m.eee, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: a()(l, y.refreshDownloadButton),
            onClick: i,
            children: n
        });
    },
    I = (e) => {
        let t,
            { platform: n, onClick: i, onMouseEnter: l, isActive: o, claimed: s } = e,
            { getOs: c, icon: u, url: d, platformKey: p } = n,
            f = c(),
            g = a()(y.icon, u);
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
                text: v.intl.string(v.t['1WjMbG'])
            });
        }
        return (0, r.jsx)('li', {
            className: a()(y.platform, { [y.active]: o }),
            onMouseEnter: () => l(p),
            children: (0, r.jsxs)('div', {
                className: y.contentWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: y.iconWrap,
                        children: [(0, r.jsx)('div', { className: g }), (0, r.jsx)('div', { className: a()(y.active, g) })]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(m.X6q, {
                                className: y.platformName,
                                variant: 'heading-lg/semibold',
                                children: f
                            }),
                            (0, r.jsx)('div', {
                                className: a()(y.downloadButtons, { [y.list]: Array.isArray(t) }),
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
        a = (0, d.e7)([_.default], () => _.default.getCurrentUser()),
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
            b.default.track(x.rMx.DOWNLOAD_APP, {
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
        b.default.track(x.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let N = (0, g.Dt)();
    return (0, r.jsxs)(m.Y0X, {
        className: y.downloadApps,
        transitionState: l,
        'aria-labelledby': N,
        parentComponent: 'DownloadAppsModal',
        children: [
            (0, r.jsx)(m.olH, {
                onClick: n,
                className: y.modalCloseButton
            }),
            (0, r.jsxs)(m.hzk, {
                className: y.inner,
                children: [
                    (0, r.jsx)(m.nn4, {
                        children: (0, r.jsx)(m.H, {
                            id: N,
                            children: v.intl.string(v.t.BK8LKy)
                        })
                    }),
                    !c.tq &&
                        (0, r.jsxs)('div', {
                            className: y.platformsWrap,
                            children: [
                                (0, r.jsx)(m.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: y.header,
                                    children: v.intl.string(v.t['0KK0bG'])
                                }),
                                (0, r.jsx)('ul', {
                                    className: y.platforms,
                                    children: C.map((e) =>
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
                        className: y.platformsWrap,
                        children: [
                            !c.tq &&
                                (0, r.jsx)(m.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: y.header,
                                    children: v.intl.string(v.t.RdSNWV)
                                }),
                            (0, r.jsx)('ul', {
                                className: y.platforms,
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
                className: y.footer,
                children: (0, r.jsx)(m.Text, {
                    variant: 'text-sm/normal',
                    children: v.intl.format(v.t['RJS+1N'], {})
                })
            })
        ]
    });
}
