n.d(t, { Z: () => i });
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: a, isLurking: o, isGuest: s, communicationDisabled: l, isActiveChannelOrUnarchivableThread: r, isAutomodQuarantined: c } = e,
        d = t.isPrivate(),
        u = t.isSystemDM(),
        h = (n || d) && r;
    return {
        disableReactionReads: !i,
        disableReactionCreates: o || s || !h || !((!0 === a || d) && !u && r),
        disableReactionUpdates: o || s || !h || !0 === l || !0 === c
    };
}
