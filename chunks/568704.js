n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    a = n(534890),
    r = n(978940),
    o = n(308528),
    d = n(982168),
    c = n(690990),
    u = n(994500),
    h = n(880528),
    A = n(993401),
    x = n(518477),
    v = n(985018),
    m = n(863415);
function g(e) {
    let { user: t, onClose: n } = e,
        g = (0, h.x)(),
        p = (0, s.bG)([u.A], () => u.A.isBlocked(t.id)),
        { runVoiceCallAction: f } = (0, c.b)({ userId: t.id, onClose: n }),
        E = l.useCallback(() => {
            o.A.openPrivateChannel({ recipientIds: t.id }), n?.(), d.A.popAll();
        }, [t.id, n]);
    if (!g.showCTA) return null;
    let j = !t.bot && !t.isProvisional;
    return (0, i.jsxs)("div", {
        className: m.n,
        children: [
            (0, i.jsx)(A.FD, {
                action: x.pt.SEND_MESSAGE,
                variant: "secondary",
                size: "sm",
                text: v.intl.string(v.t.zROXEV),
                icon: a.o,
                onClick: E,
                fullWidth: !0,
            }),
            j &&
                (0, i.jsx)(A.FD, {
                    action: x.pt.VOICE_CALL,
                    variant: "secondary",
                    size: "sm",
                    text: v.intl.string(v.t.JJogjm),
                    icon: r._,
                    onClick: f,
                    disabled: p,
                    fullWidth: !0,
                }),
        ],
    });
}
