n.d(e, { default: () => S }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(91871),
    a = n.n(s),
    r = n(189213),
    c = n(17928),
    d = n(892547),
    o = n(834730),
    u = n(939249),
    m = n(398590),
    h = n(548118),
    x = n(976860),
    g = n(71393),
    j = n(711014),
    p = n(473145),
    y = n(652215),
    v = n(375708),
    C = n(249836);
function f(t) {
    let { setQuery: e, query: n } = t;
    return (0, i.jsx)(d.I, {
        placeholder: v.intl.string(v.t.vf3ZTa),
        "aria-label": v.intl.string(v.t.vf3ZTa),
        query: n,
        onChange: e,
        onClear: () => e(""),
    });
}
function G(t) {
    let { isTransfer: e = !1, selectedSlotGuilds: n, onClose: l, onSelectGuild: s, query: r } = t,
        d = (0, c.bG)([j.Ay], () => j.Ay.getFlattenedGuildIds()),
        f = (0, c.yK)([g.A], () =>
            d.reduce((t, e) => {
                let i = g.A.getGuild(e);
                return (
                    null == i ||
                        (null != n && n.some((t) => t.id === e)) ||
                        ((r.length <= 0 || a()(r.toLowerCase(), i?.name.toLowerCase())) && t.push(i)),
                    t
                );
            }, []),
        );
    function G() {
        l(), (0, m.jH)(), (0, x.pX)(y.BVt.GUILD_DISCOVERY);
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            0 === f.length &&
                (0, i.jsx)("div", {
                    className: C.Kl,
                    children: (0, i.jsx)(o.E, {
                        variant: "text-md/normal",
                        children:
                            0 === d.length
                                ? v.intl.format(v.t["E3tB6+"], {
                                      publicGuildDirectoryHook: (t, e) =>
                                          (0, i.jsx)(u.D, { onClick: G, tag: "a", children: t }, e),
                                  })
                                : v.intl.string(v.t.w3GLl9),
                    }),
                }),
            f.map((t) =>
                (0, i.jsxs)(
                    u.D,
                    {
                        className: C.Ss,
                        onClick: () => {
                            s(t);
                        },
                        children: [
                            (0, i.jsx)(h.Ay, { className: C.Bq, guild: t, size: h.Ay.Sizes.SMALL, active: !0 }),
                            (0, i.jsxs)("div", {
                                className: C.Vi,
                                children: [
                                    (0, i.jsx)(o.E, { className: C.tD, variant: "text-md/normal", children: t.name }),
                                    (0, i.jsx)(o.E, {
                                        className: C.w2,
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: (0, p.gb)(t.premiumTier),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(o.E, {
                                className: C.qW,
                                color: "text-overlay-light",
                                variant: "text-sm/medium",
                                children: e ? v.intl.string(v.t.dUgaF8) : v.intl.string(v.t.Uj0md3),
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
    let { onClose: e, onSelectGuild: n, transitionState: s, isTransfer: a = !1, selectedSlotGuilds: c } = t,
        [d, o] = l.useState("");
    async function u() {
        await e();
    }
    let m = a ? v.intl.string(v.t.IB13DV) : v.intl.string(v.t.cQYceV);
    return (0, i.jsx)(r.Modal, {
        transitionState: s,
        onClose: u,
        size: "md",
        title: m,
        input: (0, i.jsx)(f, { query: d, setQuery: o }),
        actions: [],
        children: (0, i.jsx)(G, { onClose: e, onSelectGuild: n, query: d, isTransfer: a, selectedSlotGuilds: c }),
    });
}
