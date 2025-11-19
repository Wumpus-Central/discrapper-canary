n.d(t, { Z: () => a });
var r = n(473749),
    i = n(924826);
function a(e) {
    let { listRef: t, padding: n, channel: a, isEnabled: l } = e,
        s = r.useCallback(
            (e) => {
                let r = t.current,
                    i = document.querySelector(e);
                null != i &&
                    (null == r ||
                        r.scrollIntoViewNode({
                            node: i,
                            padding: n,
                            callback: () => {
                                var t;
                                null == (t = document.querySelector(e)) || t.focus({ preventScroll: !0 });
                            },
                        }));
            },
            [n, t],
        ),
        o = r.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToTop({ callback: () => requestAnimationFrame(e) });
                }),
            [t],
        ),
        c = r.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToBottom({ callback: () => requestAnimationFrame(e) });
                }),
            [t],
        );
    return (0, i.ZP)({
        id: "forum-channel-list-".concat(a.id),
        isEnabled: l,
        scrollToStart: o,
        scrollToEnd: c,
        setFocus: s,
    });
}
