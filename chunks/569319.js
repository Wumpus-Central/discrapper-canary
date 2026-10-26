n.d(t, { V: () => s });
var r = n(582128);
function s(e, t) {
    let [n, s] = r.useState(null);
    null != n && n === e && s(null);
    let o = null != n && n !== (e ?? !1),
        l = r.useCallback(() => !o || null == n || t(n), [o, n, t]);
    return { checked: n ?? e ?? !1, changed: o, setChecked: s, save: l };
}
