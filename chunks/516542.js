n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(904245),
    l = n(13245),
    a = n(655687),
    s = n(541716),
    d = n(752305),
    c = n(893718),
    u = n(957730),
    h = n(849522),
    _ = n(145597),
    p = n(981631),
    f = n(640784);
function g(e) {
    let { id: t, channel: n, onSend: g } = e,
        m = (0, h.Z)(),
        { placeholder: v, accessibilityLabel: x } = (0, a.Z)({ channel: n }),
        [E, C] = r.useState(() => (0, d.H2)()),
        { textValue: Z, richValue: S } = E,
        [I, y] = r.useState(!1),
        b = r.useCallback(() => y(!0), []),
        w = r.useCallback(() => y(!1), []),
        N = r.useCallback((e, t, n) => {
            C({
                textValue: t,
                richValue: n
            });
        }, []),
        O = r.useCallback(
            (e) => {
                'Escape' === e.key && l.Z.updateNotificationStatus(t, p._1z.ACTIVE);
            },
            [t]
        ),
        T = r.useCallback(
            () => (
                Z.length > m || (o.Z.sendMessage(n.id, u.ZP.parse(n, Z), !1), l.Z.setInputLocked(!0, (0, _.QF)()), l.Z.updateNotificationStatus(t, p._1z.DISMISSED), null == g || g(Z)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [Z, m, n, t, g]
        );
    return (0, i.jsx)(c.Z, {
        innerClassName: f.textArea,
        onChange: N,
        placeholder: v,
        accessibilityLabel: x,
        channel: n,
        textValue: Z,
        richValue: S,
        type: s.Ie.OVERLAY_INLINE_REPLY,
        onBlur: w,
        onFocus: b,
        focused: I,
        onSubmit: T,
        onKeyDown: O,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
