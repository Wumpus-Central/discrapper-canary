r.d(t, { q: () => i });
var n = r(64700),
    l = r(311907),
    u = r(383501),
    s = r(814278);
function i(e) {
    let { userId: t } = e,
        r = (0, l.bG)([u.A], () => u.A.getSecureFramesRosterMapEntry(t)),
        [i, a] = n.useState(!0),
        [c, o] = n.useState(!1),
        [d, E] = n.useState(!1),
        f = n.useCallback(async (e, t) => {
            a(!0);
            try {
                let r = await (0, s.A5)(1),
                    n = await (0, s.iO)(e, t, 1);
                o(r), E(n);
            } catch (e) {
                o(!1), E(!1);
            } finally {
                a(!1);
            }
        }, []);
    return (
        n.useEffect(() => {
            null == r ? (o(!1), E(!1), a(!1)) : f(t, r);
        }, [r, f, t]),
        { loading: i, isCurrentUserKeyPersistent: c, isOtherUserKeyPersistent: d }
    );
}
r(603266);
