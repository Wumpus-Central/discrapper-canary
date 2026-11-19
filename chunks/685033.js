var e = n(582128),
    a = n(233470);
async function i(t, l) {
    try {
        let n = await (0, a.U1)(t, l, (0, a.gg)());
        return n.ok ? !0 === n.body.share_links_enabled : null;
    } catch {
        return null;
    }
}
n.d(
    l,
    {},
    {
        A: function (t) {
            let [l, n] = e.useState(null),
                [a, r] = e.useState(!1),
                s = e.useCallback((t) => {
                    (n(t), r(!1));
                }, []);
            e.useEffect(() => {
                let l = new AbortController();
                return (
                    !(async function () {
                        let n = await i(t, l.signal);
                        l.signal.aborted || (null == n ? r(!0) : s(n));
                    })(),
                    () => l.abort()
                );
            }, [t, s]);
            let o = e.useCallback(async () => {
                let l = await i(t);
                null == l ? r(!0) : s(l);
            }, [t, s]);
            return { shareLinksEnabled: l, loadFailed: a, setShareLinksEnabled: s, reload: o };
        },
    },
);
