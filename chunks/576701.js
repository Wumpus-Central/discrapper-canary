e.d(t, { default: () => b });
var i = e(627968);
e(64700);
var l = e(17928),
    r = e(477782),
    o = e(811893),
    a = e(550079),
    d = e(442433),
    c = e(886393),
    u = e(475777),
    s = e(567249),
    A = e(574172),
    E = e(253932),
    p = e(235661),
    v = e(71393),
    g = e(652215),
    D = e(985018);
function b(n) {
    var t;
    let e,
        b,
        h,
        I,
        { channel: L, onSelect: _, onInteraction: x } = n,
        G = (0, p.A)(),
        P = E.vL.useSetting(),
        j =
            ((t = L ?? void 0),
            (e = (0, l.bG)([s.A], () => s.A.getWindow(g.MLl.CHANNEL_CALL_POPOUT))),
            null == t || null != e
                ? null
                : (0, i.jsx)(r.Dr, {
                      id: "popout-call",
                      label: D.intl.string(D.t.JzWezz),
                      icon: o.t,
                      trailingIndicator: { type: "icon", icon: o.t },
                      action: () => A.openChannelCallPopout(t),
                  })),
        y =
            ((b = (0, l.bG)([v.A], () => v.A.getGuild(L?.guild_id))),
            (h = (0, u.A)(L ?? null, b ?? null)),
            (I = (0, c.A)(L ?? null)),
            null != L && L.isGuildVocal() ? (0, i.jsxs)(r.rX, { children: [h, I] }) : null);
    return (0, i.jsxs)(a.W, {
        "data-menu-migrated-auto": !0,
        navId: "rtc-channel",
        "aria-label": D.intl.string(D.t.ogxXGq),
        onClose: d.Z_,
        onSelect: _,
        onInteraction: x,
        children: [
            G,
            y,
            (0, i.jsxs)(r.rX, {
                children: [
                    j,
                    (0, i.jsx)(r.sL, {
                        id: "show-voice-states",
                        checked: P,
                        action: () => E.vL.updateSetting(!P),
                        label: D.intl.string(D.t.vkbSB0),
                    }),
                ],
            }),
        ],
    });
}
