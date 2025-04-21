n.d(t, { Q: () => m });
var r = n(200651);
n(192379);
var i = n(740903),
    l = n(426434),
    s = n(112824),
    a = n(181339),
    o = n(195189),
    c = n(3896),
    d = n(981631),
    u = n(388032);
let m = (e) => {
    let t = [
        {
            renderComponent: () => (0, r.jsx)(c.Z, { guild: e }, 'verification-level'),
            enabled: !0
        },
        {
            renderComponent: () =>
                (0, r.jsx)(
                    o.Z,
                    {
                        title: u.intl.string(u.t.QiONLy),
                        details: u.intl.string(u.t.dSRTMD)
                    },
                    'hide-suspicious-dms'
                ),
            enabled: !0
        },
        {
            renderComponent: () =>
                (0, r.jsx)(
                    o.Z,
                    {
                        title: u.intl.string(u.t['f+8F8P']),
                        details: u.intl.string(u.t.qChrIy)
                    },
                    'filter-unknown-dms'
                ),
            enabled: !0
        },
        {
            renderComponent: () => (0, r.jsx)(o.Z, { title: u.intl.string(u.t.EkSAHR) }, 'outbound-links-warn'),
            enabled: !0
        },
        {
            renderComponent: () => (0, r.jsx)(o.Z, { title: u.intl.string(u.t['7cAQmp']) }, 'delete-spam'),
            enabled: !0
        }
    ].filter((e) => null != e);
    return {
        [i.u.CAPTCHA_AND_RAID_PROTECTION]: [
            {
                renderComponent: () => (0, r.jsx)(a.Z, { guild: e }, 'raid-alerts'),
                enabled: !e.hasFeature(d.oNc.RAID_ALERTS_DISABLED)
            },
            {
                renderComponent: () => (0, r.jsx)(o.Z, { title: u.intl.string(u.t.gOkFfH) }, 'captcha-suspicious-joins'),
                enabled: !0
            },
            {
                renderComponent: () => (0, r.jsx)(o.Z, { title: u.intl.string(u.t.r3esyM) }, 'captcha-raid-joins'),
                enabled: !0
            }
        ],
        [i.u.DM_AND_SPAM_PROTECTION]: t,
        [i.u.PERMISSIONS]: [
            {
                renderComponent: () => (0, r.jsx)(l.Z, { guild: e }, 'guild-mfa'),
                enabled: e.mfaLevel === d.BpS.ELEVATED
            },
            {
                renderComponent: () => (0, r.jsx)(s.Z, { guild: e }, 'disable-risky-perms'),
                enabled: 0 === (0, s.R)(e).length
            }
        ]
    };
};
