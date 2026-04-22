n.d(t, { A: () => u });
var a = n(64700),
    s = n(857250),
    i = n(691540),
    l = n(97483),
    r = n(957565),
    d = n(927813),
    c = n(397400),
    o = n(985018);
function u(e, t, n, u) {
    let _ = a.useRef(null),
        [m, x] = a.useState(!1);
    return {
        handleCopyServerIp: a.useCallback(
            () => (
                null != _.current && clearTimeout(_.current),
                (0, c.ed)(e, t, n),
                (0, r.C)(u ?? ""),
                (0, i.P0)((0, s.o)(o.intl.string(o.t["+5kSoW"]), l.Ck.SUCCESS)),
                x(!0),
                (_.current = setTimeout(() => {
                    x(!1);
                }, 2 * d.A.Millis.SECOND)),
                () => {
                    null != _.current && clearTimeout(_.current);
                }
            ),
            [e, t, n, u],
        ),
        animateCopyIcon: m,
    };
}
