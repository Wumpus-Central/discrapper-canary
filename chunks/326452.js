r.d(n, {
    E: function () {
        return v;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(1561),
    d = r(84735),
    f = r(922770),
    _ = r(481060),
    h = r(388032),
    p = r(352086);
function m(e, n, r) {
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
let g = Object.freeze({
        SMALL: p.small,
        MEDIUM: p.medium,
        LARGE: p.large
    }),
    E = (e) => {
        let { hasContent: n, onClear: r, className: i, isLoading: a, size: l = g.SMALL } = e;
        return (0, s.jsx)(c.P, {
            className: u()(i, p.iconLayout, l, { [p.pointer]: n }),
            onClick: (e) => {
                e.stopPropagation(), null != r && r(e);
            },
            tabIndex: n ? 0 : -1,
            'aria-hidden': !n,
            onMouseDown: (e) => {
                e.preventDefault(), e.stopPropagation();
            },
            children: (0, s.jsx)('div', {
                className: p.iconContainer,
                children: a
                    ? (0, s.jsx)(f.$, {
                          type: f.$.Type.SPINNING_CIRCLE,
                          className: u()(p.icon, p.visible)
                      })
                    : (0, s.jsxs)(o.Fragment, {
                          children: [
                              (0, s.jsx)(_.MagnifyingGlassIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: u()(p.icon, { [p.visible]: !n }),
                                  'aria-label': h.intl.string(h.t['5h0QOD'])
                              }),
                              (0, s.jsx)(_.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: u()(p.clear, { [p.visible]: n }),
                                  'aria-label': h.intl.string(h.t.VkKicX)
                              })
                          ]
                      })
            })
        });
    };
E.Sizes = g;
class v extends (i = o.PureComponent) {
    focus() {
        let { current: e } = this.inputRef;
        null == e || e.focus();
    }
    blur() {
        let { current: e } = this.inputRef;
        null == e || e.blur();
    }
    render() {
        let { query: e, autoFocus: n, onClear: r, className: i, placeholder: a = h.intl.string(h.t['5h0QOD']), iconClassName: o, onKeyDown: l, onKeyUp: c, onKeyPress: f, isLoading: _, size: m, disabled: g, onChange: v, onBlur: I, onFocus: T, autoComplete: b, inputProps: y, hideSearchIcon: S, 'aria-label': A = h.intl.string(h.t['5h0QOD']), ...N } = this.props;
        return (0, s.jsx)(d.t, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, s.jsx)('div', {
                className: u()(i, p.container, m, { [p.disabled]: g }),
                ref: this.containerRef,
                ...N,
                children: (0, s.jsxs)('div', {
                    className: p.inner,
                    children: [
                        (0, s.jsx)('input', {
                            ...y,
                            onFocus: T,
                            onBlur: I,
                            className: p.input,
                            value: e,
                            onChange: this.handleOnChange,
                            onKeyDown: l,
                            onKeyUp: c,
                            onKeyPress: f,
                            placeholder: a,
                            disabled: g,
                            autoFocus: n,
                            autoComplete: b,
                            'aria-label': A,
                            ref: this.inputRef
                        }),
                        !S &&
                            (0, s.jsx)(E, {
                                size: m,
                                hasContent: e.length > 0,
                                onClear: r,
                                className: o,
                                isLoading: _
                            })
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'inputRef', o.createRef()),
            m(this, 'containerRef', o.createRef()),
            m(this, 'handleOnChange', (e) => {
                let { onChange: n } = this.props;
                null == n || n(e.currentTarget.value);
            });
    }
}
m(v, 'Sizes', g),
    m(v, 'defaultProps', {
        size: g.SMALL,
        isLoading: !1,
        disabled: !1
    });
