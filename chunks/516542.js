n.d(t, { Z: () => f }), n(47120);
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
    g = n(640784);
function f(e) {
    let { id: t, channel: n, onSend: f } = e,
        m = (0, h.Z)(),
        { placeholder: v, accessibilityLabel: x } = (0, a.Z)({ channel: n }),
        [E, Z] = l.useState(() => (0, d.H2)()),
        { textValue: C, richValue: I } = E,
        [S, b] = l.useState(!1),
        y = l.useCallback(() => b(!0), []),
        N = l.useCallback(() => b(!1), []),
        w = l.useCallback((e, t, n) => {
            Z({
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
        O = l.useCallback(
            () => (
                C.length > m || (r.Z.sendMessage(n.id, u.ZP.parse(n, C), !1), o.Z.setInputLocked(!0, (0, _.QF)()), o.Z.updateNotificationStatus(t, p._1z.DISMISSED), null == f || f(C)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [C, m, n, t, f]
        );
    return (0, i.jsx)(c.Z, {
        innerClassName: g.textArea,
        onChange: w,
        placeholder: v,
        accessibilityLabel: x,
        channel: n,
        textValue: C,
        richValue: I,
        type: s.Ie.OVERLAY_INLINE_REPLY,
        onBlur: N,
        onFocus: y,
        focused: S,
        onSubmit: O,
        onKeyDown: T,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
