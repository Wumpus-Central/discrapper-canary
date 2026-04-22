"use strict";
i.d(t, { A: () => g });
var n = i(627968),
    r = i(64700),
    a = i(311907),
    l = i(534890),
    s = i(978940),
    o = i(308528),
    c = i(630054),
    d = i(690990),
    u = i(994500),
    _ = i(880528),
    p = i(993401),
    h = i(518477),
    f = i(985018),
    A = i(863415);
function g(e) {
    let { user: t, onClose: i } = e,
        g = (0, _.x)(),
        m = (0, a.bG)([u.A], () => u.A.isBlocked(t.id)),
        { runVoiceCallAction: E } = (0, d.b)({ userId: t.id, onClose: i }),
        b = r.useCallback(() => {
            o.A.openPrivateChannel({ recipientIds: t.id }), i?.(), c.A.popAll();
        }, [t.id, i]);
    if (!g.showCTA) return null;
    let v = !t.bot && !t.isProvisional;
    return (0, n.jsxs)("div", {
        className: A.n,
        children: [
            (0, n.jsx)(p.FD, {
                action: h.pt.SEND_MESSAGE,
                variant: "secondary",
                size: "sm",
                text: f.intl.string(f.t.zROXEV),
                icon: l.o,
                onClick: b,
                fullWidth: !0,
            }),
            v &&
                (0, n.jsx)(p.FD, {
                    action: h.pt.VOICE_CALL,
                    variant: "secondary",
                    size: "sm",
                    text: f.intl.string(f.t.JJogjm),
                    icon: s._,
                    onClick: E,
                    disabled: m,
                    fullWidth: !0,
                }),
        ],
    });
}
