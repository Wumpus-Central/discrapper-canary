r.d(n, {
    o: function () {
        return y;
    },
    p: function () {
        return v;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(642128),
    c = r(84735),
    d = r(15127),
    f = r(481060),
    p = r(699682),
    h = r(540059),
    _ = r(388032),
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
        o = (0, p.Z)(n);
    return (0, a.jsx)(a.Fragment, {
        children: i((e, i, s) => {
            let { key: l } = s,
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
                                      children: null != n && '' !== n ? n : o
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
class y extends (i = o.Component) {
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
        let { className: r, inputClassName: i, inputPrefix: o, disabled: s, size: u, editable: d, inputRef: f, prefixElement: p, focusProps: h, ..._ } = this.props,
            g = null !== (n = _['aria-labelledby']) && void 0 !== n ? n : null === (e = this.context) || void 0 === e ? void 0 : e.titleId;
        return (0, a.jsxs)('div', {
            className: l()(m.inputWrapper, r),
            children: [
                null != p && p,
                null != o
                    ? (0, a.jsx)('span', {
                          className: m.inputPrefix,
                          children: o
                      })
                    : null,
                (0, a.jsx)(c.t, {
                    ...h,
                    children: (0, a.jsx)('input', {
                        className: l()(u, i, {
                            [m.error]: this.hasError(),
                            [m.disabled]: s,
                            [m.editable]: d
                        }),
                        disabled: s,
                        readOnly: !1 === d || void 0,
                        ..._,
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
                    i = this.getIsUnderFlowing() ? _.intl.formatToPlainString(_.t['62rk1N'], { minLength: n }) : null,
                    a = this.getIsOverFlowing() ? _.intl.formatToPlainString(_.t.ICT5S0, { maxLength: r }) : null;
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
g(y, 'Sizes', E),
    g(y, 'contextType', d.q3),
    g(y, 'defaultProps', {
        name: '',
        size: E.DEFAULT,
        disabled: !1,
        type: 'text',
        placeholder: '',
        autoFocus: !1,
        maxLength: 999
    });
