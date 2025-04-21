v.d(g, { Z: () => h });
var B = v(200651),
    t = v(192379),
    e = v(481060),
    f = v(388032),
    r = v(404922);
function C(A) {
    let { showSecondaryColor: g, palette: v, onPrimaryColorChange: C, onSecondaryColorChange: h } = A,
        n = t.useRef(null);
    return (
        (0, e.Tbt)(n),
        (0, B.jsxs)('div', {
            className: r.popoutContainer,
            children: [
                (0, B.jsx)(e.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: r.customColorsHeader,
                    children: f.intl.string(f.t.lfYWW1)
                }),
                (0, B.jsxs)('div', {
                    ref: n,
                    className: r.colorPickersContainer,
                    children: [
                        (0, B.jsxs)('div', {
                            className: r.colorColumn,
                            children: [
                                (0, B.jsx)('div', {
                                    className: r.colorSwatch,
                                    style: { backgroundColor: v.primary }
                                }),
                                (0, B.jsx)(e.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: f.intl.string(f.t.C3KTQk)
                                }),
                                (0, B.jsx)(e.Z$W, {
                                    className: r.colorPicker,
                                    value: v.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: 'div',
                                    showEyeDropper: !0,
                                    onChange: C
                                })
                            ]
                        }),
                        g &&
                            (0, B.jsxs)('div', {
                                className: r.colorColumn,
                                children: [
                                    (0, B.jsx)('div', {
                                        className: r.colorSwatch,
                                        style: { backgroundColor: v.secondary }
                                    }),
                                    (0, B.jsx)(e.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-normal',
                                        children: f.intl.string(f.t['8elvy8'])
                                    }),
                                    (0, B.jsx)(e.Z$W, {
                                        className: r.colorPicker,
                                        value: v.secondary,
                                        eagerUpdate: !0,
                                        wrapperComponentType: 'div',
                                        showEyeDropper: !0,
                                        onChange: h
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function h(A) {
    let { shouldShow: g, showSecondaryColor: v, onRequestClose: t, children: f, palette: r, onPrimaryColorChange: h, onSecondaryColorChange: n } = A;
    return (0, B.jsx)(e.yRy, {
        renderPopout: () =>
            (0, B.jsx)(C, {
                showSecondaryColor: v,
                palette: r,
                onPrimaryColorChange: h,
                onSecondaryColorChange: n
            }),
        position: 'top',
        shouldShow: g,
        onRequestClose: t,
        animation: e.yRy.Animation.TRANSLATE,
        animationPosition: 'right',
        children: f
    });
}
