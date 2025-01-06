n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(388032),
    s = n(969170);
function o(e) {
    let { showSecondaryColor: t, palette: n, onPrimaryColorChange: o, onSecondaryColorChange: c } = e,
        d = r.useRef(null);
    return (
        (0, l.useFocusLock)(d),
        (0, i.jsxs)('div', {
            className: s.popoutContainer,
            children: [
                (0, i.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: s.customColorsHeader,
                    children: a.intl.string(a.t.lfYWW1)
                }),
                (0, i.jsxs)('div', {
                    ref: d,
                    className: s.colorPickersContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: s.colorColumn,
                            children: [
                                (0, i.jsx)('div', {
                                    className: s.colorSwatch,
                                    style: { backgroundColor: n.primary }
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: a.intl.string(a.t.C3KTQk)
                                }),
                                (0, i.jsx)(l.CustomColorPicker, {
                                    className: s.colorPicker,
                                    value: n.primary,
                                    eagerUpdate: !0,
                                    wrapperComponentType: 'div',
                                    showEyeDropper: !0,
                                    onChange: o
                                })
                            ]
                        }),
                        t &&
                            (0, i.jsxs)('div', {
                                className: s.colorColumn,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: s.colorSwatch,
                                        style: { backgroundColor: n.secondary }
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-normal',
                                        children: a.intl.string(a.t['8elvy8'])
                                    }),
                                    (0, i.jsx)(l.CustomColorPicker, {
                                        className: s.colorPicker,
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
    let { shouldShow: t, showSecondaryColor: n, onRequestClose: r, children: a, palette: s, onPrimaryColorChange: c, onSecondaryColorChange: d } = e;
    return (0, i.jsx)(l.Popout, {
        renderPopout: () =>
            (0, i.jsx)(o, {
                showSecondaryColor: n,
                palette: s,
                onPrimaryColorChange: c,
                onSecondaryColorChange: d
            }),
        position: 'left',
        shouldShow: t,
        onRequestClose: r,
        animation: l.Popout.Animation.TRANSLATE,
        animationPosition: 'right',
        children: a
    });
}
