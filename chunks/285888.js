x.d(i, {
    Z: function () {
        return f;
    },
    v: function () {
        return y;
    }
}),
    x(47120);
var r,
    k,
    t,
    s = x(200651),
    o = x(192379),
    n = x(120356),
    m = x.n(n),
    e = x(569619),
    p = x(481060),
    l = x(981631),
    h = x(388032),
    d = x(808786);
function c(a, i, x) {
    return (
        i in a
            ? Object.defineProperty(a, i, {
                  value: x,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (a[i] = x),
        a
    );
}
((t = r || (r = {})).TOP = 'top'), (t.BOTTOM = 'bottom');
let y = {
    container: (a, i) => {
        let { isDisabled: x } = i;
        return {
            ...a,
            cursor: x ? 'not-allowed' : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: '100%'
        };
    },
    control: (a, i) => {
        let { isDisabled: x, menuIsOpen: r } = i;
        return {
            ...a,
            backgroundColor: 'var(--input-background)',
            borderColor: 'var(--input-background)',
            opacity: x ? 0.6 : 1,
            boxShadow: void 0,
            borderRadius: r ? '4px 4px 0 0' : '4px',
            minHeight: 40,
            transition: 'border 0.15s ease',
            cursor: x ? 'not-allowed' : void 0,
            pointerEvents: x ? 'none' : void 0,
            '&:hover': { borderColor: 'var(--input-background)' }
        };
    },
    singleValue: (a, i) => {
        let { isDisabled: x } = i;
        return {
            ...a,
            color: 'var(--interactive-normal)',
            opacity: x ? 0.5 : 1
        };
    },
    input: (a) => ({
        ...a,
        color: 'var(--interactive-normal)'
    }),
    menu: (a) => ({
        ...a,
        backgroundColor: 'var(--background-secondary)',
        border: '1px solid var(--background-tertiary)',
        borderRadius: '0 0 4px 4px',
        color: 'var(--interactive-normal)',
        marginTop: -1,
        marginBottom: -1
    }),
    clearIndicator: (a, i) => {
        let { isDisabled: x } = i;
        return {
            ...a,
            color: 'var(--interactive-normal)',
            cursor: x ? void 0 : 'pointer',
            opacity: 0.3,
            padding: '8px 0',
            transform: 'scale(0.8)',
            ':hover': {
                color: 'var(--text-danger)',
                opacity: 1
            }
        };
    },
    indicatorsContainer: (a) => ({
        ...a,
        alignItems: 'flex-start'
    }),
    dropdownIndicator: (a, i) => {
        let { isDisabled: x } = i;
        return {
            ...a,
            color: 'var(--interactive-normal)',
            cursor: x ? void 0 : 'pointer',
            opacity: x ? 0.3 : 1,
            padding: '8px 8px 8px 0',
            ':hover': {
                color: 'var(--interactive-hover)',
                opacity: x ? 0.3 : 1
            }
        };
    },
    menuList: (a) => ({
        ...a,
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
    option: (a, i) => {
        let { isSelected: x, isFocused: r } = i;
        return {
            ...a,
            ...(x
                ? {
                      backgroundColor: 'var(--background-modifier-selected)',
                      color: 'var(--interactive-active)'
                  }
                : r
                  ? {
                        backgroundColor: 'var(--background-modifier-hover)',
                        color: 'var(--interactive-hover)'
                    }
                  : {
                        backgroundColor: 'transparent',
                        color: 'var(--interactive-normal)'
                    }),
            cursor: 'pointer',
            display: 'flex',
            padding: 12,
            alignItems: 'center',
            minHeight: 40,
            '&:active': {
                backgroundColor: 'var(--background-modifier-selected)',
                color: 'var(--interactive-active)'
            }
        };
    },
    placeholder: (a) => ({
        ...a,
        color: 'var(--text-muted)'
    })
};
class f extends (k = o.Component) {
    focus() {
        var a;
        null === (a = this._selectRef.current) || void 0 === a || a.focus();
    }
    render() {
        let a;
        let { className: i, selectClassName: x, error: r, valueRenderer: k, optionRenderer: t, multiValueRenderer: o, options: n, value: l, autofocus: c, disabled: f, clearable: u, searchable: G, styleOverrides: A, isMulti: D, placeholder: E, filterOption: B, closeMenuOnSelect: V = !0, ...b } = this.props,
            F = { ...b };
        null != c && (F.autoFocus = c), null != f && (F.isDisabled = f), null != u && (F.isClearable = u), null != G && (F.isSearchable = G);
        let g = { IndicatorSeparator: () => null };
        null != t &&
            (g.Option = (a) =>
                (0, s.jsx)(e.wx.Option, {
                    ...a,
                    children: t(a.data)
                })),
            null != k &&
                (g.SingleValue = (a) =>
                    (0, s.jsx)(e.wx.SingleValue, {
                        ...a,
                        children: k(a.data)
                    })),
            null != o && (g.MultiValue = (a) => o(a.data));
        if (D && Array.isArray(l)) {
            let i = {};
            n.forEach((a) => {
                i[String(a.value)] = a;
            }),
                (a = l.map((a) => i[String(a)]));
        } else a = null != l ? n.find((a) => a.value === l) : null;
        return (0, s.jsx)(p.FocusRing, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, s.jsxs)('div', {
                className: m()(d.select, i, { [d.error]: null != r }),
                ref: this._containerRef,
                children: [
                    (0, s.jsx)(e.ZP, {
                        ...F,
                        className: x,
                        ref: this._selectRef,
                        isMulti: D,
                        components: g,
                        options: n,
                        styles: null != A ? A : y,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onMenuOpen: this.handleMenuOpen,
                        onMenuClose: this.handleMenuClose,
                        closeMenuOnSelect: V,
                        value: a,
                        onKeyDown: this.handleKeyDown,
                        placeholder: null != E ? E : h.intl.string(h.t.XqMe3N),
                        noOptionsMessage: () => h.intl.string(h.t['Xe+fJC']),
                        filterOption: B
                    }),
                    null != r
                        ? (0, s.jsx)('div', {
                              className: d.errorMessage,
                              children: r
                          })
                        : null
                ]
            })
        });
    }
    constructor(...a) {
        super(...a),
            c(this, '_selectRef', o.createRef()),
            c(this, '_containerRef', o.createRef()),
            c(this, 'state', {
                isFocused: !1,
                isOpen: !1
            }),
            c(this, 'handleFocus', (a) => {
                var i, x;
                this.setState({ isFocused: !0 }), null === (i = (x = this.props).onFocus) || void 0 === i || i.call(x, a);
            }),
            c(this, 'handleBlur', (a) => {
                var i, x;
                this.setState({ isFocused: !1 }), null === (i = (x = this.props).onBlur) || void 0 === i || i.call(x, a);
            }),
            c(this, 'handleKeyDown', (a) => {
                a.which === l.yXg.ESCAPE && this.state.isOpen && a.stopPropagation();
            }),
            c(this, 'handleMenuOpen', () => {
                this.setState({ isOpen: !0 });
            }),
            c(this, 'handleMenuClose', () => {
                this.setState({ isOpen: !1 });
            });
    }
}
c(f, 'MenuPlacements', r);
