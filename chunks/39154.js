r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(789020);
var a = r(978003);
function o(e, n) {
    return null == (n = null != n ? n : (0, a.Z)(e) ? e.messageSnapshots[0] : void 0)
        ? e
        : e.merge({
              content: n.message.content,
              attachments: n.message.attachments,
              embeds: n.message.embeds,
              flags: n.message.flags,
              components: n.message.components,
              editedTimestamp: null,
              timestamp: n.message.timestamp,
              codedLinks: n.message.codedLinks,
              reactions: [],
              messageSnapshots: [],
              stickers: n.message.stickers,
              stickerItems: n.message.stickerItems,
              customRenderedContent: null
          });
}
