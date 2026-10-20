n.d(t, { V: () => r });
var s = n(582128);
function r(e, t) {
    let [n, r] = s.useState(null);
    null != n && n === e && r(null);
    let o = null != n && n !== (e ?? !1),
        i = s.useCallback(() => !o || null == n || t(n), [o, n, t]);
    return { checked: n ?? e ?? !1, changed: o, setChecked: r, save: i };
}
