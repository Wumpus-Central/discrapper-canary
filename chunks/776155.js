n.d(t, { Z: () => l }), n(388685);
var r = n(192379),
    i = n(295141);
function l(e) {
    let [t, n] = r.useState(!0),
        [l, s] = r.useState(),
        [a, o] = r.useState(),
        c = r.useCallback(async (e) => {
            n(!0), s(void 0);
            try {
                let t = await i.HT(e);
                o(t);
            } catch (e) {
                s(e);
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
            highlightedCreatorDetails: a
        }
    );
}
