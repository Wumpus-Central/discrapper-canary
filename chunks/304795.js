n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(604681),
    a = n(17447),
    s = n(141850),
    o = n(736339);
function d(e, t) {
    if (!(0, a.f)("message_context_menu")) return null;
    let n = o.A.getConversationForMessage(t.id, e.id);
    return null == n
        ? null
        : (0, i.jsx)(l.Drp, {
              id: "view-conversation",
              label: "View Conversation",
              leadingAccessory: { type: "icon", icon: l.oyn },
              icon: l.oyn,
              action: () => {
                  r.A.openConversationsSection(), (0, s.s4)(t.id, n);
              },
          });
}
