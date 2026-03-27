n.d(t, { A: () => c }), n(938796);
var i = n(627968);
n(64700);
var l = n(665260),
    s = n(143413),
    a = n(907495),
    r = n(652215),
    o = n(480972);
function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: d },
            isFocused: u,
            buttonProps: { message: h, channel: m, groupId: A, compact: g = !1 },
            messageWindow: p,
        } = e,
        f = h.state === r.cmJ.SENDING,
        _ = h.id === A,
        E = (0, l.Lt)(h.flags, r.pr7.EPHEMERAL),
        x = h.state === r.cmJ.SEND_FAILED;
    return f || (E && !x)
        ? null
        : (0, i.jsx)(a.A, {
              className: o.Uo,
              innerClassName: o.Mc,
              isHeader: !g && _ && !(0, s.A)(h),
              isReply: !g && h.type === r.lAJ.REPLY && null != h.messageReference,
              channel: m,
              message: h,
              messageWindow: p,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: c,
              showMoreUtilities: d,
              isFocused: u,
          });
}
