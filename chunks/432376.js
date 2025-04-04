n.d(t, { Z: () => i });
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: r, isLurking: o, isGuest: a, communicationDisabled: l, isActiveChannelOrUnarchivableThread: s, isAutomodQuarantined: c } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        h = (n || u) && s;
    return {
        disableReactionReads: !i,
        disableReactionCreates: o || a || !h || !((!0 === r || u) && !d && s),
        disableReactionUpdates: o || a || !h || !0 === l || !0 === c
    };
}
