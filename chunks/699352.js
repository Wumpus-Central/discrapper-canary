n.d(t, {
    A: () => s,
    J: () => o,
});
var r = n(627968);
n(64700);
var i = n(21878),
    a = n(756369);

function s(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: s = !1 },
        hasSpoilerEmbeds: o,
        hasBailedAst: l,
        handleContextMenu: c,
        isInteracting: u,
        isAutomodBlockedMessage: d,
        isMessageSnapshot: f,
        renderThreadAccessory: p,
        renderSuppressEmbeds: _,
        renderReactions: h,
        forceAddReactions: m,
        disableComponentInteractivity: g,
        className: E,
    } = e;
    return d
        ? null
        : (0, r.jsx)(i.A, {
              message: t,
              children: (0, r.jsx)(a.Ay, {
                  className: E,
                  isInteracting: u,
                  message: t,
                  channel: n,
                  compact: s,
                  hasSpoilerEmbeds: o,
                  hasBailedAst: l,
                  isMessageSnapshot: f,
                  onMediaItemContextMenu: c,
                  renderThreadAccessory: p,
                  disableComponentInteractivity: g,
                  renderSuppressEmbeds: _,
                  forceAddReactions: m,
                  renderReactions: h,
              }),
          });
}

function o(e, t, n) {
    let {
        message: i,
        channel: s,
        compact: o = !1,
        renderThreadAccessory: l,
        disableReactionCreates: c,
        disableReactionUpdates: u,
    } = e;
    return (0, r.jsx)(a.OC, {
        message: i,
        channel: s,
        compact: o,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: l,
        disableReactionCreates: c,
        disableReactionUpdates: u,
    });
}
