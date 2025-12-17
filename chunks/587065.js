t.d(n, { Z: () => d }), t(388685);
var a = t(473749),
    r = t(345332),
    i = t(481060),
    l = t(572004),
    s = t(70956),
    o = t(578756),
    c = t(388032);
function d(e, n, t, d) {
    let u = a.useRef(null),
        [m, g] = a.useState(!1);
    return {
        handleCopyServerIp: a.useCallback(
            () => (
                null != u.current && clearTimeout(u.current),
                (0, o.Se)(e, n, t),
                (0, l.JG)(null != d ? d : ""),
                (0, i.showToast)((0, r.Y)(c.intl.string(c.t["+5kSoW"]), i.ToastType.SUCCESS)),
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
