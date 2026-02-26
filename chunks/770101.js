l.d(e, { default: () => f }), l(321073);
var n = l(627968),
    i = l(64700),
    s = l(91871),
    r = l.n(s),
    a = l(158954),
    o = l(311907),
    d = l(397927),
    u = l(398590),
    c = l(263063),
    x = l(976860),
    m = l(71393),
    h = l(711014),
    C = l(473145),
    g = l(652215),
    j = l(985018),
    p = l(489435);
function v(t) {
    let { setQuery: e, query: l } = t;
    return (0, n.jsx)(d.IWV, {
        placeholder: j.intl.string(j.t.vf3ZTa),
        "aria-label": j.intl.string(j.t.vf3ZTa),
        query: l,
        onChange: e,
        onClear: () => e(""),
    });
}
function S(t) {
    let { isTransfer: e = !1, selectedSlotGuilds: l, onClose: i, onSelectGuild: s, query: a } = t,
        v = (0, o.bG)([h.Ay], () => h.Ay.getFlattenedGuildIds()),
        S = (0, o.yK)([m.A], () =>
            v.reduce((t, e) => {
                let n = m.A.getGuild(e);
                return (
                    null == n ||
                        (null != l && l.some((t) => t.id === e)) ||
                        ((a.length <= 0 || r()(a.toLowerCase(), n?.name.toLowerCase())) && t.push(n)),
                    t
                );
            }, []),
        );
    function f() {
        i(), (0, u.jH)(), (0, x.pX)(g.BVt.GUILD_DISCOVERY);
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            0 === S.length &&
                (0, n.jsx)("div", {
                    className: p.Kl,
                    children: (0, n.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children:
                            0 === v.length
                                ? j.intl.format(j.t["E3tB6+"], {
                                      publicGuildDirectoryHook: (t, e) =>
                                          (0, n.jsx)(d.DUT, { onClick: f, tag: "a", children: t }, e),
                                  })
                                : j.intl.string(j.t.w3GLl9),
                    }),
                }),
            S.map((t) =>
                (0, n.jsxs)(
                    d.DUT,
                    {
                        className: p.Ss,
                        onClick: () => {
                            s(t);
                        },
                        children: [
                            (0, n.jsx)(c.Ay, { className: p.Bq, guild: t, size: c.Ay.Sizes.SMALL }),
                            (0, n.jsxs)("div", {
                                className: p.Vi,
                                children: [
                                    (0, n.jsx)(d.Text, {
                                        className: p.tD,
                                        variant: "text-md/normal",
                                        children: t.name,
                                    }),
                                    (0, n.jsx)(d.Text, {
                                        className: p.w2,
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: (0, C.gb)(t.premiumTier),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(d.Text, {
                                className: p.qW,
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
function f(t) {
    let { onClose: e, onSelectGuild: l, transitionState: s, isTransfer: r = !1, selectedSlotGuilds: o } = t,
        [d, u] = i.useState(""),
        c = async () => {
            await e();
        },
        x = r ? j.intl.string(j.t.IB13DV) : j.intl.string(j.t.cQYceV);
    return (0, n.jsx)(a.Modal, {
        transitionState: s,
        onClose: c,
        size: "md",
        title: x,
        input: (0, n.jsx)(v, { query: d, setQuery: u }),
        actions: [],
        children: (0, n.jsx)(S, { onClose: e, onSelectGuild: l, query: d, isTransfer: r, selectedSlotGuilds: o }),
    });
}
