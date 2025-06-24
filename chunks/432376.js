n.d(t, { Z: () => i });
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: o, isLurking: l, isGuest: r, communicationDisabled: a, isActiveChannelOrUnarchivableThread: s, isAutomodQuarantined: c } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        h = (n || u) && s;
    return {
        disableReactionReads: !i,
        disableReactionCreates: l || r || !h || !((!0 === o || u) && !d && s),
        disableReactionUpdates: l || r || !h || !0 === a || !0 === c
    };
}
