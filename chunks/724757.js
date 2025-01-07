n.d(e, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    r = n(924826),
    l = n(442837),
    o = n(607070);
function u(t, e, n) {
    let u = (0, l.e7)([o.Z], () => o.Z.keyboardModeEnabled),
        a = i.useCallback(
            (t) => {
                let n = document.querySelector(t),
                    i = e.current;
                null != n &&
                    null != i &&
                    (n.focus(),
                    i.scrollIntoViewNode({
                        node: n,
                        padding: 80
                    }));
            },
            [e]
        ),
        s = i.useCallback(
            () =>
                new Promise((t) => {
                    let n = e.current;
                    if (null == n) return t();
                    n.scrollTo({
                        to: 0,
                        callback: () => requestAnimationFrame(() => t())
                    });
                }),
            [e]
        ),
        c = i.useCallback(
            () =>
                new Promise((t) => {
                    let n = e.current;
                    if (null == n) return t();
                    n.scrollTo({
                        to: Number.MAX_SAFE_INTEGER,
                        callback: () => requestAnimationFrame(() => t())
                    });
                }),
            [e]
        );
    return (0, r.ZP)({
        id: t,
        isEnabled: u,
        setFocus: a,
        scrollToStart: s,
        scrollToEnd: c,
        orientation: null == n ? void 0 : n.orientation
    });
}
