var a = n(477900),
    r = n(477782),
    t = n(165862),
    d = n(933832),
    c = n(666492),
    s = n(73153),
    l = n(442433),
    h = n(334738),
    o = n(995102),
    _ = n(288104),
    A = n(57907),
    p = n(375500),
    I = n(439147),
    b = n(652215),
    k = n(792996);
n.d(
    i,
    {},
    {
        default: function (e) {
            let { channel: i, message: n, isUnread: j, onSelect: u } = e,
                x = (0, _.b)(i),
                m = (0, p.A)(i),
                C = (0, o.A)(i),
                T = (0, A.A)(i),
                g = i.isThread() ? (0, a.jsx)(r.rX, { children: m }) : (0, a.jsx)(r.rX, { children: x });
            return (0, a.jsxs)(t.W, {
                "data-menu-migrated": !0,
                navId: "notifications-inbox-message-context",
                onClose: l.Z_,
                "aria-label": k.intl.string(k.t.Xm41aV),
                onSelect: u,
                children: [
                    (0, a.jsx)(r.rX, {
                        children: j
                            ? (0, a.jsx)(r.Dr, {
                                  id: "mark-read",
                                  label: k.intl.string(k.t.e6RscS),
                                  icon: d.CheckmarkLargeIcon,
                                  action: () => {
                                      (s.h.dispatch({
                                          type: "NOTIFICATIONS_INBOX_ITEM_ACK",
                                          messageId: n.id,
                                          channelId: n.channel_id,
                                      }),
                                          h.I_(
                                              n.channel_id,
                                              {
                                                  object: b.ZSU.MARK_MESSAGE_AS_READ_BUTTON,
                                                  objectType: b.btD.ACK_MANUAL,
                                              },
                                              !0,
                                              void 0,
                                              n.id,
                                          ));
                                  },
                              })
                            : (0, a.jsx)(r.Dr, {
                                  id: "mark-unread",
                                  label: k.intl.string(k.t.RpE9k7),
                                  icon: c.ChatMarkUnreadIcon,
                                  action: () => (0, I.A)(i.id, n.id),
                              }),
                    }),
                    (0, a.jsx)(r.rX, { children: i.isThread() ? T : C }),
                    g,
                ],
            });
        },
    },
);
