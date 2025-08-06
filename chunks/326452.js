n.d(t, { E: () => b }), n(388685);
var r,
    i = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    l = n(84735),
    c = n(481060),
    u = n(532425),
    d = n(388032),
    f = n(559122);
function _(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class b extends (r = o.PureComponent) {
    focus() {
        let { current: e } = this.inputRef;
        null == e || e.focus();
    }
    blur() {
        let { current: e } = this.inputRef;
        null == e || e.blur();
    }
    render() {
        let e = this.props,
            {
                query: t,
                autoFocus: n,
                onClear: r,
                className: o,
                placeholder: a = d.intl.string(d.t["5h0QOD"]),
                onKeyDown: _,
                isLoading: h,
                size: E,
                disabled: b,
                onChange: y,
                onBlur: O,
                onFocus: v,
                autoComplete: I,
                inputProps: T,
                "aria-label": S = d.intl.string(d.t["5h0QOD"]),
            } = e,
            A = g(e, [
                "query",
                "autoFocus",
                "onClear",
                "className",
                "placeholder",
                "onKeyDown",
                "isLoading",
                "size",
                "disabled",
                "onChange",
                "onBlur",
                "onFocus",
                "autoComplete",
                "inputProps",
                "aria-label",
            ]),
            N = (0, i.jsx)(u.B, {
                size: E,
                hasContent: t.length > 0,
                onClear: r,
                isLoading: h,
            });
        return null == o
            ? (0, i.jsx)(
                  c.oil,
                  m(p({}, T), {
                      onFocus: v,
                      onBlur: O,
                      value: t,
                      onChange: y,
                      onKeyDown: _,
                      placeholder: a,
                      disabled: b,
                      autoFocus: n,
                      autoComplete: I,
                      "aria-label": S,
                      inputRef: this.inputRef,
                      leading: c._Ve,
                      clearable: null != r,
                      size: E,
                      fullWidth: !0,
                  }),
              )
            : (0, i.jsx)(l.t, {
                  focusTarget: this.inputRef,
                  ringTarget: this.containerRef,
                  children: (0, i.jsx)(
                      "div",
                      m(
                          p(
                              {
                                  className: s()(o, f.container, f.wrapper, f[E], { [f.disabled]: b }),
                                  ref: this.containerRef,
                              },
                              A,
                          ),
                          {
                              children: (0, i.jsxs)("div", {
                                  className: f.inner,
                                  children: [
                                      (0, i.jsx)(
                                          "input",
                                          m(p({}, T), {
                                              onFocus: v,
                                              onBlur: O,
                                              className: f.input,
                                              value: t,
                                              onChange: this.handleOnChange,
                                              onKeyDown: _,
                                              placeholder: a,
                                              disabled: b,
                                              autoFocus: n,
                                              autoComplete: I,
                                              "aria-label": S,
                                              ref: this.inputRef,
                                          }),
                                      ),
                                      N,
                                  ],
                              }),
                          },
                      ),
                  ),
              });
    }
    constructor(...e) {
        super(...e),
            _(this, "inputRef", o.createRef()),
            _(this, "containerRef", o.createRef()),
            _(this, "handleOnChange", (e) => {
                let { onChange: t } = this.props;
                null == t || t(e.currentTarget.value);
            });
    }
}
_(b, "defaultProps", {
    size: "md",
    isLoading: !1,
    disabled: !1,
});
