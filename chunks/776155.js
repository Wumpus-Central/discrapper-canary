n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(192379),
    r = n(295141);
function l(e) {
    let [t, n] = i.useState(!0),
        [l, s] = i.useState(),
        [a, o] = i.useState(),
        c = i.useCallback(async (e) => {
            n(!0), s(void 0);
            try {
                let t = await r.HT(e);
                o(t);
            } catch (e) {
                s(e);
            } finally {
                n(!1);
            }
        }, []);
    return (
        i.useEffect(() => {
            c(e);
        }, [e, c]),
        {
            isLoading: t,
            error: l,
            highlightedCreatorDetails: a
        }
    );
}
