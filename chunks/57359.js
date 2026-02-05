n.d(t, { I: () => o });
var l = n(64700),
    a = n(966974),
    i = n(58149),
    r = n(652215);
function o(e, t) {
    return {
        trackPollCreationCancelled: l.useCallback(() => {
            let n = 0,
                l = 0,
                o = 0;
            e.forEach((e) => {
                let t = e.image;
                null != t &&
                    (null != t.emoji
                        ? (l += 1)
                        : null != t.stickerId
                          ? (o += 1)
                          : null != t.mediaAttachmentState && (n += 1));
            }),
                i.Ay.trackWithMetadata(r.HAw.POLL_CREATION_CANCELLED, {
                    answers_count: e.length,
                    attachments_count: n,
                    emojis_count: l,
                    stickers_count: o,
                    allow_multiselect: t,
                    layout_type: a.Z.DEFAULT,
                });
        }, [e, t]),
    };
}
