i.d(e, { Z: () => f }), i(47120);
var n = i(200651),
    l = i(192379),
    s = i(904245),
    o = i(13245),
    r = i(655687),
    a = i(541716),
    d = i(752305),
    u = i(893718),
    c = i(957730),
    h = i(849522),
    E = i(145597),
    p = i(981631),
    S = i(640784);
function f(t) {
    let { id: e, channel: i, onSend: f } = t,
        g = (0, h.Z)(),
        { placeholder: _, accessibilityLabel: m } = (0, r.Z)({ channel: i }),
        [v, I] = l.useState(() => (0, d.H2)()),
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
            (t) => {
                'Escape' === t.key && o.Z.updateNotificationStatus(e, p._1z.ACTIVE);
            },
            [e]
        ),
        A = l.useCallback(
            () => (
                Z.length > g || (s.Z.sendMessage(i.id, c.ZP.parse(i, Z), !1), o.Z.setInputLocked(!0, (0, E.QF)()), o.Z.updateNotificationStatus(e, p._1z.DISMISSED), null == f || f(Z)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [Z, g, i, e, f]
        );
    return (0, n.jsx)(u.Z, {
        innerClassName: S.textArea,
        onChange: R,
        placeholder: _,
        accessibilityLabel: m,
        channel: i,
        textValue: Z,
        richValue: O,
        type: a.Ie.OVERLAY_INLINE_REPLY,
        onBlur: T,
        onFocus: y,
        focused: C,
        onSubmit: A,
        onKeyDown: x,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
