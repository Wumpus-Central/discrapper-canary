n.d(t, { u: () => s });
var r = n(666572),
    i = n(544891),
    o = n(981631);
async function a(e, t) {
    if (null == e || null == t) return null;
    let n = (0, r._)(t);
    if (null == n) return null;
    if (n.type === r.e.MANAGED) {
        let { body: t } = await i.tn.get({
            url: o.ANM.APPLICATION_MANAGED_ACTIVITY_LINK(e, n.decodedLinkId),
            rejectWithError: !1
        });
        return t;
    }
    return null;
}
async function s(e, t, n, r) {
    let i = null != n ? n : void 0,
        o = null != r ? r : void 0;
    if (null == t || (null != o && null != i))
        return {
            customId: i,
            referrerId: o
        };
    try {
        let n = await a(e, t);
        if (null == n)
            return {
                customId: i,
                referrerId: o
            };
        return {
            customId: null != i ? i : n.custom_id,
            referrerId: null != o ? o : n.referrer_id
        };
    } catch (e) {
        return {
            customId: i,
            referrerId: o
        };
    }
}
