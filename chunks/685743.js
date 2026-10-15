n.d(t, { A: () => u });
var l = n(582128),
    i = n(858899),
    r = n(957565),
    s = n(927813),
    a = n(907878),
    o = n(105292);
function u(e, t, n, u) {
    let d = l.useRef(null),
        [c, _] = l.useState(!1);
    return {
        handleCopyServerIp: l.useCallback(
            () => (
                null != d.current && clearTimeout(d.current),
                (0, a.ed)(e, t, n),
                (0, r.C)(u ?? ""),
                (0, i.P0)({ text: o.intl.string(o.t["+5kSoW"]), variant: "success" }),
                _(!0),
                (d.current = setTimeout(() => {
                    _(!1);
                }, 2 * s.A.Millis.SECOND)),
                () => {
                    null != d.current && clearTimeout(d.current);
                }
            ),
            [e, t, n, u],
        ),
        animateCopyIcon: c,
    };
}
