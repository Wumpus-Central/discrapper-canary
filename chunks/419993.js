n.d(t, { K: () => S }), n(653041);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(772848),
    c = n(84735),
    u = n(15127),
    d = n(766646),
    f = n(993365),
    _ = n(179240),
    p = n(388032),
    h = n(999249),
    m = n(953100),
    g = n(283574);
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
let b = (0, l.Z)(),
    y = (0, l.Z)(),
    v = (0, l.Z)(),
    O = 10,
    I = 7.23;
class S extends (r = o.Component) {
    getPaddingRight() {
        let { maxLength: e, showCharacterCountFullPadding: t } = this.props;
        if (null == e) return O;
        let n = ''.concat(e).length;
        return t && (n += ''.concat(e, ' / ').length), I * n + O;
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
            return (0, i.jsxs)('div', {
                className: s()(h.maxLength, { [h.errorOverflow]: this.hasError() }),
                'aria-hidden': 'true',
                children: [null != (e = null == t ? void 0 : t.length) ? e : 0, ' ', null != n && '/ '.concat(n)]
            });
        }
        return null;
    }
    renderMaxLength() {
        if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
        let e = this.getCharsLeftLength();
        return null == e
            ? null
            : (0, i.jsx)('div', {
                  className: s()(h.maxLength, { [h.errorOverflow]: e < 0 }),
                  'aria-hidden': 'true',
                  children: e
              });
    }
    hasError() {
        return null != this.props.error || null != this.context.error || (!1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1));
    }
    getErrorMessage() {
        let { error: e, maxLength: t, minLength: n } = this.props,
            r = this.getIsOverflowing() ? p.NW.formatToPlainString(p.t.ICT5S0, { maxLength: t }) : null,
            i = this.getIsUnderflowing() ? p.NW.formatToPlainString(p.t['62rk1N'], { minLength: n }) : null;
        return (null != e && '' === e) || null === e ? null : void 0 !== e ? e : !1 === this.state.dirty ? null : null != r ? r : i;
    }
    renderErrorMessage() {
        let e = this.getErrorMessage();
        return null == e
            ? null
            : (0, i.jsx)(f.x, {
                  id: b,
                  variant: 'text-xs/normal',
                  color: 'text-danger',
                  className: h.errorMessage,
                  children: e
              });
    }
    render() {
        var e, t;
        let { disabled: n, value: r, placeholder: o, autoFocus: a, minLength: l, maxLength: u, allowOverflow: f, spellCheck: E, resizeable: b, className: O, id: I, rows: S, flex: T, autosize: N, required: A, onInvalid: C, inputRef: R } = this.props,
            P = N ? _.l : 'textarea',
            w = this.hasError(),
            D = null != (t = this.props['aria-labelledby']) ? t : null == (e = this.context) ? void 0 : e.titleId,
            L = this.getAriaDescribedBy();
        return (0, i.jsxs)('div', {
            className: s()(m.inputWrapper, { [h.flex]: T }),
            children: [
                (0, i.jsxs)('div', {
                    className: s()(h.inputMaxLength, { [h.flex]: T }),
                    children: [
                        (0, i.jsx)(c.t, {
                            children: (0, i.jsx)(P, {
                                type: 'text',
                                className: s()(m.inputDefault, h.textArea, g.scrollbarDefault, O, {
                                    [m.error]: w,
                                    [m.disabled]: n,
                                    [h.resizeable]: b
                                }),
                                'aria-labelledby': D,
                                'aria-describedby': L,
                                'aria-invalid': w,
                                style: { paddingRight: this.getPaddingRight() },
                                id: I,
                                disabled: n,
                                placeholder: o,
                                value: r,
                                autoFocus: a,
                                minLength: l,
                                maxLength: f ? void 0 : u,
                                spellCheck: E,
                                required: A,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: C,
                                rows: S,
                                ref: R
                            })
                        }),
                        null != l &&
                            (0, i.jsx)(d.n, {
                                id: y,
                                children: p.NW.format(p.t['bmQU//'], { minLength: l })
                            }),
                        null != u &&
                            (0, i.jsx)(d.n, {
                                id: v,
                                children: p.NW.format(p.t['+DFxLS'], { maxLength: u })
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
                let { maxLength: t, minLength: n, error: r } = this.props,
                    i = [],
                    o = null == (e = this.context) ? void 0 : e.errorId;
                return null != o && i.push(o), null != r ? i.push(b) : (null != t && i.push(v), null != n && i.push(y)), i.length > 0 ? i.join(' ') : void 0;
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
            (this.state = { dirty: null != (t = e.defaultDirty) && t });
    }
}
E(S, 'contextType', u.q3),
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
