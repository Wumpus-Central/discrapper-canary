n.d(t, { Z: () => l });
var r = n(192379),
    a = n(924826),
    i = n(442837),
    o = n(607070);
function l(e, t, n) {
    let l = (0, i.e7)([o.Z], () => o.Z.keyboardModeEnabled),
        c = r.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    r = t.current;
                null != n &&
                    null != r &&
                    (n.focus(),
                    r.scrollIntoViewNode({
                        node: n,
                        padding: 80
                    }));
            },
            [t]
        ),
        s = r.useCallback(
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
        u = r.useCallback(
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
    return (0, a.ZP)({
        id: e,
        isEnabled: l,
        setFocus: c,
        scrollToStart: s,
        scrollToEnd: u,
        orientation: null == n ? void 0 : n.orientation
    });
}
