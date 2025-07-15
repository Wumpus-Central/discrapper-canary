n.d(t, { Z: () => o });
var r = n(255367),
    i = n(73800),
    a = n(481060),
    s = n(388032),
    l = n(404922);
function d(e) {
    let { showSecondaryColor: t, palette: n, onPrimaryColorChange: d, onSecondaryColorChange: o } = e,
        c = i.useRef(null);
    return (
        (0, a.Tbt)(c),
        (0, r.jsxs)('div', {
            className: l.popoutContainer,
            children: [
                (0, r.jsx)(a.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: l.customColorsHeader,
                    children: s.intl.string(s.t.JhNpg4)
                }),
                (0, r.jsxs)('div', {
                    ref: c,
                    className: l.colorPickersContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: l.colorColumn,
                            children: [
                                (0, r.jsx)('div', {
                                    className: l.colorSwatch,
                                    style: { backgroundColor: n.primary }
                                }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-default',
                                    children: s.intl.string(s.t.C3KTQk)
                                }),
                                (0, r.jsx)(a.Z$W, {
                                    className: l.colorPicker,
                                    value: n.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: 'div',
                                    showEyeDropper: !0,
                                    onChange: d
                                })
                            ]
                        }),
                        t &&
                            (0, r.jsxs)('div', {
                                className: l.colorColumn,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: l.colorSwatch,
                                        style: { backgroundColor: n.secondary }
                                    }),
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-default',
                                        children: s.intl.string(s.t['8elvy8'])
                                    }),
                                    (0, r.jsx)(a.Z$W, {
                                        className: l.colorPicker,
                                        value: n.secondary,
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
    let { shouldShow: t, showSecondaryColor: n, onRequestClose: i, children: s, palette: l, onPrimaryColorChange: o, onSecondaryColorChange: c, popoutTargetRef: u } = e;
    return (0, r.jsx)(a.yRy, {
        targetElementRef: u,
        renderPopout: () =>
            (0, r.jsx)(d, {
                showSecondaryColor: n,
                palette: l,
                onPrimaryColorChange: o,
                onSecondaryColorChange: c
            }),
        position: 'top',
        shouldShow: t,
        onRequestClose: i,
        animation: a.yRy.Animation.TRANSLATE,
        animationPosition: 'right',
        children: s
    });
}
