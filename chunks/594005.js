n.d(i, { default: () => T });
var a = n(477900),
    t = n(477782),
    s = n(980707),
    c = n(933832),
    d = n(666492),
    r = n(228366),
    o = n(442433),
    l = n(334738),
    h = n(995102),
    A = n(288104),
    p = n(661504),
    _ = n(57907),
    b = n(375500),
    x = n(439147),
    j = n(769591),
    k = n(95701),
    u = n(652215),
    I = n(375708);
function T(e) {
    let { channel: i, message: n, isUnread: T, onSelect: g } = e,
        m = (0, A.b)(i),
        C = (0, p.A0)(i),
        S = (0, b.A)(i),
        M = (0, h.A)(i),
        N = (0, _.A)(i),
        X = (0, j.os)("NotificationsInboxMessageContextMenu") && k.B4.has(i.type),
        y = i.isThread() ? (0, a.jsx)(t.rX, { children: S }) : X ? C : (0, a.jsx)(t.rX, { children: m });
    return (0, a.jsxs)(s.W, {
        "data-menu-migrated": !0,
        navId: "notifications-inbox-message-context",
        onClose: o.Z_,
        "aria-label": I.intl.string(I.t.Xm41aV),
        onSelect: g,
        children: [
            (0, a.jsx)(t.rX, {
                children: T
                    ? (0, a.jsx)(t.Dr, {
                          id: "mark-read",
                          label: I.intl.string(I.t.e6RscS),
                          icon: c.CheckmarkLargeIcon,
                          action: () => {
                              r.h.dispatch({
                                  type: "NOTIFICATIONS_INBOX_ITEM_ACK",
                                  messageId: n.id,
                                  channelId: n.channel_id,
                              }),
                                  l.ack(
                                      n.channel_id,
                                      {
                                          object: u.ZSU.MARK_MESSAGE_AS_READ_BUTTON,
                                          objectType: u.AnalyticsObjectTypes.ACK_MANUAL,
                                      },
                                      !0,
                                      void 0,
                                      n.id,
                                  );
                          },
                      })
                    : (0, a.jsx)(t.Dr, {
                          id: "mark-unread",
                          label: I.intl.string(I.t.RpE9k7),
                          icon: d.Q,
                          action: () => (0, x.A)(i.id, n.id),
                      }),
            }),
            (0, a.jsx)(t.rX, { children: i.isThread() ? N : M }),
            y,
        ],
    });
}
