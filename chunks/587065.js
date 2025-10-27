t.d(n, { Z: () => c }), t(388685);
var r = t(647438),
    a = t(345332),
    i = t(481060),
    l = t(572004),
    s = t(70956),
    o = t(388032);
function c(e) {
    let n = r.useRef(null),
        [t, c] = r.useState(!1);
    return {
        handleCopyServerIp: r.useCallback(
            () => (
                null != n.current && clearTimeout(n.current),
                (0, l.JG)(null != e ? e : ""),
                (0, i.showToast)((0, a.Y)(o.intl.string(o.t["+5kSoW"]), i.ToastType.SUCCESS)),
                c(!0),
                (n.current = setTimeout(() => {
                    c(!1);
                }, 2 * s.Z.Millis.SECOND)),
                () => {
                    null != n.current && clearTimeout(n.current);
                }
            ),
            [e],
        ),
        animateCopyIcon: t,
    };
}
