(n.d(t, { Z: () => m }), n(388685), n(781311));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(755721),
    o = n(481060),
    c = n(981631),
    d = n(388032),
    u = n(306447);
let m = (e) => {
    var t,
        n,
        { className: l, tags: m, value: g, onRemoveTag: p, onAddTag: f, onAddTagError: h, maxTaxLength: x, maxTags: b, disabled: j, placeholder: v } = e,
        _ = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['className', 'tags', 'value', 'onRemoveTag', 'onAddTag', 'onAddTagError', 'maxTaxLength', 'maxTags', 'disabled', 'placeholder']);
    let [O, C] = i.useState(null != g ? g : ''),
        y = m.map((e, t) =>
            (0, r.jsxs)(
                'span',
                {
                    className: u.tag,
                    children: [
                        e,
                        !j &&
                            (0, r.jsx)(o.P3F, {
                                className: u.closeWrapper,
                                onClick: () => p(t),
                                children: (0, r.jsx)(o.Dio, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: u.close
                                })
                            })
                    ]
                },
                t
            )
        ),
        N = i.useCallback(() => {
            let e = O.trim();
            if (0 !== e.length) {
                if (null != b && m.length >= b) {
                    null == h || h(d.intl.string(d.t.Xx7XeH));
                    return;
                }
                (f(e), C(''));
            }
        }, [O, b, f, h, m.length]),
        I = i.useCallback(
            (e) => {
                switch (e.keyCode) {
                    case c.yXg.BACKSPACE:
                        0 === O.length && m.length > 0 && (e.preventDefault(), e.stopPropagation(), p(m.length - 1));
                        break;
                    case c.yXg.ENTER:
                    case c.yXg.TAB:
                    case c.yXg.COMMA:
                        (e.preventDefault(), e.stopPropagation(), N());
                }
            },
            [N, O.length, p, m.length]
        );
    return (0, r.jsxs)('div', {
        className: s()(l, u.inputWrapper, { [u.disabled]: j }),
        children: [
            y,
            (0, r.jsx)(
                a.Is,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })(
                    {
                        className: u.inputOuter,
                        inputClassName: u.inputInner
                    },
                    _
                )),
                (n = n =
                    {
                        value: O,
                        onKeyDown: I,
                        onChange: C,
                        maxLength: x,
                        disabled: j,
                        onBlur: N,
                        placeholder: v
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            )
        ]
    });
};
