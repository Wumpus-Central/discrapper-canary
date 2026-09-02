n.d(t, { A: () => c });
var l = n(582128),
    i = n(857250),
    r = n(691540),
    s = n(97483),
    a = n(957565),
    o = n(927813),
    u = n(907878),
    d = n(375708);
function c(e, t, n, c) {
    let _ = l.useRef(null),
        [E, S] = l.useState(!1);
    return {
        handleCopyServerIp: l.useCallback(
            () => (
                null != _.current && clearTimeout(_.current),
                (0, u.ed)(e, t, n),
                (0, a.C)(c ?? ""),
                (0, r.P0)((0, i.o)(d.intl.string(d.t["+5kSoW"]), s.Ck.SUCCESS)),
                S(!0),
                (_.current = setTimeout(() => {
                    S(!1);
                }, 2 * o.A.Millis.SECOND)),
                () => {
                    null != _.current && clearTimeout(_.current);
                }
            ),
            [e, t, n, c],
        ),
        animateCopyIcon: E,
    };
}
