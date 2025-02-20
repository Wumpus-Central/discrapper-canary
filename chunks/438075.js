n.d(t, {
    Q: () => l,
    Z: () => o
});
var r = n(200651);
n(192379);
var i = n(275344),
    a = n(938353);
function o(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: o = !1 },
        hasSpoilerEmbeds: l,
        handleContextMenu: s,
        isInteracting: c,
        isAutomodBlockedMessage: d,
        isMessageSnapshot: u,
        renderThreadAccessory: p,
        renderSuppressEmbeds: m,
        renderReactions: f,
        forceAddReactions: h,
        disableComponentInteractivity: g,
        className: _
    } = e;
    return d
        ? null
        : (0, r.jsx)(i.Z, {
              message: t,
              children: (0, r.jsx)(a.ZP, {
                  className: _,
                  isInteracting: c,
                  message: t,
                  channel: n,
                  compact: o,
                  hasSpoilerEmbeds: l,
                  isMessageSnapshot: u,
                  onMediaItemContextMenu: s,
                  renderThreadAccessory: p,
                  disableComponentInteractivity: g,
                  renderSuppressEmbeds: m,
                  forceAddReactions: h,
                  renderReactions: f
              })
          });
}
function l(e, t) {
    let { message: n, channel: i, compact: o = !1, renderThreadAccessory: l, disableReactionCreates: s, disableReactionUpdates: c, isSearchResult: d } = e;
    return (0, r.jsx)(a.$p, {
        message: n,
        channel: i,
        compact: o,
        hasSpoilerEmbeds: t,
        renderThreadAccessory: l,
        disableReactionCreates: s,
        disableReactionUpdates: c,
        isSearchResult: d
    });
}
