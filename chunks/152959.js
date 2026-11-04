var t = a(582128),
    l = a(914710),
    i = a(856383);
let r = !1,
    d = null,
    o = null,
    u = new Set();
function s() {
    return (d ??= (async () => {
        (await (0, l.Ts)(), (r = !0), u.forEach((e) => e()));
    })());
}
function c() {
    return r;
}
a.d(
    n,
    {},
    {
        YK: c,
        bf: function (e) {
            e && !r && t.use(s());
        },
        initNativeMarkdown: s,
        n9: function (e) {
            let n = t.useCallback(
                (n) => (
                    u.add(n),
                    e &&
                        (o ??= (async () => {
                            try {
                                await s();
                            } catch (e) {
                                i.A.captureException(e);
                            }
                        })()),
                    () => {
                        u.delete(n);
                    }
                ),
                [e],
            );
            return t.useSyncExternalStore(n, c);
        },
    },
);
