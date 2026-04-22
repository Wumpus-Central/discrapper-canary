l.d(t, { A: () => p });
var n = l(627968),
    i = l(64700),
    a = l(311907),
    s = l(397927),
    r = l(997590),
    c = l(57991),
    u = l(9994),
    d = l(107123),
    o = l(86376),
    m = l(534400),
    g = l(773669),
    x = l(299091),
    h = l(661191),
    j = l(652215),
    A = l(985018),
    _ = l(963120);
function p(e) {
    let { guild: t, invite: l, discoveryGuild: p, showGuildTag: E = !1, highContrast: N = !1, hideEnglish: v = !1 } = e,
        f = l.approximate_presence_count ?? 0,
        S = l.approximate_member_count ?? 0,
        C = (0, a.bG)([g.default], () => g.default.locale),
        T = (0, d.P)(h.default.extractTimestamp(t.id), C),
        I = (0, a.bG)([r.A], () =>
            p?.primary_category_id != null ? r.A.getCategoryName(p.primary_category_id) : null,
        ),
        L = t.premiumTier ?? j.TVA.NONE,
        y = L !== j.TVA.NONE,
        R = t.preferredLocale ?? p?.preferred_locale ?? null,
        O = i.useMemo(() => {
            if ("en-US" === R) return A.intl.string(A.t.LQLMGP);
            let e = (0, A.getAvailableLocales)().find((e) => e.value === R);
            return null != e ? A.intl.string(e.localizedName) : R;
        }, [R]),
        b = ["en-US", "en-GB"].includes(R ?? ""),
        F = null != R && "" !== R && !(v && b),
        M = null != I,
        P = F || M || y,
        D = M || y,
        k = (0, a.bG)([x.A], () => x.A.getInvite(l.code));
    if (null == k) return null;
    let U = (0, u.oO)(k),
        z = N ? "text-default" : "text-subtle";
    return (0, n.jsxs)("div", {
        className: _.hn,
        children: [
            (0, n.jsxs)("div", {
                className: _.S7,
                children: [
                    (0, n.jsx)(s.Text, {
                        tag: "span",
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: t.name,
                    }),
                    (0, n.jsx)(c.A, {
                        guild: t,
                        tooltipPosition: "bottom",
                        size: 18,
                        tooltipColor: s.STz.Colors.PRIMARY,
                    }),
                    E &&
                        U?.tag != null &&
                        U?.badgeHash != null &&
                        (0, n.jsx)(m.o9, {
                            guildId: t.id,
                            guildTag: U?.tag ?? void 0,
                            guildBadge: U.badgeHash,
                            inline: !1,
                        }),
                ],
            }),
            (0, n.jsx)(o.X, { onlineCount: f, memberCount: S, className: _.He, highContrast: N }),
            (0, n.jsxs)("div", {
                className: _.ov,
                children: [
                    null != T &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.Text, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: z,
                                    children: A.intl.format(A.t.zb2Q56, { createdAtDate: T }),
                                }),
                                P && (0, n.jsx)("span", { className: _.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    F &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.Text, { tag: "span", variant: "text-sm/normal", color: z, children: O }),
                                D && (0, n.jsx)("span", { className: _.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    M &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.Text, { tag: "span", variant: "text-sm/normal", color: z, children: I }),
                                y && (0, n.jsx)("span", { className: _.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    y &&
                        (0, n.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: z,
                            children: A.intl.format(A.t.hmdOwf, { tier: L }),
                        }),
                ],
            }),
        ],
    });
}
