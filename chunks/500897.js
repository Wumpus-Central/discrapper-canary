n.d(t, { A: () => u });
var s = n(582128),
    a = n(857250),
    l = n(691540),
    i = n(97483),
    r = n(957565),
    d = n(927813),
    c = n(397400),
    o = n(375708);
function u(e, t, n, u) {
    let m = s.useRef(null),
        [x, f] = s.useState(!1);
    return {
        handleCopyServerIp: s.useCallback(
            () => (
                null != m.current && clearTimeout(m.current),
                (0, c.ed)(e, t, n),
                (0, r.C)(u ?? ""),
                (0, l.P0)((0, a.o)(o.intl.string(o.t["+5kSoW"]), i.Ck.SUCCESS)),
                f(!0),
                (m.current = setTimeout(() => {
                    f(!1);
                }, 2 * d.A.Millis.SECOND)),
                () => {
                    null != m.current && clearTimeout(m.current);
                }
            ),
            [e, t, n, u],
        ),
        animateCopyIcon: x,
    };
}
