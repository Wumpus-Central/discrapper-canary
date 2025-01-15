i.d(t, {
    Z: function () {
        return m;
    }
}),
    i(47120);
var n = i(200651),
    l = i(192379),
    o = i(904245),
    s = i(13245),
    r = i(655687),
    a = i(541716),
    u = i(752305),
    d = i(893718),
    c = i(957730),
    h = i(849522),
    f = i(145597),
    p = i(981631),
    E = i(721880);
function m(e) {
    let { id: t, channel: i, onSend: m } = e,
        v = (0, h.Z)(),
        { placeholder: g, accessibilityLabel: S } = (0, r.Z)({ channel: i }),
        [_, Z] = l.useState(() => (0, u.H2)()),
        { textValue: C, richValue: O } = _,
        [I, N] = l.useState(!1),
        y = l.useCallback(() => N(!0), []),
        x = l.useCallback(() => N(!1), []),
        b = l.useCallback((e, t, i) => {
            Z({
                textValue: t,
                richValue: i
            });
        }, []),
        T = l.useCallback(
            () =>
                C.length > v
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (o.Z.sendMessage(i.id, c.ZP.parse(i, C), !1),
                      s.Z.setInputLocked(!0, (0, f.QF)()),
                      s.Z.updateNotificationStatus(t, p._1z.DISMISSED),
                      null == m || m(C),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [C, v, i, t, m]
        );
    return (0, n.jsx)(d.Z, {
        innerClassName: E.textArea,
        onChange: b,
        placeholder: g,
        accessibilityLabel: S,
        channel: i,
        textValue: C,
        richValue: O,
        type: a.Ie.OVERLAY_INLINE_REPLY,
        onBlur: x,
        onFocus: y,
        focused: I,
        onSubmit: T,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
