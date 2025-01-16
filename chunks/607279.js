var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(388032),
    f = r(131039);
function _(e, n, r) {
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
let h = 100,
    p = 'search';
class m extends (i = o.Component) {
    render() {
        let { autoFocus: e, label: n, placeholder: r, searchTerm: i, inputClassName: a, className: o, onChange: l, onFocus: _, onBlur: m, onKeyPress: g, autoComplete: E, forwardedRef: v, closeIconClassName: I, searchIconClassName: T, cta: b } = this.props,
            y = null != i && i.length > 0,
            S = null != v ? v : this._textInputRef;
        return (0, s.jsx)(c.FocusRing, {
            focusTarget: S,
            ringTarget: this._containerRef,
            children: (0, s.jsxs)('div', {
                className: u()(f.searchBox, o),
                ref: this._containerRef,
                children: [
                    (0, s.jsx)(c.TextInput, {
                        inputRef: S,
                        focusProps: { enabled: !1 },
                        name: p,
                        maxLength: h,
                        className: f.searchBoxInputWrapper,
                        inputClassName: u()(f.searchBoxInput, a),
                        onChange: l,
                        onFocus: _,
                        onBlur: m,
                        onKeyPress: g,
                        value: y ? i : '',
                        placeholder: r,
                        autoFocus: e,
                        'aria-label': n,
                        autoComplete: E ? 'on' : 'off'
                    }),
                    null != b
                        ? (0, s.jsx)(c.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/normal',
                              className: f.cta,
                              children: b
                          })
                        : null,
                    y
                        ? (0, s.jsx)(c.Clickable, {
                              onClick: this.handleClear,
                              className: f.clear,
                              'aria-label': d.intl.string(d.t['78fJND']),
                              children: (0, s.jsx)(c.CircleXIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: u()(f.clearIcon, I)
                              })
                          })
                        : (0, s.jsx)(c.MagnifyingGlassIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: u()(f.searchIcon, T),
                              'aria-label': d.intl.string(d.t['5h0QOD'])
                          })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            _(this, '_textInputRef', o.createRef()),
            _(this, '_containerRef', o.createRef()),
            _(this, 'handleClear', () => {
                let { onClear: e, forwardedRef: n } = this.props,
                    { current: r } = null != n ? n : this._textInputRef;
                null != r && r.focus(), null != e && e();
            });
    }
}
_(m, 'defaultProps', { autoComplete: !1 }),
    (n.Z = o.forwardRef((e, n) =>
        (0, s.jsx)(m, {
            forwardedRef: n,
            ...e
        })
    ));
