n.d(t, { A: () => a, J: () => r });
var i = n(477900);
n(582128);
var l = n(21878),
    s = n(279306);
function a(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: a = !1 },
        hasSpoilerEmbeds: r,
        hasBailedAst: o,
        handleContextMenu: c,
        isInteracting: d,
        isAutomodBlockedMessage: u,
        isMessageSnapshot: m,
        renderThreadAccessory: h,
        renderSuppressEmbeds: g,
        renderReactions: A,
        hideInviteEmbedBanner: p,
        hideActivityInvite: x,
        disableComponentInteractivity: f,
        className: E,
    } = e;
    return u
        ? null
        : (0, i.jsx)(l.A, {
              message: t,
              children: (0, i.jsx)(s.Ay, {
                  className: E,
                  isInteracting: d,
                  message: t,
                  channel: n,
                  compact: a,
                  hasSpoilerEmbeds: r,
                  hasBailedAst: o,
                  isMessageSnapshot: m,
                  onMediaItemContextMenu: c,
                  renderThreadAccessory: h,
                  disableComponentInteractivity: f,
                  renderSuppressEmbeds: g,
                  renderReactions: A,
                  hideInviteEmbedBanner: p,
                  hideActivityInvite: x,
              }),
          });
}
function r(e, t, n) {
    let {
        message: l,
        channel: a,
        compact: r = !1,
        renderThreadAccessory: o,
        disableReactionCreates: c,
        disableReactionUpdates: d,
    } = e;
    return (0, i.jsx)(s.OC, {
        message: l,
        channel: a,
        compact: r,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: o,
        disableReactionCreates: c,
        disableReactionUpdates: d,
    });
}
