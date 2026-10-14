n.d(t, { A: () => i });
function i(e) {
    let {
            channel: t,
            canChat: n,
            renderReactions: i,
            canAddNewReactions: l,
            isLurking: a,
            communicationDisabled: o,
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
        disableReactionCreates: a || !f || !m,
        disableReactionUpdates: u || a || !f || !0 === o || !0 === s,
    };
}
