r.d(n, {
    E: function () {
        return c;
    }
});
var i = r(442837),
    a = r(271383),
    o = r(594174),
    s = r(881952),
    l = r(937111),
    u = r(981631);
function c(e) {
    let n = null == e ? void 0 : e.hasFeature(u.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        r = (0, i.e7)(
            [l.Z, o.default, a.ZP],
            () => {
                if (null == e) return;
                let n = l.Z.getRequest(e.id),
                    r = o.default.getCurrentUser();
                if (null == r || null == n || n.userId !== r.id) return;
                let i = a.ZP.getMember(e.id, n.userId);
                if (null == i || !!i.isPending || !!(0, s.oP)(n)) return n.applicationStatus;
            },
            [e]
        );
    return n ? r : void 0;
}
