n.d(t, { Z: () => u }), n(47120), n(566702);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(981631),
    c = n(388032),
    d = n(306447);
let u = (e) => {
    var t,
        n,
        { className: s, tags: u, value: m, onRemoveTag: g, onAddTag: p, onAddTagError: h, maxTaxLength: f, maxTags: b, disabled: x, placeholder: j } = e,
        N = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['className', 'tags', 'value', 'onRemoveTag', 'onAddTag', 'onAddTagError', 'maxTaxLength', 'maxTags', 'disabled', 'placeholder']);
    let [_, v] = i.useState(null != m ? m : ''),
        C = u.map((e, t) =>
            (0, r.jsxs)(
                'span',
                {
                    className: d.tag,
                    children: [
                        e,
                        !x &&
                            (0, r.jsx)(l.P3F, {
                                className: d.closeWrapper,
                                onClick: () => g(t),
                                children: (0, r.jsx)(l.Dio, {
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
        O = i.useCallback(() => {
            let e = _.trim();
            if (0 !== e.length) {
                if (null != b && u.length >= b) {
                    null == h || h(c.NW.string(c.t.Xx7XeH));
                    return;
                }
                p(e), v('');
            }
        }, [_, b, p, h, u.length]),
        y = i.useCallback(
            (e) => {
                switch (e.keyCode) {
                    case o.yXg.BACKSPACE:
                        0 === _.length && u.length > 0 && (e.preventDefault(), e.stopPropagation(), g(u.length - 1));
                        break;
                    case o.yXg.ENTER:
                    case o.yXg.TAB:
                    case o.yXg.COMMA:
                        e.preventDefault(), e.stopPropagation(), O();
                }
            },
            [O, _.length, g, u.length]
        );
    return (0, r.jsxs)('div', {
        className: a()(s, d.inputWrapper, { [d.disabled]: x }),
        children: [
            C,
            (0, r.jsx)(
                l.oil,
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
                        className: d.inputOuter,
                        inputClassName: d.inputInner
                    },
                    N
                )),
                (n = n =
                    {
                        value: _,
                        onKeyDown: y,
                        onChange: v,
                        maxLength: f,
                        disabled: x,
                        onBlur: O,
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
