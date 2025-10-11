n.d(t, { s: () => i });
var r = n(647438),
    l = n(27123);
let i = (e) =>
    r.useCallback(
        (t, n) =>
            t.filter(
                (t) =>
                    null !=
                        (0, l.T)({
                            product: t,
                            isPremiumUser: n,
                        }) && !(null == e ? void 0 : e.includes(t.categorySkuId)),
            ),
        [e],
    );
