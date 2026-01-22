n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(64700),
    a = n(857250),
    l = n(397927),
    i = n(957565),
    s = n(927813),
    c = n(397400),
    o = n(985018);

function d(e, t, n, d) {
    let u = r.useRef(null),
        [f, b] = r.useState(!1);
    return {
        handleCopyServerIp: r.useCallback(
            () => (
                null != u.current && clearTimeout(u.current),
                (0, c.ed)(e, t, n),
                (0, i.C)(null != d ? d : ""),
                (0, l.showToast)((0, a.o)(o.intl.string(o.t["+5kSoW"]), l.ToastType.SUCCESS)),
                b(!0),
                (u.current = setTimeout(() => {
                    b(!1);
                }, 2 * s.A.Millis.SECOND)),
                () => {
                    null != u.current && clearTimeout(u.current);
                }
            ),
            [e, t, n, d],
        ),
        animateCopyIcon: f,
    };
}
