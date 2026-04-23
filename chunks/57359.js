n.d(t, { I: () => o });
var a = n(64700),
    l = n(966974),
    i = n(58149),
    r = n(652215);
function o(e, t) {
    return {
        trackPollCreationCancelled: a.useCallback(() => {
            let n = 0,
                a = 0,
                o = 0;
            e.forEach((e) => {
                let t = e.image;
                null != t &&
                    (null != t.emoji
                        ? (a += 1)
                        : null != t.stickerId
                          ? (o += 1)
                          : null != t.mediaAttachmentState && (n += 1));
            }),
                i.Ay.trackWithMetadata(r.HAw.POLL_CREATION_CANCELLED, {
                    answers_count: e.length,
                    attachments_count: n,
                    emojis_count: a,
                    stickers_count: o,
                    allow_multiselect: t,
                    layout_type: l.Z.DEFAULT,
                });
        }, [e, t]),
    };
}
