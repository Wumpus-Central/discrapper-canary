s.d(t, { A: () => c });
var a = s(64700),
    r = s(868652);
function c(e, t) {
    let [s, c] = a.useState(!1),
        [n, u] = a.useState(void 0);
    return {
        isLoading: s,
        error: n,
        onToggle: a.useCallback(
            (s) => {
                if (null == t) return Promise.resolve();
                let a = s ? r.Qh : r.pz;
                return (
                    c(!0),
                    u(void 0),
                    a(e, t.skuId)
                        .catch((e) => {
                            throw (u(e.body?.message ?? void 0), e);
                        })
                        .finally(() => {
                            c(!1);
                        })
                );
            },
            [e, t],
        ),
    };
}
