n.d(t, { A: () => s });
var i = n(64700),
    l = n(942975);
function s(e, t) {
    let [n, s] = i.useState(!1),
        [a, r] = i.useState(void 0);
    return {
        isLoading: n,
        error: a,
        onToggle: i.useCallback(
            (n) => {
                if (null == t) return Promise.resolve();
                let i = n ? l.Qh : l.pz;
                return (
                    s(!0),
                    r(void 0),
                    i(e, t.skuId)
                        .catch((e) => {
                            throw (r(e.body?.message ?? void 0), e);
                        })
                        .finally(() => {
                            s(!1);
                        })
                );
            },
            [e, t],
        ),
    };
}
