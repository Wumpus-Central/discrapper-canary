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
    _ = n(559122);
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
                p(e, t, n[t]);
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
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = Object.freeze({
        SMALL: _.small,
        MEDIUM: _.medium,
        LARGE: _.large
    }),
    v = (e) => {
        let { hasContent: t, onClear: n, className: r, isLoading: a, size: c = y.SMALL } = e;
        return (0, i.jsx)(l.P, {
            className: s()(r, _.iconLayout, c, { [_.pointer]: t }),
            onClick: (e) => {
                e.stopPropagation(), null != n && n(e);
            },
            tabIndex: t ? 0 : -1,
            'aria-hidden': !t,
            onMouseDown: (e) => {
                e.preventDefault(), e.stopPropagation();
            },
            children: (0, i.jsx)('div', {
                className: _.iconContainer,
                children: a
                    ? (0, i.jsx)(u.$, {
                          type: u.$.Type.SPINNING_CIRCLE,
                          className: s()(_.icon, _.visible)
                      })
                    : (0, i.jsxs)(o.Fragment, {
                          children: [
                              (0, i.jsx)(d._Ve, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: s()(_.icon, { [_.visible]: !t }),
                                  'aria-label': f.NW.string(f.t['5h0QOD'])
                              }),
                              (0, i.jsx)(d.Dio, {
                                  size: 'md',
                                  color: 'currentColor',
                                  className: s()(_.clear, { [_.visible]: t }),
                                  'aria-label': f.NW.string(f.t.VkKicX)
                              })
                          ]
                      })
            })
        });
    };
v.Sizes = y;
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
            { query: t, autoFocus: n, onClear: r, className: o, placeholder: a = f.NW.string(f.t['5h0QOD']), iconClassName: l, onKeyDown: u, onKeyUp: d, onKeyPress: p, isLoading: m, size: b, disabled: y, onChange: O, onBlur: I, onFocus: S, autoComplete: T, inputProps: N, hideSearchIcon: A, 'aria-label': C = f.NW.string(f.t['5h0QOD']) } = e,
            R = E(e, ['query', 'autoFocus', 'onClear', 'className', 'placeholder', 'iconClassName', 'onKeyDown', 'onKeyUp', 'onKeyPress', 'isLoading', 'size', 'disabled', 'onChange', 'onBlur', 'onFocus', 'autoComplete', 'inputProps', 'hideSearchIcon', 'aria-label']);
        return (0, i.jsx)(c.t, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)(
                'div',
                g(
                    h(
                        {
                            className: s()(o, _.container, b, { [_.disabled]: y }),
                            ref: this.containerRef
                        },
                        R
                    ),
                    {
                        children: (0, i.jsxs)('div', {
                            className: _.inner,
                            children: [
                                (0, i.jsx)(
                                    'input',
                                    g(h({}, N), {
                                        onFocus: S,
                                        onBlur: I,
                                        className: _.input,
                                        value: t,
                                        onChange: this.handleOnChange,
                                        onKeyDown: u,
                                        onKeyUp: d,
                                        onKeyPress: p,
                                        placeholder: a,
                                        disabled: y,
                                        autoFocus: n,
                                        autoComplete: T,
                                        'aria-label': C,
                                        ref: this.inputRef
                                    })
                                ),
                                !A &&
                                    (0, i.jsx)(v, {
                                        size: b,
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
            p(this, 'inputRef', o.createRef()),
            p(this, 'containerRef', o.createRef()),
            p(this, 'handleOnChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e.currentTarget.value);
            });
    }
}
p(O, 'Sizes', y),
    p(O, 'defaultProps', {
        size: y.SMALL,
        isLoading: !1,
        disabled: !1
    });
