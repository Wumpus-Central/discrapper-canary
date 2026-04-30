l.d(a, { A: () => v });
var s = l(627968),
    t = l(64700),
    i = l(17928),
    n = l(834730),
    r = l(781696),
    d = l(997590),
    o = l(57991),
    c = l(9994),
    m = l(107123),
    h = l(86376),
    u = l(534400),
    x = l(773669),
    g = l(299091),
    p = l(935208),
    j = l(652215),
    A = l(985018),
    N = l(963120);
function v(e) {
    let { guild: a, invite: l, discoveryGuild: v, showGuildTag: f = !1, highContrast: b = !1, hideEnglish: y = !1 } = e,
        C = l.approximate_presence_count ?? 0,
        L = l.approximate_member_count ?? 0,
        _ = (0, i.bG)([x.default], () => x.default.locale),
        E = (0, m.P)(p.default.extractTimestamp(a.id), _),
        k = (0, i.bG)([d.A], () =>
            v?.primary_category_id != null ? d.A.getCategoryName(v.primary_category_id) : null,
        ),
        R = a.premiumTier ?? j.TVA.NONE,
        G = R !== j.TVA.NONE,
        O = a.preferredLocale ?? v?.preferred_locale ?? null,
        S = t.useMemo(() => {
            if ("en-US" === O) return A.intl.string(A.t.LQLMGP);
            let e = (0, A.getAvailableLocales)().find((e) => e.value === O);
            return null != e ? A.intl.string(e.localizedName) : O;
        }, [O]),
        w = ["en-US", "en-GB"].includes(O ?? ""),
        I = null != O && "" !== O && !(y && w),
        M = null != k,
        T = I || M || G,
        U = M || G,
        z = (0, i.bG)([g.A], () => g.A.getInvite(l.code));
    if (null == z) return null;
    let Q = (0, c.oO)(z),
        P = b ? "text-default" : "text-subtle";
    return (0, s.jsxs)("div", {
        className: N.hn,
        children: [
            (0, s.jsxs)("div", {
                className: N.S7,
                children: [
                    (0, s.jsx)(n.E, {
                        tag: "span",
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: a.name,
                    }),
                    (0, s.jsx)(o.A, {
                        guild: a,
                        tooltipPosition: "bottom",
                        size: 18,
                        tooltipColor: r.ST.Colors.PRIMARY,
                    }),
                    f &&
                        Q?.tag != null &&
                        Q?.badgeHash != null &&
                        (0, s.jsx)(u.o9, {
                            guildId: a.id,
                            guildTag: Q?.tag ?? void 0,
                            guildBadge: Q.badgeHash,
                            inline: !1,
                        }),
                ],
            }),
            (0, s.jsx)(h.X, { onlineCount: C, memberCount: L, className: N.He, highContrast: b }),
            (0, s.jsxs)("div", {
                className: N.ov,
                children: [
                    null != E &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(n.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: P,
                                    children: A.intl.format(A.t.zb2Q56, { createdAtDate: E }),
                                }),
                                T && (0, s.jsx)("span", { className: N.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    I &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(n.E, { tag: "span", variant: "text-sm/normal", color: P, children: S }),
                                U && (0, s.jsx)("span", { className: N.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    M &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(n.E, { tag: "span", variant: "text-sm/normal", color: P, children: k }),
                                G && (0, s.jsx)("span", { className: N.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    G &&
                        (0, s.jsx)(n.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: P,
                            children: A.intl.format(A.t.hmdOwf, { tier: R }),
                        }),
                ],
            }),
        ],
    });
}
