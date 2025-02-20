n.d(t, { Q: () => h });
var r = n(200651);
n(192379);
var i = n(63568),
    s = n(983736),
    a = n(740903),
    l = n(426434),
    o = n(112824),
    c = n(181339),
    d = n(195189),
    u = n(122051),
    m = n(3896),
    p = n(981631),
    g = n(388032);
let h = (e) => {
    let { enabled: t } = i.tW.getCurrentConfig(
            {
                guildId: e.id,
                location: 'getGuildSafetySettings'
            },
            { autoTrackExposure: !1 }
        ),
        n = [
            {
                renderComponent: () => (0, r.jsx)(m.Z, { guild: e }, 'verification-level'),
                enabled: !0
            },
            t
                ? null
                : {
                      renderComponent: () => (0, r.jsx)(u.Z, { guild: e }, 'member-verification'),
                      enabled: (0, s.Dc)(e)
                  },
            {
                renderComponent: () =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            title: g.NW.string(g.t.QiONLy),
                            details: g.NW.string(g.t.dSRTMD)
                        },
                        'hide-suspicious-dms'
                    ),
                enabled: !0
            },
            {
                renderComponent: () =>
                    (0, r.jsx)(
                        d.Z,
                        {
                            title: g.NW.string(g.t['f+8F8P']),
                            details: g.NW.string(g.t.qChrIy)
                        },
                        'filter-unknown-dms'
                    ),
                enabled: !0
            },
            {
                renderComponent: () => (0, r.jsx)(d.Z, { title: g.NW.string(g.t.EkSAHR) }, 'outbound-links-warn'),
                enabled: !0
            },
            {
                renderComponent: () => (0, r.jsx)(d.Z, { title: g.NW.string(g.t['7cAQmp']) }, 'delete-spam'),
                enabled: !0
            }
        ].filter((e) => null != e);
    return {
        [a.u.CAPTCHA_AND_RAID_PROTECTION]: [
            {
                renderComponent: () => (0, r.jsx)(c.Z, { guild: e }, 'raid-alerts'),
                enabled: !e.hasFeature(p.oNc.RAID_ALERTS_DISABLED)
            },
            {
                renderComponent: () => (0, r.jsx)(d.Z, { title: g.NW.string(g.t.gOkFfH) }, 'captcha-suspicious-joins'),
                enabled: !0
            },
            {
                renderComponent: () => (0, r.jsx)(d.Z, { title: g.NW.string(g.t.r3esyM) }, 'captcha-raid-joins'),
                enabled: !0
            }
        ],
        [a.u.DM_AND_SPAM_PROTECTION]: n,
        [a.u.PERMISSIONS]: [
            {
                renderComponent: () => (0, r.jsx)(l.Z, { guild: e }, 'guild-mfa'),
                enabled: e.mfaLevel === p.BpS.ELEVATED
            },
            {
                renderComponent: () => (0, r.jsx)(o.Z, { guild: e }, 'disable-risky-perms'),
                enabled: 0 === (0, o.R)(e).length
            }
        ]
    };
};
