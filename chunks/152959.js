var a = t(582128),
    i = t(359787),
    l = t(856383);
let r = !1,
    o = null,
    d = null,
    s = new Set();
function u() {
    return (o ??= (async () => {
        (await (0, i.Ts)(), (r = !0), s.forEach((e) => e()));
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
            e && !r && a.use(u());
        },
        initNativeMarkdown: u,
        n9: function (e) {
            let n = a.useCallback(
                (n) => (
                    s.add(n),
                    e &&
                        (d ??= (async () => {
                            try {
                                await u();
                            } catch (e) {
                                l.A.captureException(e);
                            }
                        })()),
                    () => {
                        s.delete(n);
                    }
                ),
                [e],
            );
            return a.useSyncExternalStore(n, c);
        },
    },
);
