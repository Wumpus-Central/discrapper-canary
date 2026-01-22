n.d(t, {
    L4: () => c,
    O0: () => l,
    sF: () => o,
});
var r = n(562465),
    i = n(73153),
    a = n(198982),
    s = n(652215);
function o(e) {
    i.h.dispatch({
        type: "DISMISS_MEDIA_POST_SHARE_PROMPT",
        threadId: e,
    });
}
async function l(e) {
    i.h.dispatch({
        type: "MEDIA_POST_EMBED_FETCH",
        threadId: e,
    });
    try {
        let t = (
            await r.Bo.get({
                url: s.Rsh.MEDIA_POST_RESHARE_GET_PREVIEW(e),
                rejectWithError: !0,
            })
        ).body;
        i.h.dispatch({
            type: "MEDIA_POST_EMBED_FETCH_SUCCESS",
            threadId: e,
            mediaPostEmbed: t,
        });
    } catch (t) {
        i.h.dispatch({
            type: "MEDIA_POST_EMBED_FETCH_FAILURE",
            threadId: e,
        });
    }
}
async function c(e) {
    try {
        return (
            await r.Bo.post({
                url: s.Rsh.UNFURL_EMBED_URLS,
                body: { urls: e },
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        throw new a.LG(e);
    }
}
