n.d(t, { Z: () => m }), n(388685);
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(388032),
    u = n(449101);
function d(e, t, n) {
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
let _ = 100,
    p = 'search';
class h extends (r = a.Component) {
    render() {
        let { autoFocus: e, label: t, placeholder: n, searchTerm: r, inputClassName: a, className: o, onChange: d, onFocus: f, onBlur: h, onKeyPress: m, autoComplete: g, forwardedRef: E, closeIconClassName: b, searchIconClassName: y, cta: O } = this.props,
            v = null != r && r.length > 0,
            I = null != E ? E : this._textInputRef;
        return (0, i.jsx)(l.tEY, {
            focusTarget: I,
            ringTarget: this._containerRef,
            children: (0, i.jsxs)('div', {
                className: s()(u.searchBox, o),
                ref: this._containerRef,
                children: [
                    (0, i.jsx)(l.oil, {
                        inputRef: I,
                        focusProps: { enabled: !1 },
                        name: p,
                        maxLength: _,
                        className: u.searchBoxInputWrapper,
                        inputClassName: s()(u.searchBoxInput, a),
                        onChange: d,
                        onFocus: f,
                        onBlur: h,
                        onKeyPress: m,
                        value: v ? r : '',
                        placeholder: n,
                        autoFocus: e,
                        'aria-label': t,
                        autoComplete: g ? 'on' : 'off'
                    }),
                    null != O
                        ? (0, i.jsx)(l.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/normal',
                              className: u.cta,
                              children: O
                          })
                        : null,
                    v
                        ? (0, i.jsx)(l.P3F, {
                              onClick: this.handleClear,
                              className: u.clear,
                              'aria-label': c.intl.string(c.t['78fJND']),
                              children: (0, i.jsx)(l.k$p, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: s()(u.clearIcon, b)
                              })
                          })
                        : (0, i.jsx)(l._Ve, {
                              size: 'md',
                              color: 'currentColor',
                              className: s()(u.searchIcon, y),
                              'aria-label': c.intl.string(c.t['5h0QOD'])
                          })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            d(this, '_textInputRef', a.createRef()),
            d(this, '_containerRef', a.createRef()),
            d(this, 'handleClear', () => {
                let { onClear: e, forwardedRef: t } = this.props,
                    { current: n } = null != t ? t : this._textInputRef;
                null != n && n.focus(), null != e && e();
            });
    }
}
d(h, 'defaultProps', { autoComplete: !1 });
let m = a.forwardRef((e, t) => (0, i.jsx)(h, f({ forwardedRef: t }, e)));
