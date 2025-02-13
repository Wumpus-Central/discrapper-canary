n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(904245),
    o = n(13245),
    a = n(655687),
    s = n(541716),
    d = n(752305),
    c = n(893718),
    u = n(957730),
    h = n(849522),
    _ = n(145597),
    p = n(981631),
    f = n(776439);
function g(e) {
    let { id: t, channel: n, onSend: g } = e,
        m = (0, h.Z)(),
        { placeholder: v, accessibilityLabel: E } = (0, a.Z)({ channel: n }),
        [I, x] = l.useState(() => (0, d.H2)()),
        { textValue: C, richValue: S } = I,
        [Z, y] = l.useState(!1),
        b = l.useCallback(() => y(!0), []),
        O = l.useCallback(() => y(!1), []),
        N = l.useCallback((e, t, n) => {
            x({
                textValue: t,
                richValue: n
            });
        }, []),
        T = l.useCallback(
            (e) => {
                'Escape' === e.key && o.Z.updateNotificationStatus(t, p._1z.ACTIVE);
            },
            [t]
        ),
        w = l.useCallback(
            () => (
                C.length > m || (r.Z.sendMessage(n.id, u.ZP.parse(n, C), !1), o.Z.setInputLocked(!0, (0, _.QF)()), o.Z.updateNotificationStatus(t, p._1z.DISMISSED), null == g || g(C)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [C, m, n, t, g]
        );
    return (0, i.jsx)(c.Z, {
        innerClassName: f.textArea,
        onChange: N,
        placeholder: v,
        accessibilityLabel: E,
        channel: n,
        textValue: C,
        richValue: S,
        type: s.Ie.OVERLAY_INLINE_REPLY,
        onBlur: O,
        onFocus: b,
        focused: Z,
        onSubmit: w,
        onKeyDown: T,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
