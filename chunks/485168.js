n.d(t, { l: () => o });
var r = n(73800),
    a = n(263568),
    l = n(367907),
    i = n(981631);
function o(e, t) {
    return {
        trackPollCreationCancelled: r.useCallback(() => {
            let n = 0,
                r = 0,
                o = 0;
            (e.forEach((e) => {
                let t = e.image;
                null != t && (null != t.emoji ? (r += 1) : null != t.stickerId ? (o += 1) : null != t.mediaAttachmentState && (n += 1));
            }),
                l.ZP.trackWithMetadata(i.rMx.POLL_CREATION_CANCELLED, {
                    answers_count: e.length,
                    attachments_count: n,
                    emojis_count: r,
                    stickers_count: o,
                    allow_multiselect: t,
                    layout_type: a.C.DEFAULT
                }));
        }, [e, t])
    };
}
