n.r(t), n.d(t, { default: () => S }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(525654),
    s = n.n(o),
    c = n(873546),
    u = n(213919),
    d = n(442837),
    p = n(481060),
    m = n(391650),
    f = n(313201),
    h = n(540059),
    g = n(314897),
    _ = n(594174),
    b = n(626135),
    x = n(361207),
    y = n(981631),
    E = n(388032),
    v = n(246404);
let O = [
        {
            getOs: () => E.NW.string(E.t.NK5ySE),
            icon: v.apple,
            url: () => (0, x.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => E.NW.string(E.t.OvKGEx),
            icon: v.windows,
            url: () => (0, x.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => E.NW.string(E.t.dJB4PD),
            icon: v.linux,
            url: [
                {
                    url: () => (0, x.w4)('linux', !1, 'deb'),
                    getText: () => E.NW.string(E.t.Sodsur)
                },
                {
                    url: () => (0, x.w4)('linux', !1, 'tar.gz'),
                    getText: () => E.NW.string(E.t.G3U6IS)
                }
            ],
            platformKey: 2
        }
    ],
    N = [
        {
            getOs: () => E.NW.string(E.t.wCVyNT),
            icon: v.ios,
            url: () => y.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => E.NW.string(E.t.wuQpJC),
            icon: v.android,
            url: () => y.fzT.ANDROID,
            platformKey: 4
        }
    ],
    j = (e) => {
        let { url: t, text: n, onClick: i } = e,
            a = (0, h.Q3)('DownloadButton'),
            o = (0, p.nYM)({ grow: !0 });
        return (0, r.jsx)(p.eee, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: a ? l()(o, v.refreshDownloadButton) : v.downloadButton,
            onClick: i,
            children: n
        });
    },
    C = (e) => {
        let t,
            { platform: n, onClick: i, onMouseEnter: a, isActive: o, claimed: s } = e,
            { getOs: c, icon: u, url: d, platformKey: m } = n,
            f = c(),
            h = l()(v.icon, u);
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
                text: E.NW.string(E.t['1WjMbG'])
            });
        }
        return (0, r.jsx)('li', {
            className: l()(v.platform, { [v.active]: o }),
            onMouseEnter: () => a(m),
            children: (0, r.jsxs)('div', {
                className: v.contentWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.iconWrap,
                        children: [(0, r.jsx)('div', { className: h }), (0, r.jsx)('div', { className: l()(v.active, h) })]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(p.X6q, {
                                className: v.platformName,
                                variant: 'heading-lg/semibold',
                                children: f
                            }),
                            (0, r.jsx)('div', {
                                className: l()(v.downloadButtons, { [v.list]: Array.isArray(t) }),
                                children: t
                            })
                        ]
                    })
                ]
            })
        });
    };
function S(e) {
    let { source: t, onClose: n, transitionState: a } = e,
        o = (0, d.e7)([_.default], () => _.default.getCurrentUser()),
        x = (0, d.e7)([g.default], () => g.default.getFingerprint()),
        j = null == o || o.isClaimed(),
        [S, I] = i.useState(
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
        (null != u.getToken() || null != x) &&
            b.default.track(y.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: j,
                referring_location: t,
                qr_code: !1
            }),
            j || (n(), m.j());
    }
    function P(e) {
        I(e);
    }
    i.useEffect(() => {
        b.default.track(y.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let A = (0, f.Dt)(),
        w = (0, h.Q3)('DownloadAppsModal');
    return (0, r.jsx)(p.f6W, {
        theme: y.BRd.LIGHT,
        children: (e) =>
            (0, r.jsxs)(p.Y0X, {
                className: l()(v.downloadApps, w ? void 0 : e),
                transitionState: a,
                'aria-labelledby': A,
                children: [
                    (0, r.jsx)(p.olH, {
                        onClick: n,
                        className: v.modalCloseButton
                    }),
                    (0, r.jsxs)(p.hzk, {
                        className: v.inner,
                        children: [
                            (0, r.jsx)(p.nn4, {
                                children: (0, r.jsx)(p.H, {
                                    id: A,
                                    children: E.NW.string(E.t.BK8LKy)
                                })
                            }),
                            !c.tq &&
                                (0, r.jsxs)('div', {
                                    className: v.platformsWrap,
                                    children: [
                                        (0, r.jsx)(p.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: v.header,
                                            children: E.NW.string(E.t['0KK0bG'])
                                        }),
                                        (0, r.jsx)('ul', {
                                            className: v.platforms,
                                            children: O.map((e) =>
                                                (0, r.jsx)(
                                                    C,
                                                    {
                                                        isActive: S === e.platformKey,
                                                        platform: e,
                                                        onClick: T,
                                                        onMouseEnter: P,
                                                        claimed: j
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
                                        (0, r.jsx)(p.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: v.header,
                                            children: E.NW.string(E.t.RdSNWV)
                                        }),
                                    (0, r.jsx)('ul', {
                                        className: v.platforms,
                                        children: N.map((e) =>
                                            (0, r.jsx)(
                                                C,
                                                {
                                                    isActive: S === e.platformKey,
                                                    platform: e,
                                                    onClick: T,
                                                    onMouseEnter: P,
                                                    claimed: j
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
                        className: v.footer,
                        children: (0, r.jsx)(p.Text, {
                            variant: 'text-sm/normal',
                            children: E.NW.format(E.t['RJS+1N'], {})
                        })
                    })
                ]
            })
    });
}
