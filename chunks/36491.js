_.d(E, { L4: () => i, O0: () => e, sF: () => a });
var c = _(636537),
    h = _(73153),
    r = _(913122),
    s = _(652215);
function a(t) {
    h.h.dispatch({ type: "DISMISS_MEDIA_POST_SHARE_PROMPT", threadId: t });
}
async function e(t) {
    h.h.dispatch({ type: "MEDIA_POST_EMBED_FETCH", threadId: t });
    try {
        let E = (await c.Bo.get({ url: s.Rsh.MEDIA_POST_RESHARE_GET_PREVIEW(t), rejectWithError: !0 })).body;
        h.h.dispatch({ type: "MEDIA_POST_EMBED_FETCH_SUCCESS", threadId: t, mediaPostEmbed: E });
    } catch (E) {
        h.h.dispatch({ type: "MEDIA_POST_EMBED_FETCH_FAILURE", threadId: t });
    }
}
async function i(t) {
    try {
        return (await c.Bo.post({ url: s.Rsh.UNFURL_EMBED_URLS, body: { urls: t }, rejectWithError: !1 })).body;
    } catch (t) {
        throw new r.LG(t);
    }
}
