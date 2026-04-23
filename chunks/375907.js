"use strict";
n.d(t, { A: () => s });
var l = n(64700),
    a = n(884362);
function s(e) {
    let { listRef: t, padding: n, channel: s, isEnabled: i } = e,
        r = l.useCallback(
            (e) => {
                let l = t.current,
                    a = document.querySelector(e);
                null != a &&
                    l?.scrollIntoViewNode({
                        node: a,
                        padding: n,
                        callback: () => {
                            document.querySelector(e)?.focus({ preventScroll: !0 });
                        },
                    });
            },
            [n, t],
        ),
        o = l.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    n?.scrollToTop({ callback: () => requestAnimationFrame(e) });
                }),
            [t],
        ),
        d = l.useCallback(
            () =>
                new Promise((e) => {
                    let n = t.current;
                    n?.scrollToBottom({ callback: () => requestAnimationFrame(e) });
                }),
            [t],
        );
    return (0, a.Ay)({ id: `forum-channel-list-${s.id}`, isEnabled: i, scrollToStart: o, scrollToEnd: d, setFocus: r });
}
