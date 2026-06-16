n.d(i, { default: () => k });
var t = n(627968),
    a = n(477782),
    s = n(980707),
    d = n(933832),
    c = n(666492),
    r = n(228366),
    l = n(442433),
    o = n(334738),
    h = n(995102),
    A = n(288104),
    p = n(661504),
    _ = n(57907),
    b = n(375500),
    x = n(439147),
    j = n(769591),
    u = n(95701),
    I = n(652215),
    T = n(375708);
function k(e) {
    let { channel: i, message: n, isUnread: k, onSelect: g } = e,
        m = (0, A.b)(i),
        C = (0, p.A0)(i),
        S = (0, b.A)(i),
        M = (0, h.A)(i),
        N = (0, _.A)(i),
        X = (0, j.os)("NotificationsInboxMessageContextMenu") && u.B4.has(i.type),
        y = i.isThread() ? (0, t.jsx)(a.rX, { children: S }) : X ? C : (0, t.jsx)(a.rX, { children: m });
    return (0, t.jsxs)(s.W, {
        "data-menu-migrated": !0,
        navId: "notifications-inbox-message-context",
        onClose: l.Z_,
        "aria-label": T.intl.string(T.t.Xm41aV),
        onSelect: g,
        children: [
            (0, t.jsx)(a.rX, {
                children: k
                    ? (0, t.jsx)(a.Dr, {
                          id: "mark-read",
                          label: T.intl.string(T.t.e6RscS),
                          icon: d.A,
                          action: () => {
                              r.h.dispatch({
                                  type: "NOTIFICATIONS_INBOX_ITEM_ACK",
                                  messageId: n.id,
                                  channelId: n.channel_id,
                              }),
                                  o.ack(
                                      n.channel_id,
                                      {
                                          object: I.ZSU.MARK_MESSAGE_AS_READ_BUTTON,
                                          objectType: I.AnalyticsObjectTypes.ACK_MANUAL,
                                      },
                                      !0,
                                      void 0,
                                      n.id,
                                  );
                          },
                      })
                    : (0, t.jsx)(a.Dr, {
                          id: "mark-unread",
                          label: T.intl.string(T.t.RpE9k7),
                          icon: c.Q,
                          action: () => (0, x.A)(i.id, n.id),
                      }),
            }),
            (0, t.jsx)(a.rX, { children: i.isThread() ? N : M }),
            y,
        ],
    });
}
