n.d(t, { A: () => r, J: () => a });
var i = n(477900);
n(582128);
var l = n(21878),
    s = n(908239);
function r(e) {
    let {
        channelMessageProps: { message: t, channel: n, compact: a = !1 },
        hasSpoilerEmbeds: o,
        hasBailedAst: d,
        handleContextMenu: c,
        isInteracting: u,
        isAutomodBlockedMessage: m,
        isMessageSnapshot: h,
        renderThreadAccessory: g,
        renderSuppressEmbeds: p,
        renderReactions: A,
        hideInviteEmbedBanner: x,
        hideActivityInvite: f,
        disableComponentInteractivity: I,
        className: E,
    } = e;
    return m
        ? null
        : (0, i.jsx)(l.A, {
              message: t,
              children: (0, i.jsx)(s.Ay, {
                  renderAccessories: r,
                  className: E,
                  isInteracting: u,
                  message: t,
                  channel: n,
                  compact: a,
                  hasSpoilerEmbeds: o,
                  hasBailedAst: d,
                  isMessageSnapshot: h,
                  onMediaItemContextMenu: c,
                  renderThreadAccessory: g,
                  disableComponentInteractivity: I,
                  renderSuppressEmbeds: p,
                  renderReactions: A,
                  hideInviteEmbedBanner: x,
                  hideActivityInvite: f,
              }),
          });
}
function a(e, t, n) {
    let {
        message: l,
        channel: a,
        compact: o = !1,
        renderThreadAccessory: d,
        disableReactionCreates: c,
        disableReactionUpdates: u,
    } = e;
    return (0, i.jsx)(s.OC, {
        renderAccessories: r,
        message: l,
        channel: a,
        compact: o,
        hasSpoilerEmbeds: t,
        hasBailedAst: n,
        renderThreadAccessory: d,
        disableReactionCreates: c,
        disableReactionUpdates: u,
    });
}
