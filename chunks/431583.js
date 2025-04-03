t.r(a), t.d(a, { default: () => B }), t(47120);
var s = t(200651),
    n = t(192379),
    r = t(120356),
    o = t.n(r),
    l = t(525654),
    i = t.n(l),
    c = t(873546),
    d = t(213919),
    u = t(442837),
    f = t(481060),
    p = t(391650),
    m = t(313201),
    x = t(540059),
    _ = t(314897),
    g = t(594174),
    h = t(626135),
    N = t(361207),
    v = t(981631),
    w = t(388032),
    j = t(246404);
let W = [
        {
            getOs: () => w.NW.string(w.t.NK5ySE),
            icon: j.apple,
            url: () => (0, N.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => w.NW.string(w.t.OvKGEx),
            icon: j.windows,
            url: () => (0, N.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => w.NW.string(w.t.dJB4PD),
            icon: j.linux,
            url: [
                {
                    url: () => (0, N.w4)('linux', !1, 'deb'),
                    getText: () => w.NW.string(w.t.Sodsur)
                },
                {
                    url: () => (0, N.w4)('linux', !1, 'tar.gz'),
                    getText: () => w.NW.string(w.t.G3U6IS)
                }
            ],
            platformKey: 2
        }
    ],
    y = [
        {
            getOs: () => w.NW.string(w.t.wCVyNT),
            icon: j.ios,
            url: () => v.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => w.NW.string(w.t.wuQpJC),
            icon: j.android,
            url: () => v.fzT.ANDROID,
            platformKey: 4
        }
    ],
    b = (e) => {
        let { url: a, text: t, onClick: n } = e,
            r = (0, x.Q3)('DownloadButton'),
            l = (0, f.nYM)({ grow: !0 });
        return (0, s.jsx)(f.eee, {
            useDefaultUnderlineStyles: !1,
            href: a,
            className: r ? o()(l, j.refreshDownloadButton) : j.downloadButton,
            onClick: n,
            children: t
        });
    },
    A = (e) => {
        let a,
            { platform: t, onClick: n, onMouseEnter: r, isActive: l, claimed: i } = e,
            { getOs: c, icon: d, url: u, platformKey: p } = t,
            m = c(),
            x = o()(j.icon, d);
        if (Array.isArray(u))
            a = u.map((e, a) => {
                let t = i ? e.url() : '';
                return (0, s.jsx)(
                    b,
                    {
                        url: t,
                        onClick: () => n(m),
                        text: e.getText()
                    },
                    ''.concat(t, '-').concat(a)
                );
            });
        else {
            let e = i ? u() : void 0;
            a = (0, s.jsx)(b, {
                url: e,
                onClick: () => n(m),
                text: w.NW.string(w.t['1WjMbG'])
            });
        }
        return (0, s.jsx)('li', {
            className: o()(j.platform, { [j.active]: l }),
            onMouseEnter: () => r(p),
            children: (0, s.jsxs)('div', {
                className: j.contentWrapper,
                children: [
                    (0, s.jsxs)('div', {
                        className: j.iconWrap,
                        children: [(0, s.jsx)('div', { className: x }), (0, s.jsx)('div', { className: o()(j.active, x) })]
                    }),
                    (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(f.X6q, {
                                className: j.platformName,
                                variant: 'heading-lg/semibold',
                                children: m
                            }),
                            (0, s.jsx)('div', {
                                className: o()(j.downloadButtons, { [j.list]: Array.isArray(a) }),
                                children: a
                            })
                        ]
                    })
                ]
            })
        });
    };
function B(e) {
    let { source: a, onClose: t, transitionState: r } = e,
        l = (0, u.e7)([g.default], () => g.default.getCurrentUser()),
        N = (0, u.e7)([_.default], () => _.default.getFingerprint()),
        b = null == l || l.isClaimed(),
        [B, C] = n.useState(
            (function () {
                var e;
                switch (null == (e = i().os) ? void 0 : e.family) {
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
    function D(e) {
        (null != d.getToken() || null != N) &&
            h.default.track(v.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: b,
                referring_location: a,
                qr_code: !1
            }),
            b || (t(), p.j());
    }
    function K(e) {
        C(e);
    }
    n.useEffect(() => {
        h.default.track(v.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: a }
        });
    }, [a]);
    let k = (0, m.Dt)(),
        O = (0, x.Q3)('DownloadAppsModal');
    return (0, s.jsx)(f.f6W, {
        theme: v.BRd.LIGHT,
        children: (e) =>
            (0, s.jsxs)(f.Y0X, {
                className: o()(j.downloadApps, O ? void 0 : e),
                transitionState: r,
                'aria-labelledby': k,
                children: [
                    (0, s.jsx)(f.olH, {
                        onClick: t,
                        className: j.modalCloseButton
                    }),
                    (0, s.jsxs)(f.hzk, {
                        className: j.inner,
                        children: [
                            (0, s.jsx)(f.nn4, {
                                children: (0, s.jsx)(f.H, {
                                    id: k,
                                    children: w.NW.string(w.t.BK8LKy)
                                })
                            }),
                            !c.tq &&
                                (0, s.jsxs)('div', {
                                    className: j.platformsWrap,
                                    children: [
                                        (0, s.jsx)(f.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: j.header,
                                            children: w.NW.string(w.t['0KK0bG'])
                                        }),
                                        (0, s.jsx)('ul', {
                                            className: j.platforms,
                                            children: W.map((e) =>
                                                (0, s.jsx)(
                                                    A,
                                                    {
                                                        isActive: B === e.platformKey,
                                                        platform: e,
                                                        onClick: D,
                                                        onMouseEnter: K,
                                                        claimed: b
                                                    },
                                                    e.platformKey
                                                )
                                            )
                                        })
                                    ]
                                }),
                            (0, s.jsxs)('div', {
                                className: j.platformsWrap,
                                children: [
                                    !c.tq &&
                                        (0, s.jsx)(f.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: j.header,
                                            children: w.NW.string(w.t.RdSNWV)
                                        }),
                                    (0, s.jsx)('ul', {
                                        className: j.platforms,
                                        children: y.map((e) =>
                                            (0, s.jsx)(
                                                A,
                                                {
                                                    isActive: B === e.platformKey,
                                                    platform: e,
                                                    onClick: D,
                                                    onMouseEnter: K,
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
                    (0, s.jsx)(f.mzw, {
                        className: j.footer,
                        children: (0, s.jsx)(f.Text, {
                            variant: 'text-sm/normal',
                            children: w.NW.format(w.t['RJS+1N'], {})
                        })
                    })
                ]
            })
    });
}
