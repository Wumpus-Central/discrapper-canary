n.d(t, { z: () => N });
var r = n(951288),
    i = n(647438),
    l = n(494497),
    a = n(481060),
    s = n(100527),
    o = n(906732),
    c = n(366980),
    d = n(892803),
    u = n(158638),
    g = n(441536),
    m = n(434404),
    p = n(736617),
    f = n(196961),
    h = n(465682),
    b = n(821458),
    x = n(585961),
    j = n(790359),
    v = n(981631),
    _ = n(30513),
    C = n(388032),
    O = n(856521);
function y(e) {
    let { originalVanityURLCode: t } = e;
    if (null != t && t.length > 0) {
        let e = (0, c.Z)(t);
        return (0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            className: O.vanityInfo,
            children: C.intl.format(C.t["1qTOvr"], {
                urlText: e,
                urlValue: e,
            }),
        });
    }
    return null;
}
function E(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: l, originalVanityURLCode: s, errorDetails: o } = e,
        c = (null == t ? void 0 : t.features.has(v.GuildFeatures.VANITY_URL)) === !0,
        d = i.useCallback(() => {
            (0, p.Gy)("");
        }, []),
        u = i.useCallback((e) => {
            (0, p.Gy)(e);
        }, []);
    if (null == n) return (0, r.jsx)(a.$jN, {});
    let g = null != o ? (0, f.i)(o.code) : null;
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
                        children: C.intl.string(C.t["6oJyq6"]),
                    }),
                    n.length > 0
                        ? (0, r.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-secondary",
                              children: C.intl.format(C.t.MVWOUV, { uses: l }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(j.Z, {
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
                          text: C.intl.string(C.t["3ggb6O"]),
                      }),
                  })
                : null,
        ],
    });
}
function N(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: a, originalVanityURLCode: c, errorDetails: p } = e,
        { analyticsLocations: j } = (0, o.ZP)(),
        C = (0, u.g1)(t.id, "GuildSettingsBoostPerks"),
        { enabled: N } = d.Z.useConfig({ location: "GuildSettingsVanityCard" }),
        I = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    C
                        ? (m.Z.close(), (0, g.Z)(t.id, s.Z.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.A$))
                        : (0, b.E6)({
                              guild: t,
                              analyticsLocations: j,
                              analyticsSection: v.jXE.GUILD_SETTINGS_VANITY_URL,
                              analyticsObject: v.qAy.BUTTON_CTA,
                              perks: (0, _.WW)(),
                              targetPremiumGuildTier: v.Eu4.TIER_3,
                          });
            },
            [j, t, C],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, f.p)(t)
                ? (0, r.jsx)(E, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: a,
                      originalVanityURLCode: c,
                      errorDetails: p,
                  })
                : N
                  ? (0, r.jsx)("div", {
                        className: O.upsellButton,
                        children: (0, r.jsx)(h.v, { onClick: I }),
                    })
                  : (0, r.jsx)(x.P, {
                        onClick: I,
                        className: O.upsellButton,
                    }),
            (0, r.jsx)(y, { originalVanityURLCode: c }),
        ],
    });
}
