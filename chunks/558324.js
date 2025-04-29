n.d(t, { Z: () => d }), n(388685), n(781311);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(981631),
    c = n(388032),
    u = n(306447);
let d = (e) => {
    var t,
        n,
        { className: l, tags: d, value: m, onRemoveTag: g, onAddTag: p, onAddTagError: h, maxTaxLength: f, maxTags: x, disabled: b, placeholder: j } = e,
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
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['className', 'tags', 'value', 'onRemoveTag', 'onAddTag', 'onAddTagError', 'maxTaxLength', 'maxTags', 'disabled', 'placeholder']);
    let [v, O] = i.useState(null != m ? m : ''),
        C = d.map((e, t) =>
            (0, r.jsxs)(
                'span',
                {
                    className: u.tag,
                    children: [
                        e,
                        !b &&
                            (0, r.jsx)(a.P3F, {
                                className: u.closeWrapper,
                                onClick: () => g(t),
                                children: (0, r.jsx)(a.Dio, {
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
        y = i.useCallback(() => {
            let e = v.trim();
            if (0 !== e.length) {
                if (null != x && d.length >= x) {
                    null == h || h(c.intl.string(c.t.Xx7XeH));
                    return;
                }
                p(e), O('');
            }
        }, [v, x, p, h, d.length]),
        N = i.useCallback(
            (e) => {
                switch (e.keyCode) {
                    case o.yXg.BACKSPACE:
                        0 === v.length && d.length > 0 && (e.preventDefault(), e.stopPropagation(), g(d.length - 1));
                        break;
                    case o.yXg.ENTER:
                    case o.yXg.TAB:
                    case o.yXg.COMMA:
                        e.preventDefault(), e.stopPropagation(), y();
                }
            },
            [y, v.length, g, d.length]
        );
    return (0, r.jsxs)('div', {
        className: s()(l, u.inputWrapper, { [u.disabled]: b }),
        children: [
            C,
            (0, r.jsx)(
                a.oil,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
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
                        value: v,
                        onKeyDown: N,
                        onChange: O,
                        maxLength: f,
                        disabled: b,
                        onBlur: y,
                        placeholder: j
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
