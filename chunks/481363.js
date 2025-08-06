n.d(t, { Z: () => c }), n(997841);
var r = n(255367);
n(73800);
var i = n(630388),
    o = n(901461),
    a = n(773176),
    s = n(981631),
    l = n(30804);
function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: u },
            isFocused: d,
            buttonProps: { message: f, channel: _, groupId: p, compact: h = !1 },
            messageWindow: m,
        } = e,
        g = f.state === s.yb.SENDING,
        E = f.id === p,
        b = (0, i.yE)(f.flags, s.iLy.EPHEMERAL),
        y = f.state === s.yb.SEND_FAILED;
    return g || (b && !y)
        ? null
        : (0, r.jsx)(a.Z, {
              className: l.buttons,
              innerClassName: l.buttonsInner,
              isHeader: !h && E && !(0, o.Z)(f),
              isReply: !h && f.type === s.uaV.REPLY && null != f.messageReference,
              channel: _,
              message: f,
              messageWindow: m,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: c,
              showMoreUtilities: u,
              isFocused: d,
          });
}
