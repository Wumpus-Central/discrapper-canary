n.d(t, { u: () => u });
var o = n(183759),
    r = n(565963),
    i = n(381537),
    a = n(647438),
    s = [
        "defaultInputValue",
        "defaultMenuIsOpen",
        "defaultValue",
        "inputValue",
        "menuIsOpen",
        "onChange",
        "onInputChange",
        "onMenuClose",
        "onMenuOpen",
        "value",
    ];
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
        g = (0, a.useState)(void 0 !== l ? l : void 0 === t ? "" : t),
        b = (0, r.Z)(g, 2),
        y = b[0],
        O = b[1],
        x = (0, a.useState)(void 0 !== c ? c : void 0 !== n && n),
        w = (0, r.Z)(x, 2),
        C = w[0],
        M = w[1],
        Z = (0, a.useState)(void 0 !== v ? v : void 0 === u ? null : u),
        S = (0, r.Z)(Z, 2),
        I = S[0],
        E = S[1],
        k = (0, a.useCallback)(
            function (e, t) {
                "function" == typeof d && d(e, t), E(e);
            },
            [d],
        ),
        V = (0, a.useCallback)(
            function (e, t) {
                var n;
                "function" == typeof p && (n = p(e, t)), O(void 0 !== n ? n : e);
            },
            [p],
        ),
        R = (0, a.useCallback)(
            function () {
                "function" == typeof h && h(), M(!0);
            },
            [h],
        ),
        D = (0, a.useCallback)(
            function () {
                "function" == typeof f && f(), M(!1);
            },
            [f],
        ),
        F = void 0 !== l ? l : y,
        P = void 0 !== c ? c : C,
        L = void 0 !== v ? v : I;
    return (0, o.Z)(
        (0, o.Z)({}, m),
        {},
        {
            inputValue: F,
            menuIsOpen: P,
            onChange: k,
            onInputChange: V,
            onMenuClose: D,
            onMenuOpen: R,
            value: L,
        },
    );
}
