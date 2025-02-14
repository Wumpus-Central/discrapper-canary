n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(772848),
    o = n(866442),
    c = n(692547),
    d = n(481060),
    u = n(699682),
    m = n(44315),
    g = n(654904),
    h = n(981631),
    x = n(388032),
    _ = n(403708);
function p(e) {
    let { onChange: t, onClose: n, color: r, suggestedColors: p, disabled: E, label: C, colorPickerMiddle: f, colorPickerFooter: T, showEyeDropper: N } = e,
        S = s.useRef(null),
        I = (0, d.dQu)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        b = c.Z.colors.BACKGROUND_ACCENT.css,
        v = (0, g.DP)(r),
        j = (0, o.Rf)(r),
        A = j === I ? b : j,
        O = (0, m.Lq)(v ? h.Ilk.WHITE_500 : h.Ilk.PRIMARY_530),
        R = (0, u.Z)(f),
        P = (0, u.Z)(T),
        [D, y] = s.useState((0, a.Z)());
    return (
        s.useEffect(() => {
            (R !== f || P !== T) && y((0, a.Z)());
        }, [T, f, P, R]),
        (0, i.jsx)(d.yRy, {
            positionKey: D,
            renderPopout: (e) =>
                (0, i.jsx)(d.Z$W, {
                    ...e,
                    value: r,
                    onChange: t,
                    suggestedColors: p,
                    middle: f,
                    footer: T,
                    showEyeDropper: N
                }),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsxs)('div', {
                    ref: S,
                    className: l()(_.colorSwatch, { [_.disabled]: E }),
                    children: [
                        (0, i.jsx)(d.P3F, {
                            ...n,
                            tabIndex: E ? -1 : 0,
                            onClick: E ? h.dG4 : t,
                            style: {
                                backgroundColor: j,
                                borderColor: A
                            },
                            className: _.swatch,
                            'aria-label': x.intl.string(x.t.Qp04hI),
                            focusProps: { ringTarget: S },
                            children: (0, i.jsx)(d.vdY, {
                                size: 'custom',
                                className: _.editPencilIcon,
                                width: 14,
                                height: 14,
                                color: O
                            })
                        }),
                        C
                    ]
                });
            }
        })
    );
}
