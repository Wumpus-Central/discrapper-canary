n.d(t, { H: () => d }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(692547),
    r = n(481060),
    a = n(388032),
    o = n(996092);
let d = i.forwardRef(function (e, t) {
    let { transitionState: n } = e,
        [d, u] = i.useState(''),
        c = i.useRef(null),
        h = i.useCallback(
            (e) => {
                u(e);
            },
            [u]
        ),
        g = i.useCallback(() => {
            u('');
        }, [u]);
    return (0, l.jsxs)(r.Y0X, {
        className: o.modal,
        transitionState: n,
        children: [
            (0, l.jsxs)(r.xBx, {
                className: o.header,
                children: [
                    (0, l.jsxs)('div', {
                        className: o.titleLine,
                        children: [
                            (0, l.jsx)('div', {
                                className: o.title,
                                children: (0, l.jsx)(r.X6q, {
                                    variant: 'heading-lg/semibold',
                                    children: a.NW.string(a.t.BN75l5)
                                })
                            }),
                            (0, l.jsx)(r.olH, {
                                className: o.closeButton,
                                onClick: () => void 0
                            })
                        ]
                    }),
                    (0, l.jsx)(r.E1j, {
                        ref: c,
                        size: r.E1j.Sizes.MEDIUM,
                        query: d,
                        onChange: h,
                        onClear: g,
                        placeholder: a.NW.string(a.t['5h0QOD']),
                        'aria-label': a.NW.string(a.t['5h0QOD']),
                        autoFocus: !0
                    })
                ]
            }),
            (0, l.jsx)(r.hzk, {}),
            (0, l.jsxs)(r.mzw, {
                className: o.footer,
                children: [
                    (0, l.jsxs)('div', {
                        className: o.guildRow,
                        children: [
                            (0, l.jsx)('div', { className: o.guildAsset }),
                            (0, l.jsxs)('div', {
                                className: o.guildContent,
                                children: [
                                    (0, l.jsx)(r.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-secondary',
                                        children: 'Celebration Station'
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: o.guildCount,
                                        children: [
                                            (0, l.jsx)(r.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'header-muted',
                                                children: '32 members'
                                            }),
                                            (0, l.jsx)(r.Text, {
                                                variant: 'text-xs/medium',
                                                color: 'header-muted',
                                                children: '19 online'
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, l.jsx)(r.zxk, {
                                size: r.zxk.Sizes.ICON,
                                look: r.zxk.Looks.BLANK,
                                onClick: () => void 0,
                                className: o.settingsButton,
                                children: (0, l.jsx)(r.ewm, {
                                    size: 'md',
                                    color: s.Z.colors.ICON_PRIMARY.css
                                })
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: o.buttonRow,
                        children: [
                            (0, l.jsxs)(r.zxk, {
                                className: o.button,
                                innerClassName: o.buttonInner,
                                color: r.zxk.Colors.PRIMARY,
                                onClick: () => void 0,
                                children: [
                                    (0, l.jsx)(r.xPt, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    }),
                                    (0, l.jsx)('span', { children: a.NW.string(a.t.WqhZsr) })
                                ]
                            }),
                            (0, l.jsxs)(r.zxk, {
                                className: o.button,
                                innerClassName: o.buttonInner,
                                onClick: () => void 0,
                                children: [
                                    (0, l.jsx)('span', { children: 'Send Invite' }),
                                    (0, l.jsx)(r.Uuj, {
                                        size: 'xs',
                                        color: 'currentColor'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
