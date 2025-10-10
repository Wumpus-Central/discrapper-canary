n.d(t, { Z: () => v }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(904245),
    o = n(13245),
    a = n(45114),
    s = n(493773),
    u = n(655687),
    c = n(541716),
    d = n(752305),
    h = n(893718),
    p = n(957730),
    f = n(849522),
    m = n(145597),
    g = n(981631),
    y = n(959517),
    O = n(572985);
function v(e) {
    let { id: t, replyToMessageId: n, channel: v, onSend: E } = e,
        S = (0, f.Z)(),
        { placeholder: b, accessibilityLabel: x } = (0, u.Z)({ channel: v }),
        [j, I] = r.useState(() => (0, d.H2)()),
        { textValue: C, richValue: Z } = j,
        [N, w] = r.useState(!1),
        T = r.useCallback(() => w(!0), []),
        _ = r.useCallback(() => w(!1), []);
    (0, s.ZP)(() => {
        (0, a.In)(
            v.id,
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
    let P = r.useCallback((e, t, n) => {
            I({
                textValue: t,
                richValue: n,
            });
        }, []),
        D = r.useCallback(
            (e) => {
                "Escape" === e.key && o.Z.updateNotificationStatus(t, g._1z.ACTIVE);
            },
            [t],
        ),
        A = r.useCallback(
            () => (
                C.length > S ||
                    (l.Z.sendMessage(v.id, p.ZP.parse(v, C), !1, { location: y.dy.OVERLAY }),
                    o.Z.setInputLocked(!0, (0, m.getPID)()),
                    o.Z.updateNotificationStatus(t, g._1z.DISMISSED),
                    null == E || E(C)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [C, S, v, t, E],
        );
    return (0, i.jsx)("div", {
        className: O.container,
        children: (0, i.jsx)(h.ZP, {
            innerClassName: O.textArea,
            onChange: P,
            placeholder: b,
            accessibilityLabel: x,
            channel: v,
            textValue: C,
            richValue: Z,
            type: c.Ie.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: _,
            onFocus: T,
            focused: N,
            onSubmit: A,
            onKeyDown: D,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
