n.d(t, { R: () => s });
var l = n(442837),
    i = n(496675),
    r = n(981631);
function s(e) {
    let t = (0, l.e7)([i.Z], () => i.Z.can(r.Plq.KICK_MEMBERS, e), [e]),
        n = !!((null == e ? void 0 : e.hasFeature(r.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null == e ? void 0 : e.hasFeature(r.oNc.MEMBER_VERIFICATION_GATE_ENABLED)));
    return {
        canCreateApplicationBypassInvites: n && t,
        isManualApprovalGuild: n
    };
}
