n.d(t, { Z: () => s }), n(388685);
var r = n(192379),
    i = n(295141);
function s(e) {
    let [t, n] = r.useState(!0),
        [s, l] = r.useState(),
        [a, o] = r.useState(),
        c = r.useCallback(async (e) => {
            n(!0), l(void 0);
            try {
                let t = await i.HT(e);
                o(t);
            } catch (e) {
                l(e);
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
            error: s,
            highlightedCreatorDetails: a
        }
    );
}
