l.d(t, { A: () => o });
var n = l(582128),
    u = l(868652);
function o(e, t) {
    let [l, o] = n.useState(!1),
        [r, i] = n.useState(void 0);
    return {
        isLoading: l,
        error: r,
        onToggle: n.useCallback(
            (l) => {
                if (null == t) return Promise.resolve();
                let n = l ? u.Qh : u.pz;
                return (
                    o(!0),
                    i(void 0),
                    n(e, t.skuId)
                        .catch((e) => {
                            throw (i(e.body?.message ?? void 0), e);
                        })
                        .finally(() => {
                            o(!1);
                        })
                );
            },
            [e, t],
        ),
    };
}
