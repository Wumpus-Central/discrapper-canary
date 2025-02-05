n.d(t, {
    Q: () => s,
    Z: () => r
});
var i = n(200651);
n(192379);
var l = n(275344),
    a = n(938353);
function r(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: r = !1 },
        hasSpoilerEmbeds: s,
        handleContextMenu: o,
        isInteracting: c,
        isAutomodBlockedMessage: d,
        isMessageSnapshot: u,
        renderThreadAccessory: m,
        renderSuppressEmbeds: _,
        renderReactions: h,
        forceAddReactions: p,
        disableComponentInteractivity: g,
        className: f
    } = e;
    return d
        ? null
        : (0, i.jsx)(l.Z, {
              message: t,
              children: (0, i.jsx)(a.ZP, {
                  className: f,
                  isInteracting: c,
                  message: t,
                  channel: n,
                  compact: r,
                  hasSpoilerEmbeds: s,
                  isMessageSnapshot: u,
                  onMediaItemContextMenu: o,
                  renderThreadAccessory: m,
                  disableComponentInteractivity: g,
                  renderSuppressEmbeds: _,
                  forceAddReactions: p,
                  renderReactions: h
              })
          });
}
function s(e, t) {
    let { message: n, channel: l, compact: r = !1, renderThreadAccessory: s, disableReactionCreates: o, disableReactionUpdates: c, isSearchResult: d } = e;
    return (0, i.jsx)(a.$p, {
        message: n,
        channel: l,
        compact: r,
        hasSpoilerEmbeds: t,
        renderThreadAccessory: s,
        disableReactionCreates: o,
        disableReactionUpdates: c,
        isSearchResult: d
    });
}
