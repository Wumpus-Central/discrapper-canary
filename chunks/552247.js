function n(e, t, l) {
    let n = [...l].sort().join(",");
    return `${e}:${t}:${n}`;
}
l.d(t, { _k: () => r, nA: () => s, yb: () => a });
let i = (0, l(353640).v)((e) => ({
    entries: {},
    setPreview(t, l, i, s, a) {
        let r = n(t, l, i);
        e((e) => {
            let t = { ...e.entries },
                l = {},
                n = Date.now();
            for (let [e, i] of Object.entries(t)) n - i.cachedAt < 36e5 && (l[e] = i);
            let i = l[r];
            return (
                (null == i || (i.count <= s && !i.isFinished)) &&
                    (l[r] = { count: s, isFinished: a, cachedAt: Date.now() }),
                { entries: l }
            );
        });
    },
    clear() {
        e({ entries: {} });
    },
}));
function s(e, t, l, n, s) {
    i.getState().setPreview(e, t, l, n, s);
}
function a() {
    i.getState().clear();
}
function r(e, t, l) {
    let s = i((i) => {
        let s = n(e, t, l),
            a = i.entries[s];
        return null != a && Date.now() - a.cachedAt < 36e5 ? a : null;
    });
    return { count: s?.count, isLoading: s?.isFinished === !1 };
}
