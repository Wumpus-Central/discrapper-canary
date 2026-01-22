n.d(t, {
    I: () => o,
});
var r = n(64700),
    l = n(966974),
    a = n(58149),
    i = n(652215);

function o(e, t) {
    return {
        trackPollCreationCancelled: r.useCallback(() => {
            let n = 0,
                r = 0,
                o = 0;
            e.forEach((e) => {
                let t = e.image;
                null != t &&
                    (null != t.emoji
                        ? (r += 1)
                        : null != t.stickerId
                          ? (o += 1)
                          : null != t.mediaAttachmentState && (n += 1));
            }),
                a.Ay.trackWithMetadata(i.HAw.POLL_CREATION_CANCELLED, {
                    answers_count: e.length,
                    attachments_count: n,
                    emojis_count: r,
                    stickers_count: o,
                    allow_multiselect: t,
                    layout_type: l.Z.DEFAULT,
                });
        }, [e, t]),
    };
}
