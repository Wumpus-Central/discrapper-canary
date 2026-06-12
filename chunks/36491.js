n.d(t, { L4: () => d, O0: () => o, sF: () => a });
var i = n(636537),
    l = n(228366),
    s = n(913122),
    r = n(652215);
function a(e) {
    l.h.dispatch({ type: "DISMISS_MEDIA_POST_SHARE_PROMPT", threadId: e });
}
async function o(e) {
    l.h.dispatch({ type: "MEDIA_POST_EMBED_FETCH", threadId: e });
    try {
        let t = (await i.Bo.get({ url: r.Rsh.MEDIA_POST_RESHARE_GET_PREVIEW(e), rejectWithError: !0 })).body;
        l.h.dispatch({ type: "MEDIA_POST_EMBED_FETCH_SUCCESS", threadId: e, mediaPostEmbed: t });
    } catch (t) {
        l.h.dispatch({ type: "MEDIA_POST_EMBED_FETCH_FAILURE", threadId: e });
    }
}
async function d(e) {
    try {
        return (await i.Bo.post({ url: r.Rsh.UNFURL_EMBED_URLS, body: { urls: e }, rejectWithError: !1 })).body;
    } catch (e) {
        throw new s.LG(e);
    }
}
