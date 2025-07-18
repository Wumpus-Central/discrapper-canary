t.d(r, { Z: () => d });
var n = t(255367),
    a = t(73800),
    i = t(481060),
    s = t(388032),
    l = t(404922);
function o(e) {
    let { showSecondaryColor: r, palette: t, onPrimaryColorChange: o, onSecondaryColorChange: d } = e,
        c = a.useRef(null);
    return (
        (0, i.Tbt)(c),
        (0, n.jsxs)('div', {
            className: l.popoutContainer,
            children: [
                (0, n.jsx)(i.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: l.customColorsHeader,
                    children: s.intl.string(s.t.JhNpg4)
                }),
                (0, n.jsxs)('div', {
                    ref: c,
                    className: l.colorPickersContainer,
                    children: [
                        (0, n.jsxs)('div', {
                            className: l.colorColumn,
                            children: [
                                (0, n.jsx)('div', {
                                    className: l.colorSwatch,
                                    style: { backgroundColor: t.primary }
                                }),
                                (0, n.jsx)(i.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-default',
                                    children: s.intl.string(s.t.C3KTQk)
                                }),
                                (0, n.jsx)(i.Z$W, {
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
                                    (0, n.jsx)(i.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-default',
                                        children: s.intl.string(s.t['8elvy8'])
                                    }),
                                    (0, n.jsx)(i.Z$W, {
                                        className: l.colorPicker,
                                        value: t.secondary,
                                        eagerUpdate: !0,
                                        wrapperComponentType: 'div',
                                        showEyeDropper: !0,
                                        onChange: d
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function d(e) {
    let { shouldShow: r, showSecondaryColor: t, onRequestClose: a, children: s, palette: l, onPrimaryColorChange: d, onSecondaryColorChange: c, popoutTargetRef: u } = e;
    return (0, n.jsx)(i.yRy, {
        targetElementRef: u,
        renderPopout: () =>
            (0, n.jsx)(o, {
                showSecondaryColor: t,
                palette: l,
                onPrimaryColorChange: d,
                onSecondaryColorChange: c
            }),
        position: 'top',
        shouldShow: r,
        onRequestClose: a,
        animation: i.yRy.Animation.TRANSLATE,
        animationPosition: 'right',
        children: s
    });
}
