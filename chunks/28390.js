n.d(t, { A: () => c });
var r = n(64700),
    i = n(367513),
    a = n(951001),
    s = n(398590),
    o = n(976860),
    l = n(652215);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { selectParticipantId: n } = t;
    return r.useCallback(() => {
        var t;
        (0, s.bz)();
        let r = null != (t = e.getGuildId()) ? t : l.ME;
        (0, o.uh)(r, e.id), a.A.channelListScrollTo(r, e.id), null != n && i.A.selectParticipant(e.id, n);
    }, [e, n]);
}
