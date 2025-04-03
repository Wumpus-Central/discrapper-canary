r.d(t, { Z: () => g }), r(47120);
var n,
    a,
    l = r(200651),
    o = r(192379),
    i = r(120356),
    s = r.n(i),
    c = r(569619),
    u = r(481060),
    d = r(981631),
    p = r(388032),
    h = r(94308);
function f(e, t, r) {
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
                f(e, t, r[t]);
            });
    }
    return e;
}
function v(e, t) {
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
var m = (((a = m || {}).TOP = 'top'), (a.BOTTOM = 'bottom'), a);
let y = {
    container: (e, t) => {
        let { isDisabled: r } = t;
        return v(b({}, e), {
            cursor: r ? 'not-allowed' : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: '100%'
        });
    },
    control: (e, t) => {
        let { isDisabled: r, menuIsOpen: n } = t;
        return v(b({}, e), {
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
        return v(b({}, e), {
            color: 'var(--interactive-normal)',
            opacity: r ? 0.5 : 1
        });
    },
    input: (e) => v(b({}, e), { color: 'var(--interactive-normal)' }),
    menu: (e) =>
        v(b({}, e), {
            backgroundColor: 'var(--background-secondary)',
            border: '1px solid var(--background-tertiary)',
            borderRadius: '0 0 4px 4px',
            color: 'var(--interactive-normal)',
            marginTop: -1,
            marginBottom: -1
        }),
    clearIndicator: (e, t) => {
        let { isDisabled: r } = t;
        return v(b({}, e), {
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
    indicatorsContainer: (e) => v(b({}, e), { alignItems: 'flex-start' }),
    dropdownIndicator: (e, t) => {
        let { isDisabled: r } = t;
        return v(b({}, e), {
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
        v(b({}, e), {
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
        return v(
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
    placeholder: (e) => v(b({}, e), { color: 'var(--text-muted)' })
};
class g extends (n = o.Component) {
    focus() {
        var e;
        null == (e = this._selectRef.current) || e.focus();
    }
    render() {
        let e,
            t = this.props,
            { className: r, selectClassName: n, error: a, valueRenderer: o, optionRenderer: i, multiValueRenderer: d, options: f, value: m, autofocus: g, disabled: O, clearable: x, searchable: E, styleOverrides: _, isMulti: k, placeholder: A, filterOption: N, closeMenuOnSelect: j = !0 } = t,
            T = b(
                {},
                (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                l = Object.keys(e);
                            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    }
                    return a;
                })(t, ['className', 'selectClassName', 'error', 'valueRenderer', 'optionRenderer', 'multiValueRenderer', 'options', 'value', 'autofocus', 'disabled', 'clearable', 'searchable', 'styleOverrides', 'isMulti', 'placeholder', 'filterOption', 'closeMenuOnSelect'])
            );
        null != g && (T.autoFocus = g), null != O && (T.isDisabled = O), null != x && (T.isClearable = x), null != E && (T.isSearchable = E);
        let w = { IndicatorSeparator: () => null };
        if ((null != i && (w.Option = (e) => (0, l.jsx)(c.wx.Option, v(b({}, e), { children: i(e.data) }))), null != o && (w.SingleValue = (e) => (0, l.jsx)(c.wx.SingleValue, v(b({}, e), { children: o(e.data) }))), null != d && (w.MultiValue = (e) => d(e.data)), k && Array.isArray(m))) {
            let t = {};
            f.forEach((e) => {
                t[String(e.value)] = e;
            }),
                (e = m.map((e) => t[String(e)]));
        } else e = null != m ? f.find((e) => e.value === m) : null;
        return (0, l.jsx)(u.tEY, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, l.jsxs)('div', {
                className: s()(h.select, r, { [h.error]: null != a }),
                ref: this._containerRef,
                children: [
                    (0, l.jsx)(
                        c.ZP,
                        v(b({}, T), {
                            className: n,
                            ref: this._selectRef,
                            isMulti: k,
                            components: w,
                            options: f,
                            styles: null != _ ? _ : y,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            onMenuOpen: this.handleMenuOpen,
                            onMenuClose: this.handleMenuClose,
                            closeMenuOnSelect: j,
                            value: e,
                            onKeyDown: this.handleKeyDown,
                            placeholder: null != A ? A : p.NW.string(p.t.XqMe3N),
                            noOptionsMessage: () => p.NW.string(p.t['Xe+fJC']),
                            filterOption: N
                        })
                    ),
                    null != a
                        ? (0, l.jsx)('div', {
                              className: h.errorMessage,
                              children: a
                          })
                        : null
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            f(this, '_selectRef', o.createRef()),
            f(this, '_containerRef', o.createRef()),
            f(this, 'state', {
                isFocused: !1,
                isOpen: !1
            }),
            f(this, 'handleFocus', (e) => {
                var t, r;
                this.setState({ isFocused: !0 }), null == (t = (r = this.props).onFocus) || t.call(r, e);
            }),
            f(this, 'handleBlur', (e) => {
                var t, r;
                this.setState({ isFocused: !1 }), null == (t = (r = this.props).onBlur) || t.call(r, e);
            }),
            f(this, 'handleKeyDown', (e) => {
                e.which === d.yXg.ESCAPE && this.state.isOpen && e.stopPropagation();
            }),
            f(this, 'handleMenuOpen', () => {
                this.setState({ isOpen: !0 });
            }),
            f(this, 'handleMenuClose', () => {
                this.setState({ isOpen: !1 });
            });
    }
}
f(g, 'MenuPlacements', m);
