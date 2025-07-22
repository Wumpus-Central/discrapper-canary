(n.d(t, { Z: () => g }), n(388685));
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(755721),
    c = n(481060),
    u = n(388032),
    d = n(449101);
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
function _(e) {
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
let p = 100,
    h = 'search';
class m extends (r = a.Component) {
    render() {
        let { autoFocus: e, label: t, placeholder: n, searchTerm: r, inputClassName: a, className: o, onChange: f, onFocus: _, onBlur: m, onKeyPress: g, autoComplete: E, forwardedRef: b, closeIconClassName: y, searchIconClassName: O, cta: v } = this.props,
            I = null != r && r.length > 0,
            T = null != b ? b : this._textInputRef;
        return (0, i.jsx)(c.tEY, {
            focusTarget: T,
            ringTarget: this._containerRef,
            children: (0, i.jsxs)('div', {
                className: s()(d.searchBox, o),
                ref: this._containerRef,
                children: [
                    (0, i.jsx)(l.Is, {
                        inputRef: T,
                        focusProps: { enabled: !1 },
                        name: h,
                        maxLength: p,
                        className: d.searchBoxInputWrapper,
                        inputClassName: s()(d.searchBoxInput, a),
                        onChange: f,
                        onFocus: _,
                        onBlur: m,
                        onKeyPress: g,
                        value: I ? r : '',
                        placeholder: n,
                        autoFocus: e,
                        'aria-label': t,
                        autoComplete: E ? 'on' : 'off'
                    }),
                    null != v
                        ? (0, i.jsx)(c.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/normal',
                              className: d.cta,
                              children: v
                          })
                        : null,
                    I
                        ? (0, i.jsx)(c.P3F, {
                              onClick: this.handleClear,
                              className: d.clear,
                              'aria-label': u.intl.string(u.t['78fJND']),
                              children: (0, i.jsx)(c.k$p, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: s()(d.clearIcon, y)
                              })
                          })
                        : (0, i.jsx)(c._Ve, {
                              size: 'md',
                              color: 'currentColor',
                              className: s()(d.searchIcon, O),
                              'aria-label': u.intl.string(u.t['5h0QOD'])
                          })
                ]
            })
        });
    }
    constructor(...e) {
        (super(...e),
            f(this, '_textInputRef', a.createRef()),
            f(this, '_containerRef', a.createRef()),
            f(this, 'handleClear', () => {
                let { onClear: e, forwardedRef: t } = this.props,
                    { current: n } = null != t ? t : this._textInputRef;
                (null != n && n.focus(), null != e && e());
            }));
    }
}
f(m, 'defaultProps', { autoComplete: !1 });
let g = a.forwardRef((e, t) => (0, i.jsx)(m, _({ forwardedRef: t }, e)));
