e.d(n, { default: () => w });
var a = e(627968),
    d = e(64700),
    l = e(980707),
    t = e(477782),
    c = e(22231),
    o = e(241326),
    r = e(442433),
    s = e(888697),
    u = e(26741),
    g = e(722884),
    h = e(844045),
    p = e(375708);
function w(i) {
    let { channel: n, onSelect: e } = i,
        w = d.useCallback(() => {
            (0, g.A)({ channel: n });
        }, [n]),
        b = d.useCallback(() => {
            (0, u.nK)({ guildId: n.guild_id, channelId: n.id }), (0, s.e2)(n.id);
        }, [n.guild_id, n.id]);
    return (0, a.jsx)(l.W, {
        "data-menu-migrated": !0,
        navId: "hangout-window-context",
        onClose: r.Z_,
        "aria-label": p.intl.string(h.default["7rawC9"]),
        onSelect: e,
        children: (0, a.jsxs)(t.rX, {
            children: [
                (0, a.jsx)(t.Dr, {
                    id: "hangout-window-change-image",
                    label: p.intl.string(h.default.XJ4UpB),
                    leadingAccessory: { type: "icon", icon: c.R },
                    action: w,
                }),
                (0, a.jsx)(t.Dr, {
                    id: "hangout-window-remove-image",
                    color: "danger",
                    label: p.intl.string(h.default.XV4qT6),
                    leadingAccessory: { type: "icon", icon: o.u },
                    action: b,
                }),
            ],
        }),
    });
}
