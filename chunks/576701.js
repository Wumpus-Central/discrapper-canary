var t = i(477900);
i(582128);
var e = i(855986),
    a = i(477782),
    c = i(811893),
    o = i(165862),
    d = i(442433),
    s = i(886393),
    u = i(475777),
    r = i(293432),
    h = i(574172),
    g = i(253932),
    p = i(922795),
    v = i(71393),
    A = i(652215),
    L = i(792996);
i.d(
    l,
    {},
    {
        default: function (n) {
            var l;
            let i,
                b,
                k,
                w,
                { channel: x, onSelect: _, onInteraction: j } = n,
                C = (0, p.A)(),
                G = g.vL.useSetting(),
                I =
                    ((l = x ?? void 0),
                    (i = (0, e.bG)([r.A], () => r.A.getWindow(A.MLl.CHANNEL_CALL_POPOUT))),
                    null == l || null != i
                        ? null
                        : (0, t.jsx)(a.Dr, {
                              id: "popout-call",
                              label: L.intl.string(L.t.JzWezz),
                              icon: c.WindowLaunchIcon,
                              trailingIndicator: { type: "icon", icon: c.WindowLaunchIcon },
                              action: () => h.d8(l),
                          })),
                W =
                    ((b = (0, e.bG)([v.A], () => v.A.getGuild(x?.guild_id))),
                    (k = (0, u.A)(x ?? null, b ?? null)),
                    (w = (0, s.A)(x ?? null)),
                    null != x && x.isGuildVocal() ? (0, t.jsxs)(a.rX, { children: [k, w] }) : null);
            return (0, t.jsxs)(o.W, {
                "data-menu-migrated-auto": !0,
                navId: "rtc-channel",
                "aria-label": L.intl.string(L.t.ogxXGq),
                onClose: d.Z_,
                onSelect: _,
                onInteraction: j,
                children: [
                    C,
                    W,
                    (0, t.jsxs)(a.rX, {
                        children: [
                            I,
                            (0, t.jsx)(a.sL, {
                                id: "show-voice-states",
                                checked: G,
                                action: () => g.vL.updateSetting(!G),
                                label: L.intl.string(L.t.vkbSB0),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
);
