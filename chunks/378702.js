n.d(t, { A: () => O }), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(843472),
    a = n(684013),
    o = n(334738),
    s = n(964486),
    c = n(480870),
    u = n(355622),
    d = n(408018),
    p = n(133343),
    h = n(451909),
    f = n(135621),
    m = n(395011),
    g = n(652215),
    y = n(381941),
    A = n(433788);
function O(e) {
    let { id: t, replyToMessageId: n, channel: O, onSend: E } = e,
        v = (0, f.A)(),
        { placeholder: b, accessibilityLabel: S } = (0, c.A)({ channel: O }),
        [x, j] = r.useState(() => (0, d.N3)()),
        { textValue: I, richValue: N } = x,
        [w, T] = r.useState(!1),
        C = r.useCallback(() => T(!0), []),
        _ = r.useCallback(() => T(!1), []);
    (0, s.Ay)(() => {
        (0, o.ack)(
            O.id,
            {
                section: g.JJy.OVERLAY,
                object: g.ZSU.ACK_INLINE_REPLY,
                objectType: g.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
            },
            !0,
            !0,
            n,
        );
    });
    let P = r.useCallback((e, t, n) => {
            j({
                textValue: t,
                richValue: n,
            });
        }, []),
        D = r.useCallback(
            (e) => {
                "Escape" === e.key && a.A.updateNotificationStatus(t, g.yFH.ACTIVE);
            },
            [t],
        ),
        R = r.useCallback(
            () => (
                I.length > v ||
                    (l.A.sendMessage(O.id, h.Ay.parse(O, I), !1, { location: y.Hx.OVERLAY }),
                    a.A.setInputLocked(!0, m.A.getTargetPID()),
                    a.A.updateNotificationStatus(t, g.yFH.DISMISSED),
                    null == E || E(I)),
                Promise.resolve({
                    shouldClear: !1,
                    shouldRefocus: !0,
                })
            ),
            [I, v, O, t, E],
        );
    return (0, i.jsx)("div", {
        className: A.k,
        children: (0, i.jsx)(p.Ay, {
            innerClassName: A.T,
            onChange: P,
            placeholder: b,
            accessibilityLabel: S,
            channel: O,
            textValue: I,
            richValue: N,
            type: u.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: _,
            onFocus: C,
            focused: w,
            onSubmit: R,
            onKeyDown: D,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
