l.d(t, { A: () => p });
var n = l(627968),
    i = l(64700),
    a = l(311907),
    s = l(834730),
    r = l(781696),
    u = l(997590),
    c = l(57991),
    d = l(9994),
    o = l(107123),
    m = l(86376),
    g = l(534400),
    h = l(773669),
    x = l(299091),
    j = l(661191),
    A = l(652215),
    E = l(985018),
    _ = l(963120);
function p(e) {
    let { guild: t, invite: l, discoveryGuild: p, showGuildTag: N = !1, highContrast: v = !1, hideEnglish: f = !1 } = e,
        S = l.approximate_presence_count ?? 0,
        C = l.approximate_member_count ?? 0,
        I = (0, a.bG)([h.default], () => h.default.locale),
        L = (0, o.P)(j.default.extractTimestamp(t.id), I),
        y = (0, a.bG)([u.A], () =>
            p?.primary_category_id != null ? u.A.getCategoryName(p.primary_category_id) : null,
        ),
        T = t.premiumTier ?? A.TVA.NONE,
        R = T !== A.TVA.NONE,
        O = t.preferredLocale ?? p?.preferred_locale ?? null,
        b = i.useMemo(() => {
            if ("en-US" === O) return E.intl.string(E.t.LQLMGP);
            let e = (0, E.getAvailableLocales)().find((e) => e.value === O);
            return null != e ? E.intl.string(e.localizedName) : O;
        }, [O]),
        F = ["en-US", "en-GB"].includes(O ?? ""),
        M = null != O && "" !== O && !(f && F),
        P = null != y,
        D = M || P || R,
        k = P || R,
        U = (0, a.bG)([x.A], () => x.A.getInvite(l.code));
    if (null == U) return null;
    let z = (0, d.oO)(U),
        G = v ? "text-default" : "text-subtle";
    return (0, n.jsxs)("div", {
        className: _.hn,
        children: [
            (0, n.jsxs)("div", {
                className: _.S7,
                children: [
                    (0, n.jsx)(s.E, {
                        tag: "span",
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: t.name,
                    }),
                    (0, n.jsx)(c.A, {
                        guild: t,
                        tooltipPosition: "bottom",
                        size: 18,
                        tooltipColor: r.ST.Colors.PRIMARY,
                    }),
                    N &&
                        z?.tag != null &&
                        z?.badgeHash != null &&
                        (0, n.jsx)(g.o9, {
                            guildId: t.id,
                            guildTag: z?.tag ?? void 0,
                            guildBadge: z.badgeHash,
                            inline: !1,
                        }),
                ],
            }),
            (0, n.jsx)(m.X, { onlineCount: S, memberCount: C, className: _.He, highContrast: v }),
            (0, n.jsxs)("div", {
                className: _.ov,
                children: [
                    null != L &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: G,
                                    children: E.intl.format(E.t.zb2Q56, { createdAtDate: L }),
                                }),
                                D && (0, n.jsx)("span", { className: _.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    M &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.E, { tag: "span", variant: "text-sm/normal", color: G, children: b }),
                                k && (0, n.jsx)("span", { className: _.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    P &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.E, { tag: "span", variant: "text-sm/normal", color: G, children: y }),
                                R && (0, n.jsx)("span", { className: _.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    R &&
                        (0, n.jsx)(s.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: G,
                            children: E.intl.format(E.t.hmdOwf, { tier: T }),
                        }),
                ],
            }),
        ],
    });
}
