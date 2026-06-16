t.d(l, { A: () => N });
var n = t(627968),
    i = t(64700),
    a = t(17928),
    s = t(834730),
    r = t(781696),
    u = t(997590),
    c = t(107773),
    d = t(9994),
    o = t(107123),
    m = t(86376),
    g = t(534400),
    x = t(773669),
    h = t(299091),
    j = t(935208),
    p = t(652215),
    A = t(375708),
    v = t(963120);
function N(e) {
    let { guild: l, invite: t, discoveryGuild: N, showGuildTag: _ = !1, highContrast: f = !1, hideEnglish: E = !1 } = e,
        y = t.approximate_presence_count ?? 0,
        S = t.approximate_member_count ?? 0,
        b = (0, a.bG)([x.default], () => x.default.locale),
        C = (0, o.P)(j.default.extractTimestamp(l.id), b),
        L = (0, a.bG)([u.A], () =>
            N?.primary_category_id != null ? u.A.getCategoryName(N.primary_category_id) : null,
        ),
        T = l.premiumTier ?? p.TVA.NONE,
        R = T !== p.TVA.NONE,
        k = l.preferredLocale ?? N?.preferred_locale ?? null,
        I = i.useMemo(() => {
            if ("en-US" === k) return A.intl.string(A.t.LQLMGP);
            let e = (0, A.getAvailableLocales)().find((e) => e.value === k);
            return null != e ? A.intl.string(e.localizedName) : k;
        }, [k]),
        z = ["en-US", "en-GB"].includes(k ?? ""),
        F = null != k && "" !== k && !(E && z),
        P = null != L,
        D = F || P || R,
        M = P || R,
        G = (0, a.bG)([h.A], () => h.A.getInvite(t.code));
    if (null == G) return null;
    let w = (0, d.oO)(G),
        O = f ? "text-default" : "text-subtle";
    return (0, n.jsxs)("div", {
        className: v.hn,
        children: [
            (0, n.jsxs)("div", {
                className: v.S7,
                children: [
                    (0, n.jsx)(s.E, {
                        tag: "span",
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: l.name,
                    }),
                    (0, n.jsx)(c.A, {
                        guild: l,
                        tooltipPosition: "bottom",
                        size: 18,
                        tooltipColor: r.ST.Colors.PRIMARY,
                    }),
                    _ &&
                        w?.tag != null &&
                        w?.badgeHash != null &&
                        (0, n.jsx)(g.o9, {
                            guildId: l.id,
                            guildTag: w?.tag ?? void 0,
                            guildBadge: w.badgeHash,
                            inline: !1,
                        }),
                ],
            }),
            (0, n.jsx)(m.X, { onlineCount: y, memberCount: S, className: v.He, highContrast: f }),
            (0, n.jsxs)("div", {
                className: v.ov,
                children: [
                    null != C &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: O,
                                    children: A.intl.format(A.t.zb2Q56, { createdAtDate: C }),
                                }),
                                D && (0, n.jsx)("span", { className: v.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    F &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.E, { tag: "span", variant: "text-sm/normal", color: O, children: I }),
                                M && (0, n.jsx)("span", { className: v.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    P &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.E, { tag: "span", variant: "text-sm/normal", color: O, children: L }),
                                R && (0, n.jsx)("span", { className: v.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    R &&
                        (0, n.jsx)(s.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: O,
                            children: A.intl.format(A.t.hmdOwf, { tier: T }),
                        }),
                ],
            }),
        ],
    });
}
