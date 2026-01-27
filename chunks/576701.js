n.d(t, {
    default: () => f,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    o = n(442433),
    c = n(886393),
    u = n(475777),
    a = n(87001),
    s = n(574172),
    d = n(253932),
    p = n(235661),
    b = n(71393),
    O = n(652215),
    v = n(985018);

function f(e) {
    var t;
    let n,
        f,
        g,
        y,
        { channel: A, onSelect: E, onInteraction: j } = e,
        D = (0, p.A)(),
        P = d.vL.useSetting(),
        h =
            ((t = null != A ? A : void 0),
            (n = (0, l.bG)([a.A], () => a.A.getWindow(O.MLl.CHANNEL_CALL_POPOUT))),
            null == t || null != n
                ? null
                : (0, r.jsx)(i.Drp, {
                      id: "popout-call",
                      label: v.intl.string(v.t.JzWezz),
                      icon: i.tfB,
                      trailingIndicator: {
                          type: "icon",
                          icon: i.tfB,
                      },
                      action: () => s.openChannelCallPopout(t),
                  })),
        w =
            ((f = (0, l.bG)([b.A], () => b.A.getGuild(null == A ? void 0 : A.guild_id))),
            (g = (0, u.A)(null != A ? A : null, null != f ? f : null)),
            (y = (0, c.A)(null != A ? A : null)),
            null != A && A.isGuildVocal()
                ? (0, r.jsxs)(i.rXV, {
                      children: [g, y],
                  })
                : null);
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "rtc-channel",
        "aria-label": v.intl.string(v.t.ogxXGq),
        onClose: o.Z_,
        onSelect: E,
        onInteraction: j,
        children: [
            D,
            w,
            (0, r.jsxs)(i.rXV, {
                children: [
                    h,
                    (0, r.jsx)(i.sLh, {
                        id: "show-voice-states",
                        checked: P,
                        action: () => d.vL.updateSetting(!P),
                        label: v.intl.string(v.t.vkbSB0),
                    }),
                ],
            }),
        ],
    });
}
