n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(904245),
    l = n(13245),
    a = n(655687),
    s = n(541716),
    c = n(752305),
    u = n(893718),
    d = n(957730),
    p = n(849522),
    f = n(145597),
    h = n(981631),
    g = n(365889);
function _(e) {
    let { id: t, channel: n, onSend: _ } = e,
        m = (0, p.Z)(),
        { placeholder: v, accessibilityLabel: O } = (0, a.Z)({ channel: n }),
        [b, y] = r.useState(() => (0, c.H2)()),
        { textValue: E, richValue: x } = b,
        [I, S] = r.useState(!1),
        C = r.useCallback(() => S(!0), []),
        j = r.useCallback(() => S(!1), []),
        w = r.useCallback((e, t, n) => {
            y({
                textValue: t,
                richValue: n
            });
        }, []),
        Z = r.useCallback(
            (e) => {
                'Escape' === e.key && l.Z.updateNotificationStatus(t, h._1z.ACTIVE);
            },
            [t]
        ),
        N = r.useCallback(
            () => (
                E.length > m || (o.Z.sendMessage(n.id, d.ZP.parse(n, E), !1), l.Z.setInputLocked(!0, (0, f.QF)()), l.Z.updateNotificationStatus(t, h._1z.DISMISSED), null == _ || _(E)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [E, m, n, t, _]
        );
    return (0, i.jsx)(u.Z, {
        innerClassName: g.textArea,
        onChange: w,
        placeholder: v,
        accessibilityLabel: O,
        channel: n,
        textValue: E,
        richValue: x,
        type: s.Ie.OVERLAY_INLINE_REPLY,
        onBlur: j,
        onFocus: C,
        focused: I,
        onSubmit: N,
        onKeyDown: Z,
        autoCompletePosition: 'bottom',
        disableThemedBackground: !0
    });
}
