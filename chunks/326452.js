r.d(n, {
    E: function () {
        return v;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(1561),
    d = r(84735),
    f = r(922770),
    p = r(481060),
    h = r(388032),
    _ = r(352086);
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
        SMALL: _.small,
        MEDIUM: _.medium,
        LARGE: _.large
    }),
    E = (e) => {
        let { hasContent: n, onClear: r, className: i, isLoading: a, size: l = g.SMALL } = e;
        return (0, o.jsx)(c.P, {
            className: u()(i, _.iconLayout, l, { [_.pointer]: n }),
            onClick: (e) => {
                e.stopPropagation(), null != r && r(e);
            },
            tabIndex: n ? 0 : -1,
            'aria-hidden': !n,
            onMouseDown: (e) => {
                e.preventDefault(), e.stopPropagation();
            },
            children: (0, o.jsx)('div', {
                className: _.iconContainer,
                children: a
                    ? (0, o.jsx)(f.$, {
                          type: f.$.Type.SPINNING_CIRCLE,
                          className: u()(_.icon, _.visible)
                      })
                    : (0, o.jsxs)(s.Fragment, {
                          children: [
                              (0, o.jsx)(p.MagnifyingGlassIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: u()(_.icon, { [_.visible]: !n }),
                                  'aria-label': h.intl.string(h.t['5h0QOD'])
                              }),
                              (0, o.jsx)(p.XSmallIcon, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: u()(_.clear, { [_.visible]: n }),
                                  'aria-label': h.intl.string(h.t.VkKicX)
                              })
                          ]
                      })
            })
        });
    };
E.Sizes = g;
class v extends (i = s.PureComponent) {
    focus() {
        let { current: e } = this.inputRef;
        null == e || e.focus();
    }
    blur() {
        let { current: e } = this.inputRef;
        null == e || e.blur();
    }
    render() {
        let { query: e, autoFocus: n, onClear: r, className: i, placeholder: a = h.intl.string(h.t['5h0QOD']), iconClassName: s, onKeyDown: l, onKeyUp: c, onKeyPress: f, isLoading: p, size: m, disabled: g, onChange: v, onBlur: y, onFocus: b, autoComplete: I, inputProps: T, hideSearchIcon: S, 'aria-label': A = h.intl.string(h.t['5h0QOD']), ...C } = this.props;
        return (0, o.jsx)(d.t, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, o.jsx)('div', {
                className: u()(i, _.container, m, { [_.disabled]: g }),
                ref: this.containerRef,
                ...C,
                children: (0, o.jsxs)('div', {
                    className: _.inner,
                    children: [
                        (0, o.jsx)('input', {
                            ...T,
                            onFocus: b,
                            onBlur: y,
                            className: _.input,
                            value: e,
                            onChange: this.handleOnChange,
                            onKeyDown: l,
                            onKeyUp: c,
                            onKeyPress: f,
                            placeholder: a,
                            disabled: g,
                            autoFocus: n,
                            autoComplete: I,
                            'aria-label': A,
                            ref: this.inputRef
                        }),
                        !S &&
                            (0, o.jsx)(E, {
                                size: m,
                                hasContent: e.length > 0,
                                onClear: r,
                                className: s,
                                isLoading: p
                            })
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'inputRef', s.createRef()),
            m(this, 'containerRef', s.createRef()),
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
