i.d(e, { default: () => p });
var t = i(477900);
i(582128);
var a = i(980707),
    l = i(477782),
    c = i(442433),
    s = i(50268),
    r = i(173936),
    o = i(957565),
    d = i(886393),
    h = i(375708);
function p(n) {
    let { channel: e, channelId: i, originalLink: p, messageId: u, onSelect: k } = n,
        g =
            null != e
                ? (0, d.A)(e, u, p)
                : (0, t.jsx)(l.Dr, {
                      id: "channel-copy-link",
                      label: h.intl.string(h.t.WqhZss),
                      leadingAccessory: { type: "icon", icon: r.LinkIcon },
                      action: () => {
                          (0, o.C)(p ?? "");
                      },
                  }),
        b = (0, s.A)({ id: i, label: h.intl.string(h.t.gFHI3k) });
    return (0, t.jsxs)(a.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-mention-context",
        onClose: c.Z_,
        onSelect: k,
        "aria-label": h.intl.string(h.t.feGACE),
        children: [
            (0, t.jsx)(l.rX, { children: g }, "channel-mention-actions"),
            (0, t.jsx)(l.rX, { children: b }, "developer-actions"),
        ],
    });
}
