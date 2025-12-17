n.d(t, { Z: () => c }), n(997841);
var i = n(54381);
n(473749);
var r = n(95015),
    l = n(901461),
    a = n(773176),
    o = n(981631),
    s = n(548498);
function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: u },
            isFocused: d,
            buttonProps: { message: p, channel: f, groupId: h, compact: m = !1 },
            messageWindow: g,
        } = e,
        b = p.state === o.yb.SENDING,
        C = p.id === h,
        y = (0, r.yE)(p.flags, o.iLy.EPHEMERAL),
        v = p.state === o.yb.SEND_FAILED;
    return b || (y && !v)
        ? null
        : (0, i.jsx)(a.Z, {
              className: s.buttons,
              innerClassName: s.buttonsInner,
              isHeader: !m && C && !(0, l.Z)(p),
              isReply: !m && p.type === o.uaV.REPLY && null != p.messageReference,
              channel: f,
              message: p,
              messageWindow: g,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: c,
              showMoreUtilities: u,
              isFocused: d,
          });
}
