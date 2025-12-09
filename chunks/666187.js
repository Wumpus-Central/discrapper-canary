n.d(t, { L: () => S }), n(539854);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(772848),
    c = n(793030),
    u = n(15127),
    d = n(993365),
    f = n(639317),
    p = n(388032),
    _ = n(8542),
    m = n(979712),
    h = n(154257);
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
class S extends (r = a.Component) {
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
                className: s()(_.maxLength, { [_.errorOverflow]: this.hasError() }),
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
                  className: s()(_.maxLength, { [_.errorOverflow]: e < 0 }),
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
            r = this.getIsOverflowing() ? p.intl.formatToPlainString(p.t.ICT5S6, { maxLength: t }) : null,
            i = this.getIsUnderflowing() ? p.intl.formatToPlainString(p.t["62rk1K"], { minLength: n }) : null;
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
                  color: "text-feedback-critical",
                  className: _.errorMessage,
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
                rows: S,
                flex: I,
                autosize: T,
                required: A,
                onInvalid: C,
                inputRef: N,
            } = this.props,
            P = T ? f.g : "textarea",
            R = this.hasError(),
            D = null != (t = this.props["aria-labelledby"]) ? t : null == (e = this.context) ? void 0 : e.titleId,
            w = this.getAriaDescribedBy();
        return (0, i.jsxs)("div", {
            className: s()(m.inputWrapper, { [_.flex]: I }),
            children: [
                (0, i.jsxs)("div", {
                    className: s()(_.inputMaxLength, { [_.flex]: I }),
                    children: [
                        (0, i.jsx)(c.tEY, {
                            children: (0, i.jsx)(P, {
                                type: "text",
                                className: s()(m.input, _.textArea, h.scrollbarDefault, O, {
                                    [m.error]: R,
                                    [m.disabled]: n,
                                    [_.resizeable]: E,
                                }),
                                "aria-labelledby": D,
                                "aria-describedby": w,
                                "aria-invalid": R,
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
                                rows: S,
                                ref: N,
                            }),
                        }),
                        null != l &&
                            (0, i.jsx)(c.nn4, {
                                id: b,
                                children: p.intl.format(p.t["bmQU//"], { minLength: l }),
                            }),
                        null != u &&
                            (0, i.jsx)(c.nn4, {
                                id: y,
                                children: p.intl.format(p.t["+DFxLc"], { maxLength: u }),
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
g(S, "contextType", u.q3),
    g(S, "defaultProps", {
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
