n.d(t, { A: () => c });
var i = n(582128),
    l = n(857250),
    r = n(691540),
    s = n(97483),
    a = n(957565),
    o = n(927813),
    d = n(907878),
    u = n(375708);
function c(e, t, n, c) {
    let E = i.useRef(null),
        [g, h] = i.useState(!1);
    return {
        handleCopyServerIp: i.useCallback(
            () => (
                null != E.current && clearTimeout(E.current),
                (0, d.ed)(e, t, n),
                (0, a.C)(c ?? ""),
                (0, r.P0)((0, l.o)(u.intl.string(u.t["+5kSoW"]), s.Ck.SUCCESS)),
                h(!0),
                (E.current = setTimeout(() => {
                    h(!1);
                }, 2 * o.A.Millis.SECOND)),
                () => {
                    null != E.current && clearTimeout(E.current);
                }
            ),
            [e, t, n, c],
        ),
        animateCopyIcon: g,
    };
}
