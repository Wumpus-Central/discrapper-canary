n.d(t, { Z: () => s });
var i = n(73800),
    r = n(924826),
    l = n(442837),
    o = n(607070);
function s(e, t, n) {
    let s = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
        a = i.useCallback(
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
        u = i.useCallback(
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
        isEnabled: s,
        setFocus: a,
        scrollToStart: c,
        scrollToEnd: u,
        orientation: null == n ? void 0 : n.orientation
    });
}
