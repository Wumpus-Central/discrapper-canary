t.d(r, { Z: () => c });
var n = t(255367),
    i = t(73800),
    a = t(481060),
    s = t(388032),
    l = t(404922);
function o(e) {
    let { showSecondaryColor: r, palette: t, onPrimaryColorChange: o, onSecondaryColorChange: c } = e,
        d = i.useRef(null);
    return (
        (0, a.Tbt)(d),
        (0, n.jsxs)('div', {
            className: l.popoutContainer,
            children: [
                (0, n.jsx)(a.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: l.customColorsHeader,
                    children: s.intl.string(s.t.JhNpg4)
                }),
                (0, n.jsxs)('div', {
                    ref: d,
                    className: l.colorPickersContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: l.colorColumn,
                            children: [
                                (0, n.jsx)('div', {
                                    className: l.colorSwatch,
                                    style: { backgroundColor: t.primary }
                                }),
                                (0, n.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-default',
                                    children: s.intl.string(s.t.C3KTQk)
                                }),
                                (0, n.jsx)(a.Z$W, {
                                    className: l.colorPicker,
                                    value: t.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: 'div',
                                    showEyeDropper: !0,
                                    onChange: o
                                })
                            ]
                        }),
                        r &&
                            (0, n.jsxs)('div', {
                                className: l.colorColumn,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: l.colorSwatch,
                                        style: { backgroundColor: t.secondary }
                                    }),
                                    (0, n.jsx)(a.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-default',
                                        children: s.intl.string(s.t['8elvy8'])
                                    }),
                                    (0, n.jsx)(a.Z$W, {
                                        className: l.colorPicker,
                                        value: t.secondary,
                                        eagerUpdate: !0,
                                        wrapperComponentType: 'div',
                                        showEyeDropper: !0,
                                        onChange: c
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function c(e) {
    let { shouldShow: r, showSecondaryColor: t, onRequestClose: i, children: s, palette: l, onPrimaryColorChange: c, onSecondaryColorChange: d, popoutTargetRef: u } = e;
    return (0, n.jsx)(a.yRy, {
        targetElementRef: u,
        renderPopout: () =>
            (0, n.jsx)(o, {
                showSecondaryColor: t,
                palette: l,
                onPrimaryColorChange: c,
                onSecondaryColorChange: d
            }),
        position: 'top',
        shouldShow: r,
        onRequestClose: i,
        animation: a.yRy.Animation.TRANSLATE,
        animationPosition: 'right',
        children: s
    });
}
