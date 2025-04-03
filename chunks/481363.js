n.d(t, { Z: () => c }), n(789020);
var r = n(200651);
n(192379);
var i = n(630388),
    l = n(901461),
    o = n(773176),
    a = n(981631),
    s = n(30804);
function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: u },
            isFocused: d,
            buttonProps: { message: p, channel: h, groupId: f, compact: m = !1 }
        } = e,
        g = p.state === a.yb.SENDING,
        b = p.id === f,
        _ = (0, i.yE)(p.flags, a.iLy.EPHEMERAL),
        C = p.state === a.yb.SEND_FAILED;
    return g || (_ && !C)
        ? null
        : (0, r.jsx)(o.Z, {
              className: s.buttons,
              innerClassName: s.buttonsInner,
              isHeader: !m && b && !(0, l.Z)(p),
              isReply: !m && p.type === a.uaV.REPLY && null != p.messageReference,
              channel: h,
              message: p,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: c,
              showMoreUtilities: u,
              isFocused: d
          });
}
