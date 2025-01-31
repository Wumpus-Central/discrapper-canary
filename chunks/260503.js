n.d(t, { Z: () => r });
var i = n(192379),
    l = n(924826);
function r(e) {
    let { listRef: t, padding: n, channel: r, isEnabled: a } = e,
        s = i.useCallback(
            (e) => {
                let i = t.current,
                    l = document.querySelector(e);
                null != l &&
                    (null == i ||
                        i.scrollIntoViewNode({
                            node: l,
                            padding: n,
                            callback: () => {
                                var t;
                                null === (t = document.querySelector(e)) || void 0 === t || t.focus({ preventScroll: !0 });
                            }
                        }));
            },
            [n, t]
        ),
        o = i.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToTop({ callback: () => requestAnimationFrame(e) });
                }),
            [t]
        ),
        c = i.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    null == n || n.scrollToBottom({ callback: () => requestAnimationFrame(e) });
                }),
            [t]
        );
    return (0, l.ZP)({
        id: 'forum-channel-list-'.concat(r.id),
        isEnabled: a,
        scrollToStart: o,
        scrollToEnd: c,
        setFocus: s
    });
}
