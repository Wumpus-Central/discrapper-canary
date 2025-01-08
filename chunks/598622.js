n.d(t, {
    Q: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var r = n(63568),
    l = n(983736),
    a = n(740903),
    s = n(426434),
    o = n(112824),
    c = n(181339),
    d = n(195189),
    u = n(122051),
    m = n(3896),
    h = n(981631),
    g = n(388032);
let x = (e) => {
    let { enabled: t } = r.tW.getCurrentConfig(
            {
                guildId: e.id,
                location: 'getGuildSafetySettings'
            },
            { autoTrackExposure: !1 }
        ),
        n = [
            {
                renderComponent: () => (0, i.jsx)(m.Z, { guild: e }, 'verification-level'),
                enabled: !0
            },
            t
                ? null
                : {
                      renderComponent: () => (0, i.jsx)(u.Z, { guild: e }, 'member-verification'),
                      enabled: (0, l.Dc)(e)
                  },
            {
                renderComponent: () =>
                    (0, i.jsx)(
                        d.Z,
                        {
                            title: g.intl.string(g.t.QiONLy),
                            details: g.intl.string(g.t.dSRTMD)
                        },
                        'hide-suspicious-dms'
                    ),
                enabled: !0
            },
            {
                renderComponent: () =>
                    (0, i.jsx)(
                        d.Z,
                        {
                            title: g.intl.string(g.t['f+8F8P']),
                            details: g.intl.string(g.t.qChrIy)
                        },
                        'filter-unknown-dms'
                    ),
                enabled: !0
            },
            {
                renderComponent: () => (0, i.jsx)(d.Z, { title: g.intl.string(g.t.EkSAHR) }, 'outbound-links-warn'),
                enabled: !0
            },
            {
                renderComponent: () => (0, i.jsx)(d.Z, { title: g.intl.string(g.t['7cAQmp']) }, 'delete-spam'),
                enabled: !0
            }
        ].filter((e) => null != e);
    return {
        [a.u.CAPTCHA_AND_RAID_PROTECTION]: [
            {
                renderComponent: () => (0, i.jsx)(c.Z, { guild: e }, 'raid-alerts'),
                enabled: !e.hasFeature(h.oNc.RAID_ALERTS_DISABLED)
            },
            {
                renderComponent: () => (0, i.jsx)(d.Z, { title: g.intl.string(g.t.gOkFfH) }, 'captcha-suspicious-joins'),
                enabled: !0
            },
            {
                renderComponent: () => (0, i.jsx)(d.Z, { title: g.intl.string(g.t.r3esyM) }, 'captcha-raid-joins'),
                enabled: !0
            }
        ],
        [a.u.DM_AND_SPAM_PROTECTION]: n,
        [a.u.PERMISSIONS]: [
            {
                renderComponent: () => (0, i.jsx)(s.Z, { guild: e }, 'guild-mfa'),
                enabled: e.mfaLevel === h.BpS.ELEVATED
            },
            {
                renderComponent: () => (0, i.jsx)(o.Z, { guild: e }, 'disable-risky-perms'),
                enabled: 0 === (0, o.R)(e).length
            }
        ]
    };
};
