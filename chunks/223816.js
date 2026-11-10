i.d(l, { default: () => A });
var t = i(477900);
i(582128);
var e = i(165862),
    a = i(477782),
    c = i(442433),
    s = i(50268),
    o = i(374846),
    r = i(173936),
    d = i(957565),
    u = i(886393),
    p = i(792996),
    h = i(465365),
    k = i(120747),
    g = i(994500),
    m = i(287809),
    y = i(47167);
function A(n) {
    var l;
    let i,
        { channel: A, channelId: b, composerChannelId: x, originalLink: C, messageId: I, onSelect: f } = n,
        j =
            ((l = (0, o.I)(x)),
            (i = null != A && (0, h.Y)(A.type) ? A : null),
            (0, k.A)({
                targetChannelId: l,
                mention: null != i ? { display: `#${(0, y.m1)(i, m.default, g.A)}`, raw: `<#${i.id}>` } : null,
            })),
        v =
            null != A
                ? (0, u.A)(A, I, C, !0)
                : (0, t.jsx)(a.Dr, {
                      id: "channel-copy-link",
                      label: p.intl.string(p.t.WqhZss),
                      icon: r.LinkIcon,
                      leadingAccessory: { type: "icon", icon: r.LinkIcon },
                      action: () => {
                          (0, d.C)(C ?? "");
                      },
                  }),
        w = (0, s.A)({ id: b, label: p.intl.string(p.t.gFHI3k) });
    return (0, t.jsxs)(e.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-mention-context",
        onClose: c.Z_,
        onSelect: f,
        "aria-label": p.intl.string(p.t.feGACE),
        children: [
            null != j && (0, t.jsx)(a.rX, { children: j }, "mention"),
            (0, t.jsxs)(a.rX, { children: [v, w] }, "copy-actions"),
        ],
    });
}
