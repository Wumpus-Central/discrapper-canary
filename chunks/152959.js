var a = n(582128),
    i = n(359787),
    r = n(856383);
let l = !1,
    s = null,
    o = null,
    d = new Set();
function u() {
    return (s ??= (async () => {
        (await (0, i.Ts)(), (l = !0), d.forEach((e) => e()));
    })());
}
function c() {
    return l;
}
n.d(
    t,
    {},
    {
        YK: c,
        bf: function (e) {
            e && !l && a.use(u());
        },
        initNativeMarkdown: u,
        n9: function (e) {
            let t = a.useCallback(
                (t) => (
                    d.add(t),
                    e &&
                        (o ??= (async () => {
                            try {
                                await u();
                            } catch (e) {
                                r.A.captureException(e);
                            }
                        })()),
                    () => {
                        d.delete(t);
                    }
                ),
                [e],
            );
            return a.useSyncExternalStore(t, c);
        },
    },
);
