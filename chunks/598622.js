n.d(t, {
    Q: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(983736),
    l = n(740903),
    a = n(426434),
    s = n(112824),
    o = n(181339),
    c = n(195189),
    d = n(122051),
    u = n(3896),
    m = n(981631),
    h = n(388032);
let g = (e) => ({
    [l.u.CAPTCHA_AND_RAID_PROTECTION]: [
        {
            renderComponent: () => (0, i.jsx)(o.Z, { guild: e }, 'raid-alerts'),
            enabled: !e.hasFeature(m.oNc.RAID_ALERTS_DISABLED)
        },
        {
            renderComponent: () => (0, i.jsx)(c.Z, { title: h.intl.string(h.t.gOkFfH) }, 'captcha-suspicious-joins'),
            enabled: !0
        },
        {
            renderComponent: () => (0, i.jsx)(c.Z, { title: h.intl.string(h.t.r3esyM) }, 'captcha-raid-joins'),
            enabled: !0
        }
    ],
    [l.u.DM_AND_SPAM_PROTECTION]: [
        {
            renderComponent: () => (0, i.jsx)(u.Z, { guild: e }, 'verification-level'),
            enabled: !0
        },
        {
            renderComponent: () => (0, i.jsx)(d.Z, { guild: e }, 'member-verification'),
            enabled: (0, r.Dc)(e)
        },
        {
            renderComponent: () =>
                (0, i.jsx)(
                    c.Z,
                    {
                        title: h.intl.string(h.t.QiONLy),
                        details: h.intl.string(h.t.dSRTMD)
                    },
                    'hide-suspicious-dms'
                ),
            enabled: !0
        },
        {
            renderComponent: () =>
                (0, i.jsx)(
                    c.Z,
                    {
                        title: h.intl.string(h.t['f+8F8P']),
                        details: h.intl.string(h.t.qChrIy)
                    },
                    'filter-unknown-dms'
                ),
            enabled: !0
        },
        {
            renderComponent: () => (0, i.jsx)(c.Z, { title: h.intl.string(h.t.EkSAHR) }, 'outbound-links-warn'),
            enabled: !0
        },
        {
            renderComponent: () => (0, i.jsx)(c.Z, { title: h.intl.string(h.t['7cAQmp']) }, 'delete-spam'),
            enabled: !0
        }
    ],
    [l.u.PERMISSIONS]: [
        {
            renderComponent: () => (0, i.jsx)(a.Z, { guild: e }, 'guild-mfa'),
            enabled: e.mfaLevel === m.BpS.ELEVATED
        },
        {
            renderComponent: () => (0, i.jsx)(s.Z, { guild: e }, 'disable-risky-perms'),
            enabled: 0 === (0, s.R)(e).length
        }
    ]
});
