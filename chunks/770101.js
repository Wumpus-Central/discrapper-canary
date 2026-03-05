l.d(e, { default: () => S }), l(321073);
var n = l(627968),
    i = l(64700),
    s = l(91871),
    r = l.n(s),
    a = l(158954),
    o = l(311907),
    d = l(397927),
    c = l(398590),
    u = l(263063),
    m = l(976860),
    x = l(71393),
    h = l(711014),
    g = l(473145),
    C = l(652215),
    j = l(985018),
    v = l(197161);
function p(t) {
    let { setQuery: e, query: l } = t;
    return (0, n.jsx)(d.IWV, {
        placeholder: j.intl.string(j.t.vf3ZTa),
        "aria-label": j.intl.string(j.t.vf3ZTa),
        query: l,
        onChange: e,
        onClear: () => e(""),
    });
}
function f(t) {
    let { isTransfer: e = !1, selectedSlotGuilds: l, onClose: i, onSelectGuild: s, query: a } = t,
        p = (0, o.bG)([h.Ay], () => h.Ay.getFlattenedGuildIds()),
        f = (0, o.yK)([x.A], () =>
            p.reduce((t, e) => {
                let n = x.A.getGuild(e);
                return (
                    null == n ||
                        (null != l && l.some((t) => t.id === e)) ||
                        ((a.length <= 0 || r()(a.toLowerCase(), n?.name.toLowerCase())) && t.push(n)),
                    t
                );
            }, []),
        );
    function S() {
        i(), (0, c.jH)(), (0, m.pX)(C.BVt.GUILD_DISCOVERY);
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            0 === f.length &&
                (0, n.jsx)("div", {
                    className: v.Kl,
                    children: (0, n.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children:
                            0 === p.length
                                ? j.intl.format(j.t["E3tB6+"], {
                                      publicGuildDirectoryHook: (t, e) =>
                                          (0, n.jsx)(d.DUT, { onClick: S, tag: "a", children: t }, e),
                                  })
                                : j.intl.string(j.t.w3GLl9),
                    }),
                }),
            f.map((t) =>
                (0, n.jsxs)(
                    d.DUT,
                    {
                        className: v.Ss,
                        onClick: () => {
                            s(t);
                        },
                        children: [
                            (0, n.jsx)(u.Ay, { className: v.Bq, guild: t, size: u.Ay.Sizes.SMALL, active: !0 }),
                            (0, n.jsxs)("div", {
                                className: v.Vi,
                                children: [
                                    (0, n.jsx)(d.Text, {
                                        className: v.tD,
                                        variant: "text-md/normal",
                                        children: t.name,
                                    }),
                                    (0, n.jsx)(d.Text, {
                                        className: v.w2,
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: (0, g.gb)(t.premiumTier),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(d.Text, {
                                className: v.qW,
                                color: "always-white",
                                variant: "text-sm/medium",
                                children: e ? j.intl.string(j.t.dUgaF8) : j.intl.string(j.t.Uj0md3),
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
    let { onClose: e, onSelectGuild: l, transitionState: s, isTransfer: r = !1, selectedSlotGuilds: o } = t,
        [d, c] = i.useState(""),
        u = async () => {
            await e();
        },
        m = r ? j.intl.string(j.t.IB13DV) : j.intl.string(j.t.cQYceV);
    return (0, n.jsx)(a.Modal, {
        transitionState: s,
        onClose: u,
        size: "md",
        title: m,
        input: (0, n.jsx)(p, { query: d, setQuery: c }),
        actions: [],
        children: (0, n.jsx)(f, { onClose: e, onSelectGuild: l, query: d, isTransfer: r, selectedSlotGuilds: o }),
    });
}
