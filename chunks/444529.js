n.d(t, {
    A: () => c,
}),
    n(938796);
var r = n(627968);
n(64700);
var l = n(665260),
    i = n(143413),
    a = n(907495),
    s = n(652215),
    o = n(119907);

function c(e) {
    let {
            setPopout: t,
            messagePopouts: { emojiPicker: n, emojiBurstPicker: c, moreUtilities: u },
            isFocused: d,
            buttonProps: { message: f, channel: p, groupId: h, compact: b = !1 },
            messageWindow: g,
        } = e,
        m = f.state === s.cmJ.SENDING,
        A = f.id === h,
        y = (0, l.Lt)(f.flags, s.pr7.EPHEMERAL),
        O = f.state === s.cmJ.SEND_FAILED;
    return m || (y && !O)
        ? null
        : (0, r.jsx)(a.A, {
              className: o.Uo,
              innerClassName: o.Mc,
              isHeader: !b && A && !(0, i.A)(f),
              isReply: !b && f.type === s.lAJ.REPLY && null != f.messageReference,
              channel: p,
              message: f,
              messageWindow: g,
              setPopout: t,
              showEmojiPicker: n,
              showEmojiBurstPicker: c,
              showMoreUtilities: u,
              isFocused: d,
          });
}
