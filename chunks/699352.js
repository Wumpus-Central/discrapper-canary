n.d(t, { A: () => r, J: () => s });
var i = n(627968);
n(64700);
var l = n(21878),
    a = n(970848);
function r(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: r = !1 },
        hasSpoilerEmbeds: s,
        hasBailedAst: o,
        handleContextMenu: c,
        isInteracting: d,
        isAutomodBlockedMessage: u,
        isMessageSnapshot: _,
        renderThreadAccessory: m,
        renderSuppressEmbeds: h,
        renderReactions: p,
        forceAddReactions: g,
        disableComponentInteractivity: f,
        className: x,
    } = e;
    return u
        ? null
        : (0, i.jsx)(l.A, {
              message: t,
              children: (0, i.jsx)(a.Ay, {
                  className: x,
                  isInteracting: d,
                  message: t,
                  channel: n,
                  compact: r,
                  hasSpoilerEmbeds: s,
                  hasBailedAst: o,
                  isMessageSnapshot: _,
                  onMediaItemContextMenu: c,
                  renderThreadAccessory: m,
                  disableComponentInteractivity: f,
                  renderSuppressEmbeds: h,
                  forceAddReactions: g,
                  renderReactions: p,
              }),
          });
}
function s(e, t, n) {
    let {
        message: l,
        channel: r,
        compact: s = !1,
        renderThreadAccessory: o,
        disableReactionCreates: c,
        disableReactionUpdates: d,
    } = e;
    return (0, i.jsx)(a.OC, {
        message: l,
        channel: r,
        compact: s,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: o,
        disableReactionCreates: c,
        disableReactionUpdates: d,
    });
}
