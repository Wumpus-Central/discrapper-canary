n.d(t, { V: () => s });
var r = n(582128);
function s(e, t) {
    let [n, s] = r.useState(null);
    null != n && n === e && s(null);
    let i = null != n && n !== (e ?? !1),
        o = r.useCallback(() => !i || null == n || t(n), [i, n, t]);
    return { checked: n ?? e ?? !1, changed: i, setChecked: s, save: o };
}
