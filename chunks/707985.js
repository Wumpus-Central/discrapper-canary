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
            communicationDisabled: o,
            isActiveChannelOrUnarchivableThread: a,
            isAutomodQuarantined: s,
        } = e,
        u = t.isPrivate(),
        c = t.isSystemDM(),
        d = (n || u) && a;
    return {
        disableReactionReads: !i,
        disableReactionCreates: r || !d || !((!0 === l || u) && !c && a),
        disableReactionUpdates: r || !d || !0 === o || !0 === s,
    };
}
