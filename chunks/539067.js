r.d(t, { y: () => s }), r(388685);
var n = r(73800),
    l = r(442837),
    o = r(19780),
    c = r(630759),
    i = r(760373);
function s(e) {
    let { userId: t } = e,
        r = (0, l.e7)([o.Z], () => o.Z.getSecureFramesRosterMapEntry(t)),
        [s, a] = n.useState(!0),
        [u, d] = n.useState(!1),
        [f, p] = n.useState(!1),
        b = n.useCallback(async (e, t) => {
            a(!0);
            try {
                let r = i.GB,
                    n = await (0, c.uX)(r),
                    l = await (0, c.J6)(e, t, r);
                d(n), p(l);
            } catch (e) {
                d(!1), p(!1);
            } finally {
                a(!1);
            }
        }, []);
    return (
        n.useEffect(() => {
            null == r ? (d(!1), p(!1), a(!1)) : b(t, r);
        }, [r, b, t]),
        {
            loading: s,
            isCurrentUserKeyPersistent: u,
            isOtherUserKeyPersistent: f,
        }
    );
}
