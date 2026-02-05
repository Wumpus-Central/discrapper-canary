n.d(t, { A: () => s });
var r = n(627968),
    a = n(64700),
    o = n(43105),
    i = n(964486),
    l = n(49999);
function s(e) {
    let { dismissibleContentType: t, targetElementRef: n, visibleContent: s, markAsDismissed: c, props: _ } = e,
        [u, d] = a.useState(!1),
        b = a.useRef(null);
    (0, i.Ay)(
        () => (
            (b.current = setTimeout(() => d(!0), 250)),
            () => {
                clearTimeout(b.current), c(l.i.AUTO_DISMISS);
            }
        ),
    );
    let m = a.useCallback(
        (e) => {
            c("user:explicit" === e ? l.i.USER_DISMISS : l.i.AUTO_DISMISS);
        },
        [c],
    );
    return (0, r.jsx)(o.h, { targetElementRef: n, shouldShow: u && s === t, onRequestClose: m, ..._ });
}
