n.d(t, { A: () => c });
var a = n(64700),
    i = n(857250),
    s = n(397927),
    r = n(957565),
    l = n(927813),
    o = n(397400),
    d = n(985018);
function c(e, t, n, c) {
    let u = a.useRef(null),
        [m, _] = a.useState(!1);
    return {
        handleCopyServerIp: a.useCallback(
            () => (
                null != u.current && clearTimeout(u.current),
                (0, o.ed)(e, t, n),
                (0, r.C)(c ?? ""),
                (0, s.showToast)((0, i.o)(d.intl.string(d.t["+5kSoW"]), s.ToastType.SUCCESS)),
                _(!0),
                (u.current = setTimeout(() => {
                    _(!1);
                }, 2 * l.A.Millis.SECOND)),
                () => {
                    null != u.current && clearTimeout(u.current);
                }
            ),
            [e, t, n, c],
        ),
        animateCopyIcon: m,
    };
}
