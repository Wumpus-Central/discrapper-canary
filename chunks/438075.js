n.d(t, {
    Q: function () {
        return o;
    },
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(275344),
    l = n(938353);
function a(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: a = !1 },
        hasSpoilerEmbeds: o,
        handleContextMenu: s,
        isInteracting: c,
        isAutomodBlockedMessage: u,
        isMessageSnapshot: d,
        renderThreadAccessory: m,
        renderSuppressEmbeds: h,
        renderReactions: f,
        forceAddReactions: p,
        disableComponentInteractivity: _,
        className: g
    } = e;
    return u
        ? null
        : (0, i.jsx)(r.Z, {
              message: t,
              children: (0, i.jsx)(l.ZP, {
                  className: g,
                  isInteracting: c,
                  message: t,
                  channel: n,
                  compact: a,
                  hasSpoilerEmbeds: o,
                  isMessageSnapshot: d,
                  onMediaItemContextMenu: s,
                  renderThreadAccessory: m,
                  disableComponentInteractivity: _,
                  renderSuppressEmbeds: h,
                  forceAddReactions: p,
                  renderReactions: f
              })
          });
}
function o(e, t) {
    let { message: n, channel: r, compact: a = !1, renderThreadAccessory: o, disableReactionCreates: s, disableReactionUpdates: c, isSearchResult: u } = e;
    return (0, i.jsx)(l.$p, {
        message: n,
        channel: r,
        compact: a,
        hasSpoilerEmbeds: t,
        renderThreadAccessory: o,
        disableReactionCreates: s,
        disableReactionUpdates: c,
        isSearchResult: u
    });
}
