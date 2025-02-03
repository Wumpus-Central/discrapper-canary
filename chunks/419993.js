n.d(t, { K: () => S }), n(653041);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(772848),
    u = n(84735),
    c = n(15127),
    d = n(766646),
    f = n(993365),
    _ = n(179240),
    p = n(388032),
    h = n(394604),
    m = n(716722),
    g = n(763971);
function E(e, t, n) {
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
let v = (0, l.Z)(),
    y = (0, l.Z)(),
    I = (0, l.Z)(),
    b = 10,
    T = 7.23;
class S extends (i = a.Component) {
    getPaddingRight() {
        let { maxLength: e, showCharacterCountFullPadding: t } = this.props;
        if (null == e) return b;
        let n = ''.concat(e).length;
        return t && (n += ''.concat(e, ' / ').length), T * n + b;
    }
    getCharsLeftLength() {
        let { maxLength: e, value: t } = this.props;
        return null == e ? null : e - (null != t ? t.length : 0);
    }
    getIsOverflowing() {
        let e = this.getCharsLeftLength();
        return null != e && e < 0;
    }
    getIsUnderflowing() {
        let { minLength: e, value: t } = this.props;
        return null != e && (null != t ? t.length : 0) < e;
    }
    renderCharacterCount() {
        if (this.props.showCharacterCount) {
            var e;
            let { value: t, maxLength: n } = this.props;
            return (0, r.jsxs)('div', {
                className: o()(h.maxLength, { [h.errorOverflow]: this.hasError() }),
                'aria-hidden': 'true',
                children: [null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0, ' ', null != n && '/ '.concat(n)]
            });
        }
        return null;
    }
    renderMaxLength() {
        if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
        let e = this.getCharsLeftLength();
        return null == e
            ? null
            : (0, r.jsx)('div', {
                  className: o()(h.maxLength, { [h.errorOverflow]: e < 0 }),
                  'aria-hidden': 'true',
                  children: e
              });
    }
    hasError() {
        return null != this.props.error || null != this.context.error || (!1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1));
    }
    getErrorMessage() {
        let { error: e, maxLength: t, minLength: n } = this.props,
            i = this.getIsOverflowing() ? p.intl.formatToPlainString(p.t.ICT5S0, { maxLength: t }) : null,
            r = this.getIsUnderflowing() ? p.intl.formatToPlainString(p.t['62rk1N'], { minLength: n }) : null;
        return (null != e && '' === e) || null === e ? null : void 0 !== e ? e : !1 === this.state.dirty ? null : null != i ? i : r;
    }
    renderErrorMessage() {
        let e = this.getErrorMessage();
        return null == e
            ? null
            : (0, r.jsx)(f.x, {
                  id: v,
                  variant: 'text-xs/normal',
                  color: 'text-danger',
                  className: h.errorMessage,
                  children: e
              });
    }
    render() {
        var e, t;
        let { disabled: n, value: i, placeholder: a, autoFocus: s, minLength: l, maxLength: c, allowOverflow: f, spellCheck: E, resizeable: v, className: b, id: T, rows: S, flex: A, autosize: N, required: C, onInvalid: R, inputRef: O } = this.props,
            D = N ? _.l : 'textarea',
            x = this.hasError(),
            L = null !== (t = this.props['aria-labelledby']) && void 0 !== t ? t : null === (e = this.context) || void 0 === e ? void 0 : e.titleId,
            P = this.getAriaDescribedBy();
        return (0, r.jsxs)('div', {
            className: o()(m.inputWrapper, { [h.flex]: A }),
            children: [
                (0, r.jsxs)('div', {
                    className: o()(h.inputMaxLength, { [h.flex]: A }),
                    children: [
                        (0, r.jsx)(u.t, {
                            children: (0, r.jsx)(D, {
                                type: 'text',
                                className: o()(m.inputDefault, h.textArea, g.scrollbarDefault, b, {
                                    [m.error]: x,
                                    [m.disabled]: n,
                                    [h.resizeable]: v
                                }),
                                'aria-labelledby': L,
                                'aria-describedby': P,
                                'aria-invalid': x,
                                style: { paddingRight: this.getPaddingRight() },
                                id: T,
                                disabled: n,
                                placeholder: a,
                                value: i,
                                autoFocus: s,
                                minLength: l,
                                maxLength: f ? void 0 : c,
                                spellCheck: E,
                                required: C,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: R,
                                rows: S,
                                ref: O
                            })
                        }),
                        null != l &&
                            (0, r.jsx)(d.n, {
                                id: y,
                                children: p.intl.format(p.t['bmQU//'], { minLength: l })
                            }),
                        null != c &&
                            (0, r.jsx)(d.n, {
                                id: I,
                                children: p.intl.format(p.t['+DFxLS'], { maxLength: c })
                            }),
                        this.renderCharacterCount(),
                        this.renderMaxLength()
                    ]
                }),
                this.renderErrorMessage()
            ]
        });
    }
    constructor(e) {
        var t;
        super(e),
            E(this, 'getAriaDescribedBy', () => {
                var e;
                let { maxLength: t, minLength: n, error: i } = this.props,
                    r = [],
                    a = null === (e = this.context) || void 0 === e ? void 0 : e.errorId;
                return null != a && r.push(a), null != i ? r.push(v) : (null != t && r.push(I), null != n && r.push(y)), r.length > 0 ? r.join(' ') : void 0;
            }),
            E(this, 'onChange', (e) => {
                let { onChange: t, name: n } = this.props;
                null == t || t(e.currentTarget.value, n), this.setState({ dirty: !0 });
            }),
            E(this, 'onFocus', (e) => {
                let { onFocus: t, name: n } = this.props;
                null == t || t(e, n);
            }),
            E(this, 'onBlur', (e) => {
                let { onBlur: t, name: n } = this.props;
                null == t || t(e, n);
            }),
            E(this, 'onKeyDown', (e) => {
                let { onKeyDown: t } = this.props;
                null == t || t(e);
            }),
            (this.state = { dirty: null !== (t = e.defaultDirty) && void 0 !== t && t });
    }
}
E(S, 'contextType', c.q3),
    E(S, 'defaultProps', {
        name: '',
        disabled: !1,
        placeholder: '',
        autoFocus: !1,
        resizeable: !1,
        flex: !1,
        autosize: !1,
        rows: 3,
        allowOverflow: !1
    });
