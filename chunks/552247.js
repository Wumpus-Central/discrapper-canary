function n(e, t, l) {
    let n = [...l].sort().join(",");
    return `${e}:${t}:${n}`;
}
l.d(t, { _k: () => a, nA: () => s });
let i = (0, l(353640).v)((e) => ({
    entries: {},
    setPreview(t, l, i, s) {
        let a = n(t, l, i);
        e((e) => {
            let t = { ...e.entries, [a]: { count: s, cachedAt: Date.now() } },
                l = Date.now(),
                n = {};
            for (let [e, i] of Object.entries(t)) l - i.cachedAt < 864e5 && (n[e] = i);
            return { entries: n };
        });
    },
    clear() {
        e({ entries: {} });
    },
}));
function s(e, t, l, n) {
    i.getState().setPreview(e, t, l, n);
}
function a(e, t, l) {
    return i((i) => {
        let s = n(e, t, l),
            a = i.entries[s];
        return null != a && Date.now() - a.cachedAt < 864e5 ? a.count : null;
    });
}
