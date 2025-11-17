n.d(t, { default: () => O }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(658722),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(37234),
    d = n(565138),
    f = n(703656),
    _ = n(430824),
    p = n(771845),
    h = n(267642),
    m = n(981631),
    g = n(388032),
    E = n(30408);
function b(e) {
    let { setQuery: t, query: n } = e;
    return (0, r.jsx)(c.E1j, {
        placeholder: g.intl.string(g.t.vf3ZTa),
        "aria-label": g.intl.string(g.t.vf3ZTa),
        query: n,
        onChange: t,
        onClear: () => t(""),
    });
}
function y(e) {
    let { isTransfer: t = !1, selectedSlotGuilds: n, onClose: i, onSelectGuild: a, query: s } = e,
        b = (0, l.e7)([p.ZP], () => p.ZP.getFlattenedGuildIds()),
        y = (0, l.Wu)([_.Z], () =>
            b.reduce((e, t) => {
                let r = _.Z.getGuild(t);
                return (
                    null == r ||
                        (null != n && n.some((e) => e.id === t)) ||
                        ((s.length <= 0 || o()(s.toLowerCase(), null == r ? void 0 : r.name.toLowerCase())) &&
                            e.push(r)),
                    e
                );
            }, []),
        );
    function O() {
        i(), (0, u.xf)(), (0, f.uL)(m.Z5c.GUILD_DISCOVERY);
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            0 === y.length &&
                (0, r.jsx)("div", {
                    className: E.emptyStateWrapper,
                    children: (0, r.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children:
                            0 === b.length
                                ? g.intl.format(g.t["E3tB6+"], {
                                      publicGuildDirectoryHook: (e, t) =>
                                          (0, r.jsx)(
                                              c.P3F,
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
                    c.P3F,
                    {
                        className: E.selectGuild,
                        onClick: () => {
                            a(e);
                        },
                        children: [
                            (0, r.jsx)(d.Z, {
                                className: E.selectGuildIcon,
                                guild: e,
                                size: d.Z.Sizes.SMALL,
                            }),
                            (0, r.jsxs)("div", {
                                className: E.selectGuildCopy,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        className: E.selectGuildName,
                                        variant: "text-md/normal",
                                        children: e.name,
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        className: E.selectGuildLevel,
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: (0, h.nW)(e.premiumTier),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.Text, {
                                className: E.selectGuildPseudoCta,
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
    let { onClose: t, onSelectGuild: n, transitionState: a, isTransfer: o = !1, selectedSlotGuilds: l } = e,
        [c, u] = i.useState(""),
        d = async () => {
            await t();
        },
        f = o ? g.intl.string(g.t.IB13DV) : g.intl.string(g.t.cQYceV);
    return (0, r.jsx)(s.Modal, {
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
            isTransfer: o,
            selectedSlotGuilds: l,
        }),
    });
}
