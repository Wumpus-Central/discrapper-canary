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
    v = n(388032),
    E = n(246404);
let O = [
        {
            getOs: () => v.NW.string(v.t.NK5ySE),
            icon: E.apple,
            url: () => (0, x.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => v.NW.string(v.t.OvKGEx),
            icon: E.windows,
            url: () => (0, x.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => v.NW.string(v.t.dJB4PD),
            icon: E.linux,
            url: [
                {
                    url: () => (0, x.w4)('linux', !1, 'deb'),
                    getText: () => v.NW.string(v.t.Sodsur)
                },
                {
                    url: () => (0, x.w4)('linux', !1, 'tar.gz'),
                    getText: () => v.NW.string(v.t.G3U6IS)
                }
            ],
            platformKey: 2
        }
    ],
    N = [
        {
            getOs: () => v.NW.string(v.t.wCVyNT),
            icon: E.ios,
            url: () => y.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => v.NW.string(v.t.wuQpJC),
            icon: E.android,
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
            className: a ? l()(o, E.refreshDownloadButton) : E.downloadButton,
            onClick: i,
            children: n
        });
    },
    C = (e) => {
        let t,
            { platform: n, onClick: i, onMouseEnter: a, isActive: o, claimed: s } = e,
            { getOs: c, icon: u, url: d, platformKey: m } = n,
            f = c(),
            h = l()(E.icon, u);
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
                text: v.NW.string(v.t['1WjMbG'])
            });
        }
        return (0, r.jsx)('li', {
            className: l()(E.platform, { [E.active]: o }),
            onMouseEnter: () => a(m),
            children: (0, r.jsxs)('div', {
                className: E.contentWrapper,
                children: [
                    (0, r.jsxs)('div', {
                        className: E.iconWrap,
                        children: [(0, r.jsx)('div', { className: h }), (0, r.jsx)('div', { className: l()(E.active, h) })]
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(p.X6q, {
                                className: E.platformName,
                                variant: 'heading-lg/semibold',
                                children: f
                            }),
                            (0, r.jsx)('div', {
                                className: l()(E.downloadButtons, { [E.list]: Array.isArray(t) }),
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
                className: l()(E.downloadApps, w ? void 0 : e),
                transitionState: a,
                'aria-labelledby': A,
                children: [
                    (0, r.jsx)(p.olH, {
                        onClick: n,
                        className: E.modalCloseButton
                    }),
                    (0, r.jsxs)(p.hzk, {
                        className: E.inner,
                        children: [
                            (0, r.jsx)(p.nn4, {
                                children: (0, r.jsx)(p.H, {
                                    id: A,
                                    children: v.NW.string(v.t.BK8LKy)
                                })
                            }),
                            !c.tq &&
                                (0, r.jsxs)('div', {
                                    className: E.platformsWrap,
                                    children: [
                                        (0, r.jsx)(p.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: E.header,
                                            children: v.NW.string(v.t['0KK0bG'])
                                        }),
                                        (0, r.jsx)('ul', {
                                            className: E.platforms,
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
                                className: E.platformsWrap,
                                children: [
                                    !c.tq &&
                                        (0, r.jsx)(p.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: E.header,
                                            children: v.NW.string(v.t.RdSNWV)
                                        }),
                                    (0, r.jsx)('ul', {
                                        className: E.platforms,
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
                        className: E.footer,
                        children: (0, r.jsx)(p.Text, {
                            variant: 'text-sm/normal',
                            children: v.NW.format(v.t['RJS+1N'], {})
                        })
                    })
                ]
            })
    });
}
