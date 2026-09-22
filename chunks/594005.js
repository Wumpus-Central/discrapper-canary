n.d(i, { default: () => u });
var a = n(477900),
    t = n(477782),
    c = n(980707),
    d = n(933832),
    r = n(666492),
    s = n(228366),
    l = n(442433),
    h = n(334738),
    o = n(995102),
    A = n(288104),
    _ = n(57907),
    p = n(375500),
    b = n(439147),
    j = n(652215),
    k = n(375708);
function u(e) {
    let { channel: i, message: n, isUnread: u, onSelect: x } = e,
        I = (0, A.b)(i),
        T = (0, p.A)(i),
        m = (0, o.A)(i),
        g = (0, _.A)(i),
        C = i.isThread() ? (0, a.jsx)(t.rX, { children: T }) : (0, a.jsx)(t.rX, { children: I });
    return (0, a.jsxs)(c.W, {
        "data-menu-migrated": !0,
        navId: "notifications-inbox-message-context",
        onClose: l.Z_,
        "aria-label": k.intl.string(k.t.Xm41aV),
        onSelect: x,
        children: [
            (0, a.jsx)(t.rX, {
                children: u
                    ? (0, a.jsx)(t.Dr, {
                          id: "mark-read",
                          label: k.intl.string(k.t.e6RscS),
                          icon: d.CheckmarkLargeIcon,
                          action: () => {
                              (s.h.dispatch({
                                  type: "NOTIFICATIONS_INBOX_ITEM_ACK",
                                  messageId: n.id,
                                  channelId: n.channel_id,
                              }),
                                  h.ack(
                                      n.channel_id,
                                      {
                                          object: j.ZSU.MARK_MESSAGE_AS_READ_BUTTON,
                                          objectType: j.AnalyticsObjectTypes.ACK_MANUAL,
                                      },
                                      !0,
                                      void 0,
                                      n.id,
                                  ));
                          },
                      })
                    : (0, a.jsx)(t.Dr, {
                          id: "mark-unread",
                          label: k.intl.string(k.t.RpE9k7),
                          icon: r.Q,
                          action: () => (0, b.A)(i.id, n.id),
                      }),
            }),
            (0, a.jsx)(t.rX, { children: i.isThread() ? g : m }),
            C,
        ],
    });
}
