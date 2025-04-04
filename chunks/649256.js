n.d(t, {
    JE: () => a,
    ur: () => s,
    xB: () => l
});
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
    if (n.type === r.e.QUICK) {
        let { body: t } = await i.tn.get({
            url: o.ANM.APPLICATION_QUICK_ACTIVITY_LINK(e, n.decodedLinkId),
            rejectWithError: !1
        });
        return t;
    }
    return null;
}
async function s(e, t, n) {
    let r = null != n ? n : void 0;
    if (null == t || null != r) return { customId: r };
    try {
        let n = await a(e, t);
        if (null == n) return { customId: r };
        return { customId: null != r ? r : n.custom_id };
    } catch (e) {
        return { customId: r };
    }
}
function l(e) {
    if (null != e) return ''.concat(location.protocol, '//').concat(window.GLOBAL_ENV.CDN_HOST, '/attachments-quick-links/').concat(e);
}
