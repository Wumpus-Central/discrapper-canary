n.d(t, { Z: () => v }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(904245),
    o = n(13245),
    a = n(45114),
    s = n(493773),
    c = n(655687),
    u = n(541716),
    d = n(752305),
    h = n(893718),
    p = n(957730),
    f = n(849522),
    m = n(610394),
    g = n(981631),
    y = n(959517),
    O = n(572985);
function v(e) {
    let { id: t, replyToMessageId: n, channel: v, onSend: E } = e,
        b = (0, f.Z)(),
        { placeholder: _, accessibilityLabel: S } = (0, c.Z)({ channel: v }),
        [x, I] = r.useState(() => (0, d.H2)()),
        { textValue: C, richValue: j } = x,
        [N, Z] = r.useState(!1),
        w = r.useCallback(() => Z(!0), []),
        T = r.useCallback(() => Z(!1), []);
    (0, s.ZP)(() => {
        (0, a.ack)(
            v.id,
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
                "Escape" === e.key && o.Z.updateNotificationStatus(t, g._1z.ACTIVE);
            },
            [t],
        ),
        k = r.useCallback(
            () => (
                C.length > b ||
                    (l.Z.sendMessage(v.id, p.ZP.parse(v, C), !1, { location: y.dy.OVERLAY }),
                    o.Z.setInputLocked(!0, m.Z.getTargetPID()),
                    o.Z.updateNotificationStatus(t, g._1z.DISMISSED),
                    null == E || E(C)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [C, b, v, t, E],
        );
    return (0, i.jsx)("div", {
        className: O.container,
        children: (0, i.jsx)(h.ZP, {
            innerClassName: O.textArea,
            onChange: P,
            placeholder: _,
            accessibilityLabel: S,
            channel: v,
            textValue: C,
            richValue: j,
            type: u.Ie.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: T,
            onFocus: w,
            focused: N,
            onSubmit: k,
            onKeyDown: A,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
