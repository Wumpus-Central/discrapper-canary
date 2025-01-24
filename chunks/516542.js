i.d(e, {
    Z: function () {
        return S;
    }
}),
    i(47120);
var n = i(200651),
    l = i(192379),
    o = i(904245),
    r = i(13245),
    s = i(655687),
    a = i(541716),
    u = i(752305),
    d = i(893718),
    c = i(957730),
    h = i(849522),
    E = i(145597),
    p = i(981631),
    f = i(640784);
function S(t) {
    let { id: e, channel: i, onSend: S } = t,
        _ = (0, h.Z)(),
        { placeholder: g, accessibilityLabel: m } = (0, s.Z)({ channel: i }),
        [v, I] = l.useState(() => (0, u.H2)()),
        { textValue: Z, richValue: O } = v,
        [C, N] = l.useState(!1),
        y = l.useCallback(() => N(!0), []),
        T = l.useCallback(() => N(!1), []),
        R = l.useCallback((t, e, i) => {
            I({
                textValue: e,
                richValue: i
            });
        }, []),
        x = l.useCallback(
            () =>
                Z.length > _
                    ? Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })
                    : (o.Z.sendMessage(i.id, c.ZP.parse(i, Z), !1),
                      r.Z.setInputLocked(!0, (0, E.QF)()),
                      r.Z.updateNotificationStatus(e, p._1z.DISMISSED),
                      null == S || S(Z),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !0
                      })),
            [Z, _, i, e, S]
        );
    return (0, n.jsx)(d.Z, {
        innerClassName: f.textArea,
        onChange: R,
        placeholder: g,
        accessibilityLabel: m,
        channel: i,
        textValue: Z,
        richValue: O,
        type: a.Ie.OVERLAY_INLINE_REPLY,
        onBlur: T,
        onFocus: y,
        focused: C,
        onSubmit: x,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
