n.d(t, { L: () => I }), n(539854);
var r,
    i = n(951288),
    a = n(647438),
    o = n(120356),
    s = n.n(o),
    l = n(772848),
    c = n(793030),
    u = n(15127),
    d = n(993365),
    f = n(639317),
    _ = n(388032),
    p = n(8542),
    h = n(979712),
    m = n(154257);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let E = (0, l.Z)(),
    b = (0, l.Z)(),
    y = (0, l.Z)(),
    O = 10,
    v = 7.23;
class I extends (r = a.Component) {
    getPaddingRight() {
        let { maxLength: e, showCharacterCountFullPadding: t } = this.props;
        if (null == e) return O;
        let n = "".concat(e).length;
        return t && (n += "".concat(e, " / ").length), v * n + O;
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
            return (0, i.jsxs)("div", {
                className: s()(p.maxLength, { [p.errorOverflow]: this.hasError() }),
                "aria-hidden": "true",
                children: [null != (e = null == t ? void 0 : t.length) ? e : 0, " ", null != n && "/ ".concat(n)],
            });
        }
        return null;
    }
    renderMaxLength() {
        if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
        let e = this.getCharsLeftLength();
        return null == e
            ? null
            : (0, i.jsx)("div", {
                  className: s()(p.maxLength, { [p.errorOverflow]: e < 0 }),
                  "aria-hidden": "true",
                  children: e,
              });
    }
    hasError() {
        return (
            null != this.props.error ||
            null != this.context.error ||
            (!1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1))
        );
    }
    getErrorMessage() {
        let { error: e, maxLength: t, minLength: n } = this.props,
            r = this.getIsOverflowing() ? _.intl.formatToPlainString(_.t.ICT5S6, { maxLength: t }) : null,
            i = this.getIsUnderflowing() ? _.intl.formatToPlainString(_.t["62rk1K"], { minLength: n }) : null;
        return (null != e && "" === e) || null === e
            ? null
            : void 0 !== e
              ? e
              : !1 === this.state.dirty
                ? null
                : null != r
                  ? r
                  : i;
    }
    renderErrorMessage() {
        let e = this.getErrorMessage();
        return null == e
            ? null
            : (0, i.jsx)(d.x, {
                  id: E,
                  variant: "text-xs/normal",
                  color: "text-danger",
                  className: p.errorMessage,
                  children: e,
              });
    }
    render() {
        var e, t;
        let {
                disabled: n,
                value: r,
                placeholder: a,
                autoFocus: o,
                minLength: l,
                maxLength: u,
                allowOverflow: d,
                spellCheck: g,
                resizeable: E,
                className: O,
                id: v,
                rows: I,
                flex: T,
                autosize: S,
                required: A,
                onInvalid: C,
                inputRef: N,
            } = this.props,
            R = S ? f.g : "textarea",
            P = this.hasError(),
            w = null != (t = this.props["aria-labelledby"]) ? t : null == (e = this.context) ? void 0 : e.titleId,
            D = this.getAriaDescribedBy();
        return (0, i.jsxs)("div", {
            className: s()(h.inputWrapper, { [p.flex]: T }),
            children: [
                (0, i.jsxs)("div", {
                    className: s()(p.inputMaxLength, { [p.flex]: T }),
                    children: [
                        (0, i.jsx)(c.tEY, {
                            children: (0, i.jsx)(R, {
                                type: "text",
                                className: s()(h.input, p.textArea, m.scrollbarDefault, O, {
                                    [h.error]: P,
                                    [h.disabled]: n,
                                    [p.resizeable]: E,
                                }),
                                "aria-labelledby": w,
                                "aria-describedby": D,
                                "aria-invalid": P,
                                style: { paddingRight: this.getPaddingRight() },
                                id: v,
                                disabled: n,
                                placeholder: a,
                                value: r,
                                autoFocus: o,
                                minLength: l,
                                maxLength: d ? void 0 : u,
                                spellCheck: g,
                                required: A,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: C,
                                rows: I,
                                ref: N,
                            }),
                        }),
                        null != l &&
                            (0, i.jsx)(c.nn4, {
                                id: b,
                                children: _.intl.format(_.t["bmQU//"], { minLength: l }),
                            }),
                        null != u &&
                            (0, i.jsx)(c.nn4, {
                                id: y,
                                children: _.intl.format(_.t["+DFxLc"], { maxLength: u }),
                            }),
                        this.renderCharacterCount(),
                        this.renderMaxLength(),
                    ],
                }),
                this.renderErrorMessage(),
            ],
        });
    }
    constructor(e) {
        var t;
        super(e),
            g(this, "getAriaDescribedBy", () => {
                var e;
                let { maxLength: t, minLength: n, error: r } = this.props,
                    i = [],
                    a = null == (e = this.context) ? void 0 : e.errorId;
                return (
                    null != a && i.push(a),
                    null != r ? i.push(E) : (null != t && i.push(y), null != n && i.push(b)),
                    i.length > 0 ? i.join(" ") : void 0
                );
            }),
            g(this, "onChange", (e) => {
                let { onChange: t, name: n } = this.props;
                null == t || t(e.currentTarget.value, n), this.setState({ dirty: !0 });
            }),
            g(this, "onFocus", (e) => {
                let { onFocus: t, name: n } = this.props;
                null == t || t(e, n);
            }),
            g(this, "onBlur", (e) => {
                let { onBlur: t, name: n } = this.props;
                null == t || t(e, n);
            }),
            g(this, "onKeyDown", (e) => {
                let { onKeyDown: t } = this.props;
                null == t || t(e);
            }),
            (this.state = { dirty: null != (t = e.defaultDirty) && t });
    }
}
g(I, "contextType", u.q3),
    g(I, "defaultProps", {
        name: "",
        disabled: !1,
        placeholder: "",
        autoFocus: !1,
        resizeable: !1,
        flex: !1,
        autosize: !1,
        rows: 3,
        allowOverflow: !1,
    });
