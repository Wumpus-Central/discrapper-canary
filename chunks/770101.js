n.d(t, { default: () => O }), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(91871),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(398590),
    d = n(263063),
    f = n(976860),
    p = n(71393),
    _ = n(711014),
    h = n(473145),
    m = n(652215),
    g = n(985018),
    E = n(197161);
function b(e) {
    let { setQuery: t, query: n } = e;
    return (0, r.jsx)(c.IWV, {
        placeholder: g.intl.string(g.t.vf3ZTa),
        "aria-label": g.intl.string(g.t.vf3ZTa),
        query: n,
        onChange: t,
        onClear: () => t(""),
    });
}
function y(e) {
    let { isTransfer: t = !1, selectedSlotGuilds: n, onClose: i, onSelectGuild: a, query: o } = e,
        b = (0, l.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()),
        y = (0, l.yK)([p.A], () =>
            b.reduce((e, t) => {
                let r = p.A.getGuild(t);
                return (
                    null == r ||
                        (null != n && n.some((e) => e.id === t)) ||
                        ((o.length <= 0 || s()(o.toLowerCase(), null == r ? void 0 : r.name.toLowerCase())) &&
                            e.push(r)),
                    e
                );
            }, []),
        );
    function O() {
        i(), (0, u.jH)(), (0, f.pX)(m.BVt.GUILD_DISCOVERY);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            0 === y.length &&
                (0, r.jsx)("div", {
                    className: E.Kl,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children:
                            0 === b.length
                                ? g.intl.format(g.t["E3tB6+"], {
                                      publicGuildDirectoryHook: (e, t) =>
                                          (0, r.jsx)(
                                              c.DUT,
                                              {
                                                  onClick: O,
                                                  tag: "a",
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : g.intl.string(g.t.w3GLl9),
                    }),
                }),
            y.map((e) =>
                (0, r.jsxs)(
                    c.DUT,
                    {
                        className: E.Ss,
                        onClick: () => {
                            a(e);
                        },
                        children: [
                            (0, r.jsx)(d.A, {
                                className: E.Bq,
                                guild: e,
                                size: d.A.Sizes.SMALL,
                            }),
                            (0, r.jsxs)("div", {
                                className: E.Vi,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        className: E.tD,
                                        variant: "text-md/normal",
                                        children: e.name,
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        className: E.w2,
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: (0, h.gb)(e.premiumTier),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.Text, {
                                className: E.qW,
                                color: "always-white",
                                variant: "text-sm/medium",
                                children: t ? g.intl.string(g.t.dUgaF8) : g.intl.string(g.t.Uj0md3),
                            }),
                        ],
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function O(e) {
    let { onClose: t, onSelectGuild: n, transitionState: a, isTransfer: s = !1, selectedSlotGuilds: l } = e,
        [c, u] = i.useState(""),
        d = async () => {
            await t();
        },
        f = s ? g.intl.string(g.t.IB13DV) : g.intl.string(g.t.cQYceV);
    return (0, r.jsx)(o.Modal, {
        transitionState: a,
        onClose: d,
        size: "md",
        title: f,
        input: (0, r.jsx)(b, {
            query: c,
            setQuery: u,
        }),
        actions: [],
        children: (0, r.jsx)(y, {
            onClose: t,
            onSelectGuild: n,
            query: c,
            isTransfer: s,
            selectedSlotGuilds: l,
        }),
    });
}
