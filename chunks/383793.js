n.d(t, { z: () => y });
var r = n(951288),
    i = n(647438),
    l = n(494497),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(366980),
    d = n(158638),
    u = n(441536),
    g = n(434404),
    m = n(736617),
    p = n(196961),
    f = n(821458),
    h = n(585961),
    b = n(790359),
    x = n(981631),
    j = n(30513),
    v = n(388032),
    _ = n(856521);
function C(e) {
    let { originalVanityURLCode: t } = e;
    if (null != t && t.length > 0) {
        let e = (0, c.Z)(t);
        return (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            className: _.vanityInfo,
            children: v.intl.format(v.t["1qTOvr"], {
                urlText: e,
                urlValue: e,
            }),
        });
    }
    return null;
}
function O(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: l, originalVanityURLCode: s, errorDetails: o } = e,
        c = (null == t ? void 0 : t.features.has(x.oNc.VANITY_URL)) === !0,
        d = i.useCallback(() => {
            (0, m.Gy)("");
        }, []),
        u = i.useCallback((e) => {
            (0, m.Gy)(e);
        }, []);
    if (null == n) return (0, r.jsx)(a.$jN, {});
    let g = null != o ? (0, p.i)(o.code) : null;
    return (0, r.jsxs)(a.Zbd, {
        editable: !0,
        className: _.editVanityUrlCard,
        children: [
            (0, r.jsxs)("div", {
                className: _.formTitleField,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: v.intl.string(v.t["6oJyq6"]),
                    }),
                    n.length > 0
                        ? (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-secondary",
                              children: v.intl.format(v.t.MVWOUV, { uses: l }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(b.Z, {
                value: n,
                onChange: u,
                error: g,
                disabled: !c,
            }),
            null != s && s.length > 0
                ? (0, r.jsx)("div", {
                      className: _.removeVanityUrlButton,
                      children: (0, r.jsx)(a.Button, {
                          variant: "critical-secondary",
                          onClick: d,
                          text: v.intl.string(v.t["3ggb6O"]),
                      }),
                  })
                : null,
        ],
    });
}
function y(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: a, originalVanityURLCode: c, errorDetails: m } = e,
        { analyticsLocations: b } = (0, o.ZP)(),
        v = (0, d.g1)(t.id, "GuildSettingsBoostPerks"),
        y = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    v
                        ? (g.Z.close(), (0, u.Z)(t.id, s.Z.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.A$))
                        : (0, f.E6)({
                              guild: t,
                              analyticsLocations: b,
                              analyticsSection: x.jXE.GUILD_SETTINGS_VANITY_URL,
                              analyticsObject: x.qAy.BUTTON_CTA,
                              perks: (0, j.WW)(),
                              targetPremiumGuildTier: x.Eu4.TIER_3,
                          });
            },
            [b, t, v],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, p.p)(t)
                ? (0, r.jsx)(O, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: a,
                      originalVanityURLCode: c,
                      errorDetails: m,
                  })
                : (0, r.jsx)(h.P, {
                      onClick: y,
                      className: _.upsellButton,
                  }),
            (0, r.jsx)(C, { originalVanityURLCode: c }),
        ],
    });
}
