n.d(t, {
    Q: () => s,
    Z: () => o,
});
var r = n(54381);
n(473749);
var i = n(275344),
    a = n(938353);
function o(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: o = !1 },
        hasSpoilerEmbeds: s,
        hasBailedAst: l,
        handleContextMenu: c,
        isInteracting: u,
        isAutomodBlockedMessage: d,
        isMessageSnapshot: f,
        renderThreadAccessory: p,
        renderSuppressEmbeds: _,
        renderReactions: m,
        forceAddReactions: h,
        disableComponentInteractivity: g,
        className: E,
    } = e;
    return d
        ? null
        : (0, r.jsx)(i.Z, {
              message: t,
              children: (0, r.jsx)(a.ZP, {
                  className: E,
                  isInteracting: u,
                  message: t,
                  channel: n,
                  compact: o,
                  hasSpoilerEmbeds: s,
                  hasBailedAst: l,
                  isMessageSnapshot: f,
                  onMediaItemContextMenu: c,
                  renderThreadAccessory: p,
                  disableComponentInteractivity: g,
                  renderSuppressEmbeds: _,
                  forceAddReactions: h,
                  renderReactions: m,
              }),
          });
}
function s(e, t, n) {
    let {
        message: i,
        channel: o,
        compact: s = !1,
        renderThreadAccessory: l,
        disableReactionCreates: c,
        disableReactionUpdates: u,
    } = e;
    return (0, r.jsx)(a.$p, {
        message: i,
        channel: o,
        compact: s,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: l,
        disableReactionCreates: c,
        disableReactionUpdates: u,
    });
}
