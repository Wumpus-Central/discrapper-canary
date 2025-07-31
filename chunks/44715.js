n.d(t, {
    Qu: () => o,
    W2: () => a
});
var r = n(327999);
let i = {};
function a(e) {
    return (null == i[e] && (i[e] = {}), i[e]);
}
function o(e, t) {
    if (0 === t.length) return !1;
    let n = a(e);
    return (
        t.forEach((e) => {
            var t, i, a, o, s, l, c, u, d, _, f, p;
            let h = n[e.userId],
                m = null != (i = null != (t = e.joinSourceType) ? t : null == h ? void 0 : h.joinSourceType) ? i : null;
            ((null == m || m === r.gq.UNSPECIFIED) && null != e.sourceInviteCode && (m = r.gq.INVITE),
                (n[e.userId] = {
                    userId: e.userId,
                    sourceInviteCode: null != (o = null != (a = e.sourceInviteCode) ? a : null == h ? void 0 : h.sourceInviteCode) ? o : null,
                    joinSourceType: m,
                    inviterId: null != (l = null != (s = e.inviterId) ? s : null == h ? void 0 : h.inviterId) ? l : null,
                    integrationType: null != (u = null != (c = e.integrationType) ? c : null == h ? void 0 : h.integrationType) ? u : null,
                    joinSourceApplicationId: null != (_ = null != (d = e.joinSourceApplicationId) ? d : null == h ? void 0 : h.joinSourceApplicationId) ? _ : null,
                    joinSourceChannelId: null != (p = null != (f = e.joinSourceChannelId) ? f : null == h ? void 0 : h.joinSourceChannelId) ? p : null
                }));
        }),
        !0
    );
}
