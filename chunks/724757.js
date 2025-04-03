n.d(t, { Z: () => l });
var i = n(192379),
    r = n(924826),
    a = n(442837),
    o = n(607070);
function l(e, t, n) {
    let l = (0, a.e7)([o.Z], () => o.Z.keyboardModeEnabled),
        s = i.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    i = t.current;
                null != n &&
                    null != i &&
                    (n.focus(),
                    i.scrollIntoViewNode({
                        node: n,
                        padding: 80
                    }));
            },
            [t]
        ),
        c = i.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({
                        to: 0,
                        callback: () => requestAnimationFrame(() => e())
                    });
                }),
            [t]
        ),
        d = i.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({
                        to: Number.MAX_SAFE_INTEGER,
                        callback: () => requestAnimationFrame(() => e())
                    });
                }),
            [t]
        );
    return (0, r.ZP)({
        id: e,
        isEnabled: l,
        setFocus: s,
        scrollToStart: c,
        scrollToEnd: d,
        orientation: null == n ? void 0 : n.orientation
    });
}
