n.d(t, { A: () => i });
function i(e) {
    let {
            channel: t,
            canChat: n,
            renderReactions: i,
            canAddNewReactions: l,
            isLurking: o,
            communicationDisabled: a,
            isActiveChannelOrUnarchivableThread: r,
            isAutomodQuarantined: s,
        } = e,
        c = t.isPrivate(),
        u = t.isSystemDM(),
        d = t.isMediaThread(),
        m = (!0 === l || c) && !u && r && !d,
        f = (n || c) && r && !d;
    return {
        disableReactionReads: !i,
        disableReactionCreates: o || !f || !m,
        disableReactionUpdates: u || o || !f || !0 === a || !0 === s,
    };
}
