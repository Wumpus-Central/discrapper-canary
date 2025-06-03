n.d(t, { Z: () => i });
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: r, isLurking: o, isGuest: l, communicationDisabled: s, isActiveChannelOrUnarchivableThread: a, isAutomodQuarantined: c } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        h = (n || u) && a;
    return {
        disableReactionReads: !i,
        disableReactionCreates: o || l || !h || !((!0 === r || u) && !d && a),
        disableReactionUpdates: o || l || !h || !0 === s || !0 === c
    };
}
