n.d(t, { z: () => C });
var r = n(951288),
    i = n(647438),
    l = n(494497),
    s = n(481060),
    a = n(100527),
    o = n(906732),
    c = n(366980),
    d = n(158638),
    u = n(441536),
    m = n(434404),
    g = n(736617),
    p = n(196961),
    f = n(821458),
    h = n(585961),
    x = n(790359),
    b = n(981631),
    j = n(30513),
    v = n(388032),
    _ = n(856521);
function O(e) {
    let { originalVanityURLCode: t } = e;
    if (null != t && t.length > 0) {
        let e = (0, c.Z)(t);
        return (0, r.jsx)(s.Text, {
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
function y(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: l, originalVanityURLCode: a, errorDetails: o } = e,
        c = (null == t ? void 0 : t.features.has(b.oNc.VANITY_URL)) === !0,
        d = i.useCallback(() => {
            (0, g.Gy)("");
        }, []),
        u = i.useCallback((e) => {
            (0, g.Gy)(e);
        }, []);
    if (null == n) return (0, r.jsx)(s.$jN, {});
    let m = null != o ? (0, p.i)(o.code) : null;
    return (0, r.jsxs)(s.Zbd, {
        editable: !0,
        className: _.editVanityUrlCard,
        children: [
            (0, r.jsxs)("div", {
                className: _.formTitleField,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: v.intl.string(v.t["6oJyq6"]),
                    }),
                    n.length > 0
                        ? (0, r.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              color: "text-secondary",
                              children: v.intl.format(v.t.MVWOUV, { uses: l }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(x.Z, {
                value: n,
                onChange: u,
                error: m,
                disabled: !c,
            }),
            null != a && a.length > 0
                ? (0, r.jsx)("div", {
                      className: _.removeVanityUrlButton,
                      children: (0, r.jsx)(s.zxk, {
                          variant: "critical-secondary",
                          onClick: d,
                          text: v.intl.string(v.t["3ggb6O"]),
                      }),
                  })
                : null,
        ],
    });
}
function C(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: s, originalVanityURLCode: c, errorDetails: g } = e,
        { analyticsLocations: x } = (0, o.ZP)(),
        v = (0, d.g1)(t.id, "GuildSettingsBoostPerks"),
        C = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    v
                        ? (m.Z.close(), (0, u.Z)(t.id, a.Z.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.A$))
                        : (0, f.E6)({
                              guild: t,
                              analyticsLocations: x,
                              analyticsSection: b.jXE.GUILD_SETTINGS_VANITY_URL,
                              analyticsObject: b.qAy.BUTTON_CTA,
                              perks: (0, j.WW)(),
                              targetPremiumGuildTier: b.Eu4.TIER_3,
                          });
            },
            [x, t, v],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, p.p)(t)
                ? (0, r.jsx)(y, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: s,
                      originalVanityURLCode: c,
                      errorDetails: g,
                  })
                : (0, r.jsx)(h.P, {
                      onClick: C,
                      className: _.upsellButton,
                  }),
            (0, r.jsx)(O, { originalVanityURLCode: c }),
        ],
    });
}
