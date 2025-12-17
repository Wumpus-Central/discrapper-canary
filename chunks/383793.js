n.d(t, { z: () => N });
var r = n(54381),
    i = n(473749),
    l = n(494497),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(366980),
    d = n(158638),
    u = n(441536),
    g = n(434404),
    f = n(736617),
    m = n(196961),
    b = n(465682),
    p = n(821458),
    h = n(790359),
    x = n(981631),
    j = n(30513),
    v = n(388032),
    O = n(269181);
function C(e) {
    let { originalVanityURLCode: t } = e;
    if (null != t && t.length > 0) {
        let e = (0, c.Z)(t);
        return (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            className: O.vanityInfo,
            children: v.intl.format(v.t["1qTOvn"], {
                urlText: e,
                urlValue: e,
            }),
        });
    }
    return null;
}
function y(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: l, originalVanityURLCode: s, errorDetails: o } = e,
        c = (null == t ? void 0 : t.features.has(x.GuildFeatures.VANITY_URL)) === !0,
        d = i.useCallback(() => {
            (0, f.Gy)("");
        }, []),
        u = i.useCallback((e) => {
            (0, f.Gy)(e);
        }, []);
    if (null == n) return (0, r.jsx)(a.$jN, {});
    let g = null != o ? (0, m.i)(o.code) : null;
    return (0, r.jsxs)(a.Zbd, {
        editable: !0,
        className: O.editVanityUrlCard,
        children: [
            (0, r.jsxs)("div", {
                className: O.formTitleField,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: v.intl.string(v.t["6oJyq5"]),
                    }),
                    n.length > 0
                        ? (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: v.intl.format(v.t.MVWOUY, { uses: l }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(h.Z, {
                value: n,
                onChange: u,
                error: g,
                disabled: !c,
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: O.removeVanityUrlButton,
                      children: (0, r.jsx)(a.Button, {
                          variant: "critical-secondary",
                          onClick: d,
                          text: v.intl.string(v.t["3ggb6K"]),
                      }),
                  })
                : null,
        ],
    });
}
function N(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: a, originalVanityURLCode: c, errorDetails: f } = e,
        { analyticsLocations: h } = (0, o.ZP)(),
        v = (0, d.g1)(t.id, "GuildSettingsBoostPerks"),
        N = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    v
                        ? (g.Z.close(), (0, u.Z)(t.id, s.Z.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.A$))
                        : (0, p.E6)({
                              guild: t,
                              analyticsLocations: h,
                              analyticsSection: x.jXE.GUILD_SETTINGS_VANITY_URL,
                              analyticsObject: x.qAy.BUTTON_CTA,
                              perks: (0, j.WW)(),
                              targetPremiumGuildTier: x.Eu4.TIER_3,
                          });
            },
            [h, t, v],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, m.p)(t)
                ? (0, r.jsx)(y, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: a,
                      originalVanityURLCode: c,
                      errorDetails: f,
                  })
                : (0, r.jsx)("div", {
                      className: O.upsellButton,
                      children: (0, r.jsx)(b.v, { onClick: N }),
                  }),
            (0, r.jsx)(C, { originalVanityURLCode: c }),
        ],
    });
}
