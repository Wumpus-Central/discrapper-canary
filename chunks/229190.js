t.d(n, { Z: () => o });
var r = t(255367),
    i = t(73800),
    a = t(481060),
    l = t(388032),
    s = t(404922);
function d(e) {
    let { showSecondaryColor: n, palette: t, onPrimaryColorChange: d, onSecondaryColorChange: o } = e,
        c = i.useRef(null);
    return (
        (0, a.Tbt)(c),
        (0, r.jsxs)('div', {
            className: s.popoutContainer,
            children: [
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: s.customColorsHeader,
                    children: l.intl.string(l.t.JhNpg4)
                }),
                (0, r.jsxs)('div', {
                    ref: c,
                    className: s.colorPickersContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: s.colorColumn,
                            children: [
                                (0, r.jsx)('div', {
                                    className: s.colorSwatch,
                                    style: { backgroundColor: t.primary }
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: l.intl.string(l.t.C3KTQk)
                                }),
                                (0, r.jsx)(a.Z$W, {
                                    className: s.colorPicker,
                                    value: t.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: 'div',
                                    showEyeDropper: !0,
                                    onChange: d
                                })
                            ]
                        }),
                        n &&
                            (0, r.jsxs)('div', {
                                className: s.colorColumn,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: s.colorSwatch,
                                        style: { backgroundColor: t.secondary }
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-normal',
                                        children: l.intl.string(l.t['8elvy8'])
                                    }),
                                    (0, r.jsx)(a.Z$W, {
                                        className: s.colorPicker,
                                        value: t.secondary,
                                        eagerUpdate: !0,
                                        wrapperComponentType: 'div',
                                        showEyeDropper: !0,
                                        onChange: o
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
function o(e) {
    let { shouldShow: n, showSecondaryColor: t, onRequestClose: i, children: l, palette: s, onPrimaryColorChange: o, onSecondaryColorChange: c, popoutTargetRef: u } = e;
    return (0, r.jsx)(a.yRy, {
        targetElementRef: u,
        renderPopout: () =>
            (0, r.jsx)(d, {
                showSecondaryColor: t,
                palette: s,
                onPrimaryColorChange: o,
                onSecondaryColorChange: c
            }),
        position: 'top',
        shouldShow: n,
        onRequestClose: i,
        animation: a.yRy.Animation.TRANSLATE,
        animationPosition: 'right',
        children: l
    });
}
