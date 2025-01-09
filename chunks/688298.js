n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(388032),
    a = n(969170);
function o(e) {
    let { showSecondaryColor: t, palette: n, onPrimaryColorChange: o, onSecondaryColorChange: c } = e,
        d = r.useRef(null);
    return (
        (0, l.useFocusLock)(d),
        (0, i.jsxs)('div', {
            className: a.popoutContainer,
            children: [
                (0, i.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: a.customColorsHeader,
                    children: s.intl.string(s.t.lfYWW1)
                }),
                (0, i.jsxs)('div', {
                    ref: d,
                    className: a.colorPickersContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: a.colorColumn,
                            children: [
                                (0, i.jsx)('div', {
                                    className: a.colorSwatch,
                                    style: { backgroundColor: n.primary }
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: s.intl.string(s.t.C3KTQk)
                                }),
                                (0, i.jsx)(l.CustomColorPicker, {
                                    className: a.colorPicker,
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
                                className: a.colorColumn,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: a.colorSwatch,
                                        style: { backgroundColor: n.secondary }
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-normal',
                                        children: s.intl.string(s.t['8elvy8'])
                                    }),
                                    (0, i.jsx)(l.CustomColorPicker, {
                                        className: a.colorPicker,
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
    let { shouldShow: t, showSecondaryColor: n, onRequestClose: r, children: s, palette: a, onPrimaryColorChange: c, onSecondaryColorChange: d } = e;
    return (0, i.jsx)(l.Popout, {
        renderPopout: () =>
            (0, i.jsx)(o, {
                showSecondaryColor: n,
                palette: a,
                onPrimaryColorChange: c,
                onSecondaryColorChange: d
            }),
        position: 'left',
        shouldShow: t,
        onRequestClose: r,
        animation: l.Popout.Animation.TRANSLATE,
        animationPosition: 'right',
        children: s
    });
}
