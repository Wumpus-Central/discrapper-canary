n.d(t, {
    j: function () {
        return _;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(793030),
    a = n(704215),
    o = n(780384),
    s = n(481060),
    c = n(230711),
    u = n(410030),
    d = n(243778),
    h = n(695346),
    p = n(316496),
    m = n(981631),
    f = n(921944),
    g = n(388032),
    v = n(61260),
    C = n(204794);
let x = {
        topLeftDark: 'rgba(62, 22, 137, 0.8)',
        topRightDark: 'rgba(160, 86, 242, 0.4)',
        topLeftLight: 'rgba(159, 86, 242, 0.4)',
        topRightLight: 'rgba(222, 194, 252, 0.5)'
    },
    I = (e) => {
        let { markAsDismissed: t, setIsForceShowSharingPopout: n } = e,
            a = (0, u.ZP)(),
            d = h.G6.useSetting();
        return (
            (0, l.useEffect)(
                () => () => {
                    t(f.L.INDIRECT_ACTION), n(!1);
                },
                [t, n]
            ),
            (0, i.jsxs)('div', {
                className: v.wrapper,
                children: [
                    (0, i.jsx)('div', {
                        className: v.gradient,
                        style: { background: 'radial-gradient(75% 75% at 0% 0%, '.concat((0, o.wj)(a) ? x.topLeftDark : x.topLeftLight, ' 0%, transparent 100%),\n    radial-gradient(70% 50% at 100% 0%, ').concat((0, o.wj)(a) ? x.topRightDark : x.topRightLight, ' 0%, transparent 100%)') }
                    }),
                    (0, i.jsxs)('div', {
                        className: v.content,
                        children: [
                            (0, i.jsx)(s.Button, {
                                className: v.closeButton,
                                'aria-label': g.intl.string(g.t.cpT0Cg),
                                look: s.Button.Looks.BLANK,
                                size: s.Button.Sizes.NONE,
                                onClick: () => {
                                    t(f.L.USER_DISMISS), n(!1);
                                },
                                children: (0, i.jsx)(s.XSmallIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            }),
                            (0, i.jsx)('img', {
                                alt: '',
                                src: C.Z,
                                className: v.controllerImage
                            }),
                            (0, i.jsx)(r.X6, {
                                variant: 'heading-md/bold',
                                className: v.title,
                                children: g.intl.string(g.t.ObD1w8)
                            }),
                            (0, i.jsxs)('div', {
                                className: v.contentContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: v.toggleContainer,
                                        children: [
                                            (0, i.jsx)(s.Text, {
                                                variant: 'text-sm/medium',
                                                children: g.intl.string(g.t.drIYTU)
                                            }),
                                            (0, i.jsx)(s.Switch, {
                                                onChange: (e) => h.G6.updateSetting(e),
                                                checked: d
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-xs/normal',
                                        children: g.intl.string(g.t.GnhKNz)
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.Button, {
                                look: s.Button.Looks.BLANK,
                                className: v.viewSettingsButton,
                                onClick: () => c.Z.open(m.oAB.ACTIVITY_PRIVACY),
                                children: g.intl.string(g.t.g8usuL)
                            })
                        ]
                    })
                ]
            })
        );
    },
    _ = (e) => {
        let { isForceShowSharingPopout: t, setIsForceShowSharingPopout: n } = e,
            { rtcPopoutEnabled: l } = (0, p.S)('SharingPrivacyPopout');
        return l
            ? (0, i.jsx)(d.ZP, {
                  contentTypes: [a.z.SHARE_ACTIVITY_COACHMARK],
                  children: (e) => {
                      let { visibleContent: l, markAsDismissed: r } = e;
                      if (l === a.z.SHARE_ACTIVITY_COACHMARK || t)
                          return (0, i.jsx)(I, {
                              markAsDismissed: r,
                              setIsForceShowSharingPopout: n
                          });
                  }
              })
            : null;
    };
