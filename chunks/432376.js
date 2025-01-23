n.d(t, {
    Z: function () {
        return i;
    }
});
function i(e) {
    let { channel: t, canChat: n, renderReactions: i, canAddNewReactions: o, isLurking: a, isGuest: l, communicationDisabled: s, isActiveChannelOrUnarchivableThread: r, isAutomodQuarantined: c } = e,
        d = t.isPrivate(),
        u = t.isSystemDM(),
        h = (n || d) && r;
    return {
        disableReactionReads: !i,
        disableReactionCreates: a || l || !h || !((!0 === o || d) && !u && r),
        disableReactionUpdates: a || l || !h || !0 === s || !0 === c
    };
}
