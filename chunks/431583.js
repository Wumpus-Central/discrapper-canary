n.r(t), n.d(t, { default: () => S }), n(388685);
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
    h = n(314897),
    g = n(594174),
    _ = n(626135),
    b = n(361207),
    x = n(981631),
    E = n(388032),
    y = n(246404);
let v = [
        {
            getOs: () => E.intl.string(E.t.NK5ySE),
            icon: y.apple,
            url: () => (0, b.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => E.intl.string(E.t.OvKGEx),
            icon: y.windows,
            url: () => (0, b.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => E.intl.string(E.t.dJB4PD),
            icon: y.linux,
            url: [
                {
                    url: () => (0, b.w4)('linux', !1, 'deb'),
                    getText: () => E.intl.string(E.t.Sodsur)
                },
                {
                    url: () => (0, b.w4)('linux', !1, 'tar.gz'),
                    getText: () => E.intl.string(E.t.G3U6IS)
                }
            ],
            platformKey: 2
        }
    ],
    C = [
        {
            getOs: () => E.intl.string(E.t.wCVyNT),
            icon: y.ios,
            url: () => x.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => E.intl.string(E.t.wuQpJC),
            icon: y.android,
            url: () => x.fzT.ANDROID,
            platformKey: 4
        }
    ],
    O = (e) => {
        let { url: t, text: n, onClick: i } = e,
            l = (0, p.nYM)({ grow: !0 });
        return (0, r.jsx)(p.eee, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: a()(l, y.refreshDownloadButton),
            onClick: i,
            children: n
        });
    },
    j = (e) => {
        let t,
            { platform: n, onClick: i, onMouseEnter: l, isActive: o, claimed: s } = e,
            { getOs: c, icon: u, url: d, platformKey: m } = n,
            f = c(),
            h = a()(y.icon, u);
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
                text: E.intl.string(E.t['1WjMbG'])
            });
        }
        return (0, r.jsx)('li', {
            className: a()(y.platform, { [y.active]: o }),
            onMouseEnter: () => l(m),
            children: (0, r.jsxs)('div', {
                className: y.contentWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: y.iconWrap,
                        children: [(0, r.jsx)('div', { className: h }), (0, r.jsx)('div', { className: a()(y.active, h) })]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(p.X6q, {
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
        a = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        o = (0, d.e7)([h.default], () => h.default.getFingerprint()),
        b = null == a || a.isClaimed(),
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
    function I(e) {
        (null != u.getToken() || null != o) &&
            _.default.track(x.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: b,
                referring_location: t,
                qr_code: !1
            }),
            b || (n(), m.j());
    }
    function T(e) {
        S(e);
    }
    i.useEffect(() => {
        _.default.track(x.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let N = (0, f.Dt)();
    return (0, r.jsxs)(p.Y0X, {
        className: y.downloadApps,
        transitionState: l,
        'aria-labelledby': N,
        parentComponent: 'DownloadAppsModal',
        children: [
            (0, r.jsx)(p.olH, {
                onClick: n,
                className: y.modalCloseButton
            }),
            (0, r.jsxs)(p.hzk, {
                className: y.inner,
                children: [
                    (0, r.jsx)(p.nn4, {
                        children: (0, r.jsx)(p.H, {
                            id: N,
                            children: E.intl.string(E.t.BK8LKy)
                        })
                    }),
                    !c.tq &&
                        (0, r.jsxs)('div', {
                            className: y.platformsWrap,
                            children: [
                                (0, r.jsx)(p.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: y.header,
                                    children: E.intl.string(E.t['0KK0bG'])
                                }),
                                (0, r.jsx)('ul', {
                                    className: y.platforms,
                                    children: v.map((e) =>
                                        (0, r.jsx)(
                                            j,
                                            {
                                                isActive: O === e.platformKey,
                                                platform: e,
                                                onClick: I,
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
                        className: y.platformsWrap,
                        children: [
                            !c.tq &&
                                (0, r.jsx)(p.X6q, {
                                    variant: 'heading-lg/semibold',
                                    className: y.header,
                                    children: E.intl.string(E.t.RdSNWV)
                                }),
                            (0, r.jsx)('ul', {
                                className: y.platforms,
                                children: C.map((e) =>
                                    (0, r.jsx)(
                                        j,
                                        {
                                            isActive: O === e.platformKey,
                                            platform: e,
                                            onClick: I,
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
                className: y.footer,
                children: (0, r.jsx)(p.Text, {
                    variant: 'text-sm/normal',
                    children: E.intl.format(E.t['RJS+1N'], {})
                })
            })
        ]
    });
}
