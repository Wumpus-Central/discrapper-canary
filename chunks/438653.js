i.d(e, { C: () => y, z: () => C });
var l = i(477900);
i(582128);
var t = i(435558),
    r = i.n(t),
    a = i(17928),
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
    g = i(16236),
    p = i(5180),
    G = i(652215),
    j = i(760658),
    v = i(105292);
function x(n) {
    return n ? v.intl.string(j.default.TN4nAX) : v.intl.string(j.default.G9fGlP);
}
function C(n) {
    let e = (0, a.bG)([h.Ay], () => h.Ay.getChannels(G.YYv))[G.rbe.GUILD_CATEGORY],
        i = (0, p.jt)(n),
        t = (0, a.bG)([f.A], () => {
            if (null == n.guild_id) return !0;
            let e = f.A.getGuild(n.guild_id);
            return null != e && !(0, s.DG)(e);
        }),
        u = !__OVERLAY__ && i && t,
        C = (0, a.bG)([b.A], () => b.A.isFavorite(n.id)),
        y = x(!1);
    function D(n, e) {
        return (0, l.jsx)(c.Dr, {
            id: "favorite-channel",
            label: y,
            leadingAccessory: { type: "icon", icon: d.StarIcon },
            iconLeft: d.StarIcon,
            action: n,
            children: e,
        });
    }
    if (!u || C) return null;
    let [[m], L] = r().partition(e, (n) => "null" === n.channel.id);
    function Y(e) {
        (0, g.S_)({ channelIds: [n.id], parentId: e, source: "channel_context_menu" });
    }
    if (0 === L.length) return D(() => Y(null));
    let k = v.intl.string(j.default.CgmkFJ);
    return D(
        () => Y(null),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(c.rX, {
                    children: (0, l.jsx)(
                        c.Dr,
                        {
                            id: `favorite-${m.channel.id}`,
                            label: k,
                            action: () => Y("null" === m.channel.id ? null : m.channel.id),
                        },
                        m.channel.id,
                    ),
                }),
                (0, l.jsx)(c.rX, {
                    children: L.map((n) =>
                        (0, l.jsx)(
                            c.Dr,
                            {
                                id: `favorite-${n.channel.id}`,
                                label: (0, o.m1)(n.channel, A.default, _.A),
                                action: () => Y(n.channel.id),
                            },
                            n.channel.id,
                        ),
                    ),
                }),
            ],
        }),
    );
}
function y(n) {
    let e = (0, a.bG)([b.A], () => b.A.isFavorite(n.id));
    return __OVERLAY__ || !e
        ? null
        : (0, l.jsx)(c.Dr, {
              id: "favorite-channel",
              label: x(!0),
              color: "danger",
              action: () =>
                  n.type === G.rbe.GUILD_CATEGORY
                      ? (0, u.openModalLazy)(async () => {
                            let { default: e } = await i.e("992085").then(i.bind(i, 703476));
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
}
