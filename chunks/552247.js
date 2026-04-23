function n(e, t, l) {
    let n = [...l].sort().join(",");
    return `${e}:${t}:${n}`;
}
l.d(t, { _k: () => C, nA: () => a, yb: () => s });
let i = (0, l(353640).v)((e) => ({
    entries: {},
    setPreview(t, l, i, a, s) {
        let C = n(t, l, i);
        e((e) => {
            let t = { ...e.entries },
                l = {},
                n = Date.now();
            for (let [e, i] of Object.entries(t)) n - i.cachedAt < 36e5 && (l[e] = i);
            let i = l[C];
            return (
                (null == i || (i.count <= a && !i.isFinished)) &&
                    (l[C] = { count: a, isFinished: s, cachedAt: Date.now() }),
                { entries: l }
            );
        });
    },
    clear() {
        e({ entries: {} });
    },
}));
function a(e, t, l, n, a) {
    i.getState().setPreview(e, t, l, n, a);
}
function s() {
    i.getState().clear();
}
function C(e, t, l) {
    let a = i((i) => {
        let a = n(e, t, l),
            s = i.entries[a];
        return null != s && Date.now() - s.cachedAt < 36e5 ? s : null;
    });
    return { count: a?.count, isLoading: a?.isFinished === !1 };
}
