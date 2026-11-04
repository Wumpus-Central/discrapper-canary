n.d(e, { default: () => k });
var a = n(477900),
    t = n(477782),
    d = n(980707),
    r = n(933832),
    s = n(666492),
    c = n(73153),
    l = n(442433),
    h = n(334738),
    o = n(995102),
    _ = n(288104),
    A = n(57907),
    p = n(375500),
    b = n(439147),
    I = n(652215),
    j = n(105292);
function k(i) {
    let { channel: e, message: n, isUnread: k, onSelect: u } = i,
        x = (0, _.b)(e),
        m = (0, p.A)(e),
        T = (0, o.A)(e),
        g = (0, A.A)(e),
        C = e.isThread() ? (0, a.jsx)(t.rX, { children: m }) : (0, a.jsx)(t.rX, { children: x });
    return (0, a.jsxs)(d.W, {
        "data-menu-migrated": !0,
        navId: "notifications-inbox-message-context",
        onClose: l.Z_,
        "aria-label": j.intl.string(j.t.Xm41aV),
        onSelect: u,
        children: [
            (0, a.jsx)(t.rX, {
                children: k
                    ? (0, a.jsx)(t.Dr, {
                          id: "mark-read",
                          label: j.intl.string(j.t.e6RscS),
                          icon: r.CheckmarkLargeIcon,
                          action: () => {
                              (c.h.dispatch({
                                  type: "NOTIFICATIONS_INBOX_ITEM_ACK",
                                  messageId: n.id,
                                  channelId: n.channel_id,
                              }),
                                  h.I_(
                                      n.channel_id,
                                      { object: I.ZSU.MARK_MESSAGE_AS_READ_BUTTON, objectType: I.btD.ACK_MANUAL },
                                      !0,
                                      void 0,
                                      n.id,
                                  ));
                          },
                      })
                    : (0, a.jsx)(t.Dr, {
                          id: "mark-unread",
                          label: j.intl.string(j.t.RpE9k7),
                          icon: s.Q,
                          action: () => (0, b.A)(e.id, n.id),
                      }),
            }),
            (0, a.jsx)(t.rX, { children: e.isThread() ? g : T }),
            C,
        ],
    });
}
