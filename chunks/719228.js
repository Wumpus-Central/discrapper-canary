n.d(t, {
    default: () => v,
    e: () => C,
    g: () => f,
}),
    n(539854),
    n(388685);
var l = n(255367),
    r = n(73800),
    i = n(658722),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    d = n(37234),
    c = n(565138),
    u = n(703656),
    m = n(430824),
    x = n(771845),
    h = n(267642),
    p = n(981631),
    g = n(388032),
    j = n(30408);
function f(e) {
    let { isTransfer: t = !1, setQuery: n, query: r } = e;
    return (0, l.jsxs)(o.xBx, {
        className: j.selectHeaderContainer,
        children: [
            (0, l.jsx)(o.X6q, {
                className: j.selectHeader,
                variant: "heading-md/semibold",
                children: t ? g.intl.string(g.t.IB13DQ) : g.intl.string(g.t.cQYceX),
            }),
            (0, l.jsx)(o.E1j, {
                placeholder: g.intl.string(g.t.vf3ZTU),
                "aria-label": g.intl.string(g.t.vf3ZTU),
                className: j.selectSearch,
                query: r,
                onChange: n,
                onClear: () => n(""),
            }),
        ],
    });
}
function C(e) {
    let { isTransfer: t = !1, selectedSlotGuilds: n, onClose: r, onSelectGuild: i, query: f } = e,
        C = (0, a.e7)([x.ZP], () => x.ZP.getFlattenedGuildIds()),
        v = (0, a.Wu)([m.Z], () =>
            C.reduce((e, t) => {
                let l = m.Z.getGuild(t);
                return (
                    null == l ||
                        (null != n && n.some((e) => e.id === t)) ||
                        ((f.length <= 0 || s()(f.toLowerCase(), null == l ? void 0 : l.name.toLowerCase())) &&
                            e.push(l)),
                    e
                );
            }, []),
        );
    function y() {
        r(), (0, d.xf)(), (0, u.uL)(p.Z5c.GUILD_DISCOVERY);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            0 === v.length &&
                (0, l.jsx)("div", {
                    className: j.emptyStateWrapper,
                    children: (0, l.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children:
                            0 === C.length
                                ? g.intl.format(g.t["E3tB6+"], {
                                      publicGuildDirectoryHook: (e, t) =>
                                          (0, l.jsx)(
                                              o.P3F,
                                              {
                                                  onClick: y,
                                                  tag: "a",
                                                  children: e,
                                              },
                                              t,
                                          ),
                                  })
                                : g.intl.string(g.t.w3GLl5),
                    }),
                }),
            v.map((e) =>
                (0, l.jsxs)(
                    o.P3F,
                    {
                        className: j.selectGuild,
                        onClick: () => {
                            i(e);
                        },
                        children: [
                            (0, l.jsx)(c.Z, {
                                className: j.selectGuildIcon,
                                guild: e,
                                size: c.Z.Sizes.SMALL,
                            }),
                            (0, l.jsxs)("div", {
                                className: j.selectGuildCopy,
                                children: [
                                    (0, l.jsx)(o.Text, {
                                        className: j.selectGuildName,
                                        variant: "text-md/normal",
                                        children: e.name,
                                    }),
                                    (0, l.jsx)(o.Text, {
                                        className: j.selectGuildLevel,
                                        color: "text-muted",
                                        variant: "text-xs/normal",
                                        children: (0, h.nW)(e.premiumTier),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(o.Text, {
                                className: j.selectGuildPseudoCta,
                                color: "always-white",
                                variant: "text-sm/medium",
                                children: t ? g.intl.string(g.t.dUgaFx) : g.intl.string(g.t.Uj0md3),
                            }),
                        ],
                    },
                    e.id,
                ),
            ),
        ],
    });
}
function v(e) {
    let { onClose: t, onSelectGuild: n, transitionState: i } = e,
        [s, a] = r.useState("");
    return (0, l.jsxs)(o.Y0X, {
        transitionState: i,
        className: j.modal,
        size: o.CgR.SMALL,
        parentComponent: "GuildSelectModal",
        children: [
            (0, l.jsx)(f, {
                query: s,
                setQuery: a,
            }),
            (0, l.jsx)(o.hzk, {
                className: j.modalContent,
                children: (0, l.jsx)(C, {
                    onClose: t,
                    onSelectGuild: n,
                    query: s,
                }),
            }),
            (0, l.jsx)(o.olH, {
                className: j.modalCloseButton,
                onClick: t,
            }),
        ],
    });
}
