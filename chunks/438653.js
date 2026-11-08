var l = i(477900);
i(582128);
var t = i(435558),
    r = i.n(t),
    a = i(855986),
    c = i(477782),
    d = i(27232),
    u = i(192308),
    o = i(47167),
    s = i(260509),
    h = i(808728),
    f = i(71393),
    _ = i(994500),
    A = i(287809),
    b = i(181079),
    g = i(794412),
    G = i(5180),
    p = i(652215),
    j = i(708526),
    v = i(792996);
function x(n) {
    return n ? v.intl.string(j.default.TN4nAX) : v.intl.string(j.default.G9fGlP);
}
i.d(
    e,
    {},
    {
        C: function (n) {
            let e = (0, a.bG)([b.A], () => b.A.isFavorite(n.id));
            return __OVERLAY__ || !e
                ? null
                : (0, l.jsx)(c.Dr, {
                      id: "favorite-channel",
                      label: x(!0),
                      color: "danger",
                      action: () =>
                          n.type === p.rbe.GUILD_CATEGORY
                              ? (0, u.mM)(async () => {
                                    let { default: e } = await i.e(992085).then(i.bind(i, 703476));
                                    return (i) =>
                                        (0, l.jsx)(e, {
                                            ...i,
                                            onConfirm: () => {
                                                (i.onClose(), (0, g.i_)(n.id));
                                            },
                                            channel: n,
                                        });
                                })
                              : (0, g.i_)(n.id),
                  });
        },
        z: function (n) {
            let e = (0, a.bG)([h.A], () => h.A.getChannels(p.YYv))[p.rbe.GUILD_CATEGORY],
                i = (0, G.jt)(n),
                t = (0, a.bG)([f.A], () => {
                    if (null == n.guild_id) return !0;
                    let e = f.A.getGuild(n.guild_id);
                    return null != e && !(0, s.DG)(e);
                }),
                u = !__OVERLAY__ && i && t,
                C = (0, a.bG)([b.A], () => b.A.isFavorite(n.id)),
                m = x(!1);
            function D(n, e) {
                return (0, l.jsx)(c.Dr, {
                    id: "favorite-channel",
                    label: m,
                    leadingAccessory: { type: "icon", icon: d.StarIcon },
                    iconLeft: d.StarIcon,
                    action: n,
                    children: e,
                });
            }
            if (!u || C) return null;
            let [[Y], k] = r().partition(e, (n) => "null" === n.channel.id);
            function I(e) {
                (0, g.S_)({ channelIds: [n.id], parentId: e, source: "channel_context_menu" });
            }
            if (0 === k.length) return D(() => I(null));
            let L = v.intl.string(j.default.CgmkFJ);
            return D(
                () => I(null),
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(c.rX, {
                            children: (0, l.jsx)(
                                c.Dr,
                                {
                                    id: `favorite-${Y.channel.id}`,
                                    label: L,
                                    action: () => I("null" === Y.channel.id ? null : Y.channel.id),
                                },
                                Y.channel.id,
                            ),
                        }),
                        (0, l.jsx)(c.rX, {
                            children: k.map((n) =>
                                (0, l.jsx)(
                                    c.Dr,
                                    {
                                        id: `favorite-${n.channel.id}`,
                                        label: (0, o.m1)(n.channel, A.default, _.A),
                                        action: () => I(n.channel.id),
                                    },
                                    n.channel.id,
                                ),
                            ),
                        }),
                    ],
                }),
            );
        },
    },
);
