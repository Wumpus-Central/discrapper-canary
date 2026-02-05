n.d(t, { A: () => r, J: () => s });
var i = n(627968);
n(64700);
var l = n(21878),
    a = n(756369);
function r(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: r = !1 },
        hasSpoilerEmbeds: s,
        hasBailedAst: o,
        handleContextMenu: d,
        isInteracting: c,
        isAutomodBlockedMessage: u,
        isMessageSnapshot: m,
        renderThreadAccessory: _,
        renderSuppressEmbeds: h,
        renderReactions: p,
        forceAddReactions: g,
        disableComponentInteractivity: A,
        className: f,
    } = e;
    return u
        ? null
        : (0, i.jsx)(l.A, {
              message: t,
              children: (0, i.jsx)(a.Ay, {
                  className: f,
                  isInteracting: c,
                  message: t,
                  channel: n,
                  compact: r,
                  hasSpoilerEmbeds: s,
                  hasBailedAst: o,
                  isMessageSnapshot: m,
                  onMediaItemContextMenu: d,
                  renderThreadAccessory: _,
                  disableComponentInteractivity: A,
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
        disableReactionCreates: d,
        disableReactionUpdates: c,
    } = e;
    return (0, i.jsx)(a.OC, {
        message: l,
        channel: r,
        compact: s,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: o,
        disableReactionCreates: d,
        disableReactionUpdates: c,
    });
}
