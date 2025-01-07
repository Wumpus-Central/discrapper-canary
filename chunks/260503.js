n.d(t, {
    Z: function () {
        return r;
    }
});
var a = n(192379),
    i = n(924826);
function r(e) {
    let { listRef: t, padding: n, channel: r, isEnabled: l } = e,
        s = a.useCallback(
            (e) => {
                let a = t.current,
                    i = document.querySelector(e);
                null != i &&
                    (null == a ||
                        a.scrollIntoViewNode({
                            node: i,
                            padding: n,
                            callback: () => {
                                var t;
                                null === (t = document.querySelector(e)) || void 0 === t || t.focus({ preventScroll: !0 });
                            }
                        }));
            },
            [n, t]
        ),
        o = a.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToTop({ callback: () => requestAnimationFrame(e) });
                }),
            [t]
        ),
        c = a.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToBottom({ callback: () => requestAnimationFrame(e) });
                }),
            [t]
        );
    return (0, i.ZP)({
        id: 'forum-channel-list-'.concat(r.id),
        isEnabled: l,
        scrollToStart: o,
        scrollToEnd: c,
        setFocus: s
    });
}
