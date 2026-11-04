var t = i(477900);
i(582128);
var l = i(855986),
    r = i(477782),
    c = i(241541),
    o = i(192308),
    a = i(855687),
    s = i(576705),
    d = i(652215),
    u = i(792996);
function E(e, n) {
    return (null != n && [d.PE1.GUILD_HEADER, d.PE1.GUILD_CONTEXT_MENU].includes(n)) || null == e
        ? u.intl.string(u.t.Sd8Ixw)
        : e.type === d.rbe.GUILD_VOICE
          ? u.intl.string(u.t["EE+P0H"])
          : u.intl.string(u.t["0jeAXt"]);
}
i.d(
    n,
    {},
    {
        A: function (e) {
            var n;
            let u,
                { source: D, guild: p, channel: A, stageInstance: b } = e,
                _ = (0, l.bG)([s.A], () => (0, a.K)(s.A, p, A, b)),
                v = (function (e, n, l) {
                    if (null == n) return null;
                    let a = E(l, e);
                    return (0, t.jsx)(r.Dr, {
                        id: "invite-people",
                        label: a,
                        color: "brand",
                        icon: e === d.PE1.GUILD_HEADER ? c.D : void 0,
                        leadingAccessory: e === d.PE1.GUILD_HEADER ? { type: "icon", icon: c.D } : void 0,
                        action: () =>
                            (0, o.mM)(async () => {
                                let { default: r } = await Promise.all([
                                    i.e(683621),
                                    i.e(711162),
                                    i.e(401425),
                                    i.e(919170),
                                    i.e(70833),
                                    i.e(897073),
                                    i.e(159957),
                                    i.e(728136),
                                    i.e(680029),
                                    i.e(966623),
                                ]).then(i.bind(i, 660194));
                                return (i) => (0, t.jsx)(r, { ...i, guild: n, channel: l, source: e });
                            }),
                    });
                })(D, p, A),
                I =
                    ((u = E(A, (n = D))),
                    (0, t.jsx)(r.Dr, {
                        id: "invite-people",
                        label: u,
                        color: "brand",
                        icon: n === d.PE1.GUILD_HEADER ? c.D : void 0,
                        leadingAccessory: n === d.PE1.GUILD_HEADER ? { type: "icon", icon: c.D } : void 0,
                        action: () =>
                            (0, o.mM)(async () => {
                                let { default: e } = await i.e(962751).then(i.bind(i, 132610));
                                return (n) => (0, t.jsx)(e, { ...n });
                            }),
                    }));
            return _ ? v : I;
        },
    },
);
