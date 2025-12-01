n.d(t, {
    Qu: () => o,
    W2: () => a,
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
            var t, i, a, o, s, l, c, u, d, f, p, _;
            let m = n[e.userId],
                h = null != (i = null != (t = e.joinSourceType) ? t : null == m ? void 0 : m.joinSourceType) ? i : null;
            (null == h || h === r.gq.UNSPECIFIED) && null != e.sourceInviteCode && (h = r.gq.INVITE),
                (n[e.userId] = {
                    userId: e.userId,
                    sourceInviteCode:
                        null != (o = null != (a = e.sourceInviteCode) ? a : null == m ? void 0 : m.sourceInviteCode)
                            ? o
                            : null,
                    joinSourceType: h,
                    inviterId:
                        null != (l = null != (s = e.inviterId) ? s : null == m ? void 0 : m.inviterId) ? l : null,
                    integrationType:
                        null != (u = null != (c = e.integrationType) ? c : null == m ? void 0 : m.integrationType)
                            ? u
                            : null,
                    joinSourceApplicationId:
                        null !=
                        (f =
                            null != (d = e.joinSourceApplicationId)
                                ? d
                                : null == m
                                  ? void 0
                                  : m.joinSourceApplicationId)
                            ? f
                            : null,
                    joinSourceChannelId:
                        null !=
                        (_ = null != (p = e.joinSourceChannelId) ? p : null == m ? void 0 : m.joinSourceChannelId)
                            ? _
                            : null,
                });
        }),
        !0
    );
}
