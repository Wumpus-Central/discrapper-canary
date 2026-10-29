t.d(n, { b: () => c, initNativeMarkdown: () => s, n: () => f });
var a = t(582128),
    i = t(917310),
    l = t(38405);
let r = !1,
    d = null,
    u = null,
    o = new Set();
function s() {
    return (d ??= (async () => {
        (await (0, i.Ts)(), (r = !0), o.forEach((e) => e()));
    })());
}
function c(e) {
    e && !r && a.use(s());
}
function f(e) {
    let n = a.useCallback(
        (n) => (
            o.add(n),
            e &&
                (u ??= (async () => {
                    try {
                        await s();
                    } catch (e) {
                        l.A.captureException(e);
                    }
                })()),
            () => {
                o.delete(n);
            }
        ),
        [e],
    );
    return a.useSyncExternalStore(n, () => r);
}
