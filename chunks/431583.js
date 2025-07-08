(n.r(t), n.d(t, { default: () => I }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(525654),
    s = n.n(o),
    c = n(873546),
    u = n(213919),
    d = n(442837),
    p = n(481060),
    m = n(391650),
    f = n(313201),
    g = n(314897),
    _ = n(594174),
    h = n(626135),
    b = n(361207),
    E = n(981631),
    y = n(388032),
    x = n(246404);
let C = [
        {
            getOs: () => y.intl.string(y.t.NK5ySE),
            icon: x.apple,
            url: () => (0, b.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => y.intl.string(y.t.OvKGEx),
            icon: x.windows,
            url: () => (0, b.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => y.intl.string(y.t.dJB4PD),
            icon: x.linux,
            url: [
                {
                    url: () => (0, b.w4)('linux', !1, 'deb'),
                    getText: () => y.intl.string(y.t.Sodsur)
                },
                {
                    url: () => (0, b.w4)('linux', !1, 'tar.gz'),
                    getText: () => y.intl.string(y.t.G3U6IS)
                }
            ],
            platformKey: 2
        }
    ],
    v = [
        {
            getOs: () => y.intl.string(y.t.wCVyNT),
            icon: x.ios,
            url: () => E.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => y.intl.string(y.t.wuQpJC),
            icon: x.android,
            url: () => E.fzT.ANDROID,
            platformKey: 4
        }
    ],
    O = (e) => {
        let { url: t, text: n, onClick: i } = e,
            l = (0, p.nYM)({ grow: !0 });
        return (0, r.jsx)(p.eee, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: a()(l, x.refreshDownloadButton),
            onClick: i,
            children: n
        });
    },
    j = (e) => {
        let t,
            { platform: n, onClick: i, onMouseEnter: l, isActive: o, claimed: s } = e,
            { getOs: c, icon: u, url: d, platformKey: m } = n,
            f = c(),
            g = a()(x.icon, u);
        if (Array.isArray(d))
            t = d.map((e, t) => {
                let n = s ? e.url() : '';
                return (0, r.jsx)(
                    O,
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
            t = (0, r.jsx)(O, {
                url: e,
                onClick: () => i(f),
                text: y.intl.string(y.t['1WjMbG'])
            });
        }
        return (0, r.jsx)('li', {
            className: a()(x.platform, { [x.active]: o }),
            onMouseEnter: () => l(m),
            children: (0, r.jsxs)('div', {
                className: x.contentWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: x.iconWrap,
                        children: [(0, r.jsx)('div', { className: g }), (0, r.jsx)('div', { className: a()(x.active, g) })]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(p.X6q, {
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
function I(e) {
    let { source: t, onClose: n, transitionState: l } = e,
        a = (0, d.e7)([_.default], () => _.default.getCurrentUser()),
        o = (0, d.e7)([g.default], () => g.default.getFingerprint()),
        b = null == a || a.isClaimed(),
        [O, I] = i.useState(
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
            h.default.track(E.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: b,
                referring_location: t,
                qr_code: !1
            }),
            b || (n(), m.j()));
    }
    function T(e) {
        I(e);
    }
    i.useEffect(() => {
        h.default.track(E.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let N = (0, f.Dt)();
    return (0, r.jsxs)(p.Y0X, {
        className: x.downloadApps,
        transitionState: l,
        'aria-labelledby': N,
        parentComponent: 'DownloadAppsModal',
        children: [
            (0, r.jsx)(p.olH, {
                onClick: n,
                className: x.modalCloseButton
            }),
            (0, r.jsxs)(p.hzk, {
                className: x.inner,
                children: [
                    (0, r.jsx)(p.nn4, {
                        children: (0, r.jsx)(p.H, {
                            id: N,
                            children: y.intl.string(y.t.BK8LKy)
                        })
                    }),
                    !c.tq &&
                        (0, r.jsxs)('div', {
                            className: x.platformsWrap,
                            children: [
                                (0, r.jsx)(p.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: x.header,
                                    children: y.intl.string(y.t['0KK0bG'])
                                }),
                                (0, r.jsx)('ul', {
                                    className: x.platforms,
                                    children: C.map((e) =>
                                        (0, r.jsx)(
                                            j,
                                            {
                                                isActive: O === e.platformKey,
                                                platform: e,
                                                onClick: S,
                                                onMouseEnter: T,
                                                claimed: b
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
                                (0, r.jsx)(p.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: x.header,
                                    children: y.intl.string(y.t.RdSNWV)
                                }),
                            (0, r.jsx)('ul', {
                                className: x.platforms,
                                children: v.map((e) =>
                                    (0, r.jsx)(
                                        j,
                                        {
                                            isActive: O === e.platformKey,
                                            platform: e,
                                            onClick: S,
                                            onMouseEnter: T,
                                            claimed: b
                                        },
                                        e.platformKey
                                    )
                                )
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(p.mzw, {
                className: x.footer,
                children: (0, r.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    children: y.intl.format(y.t['RJS+1N'], {})
                })
            })
        ]
    });
}
