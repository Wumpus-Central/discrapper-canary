"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(843472),
    a = n(684013),
    o = n(334738),
    l = n(964486),
    u = n(480870),
    c = n(355622),
    d = n(408018),
    _ = n(133343),
    f = n(451909),
    p = n(135621),
    h = n(395011),
    m = n(652215),
    E = n(381941),
    g = n(433788);
function A(e) {
    let { id: t, replyToMessageId: n, channel: A, onSend: I } = e,
        T = (0, p.A)(),
        { placeholder: S, accessibilityLabel: y } = (0, u.A)({ channel: A }),
        [v, N] = i.useState(() => (0, d.N3)()),
        { textValue: C, richValue: b } = v,
        [R, O] = i.useState(!1),
        D = i.useCallback(() => O(!0), []),
        L = i.useCallback(() => O(!1), []);
    (0, l.Ay)(() => {
        (0, o.ack)(
            A.id,
            {
                section: m.JJy.OVERLAY,
                object: m.ZSU.ACK_INLINE_REPLY,
                objectType: m.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
            },
            !0,
            !0,
            n,
        );
    });
    let w = i.useCallback((e, t, n) => {
            N({ textValue: t, richValue: n });
        }, []),
        x = i.useCallback(
            (e) => {
                "Escape" === e.key && a.A.updateNotificationStatus(t, m.yFH.ACTIVE);
            },
            [t],
        ),
        M = i.useCallback(
            () => (
                C.length > T ||
                    (s.A.sendMessage(A.id, f.Ay.parse(A, C), !1, { location: E.Hx.OVERLAY }),
                    a.A.setInputLocked(!0, h.A.getTargetPID()),
                    a.A.updateNotificationStatus(t, m.yFH.DISMISSED),
                    I?.(C)),
                Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
            ),
            [C, T, A, t, I],
        );
    return (0, r.jsx)("div", {
        className: g.k,
        children: (0, r.jsx)(_.Ay, {
            innerClassName: g.T,
            onChange: w,
            placeholder: S,
            accessibilityLabel: y,
            channel: A,
            textValue: C,
            richValue: b,
            type: c.oU.OVERLAY_INLINE_REPLY,
            allowNewLines: !1,
            onBlur: L,
            onFocus: D,
            focused: R,
            onSubmit: M,
            onKeyDown: x,
            autoCompletePosition: "bottom",
            disableThemedBackground: !0,
        }),
    });
}
