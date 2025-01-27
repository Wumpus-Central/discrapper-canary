n.d(t, {
    j: function () {
        return x;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(793030),
    a = n(704215),
    o = n(780384),
    s = n(481060),
    c = n(410030),
    u = n(243778),
    d = n(695346),
    h = n(316496),
    p = n(921944),
    m = n(388032),
    f = n(61260),
    g = n(204794);
let v = {
        topLeftDark: 'rgba(62, 22, 137, 0.8)',
        topRightDark: 'rgba(160, 86, 242, 0.4)',
        topLeftLight: 'rgba(159, 86, 242, 0.4)',
        topRightLight: 'rgba(222, 194, 252, 0.5)'
    },
    C = (e) => {
        let { markAsDismissed: t, setIsForceShowSharingPopout: n } = e,
            a = (0, c.ZP)(),
            u = d.G6.useSetting();
        return (
            (0, l.useEffect)(
                () => () => {
                    t(p.L.INDIRECT_ACTION), n(!1);
                },
                [t, n]
            ),
            (0, i.jsxs)('div', {
                className: f.wrapper,
                children: [
                    (0, i.jsx)('div', {
                        className: f.gradient,
                        style: { background: 'radial-gradient(75% 75% at 0% 0%, '.concat((0, o.wj)(a) ? v.topLeftDark : v.topLeftLight, ' 0%, transparent 100%),\n    radial-gradient(70% 50% at 100% 0%, ').concat((0, o.wj)(a) ? v.topRightDark : v.topRightLight, ' 0%, transparent 100%)') }
                    }),
                    (0, i.jsxs)('div', {
                        className: f.content,
                        children: [
                            (0, i.jsx)(s.Button, {
                                className: f.closeButton,
                                'aria-label': m.intl.string(m.t.cpT0Cg),
                                look: s.Button.Looks.BLANK,
                                size: s.Button.Sizes.NONE,
                                onClick: () => {
                                    t(p.L.USER_DISMISS), n(!1);
                                },
                                children: (0, i.jsx)(s.XSmallIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            }),
                            (0, i.jsx)('img', {
                                alt: '',
                                src: g.Z,
                                className: f.controllerImage
                            }),
                            (0, i.jsx)(r.X6, {
                                variant: 'heading-md/bold',
                                className: f.title,
                                children: m.intl.string(m.t.ObD1w8)
                            }),
                            (0, i.jsxs)('div', {
                                className: f.contentContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: f.toggleContainer,
                                        children: [
                                            (0, i.jsx)(s.Text, {
                                                variant: 'text-sm/medium',
                                                children: m.intl.string(m.t.drIYTU)
                                            }),
                                            (0, i.jsx)(s.Switch, {
                                                onChange: (e) => d.G6.updateSetting(e),
                                                checked: u
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-xs/normal',
                                        children: m.intl.string(m.t.GnhKNz)
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.Button, {
                                look: s.Button.Looks.BLANK,
                                className: f.viewSettingsButton,
                                children: m.intl.string(m.t.g8usuL)
                            })
                        ]
                    })
                ]
            })
        );
    },
    x = (e) => {
        let { isForceShowSharingPopout: t, setIsForceShowSharingPopout: n } = e,
            { rtcPopoutEnabled: l } = (0, h.S)('SharingPrivacyPopout');
        return l
            ? (0, i.jsx)(u.ZP, {
                  contentTypes: [a.z.SHARE_ACTIVITY_COACHMARK],
                  children: (e) => {
                      let { visibleContent: l, markAsDismissed: r } = e;
                      if (l === a.z.SHARE_ACTIVITY_COACHMARK || t)
                          return (0, i.jsx)(C, {
                              markAsDismissed: r,
                              setIsForceShowSharingPopout: n
                          });
                  }
              })
            : null;
    };
