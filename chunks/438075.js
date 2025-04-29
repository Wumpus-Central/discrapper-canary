n.d(t, {
    Q: () => o,
    Z: () => a
});
var r = n(255367);
n(73800);
var i = n(275344),
    l = n(938353);
function a(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: a = !1 },
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
              children: (0, r.jsx)(l.ZP, {
                  className: _,
                  isInteracting: c,
                  message: t,
                  channel: n,
                  compact: a,
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
    let { message: n, channel: i, compact: a = !1, renderThreadAccessory: o, disableReactionCreates: s, disableReactionUpdates: c, isSearchResult: u } = e;
    return (0, r.jsx)(l.$p, {
        message: n,
        channel: i,
        compact: a,
        hasSpoilerEmbeds: t,
        renderThreadAccessory: o,
        disableReactionCreates: s,
        disableReactionUpdates: c,
        isSearchResult: u
    });
}
