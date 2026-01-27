n.d(t, {
    A: () => i,
});

function i(e) {
    let {
            channel: t,
            canChat: n,
            renderReactions: i,
            canAddNewReactions: l,
            isLurking: r,
            isGuest: o,
            communicationDisabled: a,
            isActiveChannelOrUnarchivableThread: s,
            isAutomodQuarantined: u,
        } = e,
        c = t.isPrivate(),
        d = t.isSystemDM(),
        p = (n || c) && s;
    return {
        disableReactionReads: !i,
        disableReactionCreates: r || o || !p || !((!0 === l || c) && !d && s),
        disableReactionUpdates: r || o || !p || !0 === a || !0 === u,
    };
}
