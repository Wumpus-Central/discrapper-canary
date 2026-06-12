s.d(t, { A: () => u });
var n = s(64700),
    a = s(857250),
    l = s(691540),
    i = s(97483),
    r = s(957565),
    d = s(927813),
    c = s(397400),
    o = s(375708);
function u(e, t, s, u) {
    let m = n.useRef(null),
        [x, f] = n.useState(!1);
    return {
        handleCopyServerIp: n.useCallback(
            () => (
                null != m.current && clearTimeout(m.current),
                (0, c.ed)(e, t, s),
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
            [e, t, s, u],
        ),
        animateCopyIcon: x,
    };
}
