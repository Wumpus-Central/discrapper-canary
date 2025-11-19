t.d(n, { Z: () => d }), t(388685);
var r = t(473749),
    a = t(345332),
    i = t(481060),
    l = t(572004),
    s = t(70956),
    o = t(578756),
    c = t(388032);
function d(e, n, t, d) {
    let u = r.useRef(null),
        [m, g] = r.useState(!1);
    return {
        handleCopyServerIp: r.useCallback(
            () => (
                null != u.current && clearTimeout(u.current),
                (0, o.Se)(e, n, t),
                (0, l.JG)(null != d ? d : ""),
                (0, i.showToast)((0, a.Y)(c.intl.string(c.t["+5kSoW"]), i.ToastType.SUCCESS)),
                g(!0),
                (u.current = setTimeout(() => {
                    g(!1);
                }, 2 * s.Z.Millis.SECOND)),
                () => {
                    null != u.current && clearTimeout(u.current);
                }
            ),
            [e, n, t, d],
        ),
        animateCopyIcon: m,
    };
}
