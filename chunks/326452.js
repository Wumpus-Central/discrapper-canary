n.d(t, { E: () => O }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(1561),
    c = n(84735),
    u = n(922770),
    d = n(481060),
    f = n(388032),
    p = n(868594);
function _(e, t, n) {
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = Object.freeze({
        SMALL: p.small,
        MEDIUM: p.medium,
        LARGE: p.large
    }),
    y = (e) => {
        let { hasContent: t, onClear: n, className: r, isLoading: a, size: c = b.SMALL } = e;
        return (0, i.jsx)(l.P, {
            className: s()(r, p.iconLayout, c, { [p.pointer]: t }),
            onClick: (e) => {
                e.stopPropagation(), null != n && n(e);
            },
            tabIndex: t ? 0 : -1,
            'aria-hidden': !t,
            onMouseDown: (e) => {
                e.preventDefault(), e.stopPropagation();
            },
            children: (0, i.jsx)('div', {
                className: p.iconContainer,
                children: a
                    ? (0, i.jsx)(u.$, {
                          type: u.$.Type.SPINNING_CIRCLE,
                          className: s()(p.icon, p.visible)
                      })
                    : (0, i.jsxs)(o.Fragment, {
                          children: [
                              (0, i.jsx)(d._Ve, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: s()(p.icon, { [p.visible]: !t }),
                                  'aria-label': f.NW.string(f.t['5h0QOD'])
                              }),
                              (0, i.jsx)(d.Dio, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: s()(p.clear, { [p.visible]: t }),
                                  'aria-label': f.NW.string(f.t.VkKicX)
                              })
                          ]
                      })
            })
        });
    };
y.Sizes = b;
class O extends (r = o.PureComponent) {
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
            { query: t, autoFocus: n, onClear: r, className: o, placeholder: a = f.NW.string(f.t['5h0QOD']), iconClassName: l, onKeyDown: u, onKeyUp: d, onKeyPress: _, isLoading: m, size: v, disabled: b, onChange: O, onBlur: S, onFocus: I, autoComplete: T, inputProps: N, hideSearchIcon: A, 'aria-label': C = f.NW.string(f.t['5h0QOD']) } = e,
            R = E(e, ['query', 'autoFocus', 'onClear', 'className', 'placeholder', 'iconClassName', 'onKeyDown', 'onKeyUp', 'onKeyPress', 'isLoading', 'size', 'disabled', 'onChange', 'onBlur', 'onFocus', 'autoComplete', 'inputProps', 'hideSearchIcon', 'aria-label']);
        return (0, i.jsx)(c.t, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)(
                'div',
                g(
                    h(
                        {
                            className: s()(o, p.container, v, { [p.disabled]: b }),
                            ref: this.containerRef
                        },
                        R
                    ),
                    {
                        children: (0, i.jsxs)('div', {
                            className: p.inner,
                            children: [
                                (0, i.jsx)(
                                    'input',
                                    g(h({}, N), {
                                        onFocus: I,
                                        onBlur: S,
                                        className: p.input,
                                        value: t,
                                        onChange: this.handleOnChange,
                                        onKeyDown: u,
                                        onKeyUp: d,
                                        onKeyPress: _,
                                        placeholder: a,
                                        disabled: b,
                                        autoFocus: n,
                                        autoComplete: T,
                                        'aria-label': C,
                                        ref: this.inputRef
                                    })
                                ),
                                !A &&
                                    (0, i.jsx)(y, {
                                        size: v,
                                        hasContent: t.length > 0,
                                        onClear: r,
                                        className: l,
                                        isLoading: m
                                    })
                            ]
                        })
                    }
                )
            )
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'inputRef', o.createRef()),
            _(this, 'containerRef', o.createRef()),
            _(this, 'handleOnChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e.currentTarget.value);
            });
    }
}
_(O, 'Sizes', b),
    _(O, 'defaultProps', {
        size: b.SMALL,
        isLoading: !1,
        disabled: !1
    });
