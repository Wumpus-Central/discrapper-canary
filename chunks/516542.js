n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(904245),
    o = n(13245),
    a = n(655687),
    s = n(541716),
    d = n(752305),
    u = n(893718),
    c = n(957730),
    h = n(849522),
    _ = n(145597),
    p = n(981631),
    f = n(776439);
function m(e) {
    let { id: t, channel: n, onSend: m } = e,
        g = (0, h.Z)(),
        { placeholder: v, accessibilityLabel: E } = (0, a.Z)({ channel: n }),
        [x, I] = l.useState(() => (0, d.H2)()),
        { textValue: C, richValue: S } = x,
        [Z, y] = l.useState(!1),
        O = l.useCallback(() => y(!0), []),
        N = l.useCallback(() => y(!1), []),
        b = l.useCallback((e, t, n) => {
            I({
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
                C.length > g || (r.Z.sendMessage(n.id, c.ZP.parse(n, C), !1), o.Z.setInputLocked(!0, (0, _.QF)()), o.Z.updateNotificationStatus(t, p._1z.DISMISSED), null == m || m(C)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [C, g, n, t, m]
        );
    return (0, i.jsx)(u.Z, {
        innerClassName: f.textArea,
        onChange: b,
        placeholder: v,
        accessibilityLabel: E,
        channel: n,
        textValue: C,
        richValue: S,
        type: s.Ie.OVERLAY_INLINE_REPLY,
        onBlur: N,
        onFocus: O,
        focused: Z,
        onSubmit: w,
        onKeyDown: T,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
