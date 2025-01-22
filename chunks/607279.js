var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(481060),
    d = r(388032),
    f = r(131039);
function p(e, n, r) {
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
    _ = 'search';
class m extends (i = s.Component) {
    render() {
        let { autoFocus: e, label: n, placeholder: r, searchTerm: i, inputClassName: a, className: s, onChange: l, onFocus: p, onBlur: m, onKeyPress: g, autoComplete: E, forwardedRef: v, closeIconClassName: y, searchIconClassName: b, cta: I } = this.props,
            T = null != i && i.length > 0,
            S = null != v ? v : this._textInputRef;
        return (0, o.jsx)(c.FocusRing, {
            focusTarget: S,
            ringTarget: this._containerRef,
            children: (0, o.jsxs)('div', {
                className: u()(f.searchBox, s),
                ref: this._containerRef,
                children: [
                    (0, o.jsx)(c.TextInput, {
                        inputRef: S,
                        focusProps: { enabled: !1 },
                        name: _,
                        maxLength: h,
                        className: f.searchBoxInputWrapper,
                        inputClassName: u()(f.searchBoxInput, a),
                        onChange: l,
                        onFocus: p,
                        onBlur: m,
                        onKeyPress: g,
                        value: T ? i : '',
                        placeholder: r,
                        autoFocus: e,
                        'aria-label': n,
                        autoComplete: E ? 'on' : 'off'
                    }),
                    null != I
                        ? (0, o.jsx)(c.Text, {
                              color: 'text-muted',
                              variant: 'text-xs/normal',
                              className: f.cta,
                              children: I
                          })
                        : null,
                    T
                        ? (0, o.jsx)(c.Clickable, {
                              onClick: this.handleClear,
                              className: f.clear,
                              'aria-label': d.intl.string(d.t['78fJND']),
                              children: (0, o.jsx)(c.CircleXIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: u()(f.clearIcon, y)
                              })
                          })
                        : (0, o.jsx)(c.MagnifyingGlassIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: u()(f.searchIcon, b),
                              'aria-label': d.intl.string(d.t['5h0QOD'])
                          })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            p(this, '_textInputRef', s.createRef()),
            p(this, '_containerRef', s.createRef()),
            p(this, 'handleClear', () => {
                let { onClear: e, forwardedRef: n } = this.props,
                    { current: r } = null != n ? n : this._textInputRef;
                null != r && r.focus(), null != e && e();
            });
    }
}
p(m, 'defaultProps', { autoComplete: !1 }),
    (n.Z = s.forwardRef((e, n) =>
        (0, o.jsx)(m, {
            forwardedRef: n,
            ...e
        })
    ));
