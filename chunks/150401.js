n.d(t, {
    A: () => o,
});
var r = n(311907),
    l = n(961350),
    i = n(309010),
    a = n(105530);

function o() {
    let e = (0, r.bG)([i.A], () => i.A.getVoiceChannelId()),
        t = (0, r.bG)([l.default], () => l.default.getId());
    return (0, a.Ay)(t, e) === a.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
