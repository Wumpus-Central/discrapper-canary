n.d(t, { A: () => i }), n(896048), n(492834);
var r = n(64700),
    l = n(942975);
function i(e, t) {
    let [n, i] = r.useState(!1),
        [a, s] = r.useState(void 0);
    return {
        isLoading: n,
        error: a,
        onToggle: r.useCallback(
            (n) => {
                if (null == t) return Promise.resolve();
                let r = n ? l.Qh : l.pz;
                return (
                    i(!0),
                    s(void 0),
                    r(e, t.skuId)
                        .catch((e) => {
                            var t;
                            throw (s(null != (t = e.body.message) ? t : void 0), e);
                        })
                        .finally(() => {
                            i(!1);
                        })
                );
            },
            [e, t],
        ),
    };
}
