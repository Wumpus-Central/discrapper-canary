r.d(t, { i: () => s });
var n = r(256062),
    i = r(143761),
    o = r(872197),
    a = r(582128);
function s(e) {
    let { isDisabled: t, onFocus: r, onBlur: s, onFocusChange: l } = e,
        u = (0, a.useCallback)(
            (e) => {
                if ((0, n.wt)(e) === e.currentTarget) return s && s(e), l && l(!1), !0;
            },
            [s, l],
        ),
        c = (0, o.yB)(u),
        f = (0, a.useCallback)(
            (e) => {
                let t = (0, n.wt)(e),
                    o = (0, i.TW)(t),
                    a = o ? (0, n.bq)(o) : (0, n.bq)();
                t === e.currentTarget && t === a && (r && r(e), l && l(!0), c(e));
            },
            [l, r, c],
        );
    return { focusProps: { onFocus: !t && (r || l || s) ? f : void 0, onBlur: !t && (s || l) ? u : void 0 } };
}
