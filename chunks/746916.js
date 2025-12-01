n.d(t, { E: () => c });
var r = n(442837),
    i = n(271383),
    l = n(594174),
    o = n(881952),
    a = n(937111),
    s = n(981631);
function c(e) {
    let t = null == e ? void 0 : e.features.has(s.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, r.e7)([a.Z, l.default, i.ZP], () => {
            if (null == e) return;
            let t = a.Z.getRequest(e.id),
                n = l.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let r = i.ZP.getMember(e.id, t.userId);
            if (!(null != r && !r.isPending) || (0, o.oP)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
