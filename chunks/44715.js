n.d(t, {
    Qu: () => o,
    W2: () => a
});
var r = n(327999);
let i = {};
function a(e) {
    return null == i[e] && (i[e] = {}), i[e];
}
function o(e, t) {
    if (0 === t.length) return !1;
    let n = a(e);
    return (
        t.forEach((e) => {
            var t, i, a, o, s, l, c, u;
            let d = n[e.userId],
                f = null != (i = null != (t = e.joinSourceType) ? t : null == d ? void 0 : d.joinSourceType) ? i : null;
            (null == f || f === r.gq.UNSPECIFIED) && null != e.sourceInviteCode && (f = r.gq.INVITE),
                (n[e.userId] = {
                    userId: e.userId,
                    sourceInviteCode: null != (o = null != (a = e.sourceInviteCode) ? a : null == d ? void 0 : d.sourceInviteCode) ? o : null,
                    joinSourceType: f,
                    inviterId: null != (l = null != (s = e.inviterId) ? s : null == d ? void 0 : d.inviterId) ? l : null,
                    integrationType: null != (u = null != (c = e.integrationType) ? c : null == d ? void 0 : d.integrationType) ? u : null
                });
        }),
        !0
    );
}
