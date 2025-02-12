n.r(t), n.d(t, { default: () => A }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(525654),
    o = n.n(s),
    c = n(873546),
    d = n(213919),
    u = n(442837),
    m = n(481060),
    _ = n(391650),
    h = n(313201),
    p = n(540059),
    g = n(314897),
    f = n(594174),
    x = n(626135),
    C = n(361207),
    v = n(981631),
    E = n(388032),
    I = n(596633);
let N = [
        {
            getOs: () => E.intl.string(E.t.NK5ySE),
            icon: I.apple,
            url: () => (0, C.w4)('osx', !1),
            platformKey: 0
        },
        {
            getOs: () => E.intl.string(E.t.OvKGEx),
            icon: I.windows,
            url: () => (0, C.w4)('win', !1),
            platformKey: 1
        },
        {
            getOs: () => E.intl.string(E.t.dJB4PD),
            icon: I.linux,
            url: [
                {
                    url: () => (0, C.w4)('linux', !1, 'deb'),
                    getText: () => E.intl.string(E.t.Sodsur)
                },
                {
                    url: () => (0, C.w4)('linux', !1, 'tar.gz'),
                    getText: () => E.intl.string(E.t.G3U6IS)
                }
            ],
            platformKey: 2
        }
    ],
    S = [
        {
            getOs: () => E.intl.string(E.t.wCVyNT),
            icon: I.ios,
            url: () => v.fzT.IOS,
            platformKey: 3
        },
        {
            getOs: () => E.intl.string(E.t.wuQpJC),
            icon: I.android,
            url: () => v.fzT.ANDROID,
            platformKey: 4
        }
    ],
    T = (e) => {
        let { url: t, text: n, onClick: l } = e,
            a = (0, p.Q3)('DownloadButton'),
            s = (0, m.nYM)({ grow: !0 });
        return (0, i.jsx)(m.eee, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: a ? r()(s, I.refreshDownloadButton) : I.downloadButton,
            onClick: l,
            children: n
        });
    },
    b = (e) => {
        let t,
            { platform: n, onClick: l, onMouseEnter: a, isActive: s, claimed: o } = e,
            { getOs: c, icon: d, url: u, platformKey: _ } = n,
            h = c(),
            p = r()(I.icon, d);
        if (Array.isArray(u))
            t = u.map((e, t) => {
                let n = o ? e.url() : '';
                return (0, i.jsx)(
                    T,
                    {
                        url: n,
                        onClick: () => l(h),
                        text: e.getText()
                    },
                    ''.concat(n, '-').concat(t)
                );
            });
        else {
            let e = o ? u() : void 0;
            t = (0, i.jsx)(T, {
                url: e,
                onClick: () => l(h),
                text: E.intl.string(E.t['1WjMbG'])
            });
        }
        return (0, i.jsx)('li', {
            className: r()(I.platform, { [I.active]: s }),
            onMouseEnter: () => a(_),
            children: (0, i.jsxs)('div', {
                className: I.contentWrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: I.iconWrap,
                        children: [(0, i.jsx)('div', { className: p }), (0, i.jsx)('div', { className: r()(I.active, p) })]
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(m.X6q, {
                                className: I.platformName,
                                variant: 'heading-lg/semibold',
                                children: h
                            }),
                            (0, i.jsx)('div', {
                                className: r()(I.downloadButtons, { [I.list]: Array.isArray(t) }),
                                children: t
                            })
                        ]
                    })
                ]
            })
        });
    };
function A(e) {
    let { source: t, onClose: n, transitionState: a } = e,
        s = (0, u.e7)([f.default], () => f.default.getCurrentUser()),
        C = (0, u.e7)([g.default], () => g.default.getFingerprint()),
        T = null == s || s.isClaimed(),
        [A, j] = l.useState(
            (function () {
                var e;
                switch (null === (e = o().os) || void 0 === e ? void 0 : e.family) {
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
    function y(e) {
        (null != d.getToken() || null != C) &&
            x.default.track(v.rMx.DOWNLOAD_APP, {
                platform: e,
                ptb: !1,
                released: !0,
                has_e_mail: T,
                referring_location: t,
                qr_code: !1
            }),
            T || (n(), _.j());
    }
    function Z(e) {
        j(e);
    }
    l.useEffect(() => {
        x.default.track(v.rMx.OPEN_MODAL, {
            type: 'Download App',
            source: { location: t }
        });
    }, [t]);
    let R = (0, h.Dt)(),
        L = (0, p.Q3)('DownloadAppsModal');
    return (0, i.jsx)(m.f6W, {
        theme: v.BRd.LIGHT,
        children: (e) =>
            (0, i.jsxs)(m.Y0X, {
                className: r()(I.downloadApps, L ? void 0 : e),
                transitionState: a,
                'aria-labelledby': R,
                children: [
                    (0, i.jsx)(m.olH, {
                        onClick: n,
                        className: I.modalCloseButton
                    }),
                    (0, i.jsxs)(m.hzk, {
                        className: I.inner,
                        children: [
                            (0, i.jsx)(m.nn4, {
                                children: (0, i.jsx)(m.H, {
                                    id: R,
                                    children: E.intl.string(E.t.BK8LKy)
                                })
                            }),
                            !c.tq &&
                                (0, i.jsxs)('div', {
                                    className: I.platformsWrap,
                                    children: [
                                        (0, i.jsx)(m.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: I.header,
                                            children: E.intl.string(E.t['0KK0bG'])
                                        }),
                                        (0, i.jsx)('ul', {
                                            className: I.platforms,
                                            children: N.map((e) =>
                                                (0, i.jsx)(
                                                    b,
                                                    {
                                                        isActive: A === e.platformKey,
                                                        platform: e,
                                                        onClick: y,
                                                        onMouseEnter: Z,
                                                        claimed: T
                                                    },
                                                    e.platformKey
                                                )
                                            )
                                        })
                                    ]
                                }),
                            (0, i.jsxs)('div', {
                                className: I.platformsWrap,
                                children: [
                                    !c.tq &&
                                        (0, i.jsx)(m.X6q, {
                                            variant: 'heading-lg/semibold',
                                            className: I.header,
                                            children: E.intl.string(E.t.RdSNWV)
                                        }),
                                    (0, i.jsx)('ul', {
                                        className: I.platforms,
                                        children: S.map((e) =>
                                            (0, i.jsx)(
                                                b,
                                                {
                                                    isActive: A === e.platformKey,
                                                    platform: e,
                                                    onClick: y,
                                                    onMouseEnter: Z,
                                                    claimed: T
                                                },
                                                e.platformKey
                                            )
                                        )
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(m.mzw, {
                        className: I.footer,
                        children: (0, i.jsx)(m.Text, {
                            variant: 'text-sm/normal',
                            children: E.intl.format(E.t['RJS+1N'], {})
                        })
                    })
                ]
            })
    });
}
