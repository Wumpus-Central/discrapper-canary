(n.d(e, { default: () => S }), n(321073));
var i = n(477900),
    s = n(582128),
    l = n(91871),
    a = n.n(l),
    r = n(17928),
    c = n(189213),
    d = n(683438),
    o = n(834730),
    u = n(939249),
    m = n(398590),
    h = n(548118),
    x = n(976860),
    g = n(71393),
    j = n(711014),
    p = n(473145),
    y = n(652215),
    f = n(105292),
    v = n(150319);
function C(t) {
    let { setQuery: e, query: n } = t;
    return (0, i.jsx)(d.I, {
        placeholder: f.intl.string(f.t.vf3ZTa),
        "aria-label": f.intl.string(f.t.vf3ZTa),
        query: n,
        onChange: e,
        onClear: () => e(""),
    });
}
function G(t) {
    let { isTransfer: e = !1, selectedSlotGuilds: n, onClose: s, onSelectGuild: l, query: c } = t,
        d = (0, r.bG)([j.Ay], () => j.Ay.getFlattenedGuildIds()),
        C = (0, r.yK)([g.A], () =>
            d.reduce((t, e) => {
                let i = g.A.getGuild(e);
                return (
                    null == i ||
                        i.features.has(y.GuildFeatures.HUB) ||
                        (null != n && n.some((t) => t.id === e)) ||
                        ((c.length <= 0 || a()(c.toLowerCase(), i?.name.toLowerCase())) && t.push(i)),
                    t
                );
            }, []),
        );
    function G() {
        (s(), (0, m.jH)(), (0, x.pX)(y.BVt.GUILD_DISCOVERY));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            0 === C.length &&
                (0, i.jsx)("div", {
                    className: v.Kl,
                    children: (0, i.jsx)(o.E, {
                        variant: "text-md/normal",
                        children:
                            0 === d.length
                                ? f.intl.format(f.t["E3tB6+"], {
                                      publicGuildDirectoryHook: (t, e) =>
                                          (0, i.jsx)(u.D, { onClick: G, tag: "a", children: t }, e),
                                  })
                                : f.intl.string(f.t.w3GLl9),
                    }),
                }),
            C.map((t) =>
                (0, i.jsxs)(
                    u.D,
                    {
                        className: v.Ss,
                        onClick: () => {
                            l(t);
                        },
                        children: [
                            (0, i.jsx)(h.Ay, { className: v.Bq, guild: t, size: h.Ay.Sizes.SMALL, active: !0 }),
                            (0, i.jsxs)("div", {
                                className: v.Vi,
                                children: [
                                    (0, i.jsx)(o.E, { className: v.tD, variant: "text-md/normal", children: t.name }),
                                    (0, i.jsx)(o.E, {
                                        className: v.w2,
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: (0, p.gb)(t.premiumTier),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(o.E, {
                                className: v.qW,
                                color: "text-overlay-light",
                                variant: "text-sm/medium",
                                children: e ? f.intl.string(f.t.dUgaF8) : f.intl.string(f.t.Uj0md3),
                            }),
                        ],
                    },
                    t.id,
                ),
            ),
        ],
    });
}
function S(t) {
    let { onClose: e, onSelectGuild: n, transitionState: l, isTransfer: a = !1, selectedSlotGuilds: r } = t,
        [d, o] = s.useState("");
    async function u() {
        await e();
    }
    let m = a ? f.intl.string(f.t.IB13DV) : f.intl.string(f.t.cQYceV);
    return (0, i.jsx)(c.a, {
        transitionState: l,
        onClose: u,
        size: "md",
        title: m,
        input: (0, i.jsx)(C, { query: d, setQuery: o }),
        actions: [],
        children: (0, i.jsx)(G, { onClose: e, onSelectGuild: n, query: d, isTransfer: a, selectedSlotGuilds: r }),
    });
}
