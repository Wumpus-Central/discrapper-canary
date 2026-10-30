t.d(n, { YK: () => c, bf: () => f, initNativeMarkdown: () => s, n9: () => b });
var a = t(582128),
    i = t(917310),
    r = t(38405);
let l = !1,
    u = null,
    d = null,
    o = new Set();
function s() {
    return (u ??= (async () => {
        (await (0, i.Ts)(), (l = !0), o.forEach((e) => e()));
    })());
}
function c() {
    return l;
}
function f(e) {
    e && !l && a.use(s());
}
function b(e) {
    let n = a.useCallback(
        (n) => (
            o.add(n),
            e &&
                (d ??= (async () => {
                    try {
                        await s();
                    } catch (e) {
                        r.A.captureException(e);
                    }
                })()),
            () => {
                o.delete(n);
            }
        ),
        [e],
    );
    return a.useSyncExternalStore(n, c);
}
