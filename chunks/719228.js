l.d(t, { default: () => S }), l(539854), l(388685);
var n = l(951288),
    r = l(647438),
    i = l(658722),
    s = l.n(i),
    a = l(442837),
    o = l(82659),
    c = l(481060),
    d = l(37234),
    u = l(565138),
    m = l(703656),
    x = l(430824),
    g = l(771845),
    h = l(267642),
    f = l(981631),
    C = l(388032),
    j = l(30408);
function p(e) {
    let { setQuery: t, query: l } = e;
    return (0, n.jsx)(c.E1j, {
        placeholder: C.intl.string(C.t.vf3ZTU),
        "aria-label": C.intl.string(C.t.vf3ZTU),
        query: l,
        onChange: t,
        onClear: () => t(""),
    });
}
function v(e) {
    let { isTransfer: t = !1, selectedSlotGuilds: l, onClose: r, onSelectGuild: i, query: o } = e,
        p = (0, a.e7)([g.ZP], () => g.ZP.getFlattenedGuildIds()),
        v = (0, a.Wu)([x.Z], () =>
            p.reduce((e, t) => {
                let n = x.Z.getGuild(t);
                return (
                    null == n ||
                        (null != l && l.some((e) => e.id === t)) ||
                        ((o.length <= 0 || s()(o.toLowerCase(), null == n ? void 0 : n.name.toLowerCase())) &&
                            e.push(n)),
                    e
                );
            }, []),
        );
    function S() {
        r(), (0, d.xf)(), (0, m.uL)(f.Z5c.GUILD_DISCOVERY);
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            0 === v.length &&
                (0, n.jsx)("div", {
                    className: j.emptyStateWrapper,
                    children: (0, n.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children:
                            0 === p.length
                                ? C.intl.format(C.t["E3tB6+"], {
                                      publicGuildDirectoryHook: (e, t) =>
                                          (0, n.jsx)(
                                              c.P3F,
                                              {
                                                  onClick: S,
                                                  tag: "a",
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : C.intl.string(C.t.w3GLl5),
                    }),
                }),
            v.map((e) =>
                (0, n.jsxs)(
                    c.P3F,
                    {
                        className: j.selectGuild,
                        onClick: () => {
                            i(e);
                        },
                        children: [
                            (0, n.jsx)(u.Z, {
                                className: j.selectGuildIcon,
                                guild: e,
                                size: u.Z.Sizes.SMALL,
                            }),
                            (0, n.jsxs)("div", {
                                className: j.selectGuildCopy,
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        className: j.selectGuildName,
                                        variant: "text-md/normal",
                                        children: e.name,
                                    }),
                                    (0, n.jsx)(c.Text, {
                                        className: j.selectGuildLevel,
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: (0, h.nW)(e.premiumTier),
                                    }),
                                ],
                            }),
                            (0, n.jsx)(c.Text, {
                                className: j.selectGuildPseudoCta,
                                color: "always-white",
                                variant: "text-sm/medium",
                                children: t ? C.intl.string(C.t.dUgaFx) : C.intl.string(C.t.Uj0md3),
                            }),
                        ],
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function S(e) {
    let { onClose: t, onSelectGuild: l, transitionState: i, isTransfer: s = !1, selectedSlotGuilds: a } = e,
        [c, d] = r.useState(""),
        u = async () => {
            await t();
        },
        m = s ? C.intl.string(C.t.IB13DQ) : C.intl.string(C.t.cQYceX);
    return (0, n.jsx)(o.Modal, {
        transitionState: i,
        onClose: u,
        size: "md",
        title: m,
        input: (0, n.jsx)(p, {
            query: c,
            setQuery: d,
        }),
        actions: [],
        children: (0, n.jsx)(v, {
            onClose: t,
            onSelectGuild: l,
            query: c,
            isTransfer: s,
            selectedSlotGuilds: a,
        }),
    });
}
