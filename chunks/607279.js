n.d(t, { Z: () => h }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(388032),
    c = n(131039);
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
let f = 100,
    _ = 'search';
class p extends (i = a.Component) {
    render() {
        let { autoFocus: e, label: t, placeholder: n, searchTerm: i, inputClassName: a, className: s, onChange: d, onFocus: p, onBlur: h, onKeyPress: m, autoComplete: g, forwardedRef: E, closeIconClassName: v, searchIconClassName: y, cta: I } = this.props,
            T = null != i && i.length > 0,
            b = null != E ? E : this._textInputRef;
        return (0, r.jsx)(l.tEY, {
            focusTarget: b,
            ringTarget: this._containerRef,
            children: (0, r.jsxs)('div', {
                className: o()(c.searchBox, s),
                ref: this._containerRef,
                children: [
                    (0, r.jsx)(l.oil, {
                        inputRef: b,
                        focusProps: { enabled: !1 },
                        name: _,
                        maxLength: f,
                        className: c.searchBoxInputWrapper,
                        inputClassName: o()(c.searchBoxInput, a),
                        onChange: d,
                        onFocus: p,
                        onBlur: h,
                        onKeyPress: m,
                        value: T ? i : '',
                        placeholder: n,
                        autoFocus: e,
                        'aria-label': t,
                        autoComplete: g ? 'on' : 'off'
                    }),
                    null != I
                        ? (0, r.jsx)(l.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/normal',
                              className: c.cta,
                              children: I
                          })
                        : null,
                    T
                        ? (0, r.jsx)(l.P3F, {
                              onClick: this.handleClear,
                              className: c.clear,
                              'aria-label': u.intl.string(u.t['78fJND']),
                              children: (0, r.jsx)(l.k$p, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o()(c.clearIcon, v)
                              })
                          })
                        : (0, r.jsx)(l._Ve, {
                              size: 'md',
                              color: 'currentColor',
                              className: o()(c.searchIcon, y),
                              'aria-label': u.intl.string(u.t['5h0QOD'])
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
d(p, 'defaultProps', { autoComplete: !1 });
let h = a.forwardRef((e, t) =>
    (0, r.jsx)(p, {
        forwardedRef: t,
        ...e
    })
);
