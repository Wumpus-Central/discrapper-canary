n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(477782),
    a = n(534890),
    r = n(604681),
    s = n(17447),
    o = n(141850),
    d = n(736339);
function c(e, t) {
    if (!(0, s.f)("message_context_menu")) return null;
    let n = d.A.getConversationForMessage(t.id, e.id);
    return null == n
        ? null
        : (0, i.jsx)(l.Dr, {
              id: "view-conversation",
              label: "View Conversation",
              leadingAccessory: { type: "icon", icon: a.o },
              icon: a.o,
              action: () => {
                  r.A.openConversationsSection(), (0, o.xI)(t.id, n);
              },
          });
}
