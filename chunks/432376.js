function r(e) {
    let { channel: t, canChat: n, renderReactions: r, canAddNewReactions: i, isLurking: o, isGuest: a, communicationDisabled: s, isActiveChannelOrUnarchivableThread: l, isAutomodQuarantined: c } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        f = (!0 === i || u) && !d && l,
        _ = (n || u) && l,
        p = o || a || !_ || !0 === s || !0 === c;
    return {
        disableReactionReads: !r,
        disableReactionCreates: o || a || !_ || !f,
        disableReactionUpdates: p
    };
}
n.d(t, { Z: () => r });
