n.d(t, { A: () => c });
var i = n(17928),
    r = n(568598),
    a = n(198052),
    s = n(869146),
    l = n(309010),
    o = n(165610),
    d = n(652215);
function c(e) {
    let t = (0, o.VZ)(e),
        n = null != e ? (0, r.Gg)(e) : void 0,
        c = (0, i.bG)([s.A], () => s.A.getWindowOpen(d.MLl.CHANNEL_CALL_POPOUT));
    return {
        isShownInCall: (0, i.bG)(
            [l.Ay, a.A],
            () =>
                null != t &&
                null != n &&
                !c &&
                l.Ay.getVoiceChannelId() === t &&
                l.Ay.getChannelId() === t &&
                null != a.A.getParticipant(t, n),
            [t, n, c],
        ),
        isTileSelected: (0, i.bG)([a.A], () => null != t && null != n && a.A.getSelectedParticipantId(t) === n, [t, n]),
        channelId: t,
        participantId: n,
    };
}
