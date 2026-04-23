n.d(t, { A: () => s, J: () => r });
var i = n(627968);
n(64700);
var l = n(21878),
    a = n(756369);
function s(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: s = !1 },
        hasSpoilerEmbeds: r,
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
                  compact: s,
                  hasSpoilerEmbeds: r,
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
function r(e, t, n) {
    let {
        message: l,
        channel: s,
        compact: r = !1,
        renderThreadAccessory: o,
        disableReactionCreates: d,
        disableReactionUpdates: c,
    } = e;
    return (0, i.jsx)(a.OC, {
        message: l,
        channel: s,
        compact: r,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: o,
        disableReactionCreates: d,
        disableReactionUpdates: c,
    });
}
