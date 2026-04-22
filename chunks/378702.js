i.d(e, { A: () => E });
var n = i(627968),
    l = i(64700),
    a = i(843472),
    r = i(684013),
    s = i(334738),
    o = i(964486),
    u = i(480870),
    c = i(355622),
    d = i(408018),
    A = i(133343),
    f = i(451909),
    y = i(135621),
    p = i(395011),
    m = i(652215),
    I = i(381941),
    g = i(42387);
function E(t) {
    let { id: e, replyToMessageId: i, channel: E, onSend: N } = t,
        _ = (0, y.A)(),
        { placeholder: T, accessibilityLabel: S } = (0, u.A)({ channel: E }),
        [C, h] = l.useState(() => (0, d.N3)()),
        { textValue: v, richValue: O } = C,
        [x, L] = l.useState(!1),
        D = l.useCallback(() => L(!0), []),
        b = l.useCallback(() => L(!1), []);
    (0, o.Ay)(() => {
        (0, s.ack)(
            E.id,
            {
                section: m.JJy.OVERLAY,
                object: m.ZSU.ACK_INLINE_REPLY,
                objectType: m.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
            },
            !0,
            !0,
            i,
        );
    });
    let R = l.useCallback((t, e, i) => {
            h({ textValue: e, richValue: i });
        }, []),
        k = l.useCallback(
            (t) => {
                "Escape" === t.key && r.A.updateNotificationStatus(e, m.yFH.ACTIVE);
            },
            [e],
        ),
        U = l.useCallback(
            () => (
                v.length > _ ||
                    (a.A.sendMessage(E.id, f.Ay.parse(E, v), !1, { location: I.Hx.OVERLAY }),
                    r.A.setInputLocked(!0, p.A.getTargetPID()),
                    r.A.updateNotificationStatus(e, m.yFH.DISMISSED),
                    N?.(v)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [v, _, E, e, N],
        );
    return (0, n.jsx)("div", {
        className: g.k,
        children: (0, n.jsx)(A.Ay, {
            innerClassName: g.T,
            onChange: R,
            placeholder: T,
            accessibilityLabel: S,
            channel: E,
            textValue: v,
            richValue: O,
            type: c.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: b,
            onFocus: D,
            focused: x,
            onSubmit: U,
            onKeyDown: k,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
