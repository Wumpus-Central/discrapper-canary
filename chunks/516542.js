n.d(t, { Z: () => E }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(904245),
    a = n(13245),
    o = n(45114),
    s = n(493773),
    u = n(655687),
    c = n(541716),
    d = n(752305),
    h = n(893718),
    p = n(957730),
    f = n(849522),
    m = n(610394),
    g = n(981631),
    y = n(959517),
    O = n(572985);
function E(e) {
    let { id: t, replyToMessageId: n, channel: E, onSend: v } = e,
        S = (0, f.Z)(),
        { placeholder: b, accessibilityLabel: x } = (0, u.Z)({ channel: E }),
        [j, I] = r.useState(() => (0, d.H2)()),
        { textValue: C, richValue: Z } = j,
        [N, w] = r.useState(!1),
        T = r.useCallback(() => w(!0), []),
        _ = r.useCallback(() => w(!1), []);
    (0, s.ZP)(() => {
        (0, o.ack)(
            E.id,
            {
                section: g.jXE.OVERLAY,
                object: g.qAy.ACK_INLINE_REPLY,
                objectType: g.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
            },
            !0,
            !0,
            n,
        );
    });
    let P = r.useCallback((e, t, n) => {
            I({
                textValue: t,
                richValue: n,
            });
        }, []),
        A = r.useCallback(
            (e) => {
                "Escape" === e.key && a.Z.updateNotificationStatus(t, g._1z.ACTIVE);
            },
            [t],
        ),
        D = r.useCallback(
            () => (
                C.length > S ||
                    (l.Z.sendMessage(E.id, p.ZP.parse(E, C), !1, { location: y.dy.OVERLAY }),
                    a.Z.setInputLocked(!0, m.Z.getTargetPID()),
                    a.Z.updateNotificationStatus(t, g._1z.DISMISSED),
                    null == v || v(C)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [C, S, E, t, v],
        );
    return (0, i.jsx)("div", {
        className: O.container,
        children: (0, i.jsx)(h.ZP, {
            innerClassName: O.textArea,
            onChange: P,
            placeholder: b,
            accessibilityLabel: x,
            channel: E,
            textValue: C,
            richValue: Z,
            type: c.Ie.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: _,
            onFocus: T,
            focused: N,
            onSubmit: D,
            onKeyDown: A,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
