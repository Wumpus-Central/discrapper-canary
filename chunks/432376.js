n.d(t, { Z: () => i });
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: r, isLurking: o, isGuest: a, communicationDisabled: s, isActiveChannelOrUnarchivableThread: l, isAutomodQuarantined: c } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        h = (n || u) && l;
    return {
        disableReactionReads: !i,
        disableReactionCreates: o || a || !h || !((!0 === r || u) && !d && l),
        disableReactionUpdates: o || a || !h || !0 === s || !0 === c
    };
}
