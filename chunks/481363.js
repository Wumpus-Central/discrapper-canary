n.d(t, { Z: () => c }), n(789020);
var i = n(200651);
n(192379);
var l = n(630388),
    a = n(901461),
    r = n(773176),
    s = n(981631),
    o = n(194240);
function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: d },
            isFocused: u,
            buttonProps: { message: h, channel: p, groupId: m, compact: f = !1 }
        } = e,
        g = h.state === s.yb.SENDING,
        _ = h.id === m,
        C = (0, l.yE)(h.flags, s.iLy.EPHEMERAL),
        x = h.state === s.yb.SEND_FAILED;
    return g || (C && !x)
        ? null
        : (0, i.jsx)(r.Z, {
              className: o.buttons,
              innerClassName: o.buttonsInner,
              isHeader: !f && _ && !(0, a.Z)(h),
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
