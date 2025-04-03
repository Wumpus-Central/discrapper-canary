n.d(t, { Z: () => s }), n(47120);
var r = n(192379),
    i = n(295141);
function s(e) {
    let [t, n] = r.useState(!0),
        [s, a] = r.useState(),
        [l, o] = r.useState(),
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
            error: s,
            highlightedCreatorDetails: l
        }
    );
}
