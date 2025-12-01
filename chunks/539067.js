r.d(t, { y: () => o }), r(388685);
var n = r(473749),
    l = r(442837),
    u = r(19780),
    i = r(630759),
    c = r(760373);
function o(e) {
    let { userId: t } = e,
        r = (0, l.e7)([u.Z], () => u.Z.getSecureFramesRosterMapEntry(t)),
        [o, s] = n.useState(!0),
        [a, f] = n.useState(!1),
        [d, E] = n.useState(!1),
        g = n.useCallback(async (e, t) => {
            s(!0);
            try {
                let r = c.GB,
                    n = await (0, i.uX)(r),
                    l = await (0, i.J6)(e, t, r);
                f(n), E(l);
            } catch (e) {
                f(!1), E(!1);
            } finally {
                s(!1);
            }
        }, []);
    return (
        n.useEffect(() => {
            null == r ? (f(!1), E(!1), s(!1)) : g(t, r);
        }, [r, g, t]),
        {
            loading: o,
            isCurrentUserKeyPersistent: a,
            isOtherUserKeyPersistent: d,
        }
    );
}
