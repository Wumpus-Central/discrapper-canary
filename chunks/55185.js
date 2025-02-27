n.d(t, {
    r: () => y,
    z: () => v
});
var r = n(200651),
    i = n(192379),
    l = n(793030),
    o = n(780384),
    a = n(481060),
    s = n(230711),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    p = n(695346),
    h = n(981631),
    f = n(388032),
    g = n(721132),
    m = n(204794);
let b = {
        topLeftDark: 'rgba(62, 22, 137, 0.8)',
        topRightDark: 'rgba(160, 86, 242, 0.4)',
        topLeftLight: 'rgba(159, 86, 242, 0.4)',
        topRightLight: 'rgba(222, 194, 252, 0.5)'
    },
    y = (e) => {
        let { closePopout: t, setToggleDefaultState: n } = e,
            { analyticsLocations: y } = (0, d.ZP)(u.Z.SHARING_CONTROLS_COACHMARK),
            v = (0, c.ZP)(),
            O = p.G6.useSetting(),
            j = (0, i.useRef)(null);
        return (
            (0, a.Tbt)(j),
            (0, r.jsxs)('div', {
                className: g.wrapper,
                ref: j,
                children: [
                    (0, r.jsx)('div', {
                        className: g.gradient,
                        style: { background: 'radial-gradient(75% 75% at 0% 0%, '.concat((0, o.wj)(v) ? b.topLeftDark : b.topLeftLight, ' 0%, transparent 100%),\n    radial-gradient(70% 50% at 100% 0%, ').concat((0, o.wj)(v) ? b.topRightDark : b.topRightLight, ' 0%, transparent 100%)') }
                    }),
                    (0, r.jsxs)('div', {
                        className: g.content,
                        children: [
                            (0, r.jsx)(a.zxk, {
                                className: g.closeButton,
                                'aria-label': f.NW.string(f.t.cpT0Cg),
                                look: a.zxk.Looks.BLANK,
                                size: a.zxk.Sizes.NONE,
                                onClick: t,
                                children: (0, r.jsx)(a.Dio, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            }),
                            (0, r.jsx)('img', {
                                alt: '',
                                src: m.Z,
                                className: g.controllerImage
                            }),
                            (0, r.jsx)(l.X6, {
                                variant: 'heading-md/bold',
                                color: 'header-primary',
                                className: g.nuxTitle,
                                children: f.NW.string(f.t.PRjSRk)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-secondary',
                                className: g.nuxContent,
                                children: f.NW.format(f.t.nEgjjo, {
                                    onClickSettings: () => {
                                        t(), s.Z.open(h.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: y });
                                    }
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: g.toggleContainer,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'header-primary',
                                        children: f.NW.string(f.t.KY0ilp)
                                    }),
                                    (0, r.jsx)(a.rsf, {
                                        onChange: (e) => {
                                            p.G6.updateSetting(e), e && n(e);
                                        },
                                        checked: O
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    v = (e) => {
        let { closePopout: t, setToggleDefaultState: n } = e,
            { analyticsLocations: o } = (0, d.ZP)(u.Z.SHARING_CONTROLS_COACHMARK),
            c = p.G6.useSetting(),
            m = (0, i.useRef)(null);
        return (
            (0, a.Tbt)(m),
            (0, r.jsx)('div', {
                className: g.wrapper,
                ref: m,
                children: (0, r.jsxs)('div', {
                    className: g.content,
                    children: [
                        (0, r.jsx)(l.X6, {
                            variant: 'heading-sm/semibold',
                            color: 'header-primary',
                            className: g.controlTitle,
                            children: f.NW.string(f.t['6x5uWV'])
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-secondary',
                            children: f.NW.format(f.t.nEgjjo, {
                                onClickSettings: () => {
                                    t(), s.Z.open(h.oAB.ACTIVITY_PRIVACY, null, { analyticsLocations: o });
                                }
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: g.toggleContainer,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-primary',
                                    children: f.NW.string(f.t.KY0ilp)
                                }),
                                (0, r.jsx)(a.rsf, {
                                    onChange: (e) => {
                                        p.G6.updateSetting(e), e && n(e);
                                    },
                                    checked: c
                                })
                            ]
                        })
                    ]
                })
            })
        );
    };
