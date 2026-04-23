n.d(t, { L4: () => d, O0: () => o, sF: () => a });
var s = n(636537),
    i = n(228366),
    l = n(845584),
    r = n(652215);
function a(e) {
    i.h.dispatch({ type: "DISMISS_MEDIA_POST_SHARE_PROMPT", threadId: e });
}
async function o(e) {
    i.h.dispatch({ type: "MEDIA_POST_EMBED_FETCH", threadId: e });
    try {
        let t = (await s.Bo.get({ url: r.Rsh.MEDIA_POST_RESHARE_GET_PREVIEW(e), rejectWithError: !0 })).body;
        i.h.dispatch({ type: "MEDIA_POST_EMBED_FETCH_SUCCESS", threadId: e, mediaPostEmbed: t });
    } catch (t) {
        i.h.dispatch({ type: "MEDIA_POST_EMBED_FETCH_FAILURE", threadId: e });
    }
}
async function d(e) {
    try {
        return (await s.Bo.post({ url: r.Rsh.UNFURL_EMBED_URLS, body: { urls: e }, rejectWithError: !1 })).body;
    } catch (e) {
        throw new l.LG(e);
    }
}
