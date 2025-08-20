n.d(t, {
    Q: () => a,
    Z: () => o,
});
var r = n(951288);
n(647438);
var i = n(275344),
    l = n(938353);
function o(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: o = !1 },
        hasSpoilerEmbeds: a,
        handleContextMenu: s,
        isInteracting: c,
        isAutomodBlockedMessage: u,
        isMessageSnapshot: d,
        renderThreadAccessory: p,
        renderSuppressEmbeds: m,
        renderReactions: f,
        forceAddReactions: g,
        disableComponentInteractivity: _,
        className: h,
    } = e;
    return u
        ? null
        : (0, r.jsx)(i.Z, {
              message: t,
              children: (0, r.jsx)(l.ZP, {
                  className: h,
                  isInteracting: c,
                  message: t,
                  channel: n,
                  compact: o,
                  hasSpoilerEmbeds: a,
                  isMessageSnapshot: d,
                  onMediaItemContextMenu: s,
                  renderThreadAccessory: p,
                  disableComponentInteractivity: _,
                  renderSuppressEmbeds: m,
                  forceAddReactions: g,
                  renderReactions: f,
              }),
          });
}
function a(e, t) {
    let {
        message: n,
        channel: i,
        compact: o = !1,
        renderThreadAccessory: a,
        disableReactionCreates: s,
        disableReactionUpdates: c,
        isSearchResult: u,
    } = e;
    return (0, r.jsx)(l.$p, {
        message: n,
        channel: i,
        compact: o,
        hasSpoilerEmbeds: t,
        renderThreadAccessory: a,
        disableReactionCreates: s,
        disableReactionUpdates: c,
        isSearchResult: u,
    });
}
