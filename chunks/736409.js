n.d(t, { j: () => w }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(793030),
    o = n(442837),
    a = n(704215),
    s = n(780384),
    c = n(481060),
    u = n(230711),
    d = n(410030),
    p = n(100527),
    h = n(906732),
    f = n(243778),
    g = n(667105),
    m = n(695346),
    b = n(819640),
    v = n(626135),
    y = n(316496),
    _ = n(903002),
    O = n(214492),
    j = n(981631),
    C = n(921944),
    x = n(46140),
    P = n(388032),
    S = n(94594),
    I = n(204794);
let N = {
        topLeftDark: 'rgba(62, 22, 137, 0.8)',
        topRightDark: 'rgba(160, 86, 242, 0.4)',
        topLeftLight: 'rgba(159, 86, 242, 0.4)',
        topRightLight: 'rgba(222, 194, 252, 0.5)'
    },
    Z = (e) => {
        let { closePopout: t, setToggleDefaultState: n } = e,
            { analyticsLocations: o } = (0, h.ZP)(p.Z.SHARING_CONTROLS_COACHMARK),
            a = (0, d.ZP)(),
            f = m.G6.useSetting(),
            { assets: g, count: b } = (0, O.fq)(),
            v = (0, i.useRef)(null);
        return (
            (0, c.Tbt)(v),
            (0, r.jsxs)('div', {
                className: S.wrapper,
                ref: v,
                children: [
                    (0, r.jsx)('div', {
                        className: S.gradient,
                        style: { background: 'radial-gradient(75% 75% at 0% 0%, '.concat((0, s.wj)(a) ? N.topLeftDark : N.topLeftLight, ' 0%, transparent 100%),\n    radial-gradient(70% 50% at 100% 0%, ').concat((0, s.wj)(a) ? N.topRightDark : N.topRightLight, ' 0%, transparent 100%)') }
                    }),
                    (0, r.jsxs)('div', {
                        className: S.content,
                        children: [
                            (0, r.jsx)(c.zxk, {
                                className: S.closeButton,
                                'aria-label': P.NW.string(P.t.cpT0Cg),
                                look: c.zxk.Looks.BLANK,
                                size: c.zxk.Sizes.NONE,
                                onClick: t,
                                children: (0, r.jsx)(c.Dio, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            }),
                            (0, r.jsx)('img', {
                                alt: '',
                                src: I.Z,
                                className: S.controllerImage
                            }),
                            (0, r.jsx)(l.X6, {
                                variant: 'heading-md/bold',
                                className: S.title,
                                children: P.NW.string(P.t.PRjSRk)
                            }),
                            (0, r.jsxs)('div', {
                                className: S.contentContainer,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: S.toggleContainer,
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-sm/medium',
                                                color: 'header-primary',
                                                children: P.NW.string(P.t.KY0ilp)
                                            }),
                                            (0, r.jsx)(c.rsf, {
                                                onChange: (e) => {
                                                    m.G6.updateSetting(e), e && n(e);
                                                },
                                                checked: f
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        children: P.NW.string(P.t.JW4KKS)
                                    }),
                                    (0, r.jsx)(_.D, {
                                        assets: g,
                                        assetCount: b,
                                        size: _.F.SMALL
                                    })
                                ]
                            }),
                            (0, r.jsx)(c.zxk, {
                                className: S.viewSettingsButton,
                                onClick: () => {
                                    t(), u.Z.open(j.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: o });
                                },
                                look: c.zxk.Looks.LINK,
                                color: c.zxk.Colors.CUSTOM,
                                size: c.zxk.Sizes.TINY,
                                fullWidth: !0,
                                children: P.NW.string(P.t.UPLpRU)
                            })
                        ]
                    })
                ]
            })
        );
    },
    w = (e) => {
        let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: l } = e,
            { rtcPopoutEnabled: s } = (0, y.S)('SharingPrivacyPopout'),
            u = (0, g.Ws)({ location: x.dr.CONFLICT_CHECKS }),
            d = m.G6.useSetting(),
            [p, h] = (0, i.useState)(!1),
            _ = (0, o.e7)([b.Z], () => b.Z.getLayers().includes(j.S9g.USER_SETTINGS));
        return ((0, i.useEffect)(() => {
            n && v.default.track(j.rMx.OPEN_POPOUT, { type: 'SharingPrivacyPopout' });
        }, [n]),
        s && u && (!d || p) && !_)
            ? (0, r.jsx)(f.ZP, {
                  contentTypes: n ? [] : [a.z.SHARE_ACTIVITY_COACHMARK_V2],
                  children: (e) => {
                      let { visibleContent: i, markAsDismissed: o } = e;
                      return i === a.z.SHARE_ACTIVITY_COACHMARK_V2 || n
                          ? (0, r.jsx)(c.yRy, {
                                shouldShow: !0,
                                position: 'bottom',
                                align: 'center',
                                onRequestClose: () => {
                                    o(C.L.USER_DISMISS), l(!1), h(!1);
                                },
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, r.jsx)(Z, {
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
