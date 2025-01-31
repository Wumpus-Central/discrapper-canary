n.d(t, { E: () => u });
var i = n(442837),
    r = n(271383),
    a = n(594174),
    s = n(881952),
    o = n(937111),
    l = n(981631);
function u(e) {
    let t = null == e ? void 0 : e.hasFeature(l.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, i.e7)(
            [o.Z, a.default, r.ZP],
            () => {
                if (null == e) return;
                let t = o.Z.getRequest(e.id),
                    n = a.default.getCurrentUser();
                if (null == n || null == t || t.userId !== n.id) return;
                let i = r.ZP.getMember(e.id, t.userId);
                if (null == i || i.isPending || (0, s.oP)(t)) return t.applicationStatus;
            },
            [e]
        );
    return t ? n : void 0;
}
