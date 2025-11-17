n.d(t, { Q: () => g });
var r = n(54381);
n(473749);
var i = n(740903),
    l = n(426434),
    a = n(112824),
    s = n(181339),
    o = n(195189),
    c = n(3896),
    d = n(981631),
    u = n(388032);
let g = (e) => {
    let t = [
        {
            renderComponent: () => (0, r.jsx)(c.Z, { guild: e }, "verification-level"),
            enabled: !0,
        },
        {
            renderComponent: () =>
                (0, r.jsx)(
                    o.Z,
                    {
                        title: u.intl.string(u.t.QiONL5),
                        details: u.intl.string(u.t.dSRTMB),
                    },
                    "hide-suspicious-dms",
                ),
            enabled: !0,
        },
        {
            renderComponent: () =>
                (0, r.jsx)(
                    o.Z,
                    {
                        title: u.intl.string(u.t["f+8F8F"]),
                        details: u.intl.string(u.t.qChrI2),
                    },
                    "filter-unknown-dms",
                ),
            enabled: !0,
        },
        {
            renderComponent: () => (0, r.jsx)(o.Z, { title: u.intl.string(u.t.EkSAHZ) }, "outbound-links-warn"),
            enabled: !0,
        },
        {
            renderComponent: () => (0, r.jsx)(o.Z, { title: u.intl.string(u.t["7cAQmj"]) }, "delete-spam"),
            enabled: !0,
        },
    ].filter((e) => null != e);
    return {
        [i.u.CAPTCHA_AND_RAID_PROTECTION]: [
            {
                renderComponent: () => (0, r.jsx)(s.Z, { guild: e }, "raid-alerts"),
                enabled: !e.features.has(d.GuildFeatures.RAID_ALERTS_DISABLED),
            },
            {
                renderComponent: () =>
                    (0, r.jsx)(o.Z, { title: u.intl.string(u.t.gOkFfI) }, "captcha-suspicious-joins"),
                enabled: !0,
            },
            {
                renderComponent: () => (0, r.jsx)(o.Z, { title: u.intl.string(u.t.r3esyC) }, "captcha-raid-joins"),
                enabled: !0,
            },
        ],
        [i.u.DM_AND_SPAM_PROTECTION]: t,
        [i.u.PERMISSIONS]: [
            {
                renderComponent: () => (0, r.jsx)(l.Z, { guild: e }, "guild-mfa"),
                enabled: e.mfaLevel === d.BpS.ELEVATED,
            },
            {
                renderComponent: () => (0, r.jsx)(a.Z, { guild: e }, "disable-risky-perms"),
                enabled: 0 === (0, a.R)(e).length,
            },
        ],
    };
};
