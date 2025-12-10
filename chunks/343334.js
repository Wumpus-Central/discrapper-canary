n.d(t, { Z: () => l }), n(388685), n(457542);
var r = n(473749),
    i = n(713081);
function l(e, t) {
    let [n, l] = r.useState(!1),
        [o, a] = r.useState(void 0);
    return {
        isLoading: n,
        error: o,
        onToggle: r.useCallback(
            (n) => {
                if (null == t) return Promise.resolve();
                let r = n ? i.H6 : i.Th;
                return (
                    l(!0),
                    a(void 0),
                    r(e, t.skuId)
                        .catch((e) => {
                            var t;
                            throw (a(null != (t = e.body.message) ? t : void 0), e);
                        })
                        .finally(() => {
                            l(!1);
                        })
                );
            },
            [e, t],
        ),
    };
}
