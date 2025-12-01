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
        handleContextMenu: l,
        isInteracting: c,
        isAutomodBlockedMessage: u,
        isMessageSnapshot: d,
        renderThreadAccessory: f,
        renderSuppressEmbeds: p,
        renderReactions: _,
        forceAddReactions: m,
        disableComponentInteractivity: h,
        className: g,
    } = e;
    return u
        ? null
        : (0, r.jsx)(i.Z, {
              message: t,
              children: (0, r.jsx)(a.ZP, {
                  className: g,
                  isInteracting: c,
                  message: t,
                  channel: n,
                  compact: o,
                  hasSpoilerEmbeds: s,
                  isMessageSnapshot: d,
                  onMediaItemContextMenu: l,
                  renderThreadAccessory: f,
                  disableComponentInteractivity: h,
                  renderSuppressEmbeds: p,
                  forceAddReactions: m,
                  renderReactions: _,
              }),
          });
}
function s(e, t) {
    let {
        message: n,
        channel: i,
        compact: o = !1,
        renderThreadAccessory: s,
        disableReactionCreates: l,
        disableReactionUpdates: c,
    } = e;
    return (0, r.jsx)(a.$p, {
        message: n,
        channel: i,
        compact: o,
        hasSpoilerEmbeds: t,
        renderThreadAccessory: s,
        disableReactionCreates: l,
        disableReactionUpdates: c,
    });
}
