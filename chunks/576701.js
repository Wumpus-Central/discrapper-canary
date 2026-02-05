e.d(t, { default: () => D });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    o = e(442433),
    a = e(886393),
    u = e(475777),
    c = e(87001),
    d = e(574172),
    s = e(253932),
    p = e(235661),
    A = e(71393),
    E = e(652215),
    v = e(985018);
function D(n) {
    var t;
    let e,
        D,
        h,
        g,
        { channel: b, onSelect: _, onInteraction: L } = n,
        x = (0, p.A)(),
        G = s.vL.useSetting(),
        j =
            ((t = b ?? void 0),
            (e = (0, l.bG)([c.A], () => c.A.getWindow(E.MLl.CHANNEL_CALL_POPOUT))),
            null == t || null != e
                ? null
                : (0, i.jsx)(r.Drp, {
                      id: "popout-call",
                      label: v.intl.string(v.t.JzWezz),
                      icon: r.tfB,
                      trailingIndicator: { type: "icon", icon: r.tfB },
                      action: () => d.openChannelCallPopout(t),
                  })),
        I =
            ((D = (0, l.bG)([A.A], () => A.A.getGuild(b?.guild_id))),
            (h = (0, u.A)(b ?? null, D ?? null)),
            (g = (0, a.A)(b ?? null)),
            null != b && b.isGuildVocal() ? (0, i.jsxs)(r.rXV, { children: [h, g] }) : null);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "rtc-channel",
        "aria-label": v.intl.string(v.t.ogxXGq),
        onClose: o.Z_,
        onSelect: _,
        onInteraction: L,
        children: [
            x,
            I,
            (0, i.jsxs)(r.rXV, {
                children: [
                    j,
                    (0, i.jsx)(r.sLh, {
                        id: "show-voice-states",
                        checked: G,
                        action: () => s.vL.updateSetting(!G),
                        label: v.intl.string(v.t.vkbSB0),
                    }),
                ],
            }),
        ],
    });
}
