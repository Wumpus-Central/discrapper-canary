n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(979696),
    o = n(963876),
    s = n(388032);
function c(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getToastsEnabled(e));
    return (0, r.jsx)(l.S89, {
        id: "show-call-chat-toasts",
        label: s.intl.string(s.t["5NL5vT"]),
        checked: t,
        action: () => o.Z.setCallChatToastsEnabled(e, !t),
    });
}
