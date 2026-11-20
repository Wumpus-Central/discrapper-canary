var e = n(582128),
    a = n(233470);
async function i(l, t) {
    try {
        let n = await (0, a.U1)(l, t, (0, a.gg)());
        return n.ok ? !0 === n.body.share_links_enabled : null;
    } catch {
        return null;
    }
}
n.d(
    t,
    {},
    {
        A: function (l) {
            let [t, n] = e.useState(null),
                [a, r] = e.useState(!1),
                s = e.useCallback((l) => {
                    (n(l), r(!1));
                }, []);
            e.useEffect(() => {
                let t = new AbortController();
                return (
                    !(async function () {
                        let n = await i(l, t.signal);
                        t.signal.aborted || (null == n ? r(!0) : s(n));
                    })(),
                    () => t.abort()
                );
            }, [l, s]);
            let o = e.useCallback(async () => {
                let t = await i(l);
                null == t ? r(!0) : s(t);
            }, [l, s]);
            return { shareLinksEnabled: t, loadFailed: a, setShareLinksEnabled: s, reload: o };
        },
    },
);
