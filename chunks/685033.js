var n = t(582128),
    a = t(233470);
async function r(e, l) {
    try {
        let t = await (0, a.U1)(e, l, (0, a.gg)());
        return t.ok ? !0 === t.body.share_links_enabled : null;
    } catch {
        return null;
    }
}
t.d(
    l,
    {},
    {
        A: function (e) {
            let [l, t] = n.useState(null),
                [a, i] = n.useState(!1),
                s = n.useCallback((e) => {
                    (t(e), i(!1));
                }, []);
            n.useEffect(() => {
                let l = new AbortController();
                return (
                    !(async function () {
                        let t = await r(e, l.signal);
                        l.signal.aborted || (null == t ? i(!0) : s(t));
                    })(),
                    () => l.abort()
                );
            }, [e, s]);
            let u = n.useCallback(async () => {
                let l = await r(e);
                null == l ? i(!0) : s(l);
            }, [e, s]);
            return { shareLinksEnabled: l, loadFailed: a, setShareLinksEnabled: s, reload: u };
        },
    },
);
