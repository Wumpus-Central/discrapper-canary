var a = t(582128),
    i = t(714414),
    l = t(856383);
let r = !1,
    o = null,
    u = null,
    d = new Set();
function s() {
    return (o ??= (async () => {
        (await (0, i.Ts)(), (r = !0), d.forEach((e) => e()));
    })());
}
function c() {
    return r;
}
t.d(
    n,
    {},
    {
        YK: c,
        bf: function (e) {
            e && !r && a.use(s());
        },
        initNativeMarkdown: s,
        n9: function (e) {
            let n = a.useCallback(
                (n) => (
                    d.add(n),
                    e &&
                        (u ??= (async () => {
                            try {
                                await s();
                            } catch (e) {
                                l.A.captureException(e);
                            }
                        })()),
                    () => {
                        d.delete(n);
                    }
                ),
                [e],
            );
            return a.useSyncExternalStore(n, c);
        },
    },
);
