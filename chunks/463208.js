n.d(t, {
    o: () => v,
    p: () => O
});
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(42133),
    c = n(84735),
    u = n(15127),
    d = n(481060),
    _ = n(699682),
    f = n(388032),
    p = n(953100);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function O(e) {
    let { error: t } = e,
        n = (0, d.Yzy)(t, {
            config: {
                tension: 250,
                clamp: !0
            },
            from: {
                marginTop: 0,
                height: 0,
                opacity: 0,
                transform: 'translate3d(0, -100%, 0)'
            },
            enter: {
                marginTop: 8,
                height: 'auto',
                opacity: 1,
                transform: 'translate3d(0, -0px, 0)'
            },
            leave: {
                marginTop: 0,
                height: 0,
                opacity: 0,
                transform: 'translate3d(0, -100%, 0)'
            }
        }),
        r = (0, _.Z)(t);
    return (0, i.jsx)(i.Fragment, {
        children: n((e, n, a) => {
            let { key: o } = a,
                { transform: s } = e,
                c = b(e, ['transform']);
            return null != n && '' !== n
                ? (0, i.jsx)(
                      l.animated.div,
                      {
                          style: E(m({}, c), { overflow: 'hidden' }),
                          children: (0, i.jsxs)(l.animated.div, {
                              style: { transform: s },
                              className: p.inputError,
                              children: [
                                  (0, i.jsx)(d.P4T, {
                                      size: 'xs',
                                      color: d.TVs.colors.TEXT_DANGER.css
                                  }),
                                  (0, i.jsx)(d.Text, {
                                      color: 'text-danger',
                                      variant: 'text-sm/medium',
                                      children: null != t && '' !== t ? t : r
                                  })
                              ]
                          })
                      },
                      o
                  )
                : null;
        })
    });
}
class v extends (r = a.Component) {
    componentDidMount() {
        var e, t, n, r;
        (null == (e = (t = this.context).setHasValue) || e.call(t, (null != this.props.defaultValue && '' !== this.props.defaultValue) || (null != this.props.value && '' !== this.props.value)), null == (n = (r = this.context).setIsFocused) || n.call(r, !1));
    }
    componentDidUpdate() {
        if (null != this.props.value && '' !== this.props.value) {
            var e, t;
            null == (e = (t = this.context).setHasValue) || e.call(t, !0);
        }
    }
    render() {
        var e, t;
        let n = this.props,
            { className: r, inputClassName: a, disabled: o, editable: l, inputRef: u, prefixElement: d, focusProps: _ } = n,
            f = b(n, ['className', 'inputClassName', 'disabled', 'editable', 'inputRef', 'prefixElement', 'focusProps']),
            h = null != (t = f['aria-labelledby']) ? t : null == (e = this.context) ? void 0 : e.titleId;
        return (0, i.jsxs)('div', {
            className: s()(p.inputWrapper, r),
            children: [
                null != d && d,
                (0, i.jsx)(
                    c.t,
                    E(m({}, _), {
                        children: (0, i.jsx)(
                            'input',
                            E(
                                m(
                                    {
                                        className: s()(p.input, a, {
                                            [p.error]: this.hasError(),
                                            [p.disabled]: o,
                                            [p.editable]: l
                                        }),
                                        disabled: o,
                                        readOnly: !1 === l || void 0
                                    },
                                    f
                                ),
                                {
                                    'aria-labelledby': h,
                                    onChange: this.onChange,
                                    onBlur: this.onBlur,
                                    onFocus: this.onFocus,
                                    ref: u
                                }
                            )
                        )
                    })
                ),
                (0, i.jsx)(O, { error: this.getError() })
            ]
        });
    }
    constructor(e) {
        var t;
        (super(e),
            h(this, 'hasError', () => (null != this.props.error && this.props.error.length > 0) || (!1 !== this.state.dirty && (this.getIsUnderFlowing() || this.getIsOverFlowing()))),
            h(this, 'getError', () => {
                let { error: e, minLength: t, maxLength: n } = this.props,
                    r = this.getIsUnderFlowing() ? f.intl.formatToPlainString(f.t['62rk1N'], { minLength: t }) : null,
                    i = this.getIsOverFlowing() ? f.intl.formatToPlainString(f.t.ICT5S0, { maxLength: n }) : null;
                return (null != e && e.length < 1) || null === e ? null : null != e ? e : !1 === this.state.dirty ? null : null != r ? r : i;
            }),
            h(this, 'getIsUnderFlowing', () => {
                var e;
                let { value: t, minLength: n } = this.props;
                return null != n && (null != (e = null == t ? void 0 : t.length) ? e : 0) < n;
            }),
            h(this, 'getIsOverFlowing', () => {
                var e;
                let { value: t, maxLength: n } = this.props;
                return null != n && (null != (e = null == t ? void 0 : t.length) ? e : 0) > n;
            }),
            h(this, 'onChange', (e) => {
                var t, n, r, i;
                (null == (t = (n = this.props).onChange) || t.call(n, e.currentTarget.value, this.props.name), this.setState({ dirty: !0 }), null == (r = (i = this.context).setHasValue) || r.call(i, '' !== e.currentTarget.value));
            }),
            h(this, 'onFocus', (e) => {
                var t, n, r, i;
                (null == (t = (n = this.props).onFocus) || t.call(n, e, this.props.name), null == (r = (i = this.context).setIsFocused) || r.call(i, !0));
            }),
            h(this, 'onBlur', (e) => {
                var t, n, r, i;
                (null == (t = (n = this.props).onBlur) || t.call(n, e, this.props.name), null == (r = (i = this.context).setIsFocused) || r.call(i, !1));
            }),
            (this.state = { dirty: null != (t = e.defaultDirty) && t }));
    }
}
(h(v, 'contextType', u.q3),
    h(v, 'defaultProps', {
        name: '',
        disabled: !1,
        type: 'text',
        placeholder: '',
        autoFocus: !1,
        maxLength: 999
    }));
