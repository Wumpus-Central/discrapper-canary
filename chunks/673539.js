n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(979696),
    a = n(963876),
    s = n(388032);
function c(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getToastsEnabled(e));
    return (0, r.jsx)(l.S89, {
        id: 'show-call-chat-toasts',
        label: s.NW.string(s.t['5NL5vb']),
        checked: t,
        action: () => a.Z.setCallChatToastsEnabled(e, !t)
    });
}
