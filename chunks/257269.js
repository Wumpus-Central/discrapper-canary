n.d(t, {
    Py: () => u,
    VP: () => c,
    d9: () => l,
}),
    n(896048);
var r = n(526218),
    i = n(562465),
    a = n(73153);
n(346835);
var s = n(652215);
async function o(e, t) {
    if (null == e || null == t) return null;
    let n = (0, r.t)(t);
    if (null == n) return null;
    if (n.type === r.G.MANAGED) {
        let { body: t } = await i.Bo.get({
            url: s.Rsh.APPLICATION_MANAGED_ACTIVITY_LINK(e, n.decodedLinkId),
            rejectWithError: !1,
        });
        return t;
    }
    if (n.type === r.G.QUICK) {
        let { body: t } = await i.Bo.get({
            url: s.Rsh.APPLICATION_QUICK_ACTIVITY_LINK(e, n.decodedLinkId),
            rejectWithError: !1,
        });
        return t;
    }
    return null;
}
async function l(e, t, n) {
    let r = null != n ? n : void 0;
    if (null == t || null != r) return { customId: r };
    try {
        let n = await o(e, t);
        if (null == n) return { customId: r };
        return { customId: null != r ? r : n.custom_id };
    } catch (e) {
        return { customId: r };
    }
}
function c(e) {
    if (null != e)
        return ""
            .concat(location.protocol, "//")
            .concat(window.GLOBAL_ENV.CDN_HOST, "/attachments-quick-links/")
            .concat(e);
}
async function u(e, t) {
    if (null == e || null == t) return Promise.reject("appId or linkId null");
    let n = await o(e, t);
    if (null == n) return Promise.reject("fetchCustomActivityLink body is null");
    a.h.dispatch({
        type: "CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS",
        applicationId: e,
        link: n,
    });
}
