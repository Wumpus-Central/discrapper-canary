n.d(t, { j: () => y }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(793030),
    o = n(704215),
    a = n(780384),
    s = n(481060),
    c = n(230711),
    d = n(410030),
    u = n(100527),
    h = n(906732),
    p = n(243778),
    m = n(667105),
    g = n(695346),
    f = n(626135),
    _ = n(316496),
    v = n(903002),
    C = n(214492),
    x = n(981631),
    I = n(921944),
    Z = n(46140),
    b = n(388032),
    S = n(845722),
    N = n(204794);
let E = {
        topLeftDark: 'rgba(62, 22, 137, 0.8)',
        topRightDark: 'rgba(160, 86, 242, 0.4)',
        topLeftLight: 'rgba(159, 86, 242, 0.4)',
        topRightLight: 'rgba(222, 194, 252, 0.5)'
    },
    j = (e) => {
        let { closePopout: t, setToggleDefaultState: n } = e,
            { analyticsLocations: l } = (0, h.ZP)(u.Z.SHARING_CONTROLS_COACHMARK),
            o = (0, d.ZP)(),
            p = g.G6.useSetting(),
            { assets: m, count: f } = (0, C.fq)();
        return (0, i.jsxs)('div', {
            className: S.wrapper,
            children: [
                (0, i.jsx)('div', {
                    className: S.gradient,
                    style: { background: 'radial-gradient(75% 75% at 0% 0%, '.concat((0, a.wj)(o) ? E.topLeftDark : E.topLeftLight, ' 0%, transparent 100%),\n    radial-gradient(70% 50% at 100% 0%, ').concat((0, a.wj)(o) ? E.topRightDark : E.topRightLight, ' 0%, transparent 100%)') }
                }),
                (0, i.jsxs)('div', {
                    className: S.content,
                    children: [
                        (0, i.jsx)(s.zxk, {
                            className: S.closeButton,
                            'aria-label': b.intl.string(b.t.cpT0Cg),
                            look: s.zxk.Looks.BLANK,
                            size: s.zxk.Sizes.NONE,
                            onClick: t,
                            children: (0, i.jsx)(s.Dio, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        }),
                        (0, i.jsx)('img', {
                            alt: '',
                            src: N.Z,
                            className: S.controllerImage
                        }),
                        (0, i.jsx)(r.X6, {
                            variant: 'heading-md/bold',
                            className: S.title,
                            children: b.intl.string(b.t.ObD1w8)
                        }),
                        (0, i.jsxs)('div', {
                            className: S.contentContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: S.toggleContainer,
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'header-primary',
                                            children: b.intl.string(b.t.drIYTU)
                                        }),
                                        (0, i.jsx)(s.rsf, {
                                            onChange: (e) => {
                                                g.G6.updateSetting(e), e && n(e);
                                            },
                                            checked: p
                                        })
                                    ]
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: b.intl.string(b.t.GnhKNz)
                                }),
                                (0, i.jsx)(v.D, {
                                    assets: m,
                                    assetCount: f,
                                    size: v.F.SMALL
                                })
                            ]
                        }),
                        (0, i.jsx)(s.zxk, {
                            className: S.viewSettingsButton,
                            onClick: () => {
                                t(), c.Z.open(x.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: l });
                            },
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.CUSTOM,
                            size: s.zxk.Sizes.TINY,
                            fullWidth: !0,
                            children: b.intl.string(b.t.g8usuL)
                        })
                    ]
                })
            ]
        });
    },
    y = (e) => {
        let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: r } = e,
            { rtcPopoutEnabled: a } = (0, _.S)('SharingPrivacyPopout'),
            c = (0, m.Ws)({ location: Z.dr.CONFLICT_CHECKS }),
            d = g.G6.useSetting(),
            [u, h] = (0, l.useState)(!1);
        return ((0, l.useEffect)(() => {
            n && f.default.track(x.rMx.OPEN_POPOUT, { type: 'SharingPrivacyPopout' });
        }, [n]),
        a && c && (!d || u))
            ? (0, i.jsx)(p.ZP, {
                  contentTypes: n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2],
                  children: (e) => {
                      let { visibleContent: l, markAsDismissed: a } = e;
                      return l === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n
                          ? (0, i.jsx)(s.yRy, {
                                shouldShow: !0,
                                position: 'bottom',
                                align: 'center',
                                onRequestClose: () => {
                                    a(I.L.USER_DISMISS), r(!1), h(!1);
                                },
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, i.jsx)(j, {
                                        closePopout: t,
                                        setToggleDefaultState: h
                                    });
                                },
                                children: () => t
                            })
                          : t;
                  }
              })
            : t;
    };
