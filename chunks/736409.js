n.d(t, { j: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(793030),
    o = n(704215),
    a = n(780384),
    s = n(481060),
    c = n(230711),
    u = n(410030),
    d = n(100527),
    p = n(906732),
    h = n(243778),
    f = n(667105),
    g = n(695346),
    m = n(626135),
    b = n(316496),
    v = n(903002),
    y = n(214492),
    _ = n(981631),
    O = n(921944),
    j = n(46140),
    C = n(388032),
    x = n(94594),
    P = n(204794);
let S = {
        topLeftDark: 'rgba(62, 22, 137, 0.8)',
        topRightDark: 'rgba(160, 86, 242, 0.4)',
        topLeftLight: 'rgba(159, 86, 242, 0.4)',
        topRightLight: 'rgba(222, 194, 252, 0.5)'
    },
    I = (e) => {
        let { closePopout: t, setToggleDefaultState: n } = e,
            { analyticsLocations: i } = (0, p.ZP)(d.Z.SHARING_CONTROLS_COACHMARK),
            o = (0, u.ZP)(),
            h = g.G6.useSetting(),
            { assets: f, count: m } = (0, y.fq)();
        return (0, r.jsxs)('div', {
            className: x.wrapper,
            children: [
                (0, r.jsx)('div', {
                    className: x.gradient,
                    style: { background: 'radial-gradient(75% 75% at 0% 0%, '.concat((0, a.wj)(o) ? S.topLeftDark : S.topLeftLight, ' 0%, transparent 100%),\n    radial-gradient(70% 50% at 100% 0%, ').concat((0, a.wj)(o) ? S.topRightDark : S.topRightLight, ' 0%, transparent 100%)') }
                }),
                (0, r.jsxs)('div', {
                    className: x.content,
                    children: [
                        (0, r.jsx)(s.zxk, {
                            className: x.closeButton,
                            'aria-label': C.NW.string(C.t.cpT0Cg),
                            look: s.zxk.Looks.BLANK,
                            size: s.zxk.Sizes.NONE,
                            onClick: t,
                            children: (0, r.jsx)(s.Dio, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        }),
                        (0, r.jsx)('img', {
                            alt: '',
                            src: P.Z,
                            className: x.controllerImage
                        }),
                        (0, r.jsx)(l.X6, {
                            variant: 'heading-md/bold',
                            className: x.title,
                            children: C.NW.string(C.t.ObD1w8)
                        }),
                        (0, r.jsxs)('div', {
                            className: x.contentContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: x.toggleContainer,
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'header-primary',
                                            children: C.NW.string(C.t.drIYTU)
                                        }),
                                        (0, r.jsx)(s.rsf, {
                                            onChange: (e) => {
                                                g.G6.updateSetting(e), e && n(e);
                                            },
                                            checked: h
                                        })
                                    ]
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: C.NW.string(C.t.GnhKNz)
                                }),
                                (0, r.jsx)(v.D, {
                                    assets: f,
                                    assetCount: m,
                                    size: v.F.SMALL
                                })
                            ]
                        }),
                        (0, r.jsx)(s.zxk, {
                            className: x.viewSettingsButton,
                            onClick: () => {
                                t(), c.Z.open(_.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: i });
                            },
                            look: s.zxk.Looks.LINK,
                            color: s.zxk.Colors.CUSTOM,
                            size: s.zxk.Sizes.TINY,
                            fullWidth: !0,
                            children: C.NW.string(C.t.g8usuL)
                        })
                    ]
                })
            ]
        });
    },
    N = (e) => {
        let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: l } = e,
            { rtcPopoutEnabled: a } = (0, b.S)('SharingPrivacyPopout'),
            c = (0, f.Ws)({ location: j.dr.CONFLICT_CHECKS }),
            u = g.G6.useSetting(),
            [d, p] = (0, i.useState)(!1);
        return ((0, i.useEffect)(() => {
            n && m.default.track(_.rMx.OPEN_POPOUT, { type: 'SharingPrivacyPopout' });
        }, [n]),
        a && c && (!u || d))
            ? (0, r.jsx)(h.ZP, {
                  contentTypes: n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2],
                  children: (e) => {
                      let { visibleContent: i, markAsDismissed: a } = e;
                      return i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n
                          ? (0, r.jsx)(s.yRy, {
                                shouldShow: !0,
                                position: 'bottom',
                                align: 'center',
                                onRequestClose: () => {
                                    a(O.L.USER_DISMISS), l(!1), p(!1);
                                },
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(I, {
                                        closePopout: t,
                                        setToggleDefaultState: p
                                    });
                                },
                                children: () => t
                            })
                          : t;
                  }
              })
            : t;
    };
