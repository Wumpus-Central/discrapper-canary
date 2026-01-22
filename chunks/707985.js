function r(e) {
    let {
            channel: t,
            canChat: n,
            renderReactions: r,
            canAddNewReactions: i,
            isLurking: a,
            isGuest: s,
            communicationDisabled: o,
            isActiveChannelOrUnarchivableThread: l,
            isAutomodQuarantined: c,
        } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        f = (!0 === i || u) && !d && l,
        p = (n || u) && l,
        _ = a || s || !p || !0 === o || !0 === c;
    return {
        disableReactionReads: !r,
        disableReactionCreates: a || s || !p || !f,
        disableReactionUpdates: _,
    };
}
n.d(t, { A: () => r });
