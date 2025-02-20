n.d(t, { b: () => i }), n(47120);
var r = n(192379);
function i(e, t) {
    let [n, i] = (0, r.useState)(!1);
    return {
        handleFocus: (0, r.useCallback)(
            (t) => {
                (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && i(!0), null != e && e(t);
            },
            [e]
        ),
        handleBlur: (0, r.useCallback)(
            (e) => {
                (e.target !== e.currentTarget && e.currentTarget.contains(document.activeElement)) || i(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n
    };
}
