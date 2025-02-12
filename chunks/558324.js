n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(981631),
    c = n(388032),
    d = n(271889);
let u = (e) => {
    let { className: t, tags: n, value: l, onRemoveTag: u, onAddTag: m, onAddTagError: h, maxTaxLength: g, maxTags: x, disabled: p, placeholder: _, ...C } = e,
        [f, v] = r.useState(null != l ? l : ''),
        N = n.map((e, t) =>
            (0, i.jsxs)(
                'span',
                {
                    className: d.tag,
                    children: [
                        e,
                        !p &&
                            (0, i.jsx)(a.P3F, {
                                className: d.closeWrapper,
                                onClick: () => u(t),
                                children: (0, i.jsx)(a.Dio, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: d.close
                                })
                            })
                    ]
                },
                t
            )
        ),
        j = r.useCallback(() => {
            let e = f.trim();
            if (0 !== e.length) {
                if (null != x && n.length >= x) {
                    null == h || h(c.intl.string(c.t.Xx7XeH));
                    return;
                }
                m(e), v('');
            }
        }, [f, x, m, h, n.length]),
        I = r.useCallback(
            (e) => {
                switch (e.keyCode) {
                    case o.yXg.BACKSPACE:
                        0 === f.length && n.length > 0 && (e.preventDefault(), e.stopPropagation(), u(n.length - 1));
                        break;
                    case o.yXg.ENTER:
                    case o.yXg.TAB:
                    case o.yXg.COMMA:
                        e.preventDefault(), e.stopPropagation(), j();
                }
            },
            [j, f.length, u, n.length]
        );
    return (0, i.jsxs)('div', {
        className: s()(t, d.inputWrapper, { [d.disabled]: p }),
        children: [
            N,
            (0, i.jsx)(a.oil, {
                className: d.inputOuter,
                inputClassName: d.inputInner,
                ...C,
                value: f,
                onKeyDown: I,
                onChange: v,
                maxLength: g,
                disabled: p,
                onBlur: j,
                placeholder: _
            })
        ]
    });
};
