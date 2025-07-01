n.d(t, { Z: () => i });
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: r, isLurking: l, isGuest: o, communicationDisabled: a, isActiveChannelOrUnarchivableThread: s, isAutomodQuarantined: c } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        h = (n || u) && s;
    return {
        disableReactionReads: !i,
        disableReactionCreates: l || o || !h || !((!0 === r || u) && !d && s),
        disableReactionUpdates: l || o || !h || !0 === a || !0 === c
    };
}
