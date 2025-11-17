n.d(t, { K: () => s });
var r = n(990415),
    i = n(473749),
    a = n(477232),
    o = n(297808);
function s(e) {
    let { isDisabled: t, onFocus: n, onBlur: s, onFocusChange: l } = e,
        c = (0, i.useCallback)(
            (e) => {
                if (e.target === e.currentTarget) return s && s(e), l && l(!1), !0;
            },
            [s, l],
        ),
        u = (0, r.d0)(c),
        d = (0, i.useCallback)(
            (e) => {
                let t = (0, a.r3)(e.target),
                    r = t ? (0, o.vY)(t) : (0, o.vY)();
                e.target === e.currentTarget && r === (0, o.NI)(e.nativeEvent) && (n && n(e), l && l(!0), u(e));
            },
            [l, n, u],
        );
    return {
        focusProps: {
            onFocus: !t && (n || l || s) ? d : void 0,
            onBlur: !t && (s || l) ? c : void 0,
        },
    };
}
