n.d(t, { R: () => r });
var l = n(442837),
    i = n(63568),
    s = n(496675),
    a = n(981631);
function r(e) {
    let t = (0, l.e7)([s.Z], () => s.Z.can(a.Plq.KICK_MEMBERS, e), [e]),
        n = !!((0, i.jS)(null == e ? void 0 : e.id, 'AdvancedInstantInvite') && (null == e ? void 0 : e.hasFeature(a.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null == e ? void 0 : e.hasFeature(a.oNc.MEMBER_VERIFICATION_GATE_ENABLED)));
    return {
        canCreateApplicationBypassInvites: n && t,
        isManualApprovalGuild: n
    };
}
