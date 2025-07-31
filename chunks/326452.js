(n.d(t, { E: () => b }), n(388685));
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(84735),
    c = n(481060),
    u = n(532425),
    d = n(388032),
    _ = n(559122);
function f(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
class b extends (r = a.PureComponent) {
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
            { query: t, autoFocus: n, onClear: r, className: a, placeholder: o = d.intl.string(d.t['5h0QOD']), onKeyDown: f, isLoading: h, size: E, disabled: b, onChange: y, onBlur: O, onFocus: v, autoComplete: I, inputProps: T, 'aria-label': S = d.intl.string(d.t['5h0QOD']) } = e,
            A = g(e, ['query', 'autoFocus', 'onClear', 'className', 'placeholder', 'onKeyDown', 'isLoading', 'size', 'disabled', 'onChange', 'onBlur', 'onFocus', 'autoComplete', 'inputProps', 'aria-label']),
            N = (0, i.jsx)(u.B, {
                size: E,
                hasContent: t.length > 0,
                onClear: r,
                isLoading: h
            });
        return null == a
            ? (0, i.jsx)(
                  c.oil,
                  m(p({}, T), {
                      onFocus: v,
                      onBlur: O,
                      value: t,
                      onChange: y,
                      onKeyDown: f,
                      placeholder: o,
                      disabled: b,
                      autoFocus: n,
                      autoComplete: I,
                      'aria-label': S,
                      inputRef: this.inputRef,
                      trailing: N,
                      size: E,
                      fullWidth: !0
                  })
              )
            : (0, i.jsx)(l.t, {
                  focusTarget: this.inputRef,
                  ringTarget: this.containerRef,
                  children: (0, i.jsx)(
                      'div',
                      m(
                          p(
                              {
                                  className: s()(a, _.container, _.wrapper, _[E], { [_.disabled]: b }),
                                  ref: this.containerRef
                              },
                              A
                          ),
                          {
                              children: (0, i.jsxs)('div', {
                                  className: _.inner,
                                  children: [
                                      (0, i.jsx)(
                                          'input',
                                          m(p({}, T), {
                                              onFocus: v,
                                              onBlur: O,
                                              className: _.input,
                                              value: t,
                                              onChange: this.handleOnChange,
                                              onKeyDown: f,
                                              placeholder: o,
                                              disabled: b,
                                              autoFocus: n,
                                              autoComplete: I,
                                              'aria-label': S,
                                              ref: this.inputRef
                                          })
                                      ),
                                      N
                                  ]
                              })
                          }
                      )
                  )
              });
    }
    constructor(...e) {
        (super(...e),
            f(this, 'inputRef', a.createRef()),
            f(this, 'containerRef', a.createRef()),
            f(this, 'handleOnChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e.currentTarget.value);
            }));
    }
}
f(b, 'defaultProps', {
    size: 'md',
    isLoading: !1,
    disabled: !1
});
