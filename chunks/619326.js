n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(866442),
    o = n(481060),
    c = n(393238),
    d = n(44315),
    u = n(663993),
    m = n(981631),
    h = n(388032),
    g = n(87498);
let x = (0, u.Un)({
    createPromise: () => n.e('5609').then(n.bind(n, 336231)),
    webpackId: 336231
});
function p(e) {
    let t = (0, s.Bd)(e) > 0.25;
    return (0, d.Lq)(t ? m.Ilk.WHITE_500 : m.Ilk.PRIMARY_530);
}
function f(e) {
    let { value: t, onChange: n, disabled: l = !1 } = e,
        [c, d] = r.useState(t);
    function u() {
        n(c);
    }
    function x(e) {
        n(e), d(e);
    }
    let f = t === m.p6O,
        C = f ? c : t,
        v = (0, i.jsx)(o.CheckmarkLargeIcon, {
            size: 'custom',
            width: 32,
            height: 24,
            color: p(t)
        }),
        _ = (0, o.useRadioGroup)({
            orientation: 'horizontal',
            isDisabled: l
        }),
        N = (0, o.useRadioItem)({
            isSelected: f,
            label: h.intl.formatToPlainString(h.t.ZC69mJ, { colorHex: (0, s.Rf)(m.p6O) })
        }),
        I = (0, o.useRadioItem)({
            isSelected: !f,
            label: h.intl.formatToPlainString(h.t['3kiLZW'], { colorHex: (0, s.Rf)(t) })
        });
    return (0, i.jsxs)('div', {
        className: g.buttonsContainer,
        'aria-label': h.intl.string(h.t.FJjrIy),
        ..._,
        children: [
            (0, i.jsx)('div', {
                className: a()(g.colorSwatch, { [g.disabled]: l }),
                children: (0, i.jsxs)(o.Clickable, {
                    onClick: l
                        ? void 0
                        : function () {
                              n(m.p6O);
                          },
                    'aria-disabled': l,
                    ...N,
                    children: [
                        (0, i.jsx)('div', {
                            className: g.swatch,
                            style: { backgroundColor: (0, s.Rf)(m.p6O) },
                            children: f ? v : null
                        }),
                        (0, i.jsx)(o.Text, {
                            className: g.swatchDescription,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: h.intl.string(h.t.Mcfzam)
                        })
                    ]
                })
            }),
            (0, i.jsxs)('div', {
                className: a()(g.colorSwatch, { [g.disabled]: l }),
                children: [
                    (0, i.jsxs)(o.Clickable, {
                        onClick: l ? void 0 : u,
                        'aria-disabled': l,
                        ...I,
                        children: [
                            (0, i.jsx)('div', {
                                className: a()(g.customSwatch, { [g.defaultSwatch]: C === m.p6O }),
                                style: { '--custom-color': (0, s.Rf)(C) },
                                children: f ? null : v
                            }),
                            (0, i.jsx)(o.Text, {
                                className: g.swatchDescription,
                                color: 'header-secondary',
                                variant: 'text-xs/normal',
                                'aria-hidden': !0,
                                children: h.intl.string(h.t['2ArXy8'])
                            })
                        ]
                    }),
                    !l &&
                        (0, i.jsx)(o.Popout, {
                            onRequestOpen: u,
                            renderPopout: (e) =>
                                (0, i.jsx)(o.CustomColorPicker, {
                                    ...e,
                                    value: t,
                                    onChange: x
                                }),
                            children: (e) =>
                                (0, i.jsx)(o.Clickable, {
                                    ...e,
                                    className: g.dropperIconButton,
                                    'aria-label': h.intl.string(h.t.Qp04hI),
                                    children: (0, i.jsx)(o.EyeDropperIcon, {
                                        size: 'custom',
                                        className: g.dropperIcon,
                                        width: 14,
                                        height: 14,
                                        color: p(C)
                                    })
                                })
                        })
                ]
            })
        ]
    });
}
function C(e) {
    let t,
        { value: n, onChange: r, disabled: l = !1 } = e,
        { ref: a, width: s } = (0, c.Z)();
    return (
        (t =
            null == s || s < 440
                ? (0, i.jsx)(f, {
                      value: n,
                      onChange: r,
                      disabled: l
                  })
                : (0, i.jsx)(x, {
                      defaultColor: m.p6O,
                      colors: m.pmI,
                      value: n,
                      onChange: r,
                      disabled: l
                  })),
        (0, i.jsx)('div', {
            ref: a,
            children: t
        })
    );
}
