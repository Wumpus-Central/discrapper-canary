n.d(t, {
    V6: () => c,
    fn: () => s,
    xP: () => o
});
var i = n(544891),
    l = n(570140),
    a = n(881052),
    r = n(981631);
function s(e) {
    l.Z.dispatch({
        type: 'DISMISS_MEDIA_POST_SHARE_PROMPT',
        threadId: e
    });
}
async function o(e) {
    l.Z.dispatch({
        type: 'MEDIA_POST_EMBED_FETCH',
        threadId: e
    });
    try {
        let t = (
            await i.tn.get({
                url: r.ANM.MEDIA_POST_RESHARE_GET_PREVIEW(e),
                rejectWithError: !0
            })
        ).body;
        l.Z.dispatch({
            type: 'MEDIA_POST_EMBED_FETCH_SUCCESS',
            threadId: e,
            mediaPostEmbed: t
        });
    } catch (t) {
        l.Z.dispatch({
            type: 'MEDIA_POST_EMBED_FETCH_FAILURE',
            threadId: e
        });
    }
}
async function c(e) {
    try {
        return (
            await i.tn.post({
                url: r.ANM.UNFURL_EMBED_URLS,
                body: { urls: e },
                rejectWithError: !1
            })
        ).body;
    } catch (e) {
        throw new a.Hx(e);
    }
}
