n.d(t, { Z: () => c });
var r = n(473749),
    i = n(475179),
    a = n(925549),
    o = n(37234),
    s = n(703656),
    l = n(981631);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { selectParticipantId: n } = t;
    return r.useCallback(() => {
        var t;
        (0, o.Ou)();
        let r = null != (t = e.getGuildId()) ? t : l.ME;
        (0, s.XU)(r, e.id), a.Z.channelListScrollTo(r, e.id), null != n && i.Z.selectParticipant(e.id, n);
    }, [e, n]);
}
