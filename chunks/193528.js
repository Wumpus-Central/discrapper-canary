n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(772848),
    o = n(866442),
    c = n(692547),
    d = n(481060),
    u = n(699682),
    m = n(44315),
    g = n(654904),
    h = n(981631),
    p = n(388032),
    x = n(602750);
function f(e) {
    let { onChange: t, onClose: n, color: r, suggestedColors: f, disabled: _, label: E, colorPickerMiddle: C, colorPickerFooter: T, showEyeDropper: S } = e,
        b = s.useRef(null),
        I = (0, d.useToken)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        N = c.Z.colors.BACKGROUND_ACCENT.css,
        v = (0, g.DP)(r),
        A = (0, o.Rf)(r),
        j = A === I ? N : A,
        R = (0, m.Lq)(v ? h.Ilk.WHITE_500 : h.Ilk.PRIMARY_530),
        O = (0, u.Z)(C),
        P = (0, u.Z)(T),
        [y, D] = s.useState((0, l.Z)());
    return (
        s.useEffect(() => {
            (O !== C || P !== T) && D((0, l.Z)());
        }, [T, C, P, O]),
        (0, i.jsx)(d.Popout, {
            positionKey: y,
            renderPopout: (e) =>
                (0, i.jsx)(d.CustomColorPicker, {
                    ...e,
                    value: r,
                    onChange: t,
                    suggestedColors: f,
                    middle: C,
                    footer: T,
                    showEyeDropper: S
                }),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsxs)('div', {
                    ref: b,
                    className: a()(x.colorSwatch, { [x.disabled]: _ }),
                    children: [
                        (0, i.jsx)(d.Clickable, {
                            ...n,
                            tabIndex: _ ? -1 : 0,
                            onClick: _ ? h.dG4 : t,
                            style: {
                                backgroundColor: A,
                                borderColor: j
                            },
                            className: x.swatch,
                            'aria-label': p.intl.string(p.t.Qp04hI),
                            focusProps: { ringTarget: b },
                            children: (0, i.jsx)(d.PencilIcon, {
                                size: 'custom',
                                className: x.editPencilIcon,
                                width: 14,
                                height: 14,
                                color: R
                            })
                        }),
                        E
                    ]
                });
            }
        })
    );
}
