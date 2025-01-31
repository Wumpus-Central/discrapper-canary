n.d(t, { l: () => i });
var a = n(192379),
    l = n(367907),
    r = n(981631);
function i(e, t, n) {
    return {
        trackPollCreationCancelled: a.useCallback(() => {
            let a = 0,
                i = 0,
                o = 0;
            e.forEach((e) => {
                let t = e.image;
                null != t && (null != t.emoji ? (i += 1) : null != t.stickerId ? (o += 1) : null != t.mediaAttachmentState && (a += 1));
            }),
                l.ZP.trackWithMetadata(r.rMx.POLL_CREATION_CANCELLED, {
                    answers_count: e.length,
                    attachments_count: a,
                    emojis_count: i,
                    stickers_count: o,
                    allow_multiselect: t,
                    layout_type: n
                });
        }, [e, t, n])
    };
}
