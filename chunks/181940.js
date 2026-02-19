"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    s = n(942975);
function l(e, t) {
    let [n, l] = i.useState(!1),
        [r, a] = i.useState(void 0);
    return {
        isLoading: n,
        error: r,
        onToggle: i.useCallback(
            (n) => {
                if (null == t) return Promise.resolve();
                let i = n ? s.Qh : s.pz;
                return (
                    l(!0),
                    a(void 0),
                    i(e, t.skuId)
                        .catch((e) => {
                            throw (a(e.body?.message ?? void 0), e);
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
