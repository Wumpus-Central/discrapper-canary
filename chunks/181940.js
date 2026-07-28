s.d(t, { A: () => a });
var r = s(582128),
    u = s(868652);
function a(e, t) {
    let [s, a] = r.useState(!1),
        [i, o] = r.useState(void 0);
    return {
        isLoading: s,
        error: i,
        onToggle: r.useCallback(
            (s) => {
                if (null == t) return Promise.resolve();
                let r = s ? u.Qh : u.pz;
                return (
                    a(!0),
                    o(void 0),
                    r(e, t.skuId)
                        .catch((e) => {
                            throw (o(e.body?.message ?? void 0), e);
                        })
                        .finally(() => {
                            a(!1);
                        })
                );
            },
            [e, t],
        ),
    };
}
