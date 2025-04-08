n.d(t, { Z: () => i });
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: o, isLurking: r, isGuest: a, communicationDisabled: s, isActiveChannelOrUnarchivableThread: l, isAutomodQuarantined: c } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        h = (n || u) && l;
    return {
        disableReactionReads: !i,
        disableReactionCreates: r || a || !h || !((!0 === o || u) && !d && l),
        disableReactionUpdates: r || a || !h || !0 === s || !0 === c
    };
}
