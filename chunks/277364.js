n.d(t, { R: () => r });
var l = n(442837),
    i = n(496675),
    a = n(981631);
function r(e) {
    let t = (0, l.e7)([i.Z], () => i.Z.can(a.Plq.KICK_MEMBERS, e), [e]),
        n = !!(
            (null == e ? void 0 : e.features.has(a.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) &&
            (null == e ? void 0 : e.features.has(a.oNc.MEMBER_VERIFICATION_GATE_ENABLED))
        );
    return {
        canCreateApplicationBypassInvites: n && t,
        isManualApprovalGuild: n,
    };
}
