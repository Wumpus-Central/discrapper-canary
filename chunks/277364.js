n.d(t, { R: () => a });
var l = n(442837),
    i = n(63568),
    s = n(496675),
    r = n(981631);
function a(e) {
    let t = (0, l.e7)([s.Z], () => s.Z.can(r.Plq.KICK_MEMBERS, e), [e]),
        n = !!((0, i.jS)(null == e ? void 0 : e.id, 'AdvancedInstantInvite') && (null == e ? void 0 : e.hasFeature(r.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null == e ? void 0 : e.hasFeature(r.oNc.MEMBER_VERIFICATION_GATE_ENABLED)));
    return {
        canCreateApplicationBypassInvites: n && t,
        isManualApprovalGuild: n
    };
}
