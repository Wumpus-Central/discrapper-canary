s.d(t, { Z: () => a }), s(997841);
var n = s(598077),
    l = s(978003);
function a(e, t) {
    return null == (t = null != t ? t : (0, l.Z)(e) ? e.messageSnapshots[0] : void 0)
        ? e
        : e.merge({
              content: t.message.content,
              attachments: t.message.attachments,
              embeds: t.message.embeds,
              flags: t.message.flags,
              components: t.message.components,
              editedTimestamp: null,
              timestamp: t.message.timestamp,
              codedLinks: t.message.codedLinks,
              reactions: [],
              messageSnapshots: [],
              stickers: t.message.stickers,
              stickerItems: t.message.stickerItems,
              customRenderedContent: null,
              author: null != t.moderatorReport ? new n.Z({ id: t.moderatorReport.reported_user_id }) : e.author
          });
}
