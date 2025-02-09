n.d(t, { E: () => g }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(1561),
    u = n(84735),
    c = n(922770),
    d = n(481060),
    f = n(388032),
    _ = n(211175);
function p(e, t, n) {
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
let h = Object.freeze({
        SMALL: _.small,
        MEDIUM: _.medium,
        LARGE: _.large
    }),
    m = (e) => {
        let { hasContent: t, onClear: n, className: i, isLoading: s, size: u = h.SMALL } = e;
        return (0, r.jsx)(l.P, {
            className: o()(i, _.iconLayout, u, { [_.pointer]: t }),
            onClick: (e) => {
                e.stopPropagation(), null != n && n(e);
            },
            tabIndex: t ? 0 : -1,
            'aria-hidden': !t,
            onMouseDown: (e) => {
                e.preventDefault(), e.stopPropagation();
            },
            children: (0, r.jsx)('div', {
                className: _.iconContainer,
                children: s
                    ? (0, r.jsx)(c.$, {
                          type: c.$.Type.SPINNING_CIRCLE,
                          className: o()(_.icon, _.visible)
                      })
                    : (0, r.jsxs)(a.Fragment, {
                          children: [
                              (0, r.jsx)(d._Ve, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o()(_.icon, { [_.visible]: !t }),
                                  'aria-label': f.intl.string(f.t['5h0QOD'])
                              }),
                              (0, r.jsx)(d.Dio, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: o()(_.clear, { [_.visible]: t }),
                                  'aria-label': f.intl.string(f.t.VkKicX)
                              })
                          ]
                      })
            })
        });
    };
m.Sizes = h;
class g extends (i = a.PureComponent) {
    focus() {
        let { current: e } = this.inputRef;
        null == e || e.focus();
    }
    blur() {
        let { current: e } = this.inputRef;
        null == e || e.blur();
    }
    render() {
        let { query: e, autoFocus: t, onClear: n, className: i, placeholder: a = f.intl.string(f.t['5h0QOD']), iconClassName: s, onKeyDown: l, onKeyUp: c, onKeyPress: d, isLoading: p, size: h, disabled: g, onChange: E, onBlur: v, onFocus: y, autoComplete: I, inputProps: T, hideSearchIcon: b, 'aria-label': S = f.intl.string(f.t['5h0QOD']), ...A } = this.props;
        return (0, r.jsx)(u.t, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, r.jsx)('div', {
                className: o()(i, _.container, h, { [_.disabled]: g }),
                ref: this.containerRef,
                ...A,
                children: (0, r.jsxs)('div', {
                    className: _.inner,
                    children: [
                        (0, r.jsx)('input', {
                            ...T,
                            onFocus: y,
                            onBlur: v,
                            className: _.input,
                            value: e,
                            onChange: this.handleOnChange,
                            onKeyDown: l,
                            onKeyUp: c,
                            onKeyPress: d,
                            placeholder: a,
                            disabled: g,
                            autoFocus: t,
                            autoComplete: I,
                            'aria-label': S,
                            ref: this.inputRef
                        }),
                        !b &&
                            (0, r.jsx)(m, {
                                size: h,
                                hasContent: e.length > 0,
                                onClear: n,
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
            p(this, 'inputRef', a.createRef()),
            p(this, 'containerRef', a.createRef()),
            p(this, 'handleOnChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e.currentTarget.value);
            });
    }
}
p(g, 'Sizes', h),
    p(g, 'defaultProps', {
        size: h.SMALL,
        isLoading: !1,
        disabled: !1
    });
