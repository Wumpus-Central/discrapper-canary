r.d(n, {
    b: function () {
        return o;
    }
});
var i = r(47120);
var a = r(192379);
function o(e, n) {
    let [r, i] = (0, a.useState)(!1),
        o = (0, a.useCallback)(
            (n) => {
                (n.target === n.currentTarget || n.currentTarget.contains(document.activeElement)) && i(!0), null != e && e(n);
            },
            [e]
        );
    return {
        handleFocus: o,
        handleBlur: (0, a.useCallback)(
            (e) => {
                (e.target === e.currentTarget || !e.currentTarget.contains(document.activeElement)) && i(!1), null != n && n(e);
            },
            [n]
        ),
        isFocused: r
    };
}
