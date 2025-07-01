n.d(t, {
    Q: () => s,
    Z: () => o
});
var r = n(255367);
n(73800);
var i = n(275726),
    l = n(275344),
    a = n(938353);
function o(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: o = !1 },
        hasSpoilerEmbeds: s,
        handleContextMenu: c,
        isInteracting: u,
        isAutomodBlockedMessage: d,
        isMessageSnapshot: p,
        renderThreadAccessory: m,
        renderSuppressEmbeds: f,
        renderReactions: g,
        forceAddReactions: _,
        disableComponentInteractivity: h,
        className: b
    } = e;
    return d
        ? null
        : (0, r.jsx)(l.Z, {
              message: t,
              children: (0, r.jsx)(a.ZP, {
                  className: b,
                  isInteracting: u,
                  message: t,
                  channel: n,
                  compact: o,
                  hasSpoilerEmbeds: s,
                  isMessageSnapshot: p,
                  onMediaItemContextMenu: c,
                  renderThreadAccessory: m,
                  disableComponentInteractivity: h,
                  renderSuppressEmbeds: f,
                  forceAddReactions: _ || t.type === i.u.EMOJI_ADDED,
                  renderReactions: g
              })
          });
}
function s(e, t) {
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
