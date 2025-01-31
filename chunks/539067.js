n.d(t, { y: () => a }), n(47120);
var r = n(192379),
    l = n(442837),
    i = n(19780),
    u = n(630759),
    s = n(760373);
function a(e) {
    let { userId: t } = e,
        n = (0, l.e7)([i.Z], () => i.Z.getSecureFramesRosterMapEntry(t)),
        [a, o] = r.useState(!0),
        [c, d] = r.useState(!1),
        [f, E] = r.useState(!1),
        _ = r.useCallback(async (e, t) => {
            o(!0);
            try {
                let n = s.GB,
                    r = await (0, u.uX)(n),
                    l = await (0, u.J6)(e, t, n);
                d(r), E(l);
            } catch (e) {
                d(!1), E(!1);
            } finally {
                o(!1);
            }
        }, []);
    return (
        r.useEffect(() => {
            null == n ? (d(!1), E(!1), o(!1)) : _(t, n);
        }, [n, _, t]),
        {
            loading: a,
            isCurrentUserKeyPersistent: c,
            isOtherUserKeyPersistent: f
        }
    );
}
