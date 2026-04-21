"use strict";
n.d(t, { A: () => m });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(308528),
    l = n(630054),
    u = n(690990),
    c = n(994500),
    d = n(880528),
    _ = n(993401),
    f = n(518477),
    p = n(985018),
    h = n(863415);
function m(e) {
    let { user: t, onClose: n } = e,
        m = (0, d.x)(),
        E = (0, s.bG)([c.A], () => c.A.isBlocked(t.id)),
        { runVoiceCallAction: g } = (0, u.b)({ userId: t.id, onClose: n }),
        A = i.useCallback(() => {
            o.A.openPrivateChannel({ recipientIds: t.id }), n?.(), l.A.popAll();
        }, [t.id, n]);
    if (!m.showCTA) return null;
    let I = !t.bot && !t.isProvisional;
    return (0, r.jsxs)("div", {
        className: h.n,
        children: [
            (0, r.jsx)(_.FD, {
                action: f.pt.SEND_MESSAGE,
                variant: "secondary",
                size: "sm",
                text: p.intl.string(p.t.zROXEV),
                icon: a.oyn,
                onClick: A,
                fullWidth: !0,
            }),
            I &&
                (0, r.jsx)(_.FD, {
                    action: f.pt.VOICE_CALL,
                    variant: "secondary",
                    size: "sm",
                    text: p.intl.string(p.t.JJogjm),
                    icon: a._jp,
                    onClick: g,
                    disabled: E,
                    fullWidth: !0,
                }),
        ],
    });
}
