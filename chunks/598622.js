n.d(t, { Q: () => m });
var r = n(200651);
n(192379);
var i = n(740903),
    l = n(426434),
    s = n(112824),
    a = n(181339),
    o = n(195189),
    c = n(3896),
    u = n(981631),
    d = n(388032);
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
                        title: d.intl.string(d.t.QiONLy),
                        details: d.intl.string(d.t.dSRTMD)
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
                        title: d.intl.string(d.t['f+8F8P']),
                        details: d.intl.string(d.t.qChrIy)
                    },
                    'filter-unknown-dms'
                ),
            enabled: !0
        },
        {
            renderComponent: () => (0, r.jsx)(o.Z, { title: d.intl.string(d.t.EkSAHR) }, 'outbound-links-warn'),
            enabled: !0
        },
        {
            renderComponent: () => (0, r.jsx)(o.Z, { title: d.intl.string(d.t['7cAQmp']) }, 'delete-spam'),
            enabled: !0
        }
    ].filter((e) => null != e);
    return {
        [i.u.CAPTCHA_AND_RAID_PROTECTION]: [
            {
                renderComponent: () => (0, r.jsx)(a.Z, { guild: e }, 'raid-alerts'),
                enabled: !e.hasFeature(u.oNc.RAID_ALERTS_DISABLED)
            },
            {
                renderComponent: () => (0, r.jsx)(o.Z, { title: d.intl.string(d.t.gOkFfH) }, 'captcha-suspicious-joins'),
                enabled: !0
            },
            {
                renderComponent: () => (0, r.jsx)(o.Z, { title: d.intl.string(d.t.r3esyM) }, 'captcha-raid-joins'),
                enabled: !0
            }
        ],
        [i.u.DM_AND_SPAM_PROTECTION]: t,
        [i.u.PERMISSIONS]: [
            {
                renderComponent: () => (0, r.jsx)(l.Z, { guild: e }, 'guild-mfa'),
                enabled: e.mfaLevel === u.BpS.ELEVATED
            },
            {
                renderComponent: () => (0, r.jsx)(s.Z, { guild: e }, 'disable-risky-perms'),
                enabled: 0 === (0, s.R)(e).length
            }
        ]
    };
};
