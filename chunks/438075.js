n.d(t, {
    Q: () => o,
    Z: () => l
});
var r = n(200651);
n(192379);
var i = n(275344),
    a = n(938353);
function l(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: l = !1 },
        hasSpoilerEmbeds: o,
        handleContextMenu: s,
        isInteracting: c,
        isAutomodBlockedMessage: u,
        isMessageSnapshot: d,
        renderThreadAccessory: p,
        renderSuppressEmbeds: m,
        renderReactions: f,
        forceAddReactions: h,
        disableComponentInteractivity: g,
        className: _
    } = e;
    return u
        ? null
        : (0, r.jsx)(i.Z, {
              message: t,
              children: (0, r.jsx)(a.ZP, {
                  className: _,
                  isInteracting: c,
                  message: t,
                  channel: n,
                  compact: l,
                  hasSpoilerEmbeds: o,
                  isMessageSnapshot: d,
                  onMediaItemContextMenu: s,
                  renderThreadAccessory: p,
                  disableComponentInteractivity: g,
                  renderSuppressEmbeds: m,
                  forceAddReactions: h,
                  renderReactions: f
              })
          });
}
function o(e, t) {
    let { message: n, channel: i, compact: l = !1, renderThreadAccessory: o, disableReactionCreates: s, disableReactionUpdates: c, isSearchResult: u } = e;
    return (0, r.jsx)(a.$p, {
        message: n,
        channel: i,
        compact: l,
        hasSpoilerEmbeds: t,
        renderThreadAccessory: o,
        disableReactionCreates: s,
        disableReactionUpdates: c,
        isSearchResult: u
    });
}
