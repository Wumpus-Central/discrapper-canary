var t = i(477900);
i(582128);
var l = i(855986),
    r = i(477782),
    o = i(241541),
    c = i(192308),
    u = i(855687),
    s = i(576705),
    a = i(652215),
    d = i(792996);
function E(e, n) {
    return (null != n && [a.PE1.GUILD_HEADER, a.PE1.GUILD_CONTEXT_MENU].includes(n)) || null == e
        ? d.intl.string(d.t.Sd8Ixw)
        : e.type === a.rbe.GUILD_VOICE
          ? d.intl.string(d.t["EE+P0H"])
          : d.intl.string(d.t["0jeAXt"]);
}
i.d(
    n,
    {},
    {
        A: function (e) {
            var n;
            let d,
                { source: p, guild: D, channel: I, stageInstance: G } = e,
                P = (0, l.bG)([s.A], () => (0, u.K)(s.A, D, I, G)),
                A = (function (e, n, l) {
                    if (null == n) return null;
                    let u = E(l, e);
                    return (0, t.jsx)(r.Dr, {
                        id: "invite-people",
                        label: u,
                        color: "brand",
                        icon: e === a.PE1.GUILD_HEADER ? o.GroupPlusIcon : void 0,
                        leadingAccessory: e === a.PE1.GUILD_HEADER ? { type: "icon", icon: o.GroupPlusIcon } : void 0,
                        action: () =>
                            (0, c.mM)(async () => {
                                let { default: r } = await Promise.all([
                                    i.e(683621),
                                    i.e(711162),
                                    i.e(401425),
                                    i.e(919170),
                                    i.e(258398),
                                    i.e(70833),
                                    i.e(897073),
                                    i.e(658216),
                                    i.e(159957),
                                    i.e(728136),
                                    i.e(680029),
                                    i.e(966623),
                                ]).then(i.bind(i, 660194));
                                return (i) => (0, t.jsx)(r, { ...i, guild: n, channel: l, source: e });
                            }),
                    });
                })(p, D, I),
                b =
                    ((d = E(I, (n = p))),
                    (0, t.jsx)(r.Dr, {
                        id: "invite-people",
                        label: d,
                        color: "brand",
                        icon: n === a.PE1.GUILD_HEADER ? o.GroupPlusIcon : void 0,
                        leadingAccessory: n === a.PE1.GUILD_HEADER ? { type: "icon", icon: o.GroupPlusIcon } : void 0,
                        action: () =>
                            (0, c.mM)(async () => {
                                let { default: e } = await i.e(962751).then(i.bind(i, 132610));
                                return (n) => (0, t.jsx)(e, { ...n });
                            }),
                    }));
            return P ? A : b;
        },
    },
);
