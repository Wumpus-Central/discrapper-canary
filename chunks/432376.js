n.d(t, { Z: () => i });
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
            isAutomodQuarantined: c,
        } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        h = (n || u) && s;
    return {
        disableReactionReads: !i,
        disableReactionCreates: r || o || !h || !((!0 === l || u) && !d && s),
        disableReactionUpdates: r || o || !h || !0 === a || !0 === c,
    };
}
