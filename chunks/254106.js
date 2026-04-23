l.d(t, { default: () => h });
var i = l(627968);
l(64700);
var e = l(550079),
    a = l(477782),
    s = l(442433),
    c = l(50268),
    r = l(173936),
    o = l(957565),
    d = l(886393),
    u = l(985018);
function h(n) {
    let { channel: t, channelId: l, originalLink: h, messageId: p, onSelect: C } = n,
        g =
            null != t
                ? (0, d.A)(t, p, h)
                : (0, i.jsx)(a.Dr, {
                      id: "channel-copy-link",
                      label: u.intl.string(u.t.WqhZss),
                      leadingAccessory: { type: "icon", icon: r.q },
                      action: () => {
                          (0, o.C)(h ?? "");
                      },
                  }),
        b = (0, c.A)({ id: l, label: u.intl.string(u.t.gFHI3k) });
    return (0, i.jsxs)(e.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-mention-context",
        onClose: s.Z_,
        onSelect: C,
        "aria-label": u.intl.string(u.t.feGACE),
        children: [
            (0, i.jsx)(a.rX, { children: g }, "channel-mention-actions"),
            (0, i.jsx)(a.rX, { children: b }, "developer-actions"),
        ],
    });
}
