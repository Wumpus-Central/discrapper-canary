n.d(t, {
    o: () => S,
    p: () => I
});
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(642128),
    c = n(84735),
    u = n(15127),
    d = n(481060),
    f = n(699682),
    _ = n(540059),
    p = n(388032),
    h = n(953100);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = {
    DEFAULT: h.inputDefault,
    MINI: h.inputMini
};
function I(e) {
    let { error: t } = e,
        n = (0, _.Q3)('TextInputError'),
        r = (0, d.Yzy)(t, {
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
                marginTop: n ? 8 : 4,
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
        o = (0, f.Z)(t);
    return (0, i.jsx)(i.Fragment, {
        children: r((e, r, a) => {
            let { key: s } = a,
                { transform: c } = e,
                u = y(e, ['transform']);
            return null != r && '' !== r
                ? (0, i.jsx)(
                      l.animated.div,
                      {
                          style: b(g({}, u), { overflow: 'hidden' }),
                          children: (0, i.jsxs)(l.animated.div, {
                              style: { transform: c },
                              className: h.inputError,
                              children: [
                                  n
                                      ? (0, i.jsx)(d.P4T, {
                                            size: 'xs',
                                            color: d.TVs.colors.TEXT_DANGER.css
                                        })
                                      : null,
                                  (0, i.jsx)(d.Text, {
                                      color: 'text-danger',
                                      variant: n ? 'text-sm/medium' : 'text-xs/normal',
                                      children: null != t && '' !== t ? t : o
                                  })
                              ]
                          })
                      },
                      s
                  )
                : null;
        })
    });
}
class S extends (r = o.Component) {
    componentDidMount() {
        var e, t, n, r;
        null == (e = (t = this.context).setHasValue) || e.call(t, (null != this.props.defaultValue && '' !== this.props.defaultValue) || (null != this.props.value && '' !== this.props.value)), null == (n = (r = this.context).setIsFocused) || n.call(r, !1);
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
            { className: r, inputClassName: o, inputPrefix: a, disabled: l, size: u, editable: d, inputRef: f, prefixElement: _, focusProps: p } = n,
            m = y(n, ['className', 'inputClassName', 'inputPrefix', 'disabled', 'size', 'editable', 'inputRef', 'prefixElement', 'focusProps']),
            E = null != (t = m['aria-labelledby']) ? t : null == (e = this.context) ? void 0 : e.titleId;
        return (0, i.jsxs)('div', {
            className: s()(h.inputWrapper, r),
            children: [
                null != _ && _,
                null != a
                    ? (0, i.jsx)('span', {
                          className: h.inputPrefix,
                          children: a
                      })
                    : null,
                (0, i.jsx)(
                    c.t,
                    b(g({}, p), {
                        children: (0, i.jsx)(
                            'input',
                            b(
                                g(
                                    {
                                        className: s()(u, o, {
                                            [h.error]: this.hasError(),
                                            [h.disabled]: l,
                                            [h.editable]: d
                                        }),
                                        disabled: l,
                                        readOnly: !1 === d || void 0
                                    },
                                    m
                                ),
                                {
                                    'aria-labelledby': E,
                                    onChange: this.onChange,
                                    onBlur: this.onBlur,
                                    onFocus: this.onFocus,
                                    ref: f
                                }
                            )
                        )
                    })
                ),
                (0, i.jsx)(I, { error: this.getError() })
            ]
        });
    }
    constructor(e) {
        var t;
        super(e),
            m(this, 'hasError', () => (null != this.props.error && this.props.error.length > 0) || (!1 !== this.state.dirty && (this.getIsUnderFlowing() || this.getIsOverFlowing()))),
            m(this, 'getError', () => {
                let { error: e, minLength: t, maxLength: n } = this.props,
                    r = this.getIsUnderFlowing() ? p.NW.formatToPlainString(p.t['62rk1N'], { minLength: t }) : null,
                    i = this.getIsOverFlowing() ? p.NW.formatToPlainString(p.t.ICT5S0, { maxLength: n }) : null;
                return (null != e && e.length < 1) || null === e ? null : null != e ? e : !1 === this.state.dirty ? null : null != r ? r : i;
            }),
            m(this, 'getIsUnderFlowing', () => {
                var e;
                let { value: t, minLength: n } = this.props;
                return null != n && (null != (e = null == t ? void 0 : t.length) ? e : 0) < n;
            }),
            m(this, 'getIsOverFlowing', () => {
                var e;
                let { value: t, maxLength: n } = this.props;
                return null != n && (null != (e = null == t ? void 0 : t.length) ? e : 0) > n;
            }),
            m(this, 'onChange', (e) => {
                var t, n, r, i;
                null == (t = (n = this.props).onChange) || t.call(n, e.currentTarget.value, this.props.name), this.setState({ dirty: !0 }), null == (r = (i = this.context).setHasValue) || r.call(i, '' !== e.currentTarget.value);
            }),
            m(this, 'onFocus', (e) => {
                var t, n, r, i;
                null == (t = (n = this.props).onFocus) || t.call(n, e, this.props.name), null == (r = (i = this.context).setIsFocused) || r.call(i, !0);
            }),
            m(this, 'onBlur', (e) => {
                var t, n, r, i;
                null == (t = (n = this.props).onBlur) || t.call(n, e, this.props.name), null == (r = (i = this.context).setIsFocused) || r.call(i, !1);
            }),
            (this.state = { dirty: null != (t = e.defaultDirty) && t });
    }
}
m(S, 'Sizes', O),
    m(S, 'contextType', u.q3),
    m(S, 'defaultProps', {
        name: '',
        size: O.DEFAULT,
        disabled: !1,
        type: 'text',
        placeholder: '',
        autoFocus: !1,
        maxLength: 999
    });
