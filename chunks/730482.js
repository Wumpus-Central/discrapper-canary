n.d(t, { u: () => u });
var o = n(183759),
    r = n(565963),
    i = n(381537),
    a = n(192379),
    s = ['defaultInputValue', 'defaultMenuIsOpen', 'defaultValue', 'inputValue', 'menuIsOpen', 'onChange', 'onInputChange', 'onMenuClose', 'onMenuOpen', 'value'];
function u(e) {
    var t = e.defaultInputValue,
        n = e.defaultMenuIsOpen,
        u = e.defaultValue,
        l = e.inputValue,
        c = e.menuIsOpen,
        d = e.onChange,
        p = e.onInputChange,
        f = e.onMenuClose,
        h = e.onMenuOpen,
        v = e.value,
        m = (0, i.Z)(e, s),
        g = (0, a.useState)(void 0 !== l ? l : void 0 === t ? '' : t),
        b = (0, r.Z)(g, 2),
        y = b[0],
        O = b[1],
        w = (0, a.useState)(void 0 !== c ? c : void 0 !== n && n),
        x = (0, r.Z)(w, 2),
        Z = x[0],
        C = x[1],
        S = (0, a.useState)(void 0 !== v ? v : void 0 === u ? null : u),
        M = (0, r.Z)(S, 2),
        I = M[0],
        E = M[1],
        k = (0, a.useCallback)(
            function (e, t) {
                'function' == typeof d && d(e, t), E(e);
            },
            [d]
        ),
        V = (0, a.useCallback)(
            function (e, t) {
                var n;
                'function' == typeof p && (n = p(e, t)), O(void 0 !== n ? n : e);
            },
            [p]
        ),
        R = (0, a.useCallback)(
            function () {
                'function' == typeof h && h(), C(!0);
            },
            [h]
        ),
        P = (0, a.useCallback)(
            function () {
                'function' == typeof f && f(), C(!1);
            },
            [f]
        ),
        D = void 0 !== l ? l : y,
        F = void 0 !== c ? c : Z,
        L = void 0 !== v ? v : I;
    return (0, o.Z)(
        (0, o.Z)({}, m),
        {},
        {
            inputValue: D,
            menuIsOpen: F,
            onChange: k,
            onInputChange: V,
            onMenuClose: P,
            onMenuOpen: R,
            value: L
        }
    );
}
