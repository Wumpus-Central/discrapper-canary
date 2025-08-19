r.d(t, { y: () => s }), r(388685);
var n = r(647438),
    l = r(442837),
    u = r(19780),
    i = r(630759),
    a = r(760373);
function s(e) {
    let { userId: t } = e,
        r = (0, l.e7)([u.Z], () => u.Z.getSecureFramesRosterMapEntry(t)),
        [s, c] = n.useState(!0),
        [o, f] = n.useState(!1),
        [d, E] = n.useState(!1),
        y = n.useCallback(async (e, t) => {
            c(!0);
            try {
                let r = a.GB,
                    n = await (0, i.uX)(r),
                    l = await (0, i.J6)(e, t, r);
                f(n), E(l);
            } catch (e) {
                f(!1), E(!1);
            } finally {
                c(!1);
            }
        }, []);
    return (
        n.useEffect(() => {
            null == r ? (f(!1), E(!1), c(!1)) : y(t, r);
        }, [r, y, t]),
        {
            loading: s,
            isCurrentUserKeyPersistent: o,
            isOtherUserKeyPersistent: d,
        }
    );
}
