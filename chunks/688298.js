n.d(t, { Z: () => c });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(388032),
    l = n(741162);
function o(e) {
    let { showSecondaryColor: t, palette: n, onPrimaryColorChange: o, onSecondaryColorChange: c } = e,
        d = i.useRef(null);
    return (
        (0, s.Tbt)(d),
        (0, r.jsxs)('div', {
            className: l.popoutContainer,
            children: [
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: l.customColorsHeader,
                    children: a.NW.string(a.t.lfYWW1)
                }),
                (0, r.jsxs)('div', {
                    ref: d,
                    className: l.colorPickersContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: l.colorColumn,
                            children: [
                                (0, r.jsx)('div', {
                                    className: l.colorSwatch,
                                    style: { backgroundColor: n.primary }
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: a.NW.string(a.t.C3KTQk)
                                }),
                                (0, r.jsx)(s.Z$W, {
                                    className: l.colorPicker,
                                    value: n.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: 'div',
                                    showEyeDropper: !0,
                                    onChange: o
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
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-normal',
                                        children: a.NW.string(a.t['8elvy8'])
                                    }),
                                    (0, r.jsx)(s.Z$W, {
                                        className: l.colorPicker,
                                        value: n.secondary,
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
    let { shouldShow: t, showSecondaryColor: n, onRequestClose: i, children: a, palette: l, onPrimaryColorChange: c, onSecondaryColorChange: d } = e;
    return (0, r.jsx)(s.yRy, {
        renderPopout: () =>
            (0, r.jsx)(o, {
                showSecondaryColor: n,
                palette: l,
                onPrimaryColorChange: c,
                onSecondaryColorChange: d
            }),
        position: 'left',
        shouldShow: t,
        onRequestClose: i,
        animation: s.yRy.Animation.TRANSLATE,
        animationPosition: 'right',
        children: a
    });
}
