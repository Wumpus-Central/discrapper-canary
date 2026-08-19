a.d(e, { A: () => r });
var s = a(582128),
    i = a(868652);
function r(t, e) {
    let [a, r] = s.useState(!1),
        [l, n] = s.useState(void 0);
    return {
        isLoading: a,
        error: l,
        onToggle: s.useCallback(
            (a) => {
                if (null == e) return Promise.resolve();
                let s = a ? i.Qh : i.pz;
                return (
                    r(!0),
                    n(void 0),
                    s(t, e.skuId)
                        .catch((t) => {
                            throw (n(t.body?.message ?? void 0), t);
                        })
                        .finally(() => {
                            r(!1);
                        })
                );
            },
            [t, e],
        ),
    };
}
