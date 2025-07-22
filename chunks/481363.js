(n.d(t, { Z: () => c }), n(997841));
var r = n(255367);
n(73800);
var i = n(630388),
    l = n(901461),
    a = n(773176),
    o = n(981631),
    s = n(30804);
function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: u },
            isFocused: d,
            buttonProps: { message: p, channel: h, groupId: f, compact: m = !1 },
            messageWindow: g
        } = e,
        b = p.state === o.yb.SENDING,
        _ = p.id === f,
        y = (0, i.yE)(p.flags, o.iLy.EPHEMERAL),
        C = p.state === o.yb.SEND_FAILED;
    return b || (y && !C)
        ? null
        : (0, r.jsx)(a.Z, {
              className: s.buttons,
              innerClassName: s.buttonsInner,
              isHeader: !m && _ && !(0, l.Z)(p),
              isReply: !m && p.type === o.uaV.REPLY && null != p.messageReference,
              channel: h,
              message: p,
              messageWindow: g,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: c,
              showMoreUtilities: u,
              isFocused: d
          });
}
