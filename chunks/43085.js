n.d(t, { b: () => r }), n(47120);
var i = n(192379);
function r(e, t) {
    let [n, r] = (0, i.useState)(!1);
    return {
        handleFocus: (0, i.useCallback)(
            (t) => {
                (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && r(!0), null != e && e(t);
            },
            [e]
        ),
        handleBlur: (0, i.useCallback)(
            (e) => {
                (e.target !== e.currentTarget && e.currentTarget.contains(document.activeElement)) || r(!1), null != t && t(e);
            },
            [t]
        ),
        isFocused: n
    };
}
