e.d(n, { default: () => C }), e(47120);
var i = e(200651),
    r = e(192379),
    a = e(120356),
    s = e.n(a),
    o = e(399606),
    c = e(481060),
    l = e(607070),
    u = e(626135),
    _ = e(832239),
    d = e(407383),
    N = e(981631),
    I = e(388032),
    x = e(624066),
    p = e(617921);
function h(t) {
    let { onClose: n, source: a = d.I.INAPPROPRIATE_CONVERSATION } = t,
        h = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        [C, A] = r.useState(!1);
    r.useEffect(() => {
        let t = new Date();
        return (
            u.default.track(N.rMx.VIBING_WUMPUS_VIEWED, { source: a }),
            (0, _.JO)(),
            () => {
                u.default.track(N.rMx.VIBING_WUMPUS_CLOSED, {
                    duration_open_ms: new Date().getTime() - t.getTime(),
                    source: a
                }),
                    (0, _.zu)();
            }
        );
    }, [a]);
    let S = () => {
        C ? ((0, _.JO)(), u.default.track(N.rMx.VIBING_WUMPUS_ACTION, { action: d.G.PLAY })) : ((0, _.hW)(), u.default.track(N.rMx.VIBING_WUMPUS_ACTION, { action: d.G.PAUSE })), A(!C);
    };
    async function f() {
        let { default: t } = await e.e('29641').then(e.t.bind(e, 937359, 19));
        return t;
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: x.ringContainer,
                children: (0, i.jsx)('img', {
                    src: p,
                    alt: '',
                    className: x.__invalid_ringArt
                })
            }),
            (0, i.jsx)(c.Fmz, {
                importData: f,
                shouldAnimate: !C && !h,
                className: x.wumpus,
                pauseAtFrame: h ? 200 : void 0
            }),
            (0, i.jsx)(c.ua7, {
                text: C ? I.intl.string(I.t.RscU7O) : I.intl.string(I.t.ZcgDJS),
                position: 'top',
                'aria-label': C ? I.intl.string(I.t.RscU7O) : I.intl.string(I.t.ZcgDJS),
                children: (t) =>
                    (0, i.jsx)(c.P3F, {
                        ...t,
                        onClick: S,
                        className: x.iconButton,
                        children: C
                            ? (0, i.jsx)(c.o1U, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: x.icon
                              })
                            : (0, i.jsx)(c.fpf, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: x.icon
                              })
                    })
            }),
            (0, i.jsx)(c.hzk, {
                className: s()(x.body),
                children: (0, i.jsxs)('div', {
                    className: s()(x.textContainer),
                    children: [
                        (0, i.jsx)(c.X6q, {
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            children: I.intl.string(I.t.L4ifkZ)
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: I.intl.string(I.t.R8LCMT)
                        })
                    ]
                })
            }),
            (0, i.jsx)(c.mzw, {
                children: (0, i.jsx)('div', {
                    className: x.buttonContainer,
                    children: (0, i.jsx)(c.zxk, {
                        fullWidth: !0,
                        color: c.zxk.Colors.BRAND,
                        size: c.zxk.Sizes.MEDIUM,
                        onClick: () => {
                            n(), u.default.track(N.rMx.VIBING_WUMPUS_ACTION, { action: d.G.BACK_TO_CONVERSATION });
                        },
                        children: I.intl.string(I.t['8eKkaW'])
                    })
                })
            })
        ]
    });
}
let C = (t) => {
    let { onClose: n, transitionState: e } = t;
    return (0, i.jsx)(c.Y0X, {
        transitionState: e,
        children: (0, i.jsx)(h, { onClose: n })
    });
};
