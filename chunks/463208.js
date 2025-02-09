n.d(t, {
    o: () => v,
    p: () => E
});
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(642128),
    u = n(84735),
    c = n(15127),
    d = n(481060),
    f = n(699682),
    _ = n(540059),
    p = n(388032),
    h = n(487768);
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
let g = {
    DEFAULT: h.inputDefault,
    MINI: h.inputMini
};
function E(e) {
    let { error: t } = e,
        n = (0, _.Q3)('TextInputError'),
        i = (0, d.Yzy)(t, {
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
        a = (0, f.Z)(t);
    return (0, r.jsx)(r.Fragment, {
        children: i((e, i, s) => {
            let { key: o } = s,
                { transform: u, ...c } = e;
            return null != i && '' !== i
                ? (0, r.jsx)(
                      l.animated.div,
                      {
                          style: {
                              ...c,
                              overflow: 'hidden'
                          },
                          children: (0, r.jsxs)(l.animated.div, {
                              style: { transform: u },
                              className: h.inputError,
                              children: [
                                  n
                                      ? (0, r.jsx)(d.P4T, {
                                            size: 'xs',
                                            color: d.TVs.colors.TEXT_DANGER.css
                                        })
                                      : null,
                                  (0, r.jsx)(d.Text, {
                                      color: 'text-danger',
                                      variant: n ? 'text-sm/medium' : 'text-xs/normal',
                                      children: null != t && '' !== t ? t : a
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
class v extends (i = a.Component) {
    componentDidMount() {
        var e, t, n, i;
        null === (e = (t = this.context).setHasValue) || void 0 === e || e.call(t, (null != this.props.defaultValue && '' !== this.props.defaultValue) || (null != this.props.value && '' !== this.props.value)), null === (n = (i = this.context).setIsFocused) || void 0 === n || n.call(i, !1);
    }
    componentDidUpdate() {
        if (null != this.props.value && '' !== this.props.value) {
            var e, t;
            null === (e = (t = this.context).setHasValue) || void 0 === e || e.call(t, !0);
        }
    }
    render() {
        var e, t;
        let { className: n, inputClassName: i, inputPrefix: a, disabled: s, size: l, editable: c, inputRef: d, prefixElement: f, focusProps: _, ...p } = this.props,
            m = null !== (t = p['aria-labelledby']) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId;
        return (0, r.jsxs)('div', {
            className: o()(h.inputWrapper, n),
            children: [
                null != f && f,
                null != a
                    ? (0, r.jsx)('span', {
                          className: h.inputPrefix,
                          children: a
                      })
                    : null,
                (0, r.jsx)(u.t, {
                    ..._,
                    children: (0, r.jsx)('input', {
                        className: o()(l, i, {
                            [h.error]: this.hasError(),
                            [h.disabled]: s,
                            [h.editable]: c
                        }),
                        disabled: s,
                        readOnly: !1 === c || void 0,
                        ...p,
                        'aria-labelledby': m,
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus,
                        ref: d
                    })
                }),
                (0, r.jsx)(E, { error: this.getError() })
            ]
        });
    }
    constructor(e) {
        var t;
        super(e),
            m(this, 'hasError', () => (null != this.props.error && this.props.error.length > 0) || (!1 !== this.state.dirty && (this.getIsUnderFlowing() || this.getIsOverFlowing()))),
            m(this, 'getError', () => {
                let { error: e, minLength: t, maxLength: n } = this.props,
                    i = this.getIsUnderFlowing() ? p.intl.formatToPlainString(p.t['62rk1N'], { minLength: t }) : null,
                    r = this.getIsOverFlowing() ? p.intl.formatToPlainString(p.t.ICT5S0, { maxLength: n }) : null;
                return (null != e && e.length < 1) || null === e ? null : null != e ? e : !1 === this.state.dirty ? null : null != i ? i : r;
            }),
            m(this, 'getIsUnderFlowing', () => {
                var e;
                let { value: t, minLength: n } = this.props;
                return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) < n;
            }),
            m(this, 'getIsOverFlowing', () => {
                var e;
                let { value: t, maxLength: n } = this.props;
                return null != n && (null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0) > n;
            }),
            m(this, 'onChange', (e) => {
                var t, n, i, r;
                null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, e.currentTarget.value, this.props.name), this.setState({ dirty: !0 }), null === (i = (r = this.context).setHasValue) || void 0 === i || i.call(r, '' !== e.currentTarget.value);
            }),
            m(this, 'onFocus', (e) => {
                var t, n, i, r;
                null === (t = (n = this.props).onFocus) || void 0 === t || t.call(n, e, this.props.name), null === (i = (r = this.context).setIsFocused) || void 0 === i || i.call(r, !0);
            }),
            m(this, 'onBlur', (e) => {
                var t, n, i, r;
                null === (t = (n = this.props).onBlur) || void 0 === t || t.call(n, e, this.props.name), null === (i = (r = this.context).setIsFocused) || void 0 === i || i.call(r, !1);
            }),
            (this.state = { dirty: null !== (t = e.defaultDirty) && void 0 !== t && t });
    }
}
m(v, 'Sizes', g),
    m(v, 'contextType', c.q3),
    m(v, 'defaultProps', {
        name: '',
        size: g.DEFAULT,
        disabled: !1,
        type: 'text',
        placeholder: '',
        autoFocus: !1,
        maxLength: 999
    });
