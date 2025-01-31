n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(979696),
    s = n(963876),
    o = n(388032);
function c(e) {
    let t = (0, l.e7)([r.Z], () => r.Z.getToastsEnabled(e));
    return (0, i.jsx)(a.S89, {
        id: 'show-call-chat-toasts',
        label: o.intl.string(o.t['5NL5vb']),
        checked: t,
        action: () => s.Z.setCallChatToastsEnabled(e, !t)
    });
}
