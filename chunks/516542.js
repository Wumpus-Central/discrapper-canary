(n.d(t, { Z: () => O }), n(388685));
var i = n(255367),
    r = n(73800),
    o = n(904245),
    l = n(13245),
    a = n(45114),
    s = n(493773),
    c = n(655687),
    u = n(541716),
    d = n(752305),
    p = n(893718),
    f = n(957730),
    h = n(849522),
    m = n(145597),
    g = n(981631),
    y = n(842304);
function O(e) {
    let { id: t, replyToMessageId: n, channel: O, onSend: b } = e,
        v = (0, h.Z)(),
        { placeholder: E, accessibilityLabel: _ } = (0, c.Z)({ channel: O }),
        [x, S] = r.useState(() => (0, d.H2)()),
        { textValue: I, richValue: j } = x,
        [C, N] = r.useState(!1),
        w = r.useCallback(() => N(!0), []),
        Z = r.useCallback(() => N(!1), []);
    (0, s.ZP)(() => {
        (0, a.In)(
            O.id,
            {
                section: g.jXE.OVERLAY,
                object: g.qAy.ACK_INLINE_REPLY,
                objectType: g.Qqv.ACK_SEMI_AUTOMATIC
            },
            !0,
            !0,
            n
        );
    });
    let P = r.useCallback((e, t, n) => {
            S({
                textValue: t,
                richValue: n
            });
        }, []),
        T = r.useCallback(
            (e) => {
                'Escape' === e.key && l.Z.updateNotificationStatus(t, g._1z.ACTIVE);
            },
            [t]
        ),
        A = r.useCallback(
            () => (
                I.length > v || (o.Z.sendMessage(O.id, f.ZP.parse(O, I), !1), l.Z.setInputLocked(!0, (0, m.getPID)()), l.Z.updateNotificationStatus(t, g._1z.DISMISSED), null == b || b(I)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0
                })
            ),
            [I, v, O, t, b]
        );
    return (0, i.jsx)('div', {
        className: y.container,
        children: (0, i.jsx)(p.ZP, {
            innerClassName: y.textArea,
            onChange: P,
            placeholder: E,
            accessibilityLabel: _,
            channel: O,
            textValue: I,
            richValue: j,
            type: u.Ie.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: Z,
            onFocus: w,
            focused: C,
            onSubmit: A,
            onKeyDown: T,
            autoCompletePosition: 'bottom',
            disableThemedBackground: !0
        })
    });
}
