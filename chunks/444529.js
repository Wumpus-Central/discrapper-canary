n.d(t, { A: () => c }), n(938796);
var i = n(627968);
n(64700);
var l = n(665260),
    a = n(143413),
    s = n(907495),
    r = n(652215),
    o = n(701628);
function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: d },
            isFocused: u,
            buttonProps: { message: h, channel: m, groupId: A, compact: g = !1 },
            messageWindow: _,
        } = e,
        p = h.state === r.cmJ.SENDING,
        f = h.id === A,
        E = (0, l.Lt)(h.flags, r.pr7.EPHEMERAL),
        C = h.state === r.cmJ.SEND_FAILED;
    return p || (E && !C)
        ? null
        : (0, i.jsx)(s.A, {
              className: o.Uo,
              innerClassName: o.Mc,
              isHeader: !g && f && !(0, a.A)(h),
              isReply: !g && h.type === r.lAJ.REPLY && null != h.messageReference,
              channel: m,
              message: h,
              messageWindow: _,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: c,
              showMoreUtilities: d,
              isFocused: u,
          });
}
