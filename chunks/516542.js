n.d(t, { Z: () => b }), n(388685);
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
    y = n(959517),
    O = n(842304);
function b(e) {
    let { id: t, replyToMessageId: n, channel: b, onSend: v } = e,
        E = (0, h.Z)(),
        { placeholder: _, accessibilityLabel: x } = (0, c.Z)({ channel: b }),
        [S, I] = r.useState(() => (0, d.H2)()),
        { textValue: j, richValue: C } = S,
        [N, w] = r.useState(!1),
        Z = r.useCallback(() => w(!0), []),
        P = r.useCallback(() => w(!1), []);
    (0, s.ZP)(() => {
        (0, a.In)(
            b.id,
            {
                section: g.jXE.OVERLAY,
                object: g.qAy.ACK_INLINE_REPLY,
                objectType: g.Qqv.ACK_SEMI_AUTOMATIC,
            },
            !0,
            !0,
            n,
        );
    });
    let T = r.useCallback((e, t, n) => {
            I({
                textValue: t,
                richValue: n,
            });
        }, []),
        A = r.useCallback(
            (e) => {
                "Escape" === e.key && l.Z.updateNotificationStatus(t, g._1z.ACTIVE);
            },
            [t],
        ),
        k = r.useCallback(
            () => (
                j.length > E ||
                    (o.Z.sendMessage(b.id, f.ZP.parse(b, j), !1, { location: y.dy.OVERLAY }),
                    l.Z.setInputLocked(!0, (0, m.getPID)()),
                    l.Z.updateNotificationStatus(t, g._1z.DISMISSED),
                    null == v || v(j)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [j, E, b, t, v],
        );
    return (0, i.jsx)("div", {
        className: O.container,
        children: (0, i.jsx)(p.ZP, {
            innerClassName: O.textArea,
            onChange: T,
            placeholder: _,
            accessibilityLabel: x,
            channel: b,
            textValue: j,
            richValue: C,
            type: u.Ie.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: P,
            onFocus: Z,
            focused: N,
            onSubmit: k,
            onKeyDown: A,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
