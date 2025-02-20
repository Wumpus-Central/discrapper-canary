n.d(t, { l: () => l });
var r = n(192379),
    a = n(367907),
    o = n(981631);
function l(e, t, n) {
    return {
        trackPollCreationCancelled: r.useCallback(() => {
            let r = 0,
                l = 0,
                i = 0;
            e.forEach((e) => {
                let t = e.image;
                null != t && (null != t.emoji ? (l += 1) : null != t.stickerId ? (i += 1) : null != t.mediaAttachmentState && (r += 1));
            }),
                a.ZP.trackWithMetadata(o.rMx.POLL_CREATION_CANCELLED, {
                    answers_count: e.length,
                    attachments_count: r,
                    emojis_count: l,
                    stickers_count: i,
                    allow_multiselect: t,
                    layout_type: n
                });
        }, [e, t, n])
    };
}
