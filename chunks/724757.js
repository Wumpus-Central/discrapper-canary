n.d(t, { Z: () => s });
var r = n(73800),
    i = n(924826),
    o = n(442837),
    a = n(607070);
function s(e, t, n) {
    let s = (0, o.e7)([a.Z], () => a.Z.keyboardModeEnabled),
        l = r.useCallback(
            (e) => {
                let n = document.querySelector(e),
                    r = t.current;
                null != n &&
                    null != r &&
                    (n.focus(),
                    r.scrollIntoViewNode({
                        node: n,
                        padding: 80,
                    }));
            },
            [t],
        ),
        c = r.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({
                        to: 0,
                        callback: () => requestAnimationFrame(() => e()),
                    });
                }),
            [t],
        ),
        u = r.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    if (null == n) return e();
                    n.scrollTo({
                        to: Number.MAX_SAFE_INTEGER,
                        callback: () => requestAnimationFrame(() => e()),
                    });
                }),
            [t],
        );
    return (0, i.ZP)({
        id: e,
        isEnabled: s,
        setFocus: l,
        scrollToStart: c,
        scrollToEnd: u,
        orientation: null == n ? void 0 : n.orientation,
    });
}
