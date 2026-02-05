n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    a = n(843472),
    s = n(684013),
    r = n(334738),
    o = n(964486),
    d = n(480870),
    u = n(355622),
    c = n(408018),
    h = n(133343),
    A = n(451909),
    m = n(135621),
    g = n(395011),
    p = n(652215),
    f = n(381941),
    _ = n(433788);
function E(e) {
    let { id: t, replyToMessageId: n, channel: E, onSend: x } = e,
        S = (0, m.A)(),
        { placeholder: I, accessibilityLabel: T } = (0, d.A)({ channel: E }),
        [C, v] = l.useState(() => (0, c.N3)()),
        { textValue: y, richValue: N } = C,
        [O, b] = l.useState(!1),
        j = l.useCallback(() => b(!0), []),
        w = l.useCallback(() => b(!1), []);
    (0, o.Ay)(() => {
        (0, r.ack)(
            E.id,
            {
                section: p.JJy.OVERLAY,
                object: p.ZSU.ACK_INLINE_REPLY,
                objectType: p.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
            },
            !0,
            !0,
            n,
        );
    });
    let L = l.useCallback((e, t, n) => {
            v({ textValue: t, richValue: n });
        }, []),
        R = l.useCallback(
            (e) => {
                "Escape" === e.key && s.A.updateNotificationStatus(t, p.yFH.ACTIVE);
            },
            [t],
        ),
        D = l.useCallback(
            () => (
                y.length > S ||
                    (a.A.sendMessage(E.id, A.Ay.parse(E, y), !1, { location: f.Hx.OVERLAY }),
                    s.A.setInputLocked(!0, g.A.getTargetPID()),
                    s.A.updateNotificationStatus(t, p.yFH.DISMISSED),
                    x?.(y)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [y, S, E, t, x],
        );
    return (0, i.jsx)("div", {
        className: _.k,
        children: (0, i.jsx)(h.Ay, {
            innerClassName: _.T,
            onChange: L,
            placeholder: I,
            accessibilityLabel: T,
            channel: E,
            textValue: y,
            richValue: N,
            type: u.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: w,
            onFocus: j,
            focused: O,
            onSubmit: D,
            onKeyDown: R,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
