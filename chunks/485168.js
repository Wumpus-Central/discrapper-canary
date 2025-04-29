n.d(t, { l: () => o });
var r = n(73800),
    a = n(367907),
    l = n(981631);
function o(e, t, n) {
    return {
        trackPollCreationCancelled: r.useCallback(() => {
            let r = 0,
                o = 0,
                i = 0;
            e.forEach((e) => {
                let t = e.image;
                null != t && (null != t.emoji ? (o += 1) : null != t.stickerId ? (i += 1) : null != t.mediaAttachmentState && (r += 1));
            }),
                a.ZP.trackWithMetadata(l.rMx.POLL_CREATION_CANCELLED, {
                    answers_count: e.length,
                    attachments_count: r,
                    emojis_count: o,
                    stickers_count: i,
                    allow_multiselect: t,
                    layout_type: n
                });
        }, [e, t, n])
    };
}
