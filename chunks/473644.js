i.d(t, { A: () => v });
var l = i(627968),
    n = i(64700),
    a = i(311907),
    s = i(397927),
    r = i(260451),
    d = i(997590),
    o = i(57991),
    c = i(9994),
    u = i(107123),
    m = i(86376),
    x = i(534400),
    g = i(773669),
    h = i(299091),
    _ = i(473145),
    p = i(661191),
    A = i(652215),
    j = i(985018),
    E = i(492171);
function v(e) {
    let { guild: t, invite: i, discoveryGuild: v, showGuildTag: I = !1 } = e,
        f = i.approximate_presence_count ?? 0,
        T = i.approximate_member_count ?? 0,
        C = (0, a.bG)([g.default], () => g.default.locale),
        N = (0, u.P)(p.default.extractTimestamp(t.id), C),
        y = (0, a.bG)([d.A], () =>
            v?.primary_category_id != null ? d.A.getCategoryName(v.primary_category_id) : null,
        ),
        D = t.premiumTier ?? A.TVA.NONE,
        S = D !== A.TVA.NONE,
        b = t.preferredLocale ?? v?.preferred_locale ?? null,
        L = n.useMemo(() => {
            if ("en-US" === b) return j.intl.string(j.t.LQLMGP);
            let e = (0, j.getAvailableLocales)().find((e) => e.value === b);
            return null != e ? j.intl.string(e.localizedName) : b;
        }, [b]),
        R = null != b && "" !== b,
        U = null != y,
        O = R || U || S,
        G = U || S,
        { enabled: k } = r.SH.useConfig({ location: "AcceptInviteModalGuildDetailsHeader" }),
        M = k ? j.intl.format(j.t.hmdOwf, { tier: D }) : (0, _.gb)(D),
        P = (0, a.bG)([h.A], () => h.A.getInvite(i.code));
    if (null == P) return null;
    let V = (0, c.oO)(P);
    return (0, l.jsxs)("div", {
        className: E.hn,
        children: [
            (0, l.jsxs)("div", {
                className: E.S7,
                children: [
                    (0, l.jsx)(s.Text, {
                        tag: "span",
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: t.name,
                    }),
                    (0, l.jsx)(o.A, {
                        guild: t,
                        tooltipPosition: "bottom",
                        size: 18,
                        tooltipColor: s.STz.Colors.PRIMARY,
                    }),
                    I &&
                        V?.tag != null &&
                        V?.badgeHash != null &&
                        (0, l.jsx)(x.o9, {
                            guildId: t.id,
                            guildTag: V?.tag ?? void 0,
                            guildBadge: V.badgeHash,
                            inline: !1,
                        }),
                ],
            }),
            (0, l.jsx)(m.X, { onlineCount: f, memberCount: T, className: E.He }),
            (0, l.jsxs)("div", {
                className: E.ov,
                children: [
                    null != N &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.Text, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: j.intl.format(j.t.zb2Q56, { createdAtDate: N }),
                                }),
                                O && (0, l.jsx)("span", { className: E.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    R &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.Text, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: L,
                                }),
                                G && (0, l.jsx)("span", { className: E.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    U &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.Text, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: y,
                                }),
                                S && (0, l.jsx)("span", { className: E.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    S &&
                        (0, l.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: M,
                        }),
                ],
            }),
        ],
    });
}
