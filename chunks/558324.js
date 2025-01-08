n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(981631),
    c = n(524910);
t.Z = (e) => {
    let { className: t, tags: n, value: l, onRemoveTag: d, onAddTag: u, maxTaxLength: m, maxTags: h, disabled: g, placeholder: x, ...p } = e,
        [f, C] = r.useState(null != l ? l : ''),
        v = n.map((e, t) =>
            (0, i.jsxs)(
                'span',
                {
                    className: a()(c.tag, { [c.__invalid_disabledTag]: g }),
                    children: [
                        e,
                        !g &&
                            (0, i.jsx)(s.Clickable, {
                                className: c.closeWrapper,
                                onClick: () => d(t),
                                children: (0, i.jsx)(s.XSmallIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: c.close
                                })
                            })
                    ]
                },
                t
            )
        ),
        _ = r.useCallback(() => {
            let e = f.trim();
            if (0 !== e.length) (null == h || !(n.length >= h)) && (u(e), C(''));
        }, [f, h, u, n.length]),
        N = r.useCallback(
            (e) => {
                switch (e.keyCode) {
                    case o.yXg.BACKSPACE:
                        0 === f.length && n.length > 0 && (e.preventDefault(), e.stopPropagation(), d(n.length - 1));
                        break;
                    case o.yXg.ENTER:
                    case o.yXg.TAB:
                    case o.yXg.COMMA:
                        e.preventDefault(), e.stopPropagation(), _();
                }
            },
            [_, f.length, d, n.length]
        );
    return (0, i.jsxs)('div', {
        className: a()(t, c.inputWrapper, { [c.disabled]: g }),
        children: [
            v,
            (0, i.jsx)(s.TextInput, {
                className: c.inputOuter,
                inputClassName: c.inputInner,
                ...p,
                value: f,
                onKeyDown: N,
                onChange: C,
                maxLength: m,
                disabled: g,
                onBlur: _,
                placeholder: x
            })
        ]
    });
};
