n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(772848),
    o = n(866442),
    c = n(692547),
    d = n(481060),
    u = n(699682),
    h = n(44315),
    m = n(654904),
    g = n(981631),
    x = n(388032),
    _ = n(502452);
function p(e) {
    let { onChange: t, onClose: n, color: l, suggestedColors: p, disabled: E, label: C, colorPickerMiddle: N, colorPickerFooter: I, showEyeDropper: f } = e,
        T = s.useRef(null),
        S = (0, d.dQu)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        j = c.Z.colors.BACKGROUND_ACCENT.css,
        v = (0, m.DP)(l),
        b = (0, o.Rf)(l),
        A = b === S ? j : b,
        O = (0, h.Lq)(v ? g.Ilk.WHITE_500 : g.Ilk.PRIMARY_530),
        R = (0, u.Z)(N),
        D = (0, u.Z)(I),
        [P, y] = s.useState((0, a.Z)());
    return (
        s.useEffect(() => {
            (R !== N || D !== I) && y((0, a.Z)());
        }, [I, N, D, R]),
        (0, i.jsx)(d.yRy, {
            positionKey: P,
            renderPopout: (e) =>
                (0, i.jsx)(d.Z$W, {
                    ...e,
                    value: l,
                    onChange: t,
                    suggestedColors: p,
                    middle: N,
                    footer: I,
                    showEyeDropper: f
                }),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsxs)('div', {
                    ref: T,
                    className: r()(_.colorSwatch, { [_.disabled]: E }),
                    children: [
                        (0, i.jsx)(d.P3F, {
                            ...n,
                            tabIndex: E ? -1 : 0,
                            onClick: E ? g.dG4 : t,
                            style: {
                                backgroundColor: b,
                                borderColor: A
                            },
                            className: _.swatch,
                            'aria-label': x.intl.string(x.t.Qp04hI),
                            focusProps: { ringTarget: T },
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
