var i = t(477900);
t(582128);
var e = t(855986),
    a = t(477782),
    s = t(811893),
    c = t(165862),
    d = t(442433),
    o = t(886393),
    r = t(475777),
    u = t(293432),
    g = t(574172),
    h = t(253932),
    p = t(922795),
    v = t(71393),
    A = t(652215),
    b = t(792996);
t.d(
    n,
    {},
    {
        default: function (l) {
            var n;
            let t,
                L,
                k,
                x,
                { channel: _, onSelect: j, onInteraction: C } = l,
                G = (0, p.A)(),
                w = h.vL.useSetting(),
                S =
                    ((n = _ ?? void 0),
                    (t = (0, e.bG)([u.A], () => u.A.getWindow(A.MLl.CHANNEL_CALL_POPOUT))),
                    null == n || null != t
                        ? null
                        : (0, i.jsx)(a.Dr, {
                              id: "popout-call",
                              label: b.intl.string(b.t.JzWezz),
                              icon: s.t,
                              trailingIndicator: { type: "icon", icon: s.t },
                              action: () => g.d8(n),
                          })),
                z =
                    ((L = (0, e.bG)([v.A], () => v.A.getGuild(_?.guild_id))),
                    (k = (0, r.A)(_ ?? null, L ?? null)),
                    (x = (0, o.A)(_ ?? null)),
                    null != _ && _.isGuildVocal() ? (0, i.jsxs)(a.rX, { children: [k, x] }) : null);
            return (0, i.jsxs)(c.W, {
                "data-menu-migrated-auto": !0,
                navId: "rtc-channel",
                "aria-label": b.intl.string(b.t.ogxXGq),
                onClose: d.Z_,
                onSelect: j,
                onInteraction: C,
                children: [
                    G,
                    z,
                    (0, i.jsxs)(a.rX, {
                        children: [
                            S,
                            (0, i.jsx)(a.sL, {
                                id: "show-voice-states",
                                checked: w,
                                action: () => h.vL.updateSetting(!w),
                                label: b.intl.string(b.t.vkbSB0),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);
