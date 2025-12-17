n.d(t, { Z: () => O }), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(904245),
    l = n(13245),
    o = n(45114),
    s = n(493773),
    c = n(655687),
    u = n(541716),
    d = n(752305),
    f = n(893718),
    h = n(957730),
    p = n(849522),
    m = n(610394),
    g = n(981631),
    b = n(959517),
    y = n(198201);
function O(e) {
    let { id: t, replyToMessageId: n, channel: O, onSend: v } = e,
        E = (0, p.Z)(),
        { placeholder: S, accessibilityLabel: x } = (0, c.Z)({ channel: O }),
        [I, C] = r.useState(() => (0, d.H2)()),
        { textValue: j, richValue: _ } = I,
        [Z, N] = r.useState(!1),
        w = r.useCallback(() => N(!0), []),
        T = r.useCallback(() => N(!1), []);
    (0, s.ZP)(() => {
        (0, o.ack)(
            O.id,
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
            C({
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
                    (a.Z.sendMessage(O.id, h.ZP.parse(O, j), !1, { location: b.dy.OVERLAY }),
                    l.Z.setInputLocked(!0, m.Z.getTargetPID()),
                    l.Z.updateNotificationStatus(t, g._1z.DISMISSED),
                    null == v || v(j)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [j, E, O, t, v],
        );
    return (0, i.jsx)("div", {
        className: y.container,
        children: (0, i.jsx)(f.ZP, {
            innerClassName: y.textArea,
            onChange: P,
            placeholder: S,
            accessibilityLabel: x,
            channel: O,
            textValue: j,
            richValue: _,
            type: u.Ie.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: T,
            onFocus: w,
            focused: Z,
            onSubmit: k,
            onKeyDown: A,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
