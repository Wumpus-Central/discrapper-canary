B.d(g, { Z: () => v });
var C = B(200651),
    Q = B(192379),
    w = B(481060),
    D = B(388032),
    f = B(393919);
function E(A) {
    let { showSecondaryColor: g, palette: B, onPrimaryColorChange: E, onSecondaryColorChange: v } = A,
        I = Q.useRef(null);
    return (
        (0, w.Tbt)(I),
        (0, C.jsxs)('div', {
            className: f.popoutContainer,
            children: [
                (0, C.jsx)(w.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: f.customColorsHeader,
                    children: D.NW.string(D.t.lfYWW1)
                }),
                (0, C.jsxs)('div', {
                    ref: I,
                    className: f.colorPickersContainer,
                    children: [
                        (0, C.jsxs)('div', {
                            className: f.colorColumn,
                            children: [
                                (0, C.jsx)('div', {
                                    className: f.colorSwatch,
                                    style: { backgroundColor: B.primary }
                                }),
                                (0, C.jsx)(w.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: D.NW.string(D.t.C3KTQk)
                                }),
                                (0, C.jsx)(w.Z$W, {
                                    className: f.colorPicker,
                                    value: B.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: 'div',
                                    showEyeDropper: !0,
                                    onChange: E
                                })
                            ]
                        }),
                        g &&
                            (0, C.jsxs)('div', {
                                className: f.colorColumn,
                                children: [
                                    (0, C.jsx)('div', {
                                        className: f.colorSwatch,
                                        style: { backgroundColor: B.secondary }
                                    }),
                                    (0, C.jsx)(w.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-normal',
                                        children: D.NW.string(D.t['8elvy8'])
                                    }),
                                    (0, C.jsx)(w.Z$W, {
                                        className: f.colorPicker,
                                        value: B.secondary,
                                        eagerUpdate: !0,
                                        wrapperComponentType: 'div',
                                        showEyeDropper: !0,
                                        onChange: v
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function v(A) {
    let { shouldShow: g, showSecondaryColor: B, onRequestClose: Q, children: D, palette: f, onPrimaryColorChange: v, onSecondaryColorChange: I } = A;
    return (0, C.jsx)(w.yRy, {
        renderPopout: () =>
            (0, C.jsx)(E, {
                showSecondaryColor: B,
                palette: f,
                onPrimaryColorChange: v,
                onSecondaryColorChange: I
            }),
        position: 'left',
        shouldShow: g,
        onRequestClose: Q,
        animation: w.yRy.Animation.TRANSLATE,
        animationPosition: 'right',
        children: D
    });
}
