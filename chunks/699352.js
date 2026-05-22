n.d(t, { A: () => r, J: () => a });
var i = n(627968);
n(64700);
var l = n(21878),
    s = n(16601);
function r(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: r = !1 },
        hasSpoilerEmbeds: a,
        hasBailedAst: o,
        handleContextMenu: d,
        isInteracting: c,
        isAutomodBlockedMessage: u,
        isMessageSnapshot: m,
        renderThreadAccessory: h,
        renderSuppressEmbeds: g,
        renderReactions: p,
        forceAddReactions: A,
        disableComponentInteractivity: x,
        className: f,
    } = e;
    return u
        ? null
        : (0, i.jsx)(l.A, {
              message: t,
              children: (0, i.jsx)(s.Ay, {
                  className: f,
                  isInteracting: c,
                  message: t,
                  channel: n,
                  compact: r,
                  hasSpoilerEmbeds: a,
                  hasBailedAst: o,
                  isMessageSnapshot: m,
                  onMediaItemContextMenu: d,
                  renderThreadAccessory: h,
                  disableComponentInteractivity: x,
                  renderSuppressEmbeds: g,
                  forceAddReactions: A,
                  renderReactions: p,
              }),
          });
}
function a(e, t, n) {
    let {
        message: l,
        channel: r,
        compact: a = !1,
        renderThreadAccessory: o,
        disableReactionCreates: d,
        disableReactionUpdates: c,
    } = e;
    return (0, i.jsx)(s.OC, {
        message: l,
        channel: r,
        compact: a,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: o,
        disableReactionCreates: d,
        disableReactionUpdates: c,
    });
}
