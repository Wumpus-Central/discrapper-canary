r.d(t, { Z: () => b }), r(47120);
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
    h = r(848682);
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
var f = (((a = f || {}).TOP = 'top'), (a.BOTTOM = 'bottom'), a);
let m = {
    container: (e, t) => {
        let { isDisabled: r } = t;
        return {
            ...e,
            cursor: r ? 'not-allowed' : void 0,
            pointerEvents: void 0,
            fontSize: 16,
            fontWeight: 500,
            width: '100%'
        };
    },
    control: (e, t) => {
        let { isDisabled: r, menuIsOpen: n } = t;
        return {
            ...e,
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
        };
    },
    singleValue: (e, t) => {
        let { isDisabled: r } = t;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            opacity: r ? 0.5 : 1
        };
    },
    input: (e) => ({
        ...e,
        color: 'var(--interactive-normal)'
    }),
    menu: (e) => ({
        ...e,
        backgroundColor: 'var(--background-secondary)',
        border: '1px solid var(--background-tertiary)',
        borderRadius: '0 0 4px 4px',
        color: 'var(--interactive-normal)',
        marginTop: -1,
        marginBottom: -1
    }),
    clearIndicator: (e, t) => {
        let { isDisabled: r } = t;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            cursor: r ? void 0 : 'pointer',
            opacity: 0.3,
            padding: '8px 0',
            transform: 'scale(0.8)',
            ':hover': {
                color: 'var(--text-danger)',
                opacity: 1
            }
        };
    },
    indicatorsContainer: (e) => ({
        ...e,
        alignItems: 'flex-start'
    }),
    dropdownIndicator: (e, t) => {
        let { isDisabled: r } = t;
        return {
            ...e,
            color: 'var(--interactive-normal)',
            cursor: r ? void 0 : 'pointer',
            opacity: r ? 0.3 : 1,
            padding: '8px 8px 8px 0',
            ':hover': {
                color: 'var(--interactive-hover)',
                opacity: r ? 0.3 : 1
            }
        };
    },
    menuList: (e) => ({
        ...e,
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
        return {
            ...e,
            ...(r
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
    placeholder: (e) => ({
        ...e,
        color: 'var(--text-muted)'
    })
};
class b extends (n = o.Component) {
    focus() {
        var e;
        null === (e = this._selectRef.current) || void 0 === e || e.focus();
    }
    render() {
        let e;
        let { className: t, selectClassName: r, error: n, valueRenderer: a, optionRenderer: o, multiValueRenderer: i, options: d, value: v, autofocus: f, disabled: b, clearable: g, searchable: x, styleOverrides: E, isMulti: y, placeholder: _, filterOption: A, closeMenuOnSelect: k = !0, ...T } = this.props,
            C = { ...T };
        null != f && (C.autoFocus = f), null != b && (C.isDisabled = b), null != g && (C.isClearable = g), null != x && (C.isSearchable = x);
        let O = { IndicatorSeparator: () => null };
        if (
            (null != o &&
                (O.Option = (e) =>
                    (0, l.jsx)(c.wx.Option, {
                        ...e,
                        children: o(e.data)
                    })),
            null != a &&
                (O.SingleValue = (e) =>
                    (0, l.jsx)(c.wx.SingleValue, {
                        ...e,
                        children: a(e.data)
                    })),
            null != i && (O.MultiValue = (e) => i(e.data)),
            y && Array.isArray(v))
        ) {
            let t = {};
            d.forEach((e) => {
                t[String(e.value)] = e;
            }),
                (e = v.map((e) => t[String(e)]));
        } else e = null != v ? d.find((e) => e.value === v) : null;
        return (0, l.jsx)(u.tEY, {
            focused: this.state.isFocused && !this.state.isOpen,
            ringTarget: this._containerRef,
            children: (0, l.jsxs)('div', {
                className: s()(h.select, t, { [h.error]: null != n }),
                ref: this._containerRef,
                children: [
                    (0, l.jsx)(c.ZP, {
                        ...C,
                        className: r,
                        ref: this._selectRef,
                        isMulti: y,
                        components: O,
                        options: d,
                        styles: null != E ? E : m,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onMenuOpen: this.handleMenuOpen,
                        onMenuClose: this.handleMenuClose,
                        closeMenuOnSelect: k,
                        value: e,
                        onKeyDown: this.handleKeyDown,
                        placeholder: null != _ ? _ : p.intl.string(p.t.XqMe3N),
                        noOptionsMessage: () => p.intl.string(p.t['Xe+fJC']),
                        filterOption: A
                    }),
                    null != n
                        ? (0, l.jsx)('div', {
                              className: h.errorMessage,
                              children: n
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
                this.setState({ isFocused: !0 }), null === (t = (r = this.props).onFocus) || void 0 === t || t.call(r, e);
            }),
            v(this, 'handleBlur', (e) => {
                var t, r;
                this.setState({ isFocused: !1 }), null === (t = (r = this.props).onBlur) || void 0 === t || t.call(r, e);
            }),
            v(this, 'handleKeyDown', (e) => {
                e.which === d.yXg.ESCAPE && this.state.isOpen && e.stopPropagation();
            }),
            v(this, 'handleMenuOpen', () => {
                this.setState({ isOpen: !0 });
            }),
            v(this, 'handleMenuClose', () => {
                this.setState({ isOpen: !1 });
            });
    }
}
v(b, 'MenuPlacements', f);
