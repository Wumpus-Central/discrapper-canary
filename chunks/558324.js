n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(981631),
    c = n(524910);
let d = (e) => {
    let { className: t, tags: n, value: l, onRemoveTag: d, onAddTag: u, maxTaxLength: m, maxTags: h, disabled: g, placeholder: x, ...p } = e,
        [_, C] = r.useState(null != l ? l : ''),
        f = n.map((e, t) =>
            (0, i.jsxs)(
                'span',
                {
                    className: c.tag,
                    children: [
                        e,
                        !g &&
                            (0, i.jsx)(a.P3F, {
                                className: c.closeWrapper,
                                onClick: () => d(t),
                                children: (0, i.jsx)(a.Dio, {
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
        v = r.useCallback(() => {
            let e = _.trim();
            0 !== e.length && ((null != h && n.length >= h) || (u(e), C('')));
        }, [_, h, u, n.length]),
        N = r.useCallback(
            (e) => {
                switch (e.keyCode) {
                    case o.yXg.BACKSPACE:
                        0 === _.length && n.length > 0 && (e.preventDefault(), e.stopPropagation(), d(n.length - 1));
                        break;
                    case o.yXg.ENTER:
                    case o.yXg.TAB:
                    case o.yXg.COMMA:
                        e.preventDefault(), e.stopPropagation(), v();
                }
            },
            [v, _.length, d, n.length]
        );
    return (0, i.jsxs)('div', {
        className: s()(t, c.inputWrapper, { [c.disabled]: g }),
        children: [
            f,
            (0, i.jsx)(a.oil, {
                className: c.inputOuter,
                inputClassName: c.inputInner,
                ...p,
                value: _,
                onKeyDown: N,
                onChange: C,
                maxLength: m,
                disabled: g,
                onBlur: v,
                placeholder: x
            })
        ]
    });
};
