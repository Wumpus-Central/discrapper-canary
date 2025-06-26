r.d(t, { Z: () => O }), r(388685);
var n,
    l,
    a = r(255367),
    o = r(73800),
    i = r(120356),
    c = r.n(i),
    s = r(582232),
    u = r(428278),
    d = r(481060),
    p = r(981631),
    h = r(388032),
    f = r(94308);
function v(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                v(e, t, r[t]);
            });
    }
    return e;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
var y = (((l = y || {}).TOP = 'top'), (l.BOTTOM = 'bottom'), l);
let g = {
    container: (e, t) => {
        let { isDisabled: r } = t;
        return m(b({}, e), {
            cursor: r ? 'not-allowed' : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: '100%'
        });
    },
    control: (e, t) => {
        let { isDisabled: r, menuIsOpen: n } = t;
        return m(b({}, e), {
            backgroundColor: 'var(--input-background)',
            borderColor: 'var(--input-background)',
            opacity: r ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: n ? '4px 4px 0 0' : '4px',
            minHeight: 40,
            transition: 'border 0.15s ease',
            cursor: r ? 'not-allowed' : void 0,
            pointerEvents: r ? 'none' : void 0,
            '&:hover': { borderColor: 'var(--input-background)' }
        });
    },
    singleValue: (e, t) => {
        let { isDisabled: r } = t;
        return m(b({}, e), {
            color: 'var(--interactive-normal)',
            opacity: r ? 0.5 : 1
        });
    },
    input: (e) => m(b({}, e), { color: 'var(--interactive-normal)' }),
    menu: (e) =>
        m(b({}, e), {
            backgroundColor: 'var(--background-base-lower)',
            border: '1px solid var(--background-base-lowest)',
            borderRadius: '0 0 4px 4px',
            color: 'var(--interactive-normal)',
            marginTop: -1,
            marginBottom: -1
        }),
    clearIndicator: (e, t) => {
        let { isDisabled: r } = t;
        return m(b({}, e), {
            color: 'var(--interactive-normal)',
            cursor: r ? void 0 : 'pointer',
            opacity: 0.3,
            padding: '8px 0',
            transform: 'scale(0.8)',
            ':hover': {
                color: 'var(--text-danger)',
                opacity: 1
            }
        });
    },
    indicatorsContainer: (e) => m(b({}, e), { alignItems: 'flex-start' }),
    dropdownIndicator: (e, t) => {
        let { isDisabled: r } = t;
        return m(b({}, e), {
            color: 'var(--interactive-normal)',
            cursor: r ? void 0 : 'pointer',
            opacity: r ? 0.3 : 1,
            padding: '8px 8px 8px 0',
            ':hover': {
                color: 'var(--interactive-hover)',
                opacity: r ? 0.3 : 1
            }
        });
    },
    menuList: (e) =>
        m(b({}, e), {
            padding: 0,
            '&::-webkit-scrollbar': {
                width: 8,
                padding: '0px 2px'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'var(--scrollbar-thin-thumb)',
                border: '2px solid transparent',
                backgroundClip: 'padding-box',
                borderRadius: 4
            },
            '&::-webkit-scrollbar-track-piece': {
                backgroundColor: 'transparent',
                borderColor: 'transparent'
            }
        }),
    option: (e, t) => {
        let { isSelected: r, isFocused: n } = t;
        return m(
            b(
                {},
                e,
                r
                    ? {
                          backgroundColor: 'var(--background-modifier-selected)',
                          color: 'var(--interactive-active)'
                      }
                    : n
                      ? {
                            backgroundColor: 'var(--background-modifier-hover)',
                            color: 'var(--interactive-hover)'
                        }
                      : {
                            backgroundColor: 'transparent',
                            color: 'var(--interactive-normal)'
                        }
            ),
            {
                cursor: 'pointer',
                display: 'flex',
                padding: 12,
                alignItems: 'center',
                minHeight: 40,
                '&:active': {
                    backgroundColor: 'var(--background-modifier-selected)',
                    color: 'var(--interactive-active)'
                }
            }
        );
    },
    placeholder: (e) => m(b({}, e), { color: 'var(--text-muted)' })
};
class O extends (n = o.Component) {
    focus() {
        var e;
        null == (e = this._selectRef.current) || e.focus();
    }
    render() {
        let e,
            t = this.props,
            { className: r, selectClassName: n, error: l, valueRenderer: o, optionRenderer: i, multiValueRenderer: p, options: v, value: y, autofocus: O, disabled: E, clearable: x, searchable: _, styleOverrides: k, isMulti: A, placeholder: j, filterOption: T, closeMenuOnSelect: w = !0 } = t,
            C = b(
                {},
                (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                l = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                            return l;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    }
                    return l;
                })(t, ['className', 'selectClassName', 'error', 'valueRenderer', 'optionRenderer', 'multiValueRenderer', 'options', 'value', 'autofocus', 'disabled', 'clearable', 'searchable', 'styleOverrides', 'isMulti', 'placeholder', 'filterOption', 'closeMenuOnSelect'])
            );
        null != O && (C.autoFocus = O), null != E && (C.isDisabled = E), null != x && (C.isClearable = x), null != _ && (C.isSearchable = _);
        let M = { IndicatorSeparator: () => null };
        if ((null != i && (M.Option = (e) => (0, a.jsx)(s.c.Option, m(b({}, e), { children: i(e.data) }))), null != o && (M.SingleValue = (e) => (0, a.jsx)(s.c.SingleValue, m(b({}, e), { children: o(e.data) }))), null != p && (M.MultiValue = (e) => p(e.data)), A && Array.isArray(y))) {
            let t = {};
            v.forEach((e) => {
                t[String(e.value)] = e;
            }),
                (e = y.map((e) => t[String(e)]));
        } else {
            var R;
            e = null != y && null != (R = v.find((e) => e.value === y)) ? R : null;
        }
        return (0, a.jsx)(d.tEY, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, a.jsxs)('div', {
                className: c()(f.select, r, { [f.error]: null != l }),
                ref: this._containerRef,
                children: [
                    (0, a.jsx)(
                        u.ZP,
                        m(b({}, C), {
                            className: n,
                            ref: this._selectRef,
                            isMulti: A,
                            components: M,
                            options: v,
                            styles: null != k ? k : g,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            onMenuOpen: this.handleMenuOpen,
                            onMenuClose: this.handleMenuClose,
                            closeMenuOnSelect: w,
                            value: e,
                            onKeyDown: this.handleKeyDown,
                            placeholder: null != j ? j : h.intl.string(h.t.XqMe3N),
                            noOptionsMessage: () => h.intl.string(h.t['Xe+fJC']),
                            filterOption: T
                        })
                    ),
                    null != l
                        ? (0, a.jsx)('div', {
                              className: f.errorMessage,
                              children: l
                          })
                        : null
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            v(this, '_selectRef', o.createRef()),
            v(this, '_containerRef', o.createRef()),
            v(this, 'state', {
                isFocused: !1,
                isOpen: !1
            }),
            v(this, 'handleFocus', (e) => {
                var t, r;
                this.setState({ isFocused: !0 }), null == (t = (r = this.props).onFocus) || t.call(r, e);
            }),
            v(this, 'handleBlur', (e) => {
                var t, r;
                this.setState({ isFocused: !1 }), null == (t = (r = this.props).onBlur) || t.call(r, e);
            }),
            v(this, 'handleKeyDown', (e) => {
                e.which === p.yXg.ESCAPE && this.state.isOpen && e.stopPropagation();
            }),
            v(this, 'handleMenuOpen', () => {
                this.setState({ isOpen: !0 });
            }),
            v(this, 'handleMenuClose', () => {
                this.setState({ isOpen: !1 });
            });
    }
}
v(O, 'MenuPlacements', y);
