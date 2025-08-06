n.d(t, {
    Qu: () => a,
    W2: () => o,
});
var r = n(327999);
let i = {};
function o(e) {
    return null == i[e] && (i[e] = {}), i[e];
}
function a(e, t) {
    if (0 === t.length) return !1;
    let n = o(e);
    return (
        t.forEach((e) => {
            var t, i, o, a, s, l, c, u, d, f, _, p;
            let h = n[e.userId],
                m = null != (i = null != (t = e.joinSourceType) ? t : null == h ? void 0 : h.joinSourceType) ? i : null;
            (null == m || m === r.gq.UNSPECIFIED) && null != e.sourceInviteCode && (m = r.gq.INVITE),
                (n[e.userId] = {
                    userId: e.userId,
                    sourceInviteCode:
                        null != (a = null != (o = e.sourceInviteCode) ? o : null == h ? void 0 : h.sourceInviteCode)
                            ? a
                            : null,
                    joinSourceType: m,
                    inviterId:
                        null != (l = null != (s = e.inviterId) ? s : null == h ? void 0 : h.inviterId) ? l : null,
                    integrationType:
                        null != (u = null != (c = e.integrationType) ? c : null == h ? void 0 : h.integrationType)
                            ? u
                            : null,
                    joinSourceApplicationId:
                        null !=
                        (f =
                            null != (d = e.joinSourceApplicationId)
                                ? d
                                : null == h
                                  ? void 0
                                  : h.joinSourceApplicationId)
                            ? f
                            : null,
                    joinSourceChannelId:
                        null !=
                        (p = null != (_ = e.joinSourceChannelId) ? _ : null == h ? void 0 : h.joinSourceChannelId)
                            ? p
                            : null,
                });
        }),
        !0
    );
}
