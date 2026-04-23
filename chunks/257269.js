n.d(t, { Py: () => E, VP: () => o, d9: () => l });
var i = n(526218),
    r = n(636537),
    a = n(228366);
n(582388);
var s = n(652215);
async function _(e, t) {
    if (null == e || null == t) return null;
    let n = (0, i.t)(t);
    if (null == n) return null;
    if (n.type === i.G.MANAGED) {
        let { body: t } = await r.Bo.get({
            url: s.Rsh.APPLICATION_MANAGED_ACTIVITY_LINK(e, n.decodedLinkId),
            rejectWithError: !1,
        });
        return t;
    }
    if (n.type === i.G.QUICK) {
        let { body: t } = await r.Bo.get({
            url: s.Rsh.APPLICATION_QUICK_ACTIVITY_LINK(e, n.decodedLinkId),
            rejectWithError: !1,
        });
        return t;
    }
    return null;
}
async function l(e, t, n) {
    let i = n ?? void 0;
    if (null == t || null != i) return { customId: i };
    try {
        let n = await _(e, t);
        if (null == n) return { customId: void 0 };
        return { customId: n.custom_id };
    } catch {
        return { customId: void 0 };
    }
}
function o(e) {
    if (null != e) return `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/attachments-quick-links/${e}`;
}
async function E(e, t) {
    if (null == e || null == t) return Promise.reject("appId or linkId null");
    let n = await _(e, t);
    if (null == n) return Promise.reject("fetchCustomActivityLink body is null");
    a.h.dispatch({ type: "CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS", applicationId: e, link: n });
}
