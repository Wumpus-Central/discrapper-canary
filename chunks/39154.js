t.d(s, { Z: () => l }), t(789020);
var n = t(978003);
function l(e, s) {
    return null == (s = null != s ? s : (0, n.Z)(e) ? e.messageSnapshots[0] : void 0)
        ? e
        : e.merge({
              content: s.message.content,
              attachments: s.message.attachments,
              embeds: s.message.embeds,
              flags: s.message.flags,
              components: s.message.components,
              editedTimestamp: null,
              timestamp: s.message.timestamp,
              codedLinks: s.message.codedLinks,
              reactions: [],
              messageSnapshots: [],
              stickers: s.message.stickers,
              stickerItems: s.message.stickerItems,
              customRenderedContent: null
          });
}
