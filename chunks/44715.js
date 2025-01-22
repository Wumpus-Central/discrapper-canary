r.d(n, {
    Qu: function () {
        return s;
    },
    W2: function () {
        return o;
    }
});
var i = r(327999);
let a = {};
function o(e) {
    return null == a[e] && (a[e] = {}), a[e];
}
function s(e, n) {
    if (0 === n.length) return !1;
    let r = o(e);
    return (
        n.forEach((e) => {
            var n, a, o, s, l, u, c, d;
            let f = r[e.userId],
                p = null !== (a = null !== (n = e.joinSourceType) && void 0 !== n ? n : null == f ? void 0 : f.joinSourceType) && void 0 !== a ? a : null;
            (null == p || p === i.gq.UNSPECIFIED) && null != e.sourceInviteCode && (p = i.gq.INVITE),
                (r[e.userId] = {
                    userId: e.userId,
                    sourceInviteCode: null !== (s = null !== (o = e.sourceInviteCode) && void 0 !== o ? o : null == f ? void 0 : f.sourceInviteCode) && void 0 !== s ? s : null,
                    joinSourceType: p,
                    inviterId: null !== (u = null !== (l = e.inviterId) && void 0 !== l ? l : null == f ? void 0 : f.inviterId) && void 0 !== u ? u : null,
                    integrationType: null !== (d = null !== (c = e.integrationType) && void 0 !== c ? c : null == f ? void 0 : f.integrationType) && void 0 !== d ? d : null
                });
        }),
        !0
    );
}
