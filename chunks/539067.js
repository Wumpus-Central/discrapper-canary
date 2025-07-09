(n.d(t, { y: () => s }), n(388685));
var r = n(73800),
    l = n(442837),
    i = n(19780),
    u = n(630759),
    a = n(760373);
function s(e) {
    let { userId: t } = e,
        n = (0, l.e7)([i.Z], () => i.Z.getSecureFramesRosterMapEntry(t)),
        [s, c] = r.useState(!0),
        [o, d] = r.useState(!1),
        [f, E] = r.useState(!1),
        g = r.useCallback(async (e, t) => {
            c(!0);
            try {
                let n = a.GB,
                    r = await (0, u.uX)(n),
                    l = await (0, u.J6)(e, t, n);
                (d(r), E(l));
            } catch (e) {
                (d(!1), E(!1));
            } finally {
                c(!1);
            }
        }, []);
    return (
        r.useEffect(() => {
            null == n ? (d(!1), E(!1), c(!1)) : g(t, n);
        }, [n, g, t]),
        {
            loading: s,
            isCurrentUserKeyPersistent: o,
            isOtherUserKeyPersistent: f
        }
    );
}
