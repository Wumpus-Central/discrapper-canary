r.d(n, {
    K: function () {
        return C;
    }
});
var i,
    a = r(653041);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(772848),
    d = r(84735),
    f = r(15127),
    p = r(766646),
    h = r(993365),
    _ = r(179240),
    m = r(388032),
    g = r(394604),
    E = r(716722),
    v = r(763971);
function y(e, n, r) {
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
let b = (0, c.Z)(),
    I = (0, c.Z)(),
    T = (0, c.Z)(),
    S = 10,
    A = 7.23;
class C extends (i = s.Component) {
    getPaddingRight() {
        let { maxLength: e, showCharacterCountFullPadding: n } = this.props;
        if (null == e) return S;
        let r = ''.concat(e).length;
        return n && (r += ''.concat(e, ' / ').length), A * r + S;
    }
    getCharsLeftLength() {
        let { maxLength: e, value: n } = this.props;
        return null == e ? null : e - (null != n ? n.length : 0);
    }
    getIsOverflowing() {
        let e = this.getCharsLeftLength();
        return null != e && e < 0;
    }
    getIsUnderflowing() {
        let { minLength: e, value: n } = this.props;
        return null != e && (null != n ? n.length : 0) < e;
    }
    renderCharacterCount() {
        if (this.props.showCharacterCount) {
            var e;
            let { value: n, maxLength: r } = this.props;
            return (0, o.jsxs)('div', {
                className: u()(g.maxLength, { [g.errorOverflow]: this.hasError() }),
                'aria-hidden': 'true',
                children: [null !== (e = null == n ? void 0 : n.length) && void 0 !== e ? e : 0, ' ', null != r && '/ '.concat(r)]
            });
        }
        return null;
    }
    renderMaxLength() {
        if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
        let e = this.getCharsLeftLength();
        return null == e
            ? null
            : (0, o.jsx)('div', {
                  className: u()(g.maxLength, { [g.errorOverflow]: e < 0 }),
                  'aria-hidden': 'true',
                  children: e
              });
    }
    hasError() {
        return null != this.props.error || null != this.context.error || (!1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1));
    }
    getErrorMessage() {
        let { error: e, maxLength: n, minLength: r } = this.props,
            i = this.getIsOverflowing() ? m.intl.formatToPlainString(m.t.ICT5S0, { maxLength: n }) : null,
            a = this.getIsUnderflowing() ? m.intl.formatToPlainString(m.t['62rk1N'], { minLength: r }) : null;
        return (null != e && '' === e) || null === e ? null : void 0 !== e ? e : !1 === this.state.dirty ? null : null != i ? i : a;
    }
    renderErrorMessage() {
        let e = this.getErrorMessage();
        return null == e
            ? null
            : (0, o.jsx)(h.x, {
                  id: b,
                  variant: 'text-xs/normal',
                  color: 'text-danger',
                  className: g.errorMessage,
                  children: e
              });
    }
    render() {
        var e, n;
        let { disabled: r, value: i, placeholder: a, autoFocus: s, minLength: l, maxLength: c, allowOverflow: f, spellCheck: h, resizeable: y, className: b, id: S, rows: A, flex: C, autosize: N, required: R, onInvalid: O, inputRef: D } = this.props,
            L = N ? _.l : 'textarea',
            x = this.hasError(),
            w = null !== (n = this.props['aria-labelledby']) && void 0 !== n ? n : null === (e = this.context) || void 0 === e ? void 0 : e.titleId,
            P = this.getAriaDescribedBy();
        return (0, o.jsxs)('div', {
            className: u()(E.inputWrapper, { [g.flex]: C }),
            children: [
                (0, o.jsxs)('div', {
                    className: u()(g.inputMaxLength, { [g.flex]: C }),
                    children: [
                        (0, o.jsx)(d.t, {
                            children: (0, o.jsx)(L, {
                                type: 'text',
                                className: u()(E.inputDefault, g.textArea, v.scrollbarDefault, b, {
                                    [E.error]: x,
                                    [E.disabled]: r,
                                    [g.resizeable]: y
                                }),
                                'aria-labelledby': w,
                                'aria-describedby': P,
                                'aria-invalid': x,
                                style: { paddingRight: this.getPaddingRight() },
                                id: S,
                                disabled: r,
                                placeholder: a,
                                value: i,
                                autoFocus: s,
                                minLength: l,
                                maxLength: f ? void 0 : c,
                                spellCheck: h,
                                required: R,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: O,
                                rows: A,
                                ref: D
                            })
                        }),
                        null != l &&
                            (0, o.jsx)(p.n, {
                                id: I,
                                children: m.intl.format(m.t['bmQU//'], { minLength: l })
                            }),
                        null != c &&
                            (0, o.jsx)(p.n, {
                                id: T,
                                children: m.intl.format(m.t['+DFxLS'], { maxLength: c })
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
        var n;
        super(e),
            y(this, 'getAriaDescribedBy', () => {
                var e;
                let { maxLength: n, minLength: r, error: i } = this.props,
                    a = [],
                    o = null === (e = this.context) || void 0 === e ? void 0 : e.errorId;
                return null != o && a.push(o), null != i ? a.push(b) : (null != n && a.push(T), null != r && a.push(I)), a.length > 0 ? a.join(' ') : void 0;
            }),
            y(this, 'onChange', (e) => {
                let { onChange: n, name: r } = this.props;
                null == n || n(e.currentTarget.value, r), this.setState({ dirty: !0 });
            }),
            y(this, 'onFocus', (e) => {
                let { onFocus: n, name: r } = this.props;
                null == n || n(e, r);
            }),
            y(this, 'onBlur', (e) => {
                let { onBlur: n, name: r } = this.props;
                null == n || n(e, r);
            }),
            y(this, 'onKeyDown', (e) => {
                let { onKeyDown: n } = this.props;
                null == n || n(e);
            }),
            (this.state = { dirty: null !== (n = e.defaultDirty) && void 0 !== n && n });
    }
}
y(C, 'contextType', f.q3),
    y(C, 'defaultProps', {
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
