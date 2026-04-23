l.d(e, { default: () => N }), l(321073);
var n = l(627968),
    i = l(64700),
    s = l(91871),
    r = l.n(s),
    a = l(189213),
    o = l(17928),
    d = l(892547),
    c = l(834730),
    u = l(939249),
    m = l(398590),
    x = l(548118),
    h = l(976860),
    g = l(71393),
    C = l(711014),
    j = l(473145),
    v = l(652215),
    f = l(985018),
    p = l(249836);
function S(t) {
    let { setQuery: e, query: l } = t;
    return (0, n.jsx)(d.I, {
        placeholder: f.intl.string(f.t.vf3ZTa),
        "aria-label": f.intl.string(f.t.vf3ZTa),
        query: l,
        onChange: e,
        onClear: () => e(""),
    });
}
function y(t) {
    let { isTransfer: e = !1, selectedSlotGuilds: l, onClose: i, onSelectGuild: s, query: a } = t,
        d = (0, o.bG)([C.Ay], () => C.Ay.getFlattenedGuildIds()),
        S = (0, o.yK)([g.A], () =>
            d.reduce((t, e) => {
                let n = g.A.getGuild(e);
                return (
                    null == n ||
                        (null != l && l.some((t) => t.id === e)) ||
                        ((a.length <= 0 || r()(a.toLowerCase(), n?.name.toLowerCase())) && t.push(n)),
                    t
                );
            }, []),
        );
    function y() {
        i(), (0, m.jH)(), (0, h.pX)(v.BVt.GUILD_DISCOVERY);
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            0 === S.length &&
                (0, n.jsx)("div", {
                    className: p.Kl,
                    children: (0, n.jsx)(c.E, {
                        variant: "text-md/normal",
                        children:
                            0 === d.length
                                ? f.intl.format(f.t["E3tB6+"], {
                                      publicGuildDirectoryHook: (t, e) =>
                                          (0, n.jsx)(u.D, { onClick: y, tag: "a", children: t }, e),
                                  })
                                : f.intl.string(f.t.w3GLl9),
                    }),
                }),
            S.map((t) =>
                (0, n.jsxs)(
                    u.D,
                    {
                        className: p.Ss,
                        onClick: () => {
                            s(t);
                        },
                        children: [
                            (0, n.jsx)(x.Ay, { className: p.Bq, guild: t, size: x.Ay.Sizes.SMALL, active: !0 }),
                            (0, n.jsxs)("div", {
                                className: p.Vi,
                                children: [
                                    (0, n.jsx)(c.E, { className: p.tD, variant: "text-md/normal", children: t.name }),
                                    (0, n.jsx)(c.E, {
                                        className: p.w2,
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: (0, j.gb)(t.premiumTier),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(c.E, {
                                className: p.qW,
                                color: "always-white",
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
function N(t) {
    let { onClose: e, onSelectGuild: l, transitionState: s, isTransfer: r = !1, selectedSlotGuilds: o } = t,
        [d, c] = i.useState(""),
        u = async () => {
            await e();
        },
        m = r ? f.intl.string(f.t.IB13DV) : f.intl.string(f.t.cQYceV);
    return (0, n.jsx)(a.Modal, {
        transitionState: s,
        onClose: u,
        size: "md",
        title: m,
        input: (0, n.jsx)(S, { query: d, setQuery: c }),
        actions: [],
        children: (0, n.jsx)(y, { onClose: e, onSelectGuild: l, query: d, isTransfer: r, selectedSlotGuilds: o }),
    });
}
