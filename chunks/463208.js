r.d(n, {
    o: function () {
        return I;
    },
    p: function () {
        return v;
    }
});
var i,
    a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(666912),
    c = r(84735),
    d = r(15127),
    f = r(481060),
    _ = r(699682),
    h = r(540059),
    p = r(388032),
    m = r(716722);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = {
    DEFAULT: m.inputDefault,
    MINI: m.inputMini
};
function v(e) {
    let { error: n } = e,
        r = (0, h.Q3)('TextInputError'),
        i = (0, f.useTransition)(n, {
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
                marginTop: r ? 8 : 4,
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
        s = (0, _.Z)(n);
    return (0, a.jsx)(a.Fragment, {
        children: i((e, i, o) => {
            let { key: l } = o,
                { transform: c, ...d } = e;
            return null != i && '' !== i
                ? (0, a.jsx)(
                      u.animated.div,
                      {
                          style: {
                              ...d,
                              overflow: 'hidden'
                          },
                          children: (0, a.jsxs)(u.animated.div, {
                              style: { transform: c },
                              className: m.inputError,
                              children: [
                                  r
                                      ? (0, a.jsx)(f.CircleWarningIcon, {
                                            size: 'xs',
                                            color: f.tokens.colors.TEXT_DANGER.css
                                        })
                                      : null,
                                  (0, a.jsx)(f.Text, {
                                      color: 'text-danger',
                                      variant: r ? 'text-sm/medium' : 'text-xs/normal',
                                      children: null != n && '' !== n ? n : s
                                  })
                              ]
                          })
                      },
                      l
                  )
                : null;
        })
    });
}
class I extends (i = s.Component) {
    componentDidMount() {
        var e, n, r, i;
        null === (e = (n = this.context).setHasValue) || void 0 === e || e.call(n, (null != this.props.defaultValue && '' !== this.props.defaultValue) || (null != this.props.value && '' !== this.props.value)), null === (r = (i = this.context).setIsFocused) || void 0 === r || r.call(i, !1);
    }
    componentDidUpdate() {
        if (null != this.props.value && '' !== this.props.value) {
            var e, n;
            null === (e = (n = this.context).setHasValue) || void 0 === e || e.call(n, !0);
        }
    }
    render() {
        var e, n;
        let { className: r, inputClassName: i, inputPrefix: s, disabled: o, size: u, editable: d, inputRef: f, prefixElement: _, focusProps: h, ...p } = this.props,
            g = null !== (n = p['aria-labelledby']) && void 0 !== n ? n : null === (e = this.context) || void 0 === e ? void 0 : e.titleId;
        return (0, a.jsxs)('div', {
            className: l()(m.inputWrapper, r),
            children: [
                null != _ && _,
                null != s
                    ? (0, a.jsx)('span', {
                          className: m.inputPrefix,
                          children: s
                      })
                    : null,
                (0, a.jsx)(c.t, {
                    ...h,
                    children: (0, a.jsx)('input', {
                        className: l()(u, i, {
                            [m.error]: this.hasError(),
                            [m.disabled]: o,
                            [m.editable]: d
                        }),
                        disabled: o,
                        readOnly: !1 === d || void 0,
                        ...p,
                        'aria-labelledby': g,
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus,
                        ref: f
                    })
                }),
                (0, a.jsx)(v, { error: this.getError() })
            ]
        });
    }
    constructor(e) {
        var n;
        super(e),
            g(this, 'hasError', () => (null != this.props.error && !!(this.props.error.length > 0)) || (!1 !== this.state.dirty && (this.getIsUnderFlowing() || this.getIsOverFlowing()))),
            g(this, 'getError', () => {
                let { error: e, minLength: n, maxLength: r } = this.props,
                    i = this.getIsUnderFlowing() ? p.intl.formatToPlainString(p.t['62rk1N'], { minLength: n }) : null,
                    a = this.getIsOverFlowing() ? p.intl.formatToPlainString(p.t.ICT5S0, { maxLength: r }) : null;
                return (null != e && e.length < 1) || null === e ? null : null != e ? e : !1 === this.state.dirty ? null : null != i ? i : a;
            }),
            g(this, 'getIsUnderFlowing', () => {
                var e;
                let { value: n, minLength: r } = this.props;
                return null != r && (null !== (e = null == n ? void 0 : n.length) && void 0 !== e ? e : 0) < r;
            }),
            g(this, 'getIsOverFlowing', () => {
                var e;
                let { value: n, maxLength: r } = this.props;
                return null != r && (null !== (e = null == n ? void 0 : n.length) && void 0 !== e ? e : 0) > r;
            }),
            g(this, 'onChange', (e) => {
                var n, r, i, a;
                null === (n = (r = this.props).onChange) || void 0 === n || n.call(r, e.currentTarget.value, this.props.name), this.setState({ dirty: !0 }), null === (i = (a = this.context).setHasValue) || void 0 === i || i.call(a, '' !== e.currentTarget.value);
            }),
            g(this, 'onFocus', (e) => {
                var n, r, i, a;
                null === (n = (r = this.props).onFocus) || void 0 === n || n.call(r, e, this.props.name), null === (i = (a = this.context).setIsFocused) || void 0 === i || i.call(a, !0);
            }),
            g(this, 'onBlur', (e) => {
                var n, r, i, a;
                null === (n = (r = this.props).onBlur) || void 0 === n || n.call(r, e, this.props.name), null === (i = (a = this.context).setIsFocused) || void 0 === i || i.call(a, !1);
            }),
            (this.state = { dirty: null !== (n = e.defaultDirty) && void 0 !== n && n });
    }
}
g(I, 'Sizes', E),
    g(I, 'contextType', d.q3),
    g(I, 'defaultProps', {
        name: '',
        size: E.DEFAULT,
        disabled: !1,
        type: 'text',
        placeholder: '',
        autoFocus: !1,
        maxLength: 999
    });
