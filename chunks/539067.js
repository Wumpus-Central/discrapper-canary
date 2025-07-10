(r.d(t, { y: () => a }), r(388685));
var n = r(73800),
    l = r(442837),
    i = r(19780),
    u = r(630759),
    s = r(760373);
function a(e) {
    let { userId: t } = e,
        r = (0, l.e7)([i.Z], () => i.Z.getSecureFramesRosterMapEntry(t)),
        [a, o] = n.useState(!0),
        [c, d] = n.useState(!1),
        [f, E] = n.useState(!1),
        y = n.useCallback(async (e, t) => {
            o(!0);
            try {
                let r = s.GB,
                    n = await (0, u.uX)(r),
                    l = await (0, u.J6)(e, t, r);
                (d(n), E(l));
            } catch (e) {
                (d(!1), E(!1));
            } finally {
                o(!1);
            }
        }, []);
    return (
        n.useEffect(() => {
            null == r ? (d(!1), E(!1), o(!1)) : y(t, r);
        }, [r, y, t]),
        {
            loading: a,
            isCurrentUserKeyPersistent: c,
            isOtherUserKeyPersistent: f
        }
    );
}
