i.d(t, { Z: () => n });
function n(e) {
    let { channel: t, canChat: i, renderReactions: n, canAddNewReactions: a, isLurking: o, isGuest: s, communicationDisabled: l, isActiveChannelOrUnarchivableThread: r, isAutomodQuarantined: c } = e,
        d = t.isPrivate(),
        u = t.isSystemDM(),
        h = (i || d) && r;
    return {
        disableReactionReads: !n,
        disableReactionCreates: o || s || !h || !((!0 === a || d) && !u && r),
        disableReactionUpdates: o || s || !h || !0 === l || !0 === c
    };
}
