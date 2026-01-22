r.d(t, { q: () => i }), r(896048);
var n = r(64700),
    l = r(311907),
    u = r(383501),
    a = r(814278);
function i(e) {
    let { userId: t } = e,
        r = (0, l.bG)([u.A], () => u.A.getSecureFramesRosterMapEntry(t)),
        [i, c] = n.useState(!0),
        [s, o] = n.useState(!1),
        [f, d] = n.useState(!1),
        b = n.useCallback(async (e, t) => {
            c(!0);
            try {
                let r = await (0, a.A5)(1),
                    n = await (0, a.iO)(e, t, 1);
                o(r), d(n);
            } catch (e) {
                o(!1), d(!1);
            } finally {
                c(!1);
            }
        }, []);
    return (
        n.useEffect(() => {
            null == r ? (o(!1), d(!1), c(!1)) : b(t, r);
        }, [r, b, t]),
        {
            loading: i,
            isCurrentUserKeyPersistent: s,
            isOtherUserKeyPersistent: f,
        }
    );
}
r(603266);
