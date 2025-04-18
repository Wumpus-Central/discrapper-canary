n.d(t, { E: () => c });
var r = n(442837),
    i = n(271383),
    a = n(594174),
    o = n(881952),
    s = n(937111),
    l = n(981631);
function c(e) {
    let t = null == e ? void 0 : e.hasFeature(l.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, r.e7)(
            [s.Z, a.default, i.ZP],
            () => {
                if (null == e) return;
                let t = s.Z.getRequest(e.id),
                    n = a.default.getCurrentUser();
                if (null == n || null == t || t.userId !== n.id) return;
                let r = i.ZP.getMember(e.id, t.userId);
                if (!(null != r && !r.isPending) || (0, o.oP)(t)) return t.applicationStatus;
            },
            [e]
        );
    return t ? n : void 0;
}
