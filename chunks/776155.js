n.d(t, { Z: () => l }), n(388685);
var r = n(473749),
    i = n(295141);
function l(e) {
    let [t, n] = r.useState(!0),
        [l, a] = r.useState(),
        [s, o] = r.useState(),
        c = r.useCallback(async (e) => {
            n(!0), a(void 0);
            try {
                let t = await i.HT(e);
                o(t);
            } catch (e) {
                a(e);
            } finally {
                n(!1);
            }
        }, []);
    return (
        r.useEffect(() => {
            c(e);
        }, [e, c]),
        {
            isLoading: t,
            error: l,
            highlightedCreatorDetails: s,
        }
    );
}
