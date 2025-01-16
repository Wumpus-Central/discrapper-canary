n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(789020);
var i = n(200651);
n(192379);
var l = n(630388),
    r = n(901461),
    a = n(773176),
    s = n(981631),
    o = n(46124);
function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: d },
            isFocused: u,
            buttonProps: { message: h, channel: p, groupId: m, compact: f = !1 }
        } = e,
        g = h.state === s.yb.SENDING,
        C = h.id === m,
        x = (0, l.yE)(h.flags, s.iLy.EPHEMERAL),
        v = h.state === s.yb.SEND_FAILED;
    return g || (x && !v)
        ? null
        : (0, i.jsx)(a.Z, {
              className: o.buttons,
              innerClassName: o.buttonsInner,
              isHeader: !f && C && !(0, r.Z)(h),
              isReply: !f && h.type === s.uaV.REPLY && null != h.messageReference,
              channel: p,
              message: h,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: c,
              showMoreUtilities: d,
              isFocused: u
          });
}
