t.d(s, { A: () => l }), t(938796);
var a = t(427930);
function l(e, s) {
    return null == (s = s ?? ((0, a.A)(e) ? e.messageSnapshots[0] : void 0))
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
              customRenderedContent: null,
          });
}
