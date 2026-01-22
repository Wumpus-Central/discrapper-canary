n.d(t, {
    Ob: () => s,
    Oe: () => a,
});
var r = n(11541);
let i = {};

function a(e) {
    return null == i[e] && (i[e] = {}), i[e];
}

function s(e, t) {
    if (0 === t.length) return !1;
    let n = a(e);
    return (
        t.forEach((e) => {
            var t, i, a, s, o, l, c, u, d, f, p, _;
            let h = n[e.userId],
                m = null != (t = null != (i = e.joinSourceType) ? i : null == h ? void 0 : h.joinSourceType) ? t : null;
            (null == m || m === r.UP.UNSPECIFIED) && null != e.sourceInviteCode && (m = r.UP.INVITE),
                (n[e.userId] = {
                    userId: e.userId,
                    sourceInviteCode:
                        null != (a = null != (s = e.sourceInviteCode) ? s : null == h ? void 0 : h.sourceInviteCode)
                            ? a
                            : null,
                    joinSourceType: m,
                    inviterId:
                        null != (o = null != (l = e.inviterId) ? l : null == h ? void 0 : h.inviterId) ? o : null,
                    integrationType:
                        null != (c = null != (u = e.integrationType) ? u : null == h ? void 0 : h.integrationType)
                            ? c
                            : null,
                    joinSourceApplicationId:
                        null !=
                        (d =
                            null != (f = e.joinSourceApplicationId)
                                ? f
                                : null == h
                                  ? void 0
                                  : h.joinSourceApplicationId)
                            ? d
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
