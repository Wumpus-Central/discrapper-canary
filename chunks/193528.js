n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
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
    let { onChange: t, onClose: n, color: s, suggestedColors: f, disabled: E, label: _, colorPickerMiddle: C, colorPickerFooter: T, showEyeDropper: S } = e,
        b = r.useRef(null),
        I = (0, d.useToken)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        N = c.Z.colors.BACKGROUND_ACCENT.css,
        v = (0, g.DP)(s),
        A = (0, o.Rf)(s),
        j = A === I ? N : A,
        O = (0, m.Lq)(v ? h.Ilk.WHITE_500 : h.Ilk.PRIMARY_530),
        R = (0, u.Z)(C),
        P = (0, u.Z)(T),
        [D, y] = r.useState((0, l.Z)());
    return (
        r.useEffect(() => {
            (R !== C || P !== T) && y((0, l.Z)());
        }, [T, C, P, R]),
        (0, i.jsx)(d.Popout, {
            positionKey: D,
            renderPopout: (e) =>
                (0, i.jsx)(d.CustomColorPicker, {
                    ...e,
                    value: s,
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
                    className: a()(x.colorSwatch, { [x.disabled]: E }),
                    children: [
                        (0, i.jsx)(d.Clickable, {
                            ...n,
                            tabIndex: E ? -1 : 0,
                            onClick: E ? h.dG4 : t,
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
                                color: O
                            })
                        }),
                        _
                    ]
                });
            }
        })
    );
}
