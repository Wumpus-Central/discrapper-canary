n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(979696),
    s = n(963876),
    l = n(388032);
function c(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getToastsEnabled(e));
    return (0, r.jsx)(o.S89, {
        id: "show-call-chat-toasts",
        label: l.intl.string(l.t["5NL5vb"]),
        checked: t,
        action: () => s.Z.setCallChatToastsEnabled(e, !t),
    });
}
