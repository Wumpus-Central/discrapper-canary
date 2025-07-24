n.d(t, { Z: () => c });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    s = n(388032),
    a = n(404922);
function o(e) {
    let { showSecondaryColor: t, palette: n, onPrimaryColorChange: o, onSecondaryColorChange: c } = e,
        d = i.useRef(null);
    return (
        (0, l.Tbt)(d),
        (0, r.jsxs)('div', {
            className: a.popoutContainer,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: 'text-xs/semibold',
                    color: 'header-secondary',
                    className: a.customColorsHeader,
                    children: s.intl.string(s.t.JhNpg4)
                }),
                (0, r.jsxs)('div', {
                    ref: d,
                    className: a.colorPickersContainer,
                    children: [
                        (0, r.jsxs)('div', {
                            className: a.colorColumn,
                            children: [
                                (0, r.jsx)('div', {
                                    className: a.colorSwatch,
                                    style: { backgroundColor: n.primary }
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-default',
                                    children: s.intl.string(s.t.C3KTQk)
                                }),
                                (0, r.jsx)(l.Z$W, {
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
                            (0, r.jsxs)('div', {
                                className: a.colorColumn,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: a.colorSwatch,
                                        style: { backgroundColor: n.secondary }
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-default',
                                        children: s.intl.string(s.t['8elvy8'])
                                    }),
                                    (0, r.jsx)(l.Z$W, {
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
    let { shouldShow: t, showSecondaryColor: n, onRequestClose: i, children: s, palette: a, onPrimaryColorChange: c, onSecondaryColorChange: d, popoutTargetRef: u } = e;
    return (0, r.jsx)(l.yRy, {
        targetElementRef: u,
        renderPopout: () =>
            (0, r.jsx)(o, {
                showSecondaryColor: n,
                palette: a,
                onPrimaryColorChange: c,
                onSecondaryColorChange: d
            }),
        position: 'top',
        shouldShow: t,
        onRequestClose: i,
        animation: l.yRy.Animation.TRANSLATE,
        animationPosition: 'right',
        children: s
    });
}
