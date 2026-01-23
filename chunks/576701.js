n.d(t, {
    default: () => j,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    o = n(442433),
    u = n(886393),
    c = n(475777),
    a = n(87001),
    s = n(574172),
    d = n(253932),
    p = n(235661),
    b = n(71393),
    O = n(652215),
    f = n(985018);

function j(e) {
    var t;
    let n,
        j,
        v,
        g,
        { channel: A, onSelect: h, onInteraction: y } = e,
        E = (0, p.A)(),
        P = d.vL.useSetting(),
        D =
            ((t = null != A ? A : void 0),
            (n = (0, l.bG)([a.A], () => a.A.getWindow(O.MLl.CHANNEL_CALL_POPOUT))),
            null == t || null != n
                ? null
                : (0, r.jsx)(i.Drp, {
                      id: "popout-call",
                      label: f.intl.string(f.t.JzWezz),
                      icon: i.tfB,
                      action: () => s.openChannelCallPopout(t),
                  })),
        w =
            ((j = (0, l.bG)([b.A], () => b.A.getGuild(null == A ? void 0 : A.guild_id))),
            (v = (0, c.A)(null != A ? A : null, null != j ? j : null)),
            (g = (0, u.A)(null != A ? A : null)),
            null != A && A.isGuildVocal()
                ? (0, r.jsxs)(i.rXV, {
                      children: [v, g],
                  })
                : null);
    return (0, r.jsxs)(i.W1t, {
        "data-menu-mixed": !0,
        navId: "rtc-channel",
        "aria-label": f.intl.string(f.t.ogxXGq),
        onClose: o.Z_,
        onSelect: h,
        onInteraction: y,
        children: [
            E,
            w,
            (0, r.jsxs)(i.rXV, {
                children: [
                    D,
                    (0, r.jsx)(i.sLh, {
                        id: "show-voice-states",
                        checked: P,
                        action: () => d.vL.updateSetting(!P),
                        label: f.intl.string(f.t.vkbSB0),
                    }),
                ],
            }),
        ],
    });
}
