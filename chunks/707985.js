i.d(t, { A: () => n });
function n(e) {
    let {
            channel: t,
            canChat: i,
            renderReactions: n,
            canAddNewReactions: l,
            isLurking: a,
            communicationDisabled: r,
            isActiveChannelOrUnarchivableThread: o,
            isAutomodQuarantined: s,
        } = e,
        u = t.isPrivate(),
        d = t.isSystemDM(),
        c = (i || u) && o;
    return {
        disableReactionReads: !n,
        disableReactionCreates: a || !c || !((!0 === l || u) && !d && o),
        disableReactionUpdates: a || !c || !0 === r || !0 === s,
    };
}
