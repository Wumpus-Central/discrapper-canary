r.d(n, { Z: () => d });
var t = r(255367),
    a = r(73800),
    i = r(481060),
    s = r(388032),
    l = r(404922);
function o(e) {
    let { showSecondaryColor: n, palette: r, onPrimaryColorChange: o, onSecondaryColorChange: d } = e,
        c = a.useRef(null);
    return (
        (0, i.Tbt)(c),
        (0, t.jsxs)('div', {
            className: l.popoutContainer,
            children: [
                (0, t.jsx)(i.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: l.customColorsHeader,
                    children: s.intl.string(s.t.JhNpg4)
                }),
                (0, t.jsxs)('div', {
                    ref: c,
                    className: l.colorPickersContainer,
                    children: [
                        (0, t.jsxs)('div', {
                            className: l.colorColumn,
                            children: [
                                (0, t.jsx)('div', {
                                    className: l.colorSwatch,
                                    style: { backgroundColor: r.primary }
                                }),
                                (0, t.jsx)(i.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: s.intl.string(s.t.C3KTQk)
                                }),
                                (0, t.jsx)(i.Z$W, {
                                    className: l.colorPicker,
                                    value: r.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: 'div',
                                    showEyeDropper: !0,
                                    onChange: o
                                })
                            ]
                        }),
                        n &&
                            (0, t.jsxs)('div', {
                                className: l.colorColumn,
                                children: [
                                    (0, t.jsx)('div', {
                                        className: l.colorSwatch,
                                        style: { backgroundColor: r.secondary }
                                    }),
                                    (0, t.jsx)(i.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-normal',
                                        children: s.intl.string(s.t['8elvy8'])
                                    }),
                                    (0, t.jsx)(i.Z$W, {
                                        className: l.colorPicker,
                                        value: r.secondary,
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
    let { shouldShow: n, showSecondaryColor: r, onRequestClose: a, children: s, palette: l, onPrimaryColorChange: d, onSecondaryColorChange: c, popoutTargetRef: m } = e;
    return (0, t.jsx)(i.yRy, {
        targetElementRef: m,
        renderPopout: () =>
            (0, t.jsx)(o, {
                showSecondaryColor: r,
                palette: l,
                onPrimaryColorChange: d,
                onSecondaryColorChange: c
            }),
        position: 'top',
        shouldShow: n,
        onRequestClose: a,
        animation: i.yRy.Animation.TRANSLATE,
        animationPosition: 'right',
        children: s
    });
}
