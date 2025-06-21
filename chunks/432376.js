n.d(t, { Z: () => i });
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: r, isLurking: l, isGuest: o, communicationDisabled: s, isActiveChannelOrUnarchivableThread: a, isAutomodQuarantined: c } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        h = (n || u) && a;
    return {
        disableReactionReads: !i,
        disableReactionCreates: l || o || !h || !((!0 === r || u) && !d && a),
        disableReactionUpdates: l || o || !h || !0 === s || !0 === c
    };
}
