(n.d(t, { default: () => G }), n(321073));
var i = n(477900),
    s = n(582128),
    l = n(91871),
    a = n.n(l),
    r = n(17928),
    d = n(189213),
    c = n(683438),
    o = n(834730),
    u = n(939249),
    m = n(398590),
    h = n(548118),
    g = n(976860),
    x = n(71393),
    j = n(711014),
    y = n(473145),
    p = n(652215),
    f = n(105292),
    v = n(150319);
function C(e) {
    let { setQuery: t, query: n } = e;
    return (0, i.jsx)(c.I, {
        placeholder: f.intl.string(f.t.vf3ZTa),
        "aria-label": f.intl.string(f.t.vf3ZTa),
        query: n,
        onChange: t,
        onClear: () => t(""),
    });
}
function b(e) {
    let { isTransfer: t = !1, selectedSlotGuilds: n, onClose: s, onSelectGuild: l, query: d } = e,
        c = (0, r.bG)([j.Ay], () => j.Ay.getFlattenedGuildIds()),
        C = (0, r.yK)([x.A], () =>
            c.reduce((e, t) => {
                let i = x.A.getGuild(t);
                return (
                    null == i ||
                        i.features.has(p.GuildFeatures.HUB) ||
                        (null != n && n.some((e) => e.id === t)) ||
                        ((d.length <= 0 || a()(d.toLowerCase(), i?.name.toLowerCase())) && e.push(i)),
                    e
                );
            }, []),
        );
    function b() {
        (s(), (0, m.jH)(), (0, g.pX)(p.BVt.GUILD_DISCOVERY));
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            0 === C.length &&
                (0, i.jsx)("div", {
                    className: v.Kl,
                    children: (0, i.jsx)(o.E, {
                        variant: "body-md/normal",
                        children:
                            0 === c.length
                                ? f.intl.format(f.t["E3tB6+"], {
                                      publicGuildDirectoryHook: (e, t) =>
                                          (0, i.jsx)(u.D, { onClick: b, tag: "a", children: e }, t),
                                  })
                                : f.intl.string(f.t.w3GLl9),
                    }),
                }),
            C.map((e) =>
                (0, i.jsxs)(
                    u.D,
                    {
                        className: v.Ss,
                        onClick: () => {
                            l(e);
                        },
                        children: [
                            (0, i.jsx)(h.Ay, { className: v.Bq, guild: e, size: h.Ay.Sizes.SMALL, active: !0 }),
                            (0, i.jsxs)("div", {
                                className: v.Vi,
                                children: [
                                    (0, i.jsx)(o.E, { className: v.tD, variant: "body-md/normal", children: e.name }),
                                    (0, i.jsx)(o.E, {
                                        className: v.w2,
                                        color: "text-muted",
                                        variant: "body-xs/normal",
                                        children: (0, y.gb)(e.premiumTier),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(o.E, {
                                className: v.qW,
                                color: "text-overlay-light",
                                variant: "body-sm/medium",
                                children: t ? f.intl.string(f.t.dUgaF8) : f.intl.string(f.t.Uj0md3),
                            }),
                        ],
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function G(e) {
    let { onClose: t, onSelectGuild: n, transitionState: l, isTransfer: a = !1, selectedSlotGuilds: r } = e,
        [c, o] = s.useState("");
    async function u() {
        await t();
    }
    let m = a ? f.intl.string(f.t.IB13DV) : f.intl.string(f.t.cQYceV);
    return (0, i.jsx)(d.a, {
        transitionState: l,
        onClose: u,
        size: "md",
        title: m,
        input: (0, i.jsx)(C, { query: c, setQuery: o }),
        actions: [],
        children: (0, i.jsx)(b, { onClose: t, onSelectGuild: n, query: c, isTransfer: a, selectedSlotGuilds: r }),
    });
}
