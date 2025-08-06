n.d(t, {
    Q: () => s,
    Z: () => a,
});
var r = n(255367);
n(73800);
var i = n(275344),
    o = n(938353);
function a(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: a = !1 },
        hasSpoilerEmbeds: s,
        handleContextMenu: l,
        isInteracting: c,
        isAutomodBlockedMessage: u,
        isMessageSnapshot: d,
        renderThreadAccessory: f,
        renderSuppressEmbeds: _,
        renderReactions: p,
        forceAddReactions: h,
        disableComponentInteractivity: m,
        className: g,
    } = e;
    return u
        ? null
        : (0, r.jsx)(i.Z, {
              message: t,
              children: (0, r.jsx)(o.ZP, {
                  className: g,
                  isInteracting: c,
                  message: t,
                  channel: n,
                  compact: a,
                  hasSpoilerEmbeds: s,
                  isMessageSnapshot: d,
                  onMediaItemContextMenu: l,
                  renderThreadAccessory: f,
                  disableComponentInteractivity: m,
                  renderSuppressEmbeds: _,
                  forceAddReactions: h,
                  renderReactions: p,
              }),
          });
}
function s(e, t) {
    let {
        message: n,
        channel: i,
        compact: a = !1,
        renderThreadAccessory: s,
        disableReactionCreates: l,
        disableReactionUpdates: c,
        isSearchResult: u,
    } = e;
    return (0, r.jsx)(o.$p, {
        message: n,
        channel: i,
        compact: a,
        hasSpoilerEmbeds: t,
        renderThreadAccessory: s,
        disableReactionCreates: l,
        disableReactionUpdates: c,
        isSearchResult: u,
    });
}
