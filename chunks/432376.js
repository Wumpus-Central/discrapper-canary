function r(e) {
    let {
            channel: t,
            canChat: n,
            renderReactions: r,
            canAddNewReactions: i,
            isLurking: a,
            isGuest: o,
            communicationDisabled: s,
            isActiveChannelOrUnarchivableThread: l,
            isAutomodQuarantined: c,
        } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        f = (!0 === i || u) && !d && l,
        p = (n || u) && l,
        _ = a || o || !p || !0 === s || !0 === c;
    return {
        disableReactionReads: !r,
        disableReactionCreates: a || o || !p || !f,
        disableReactionUpdates: _,
    };
}
n.d(t, { Z: () => r });
