n.d(t, { N: () => f });
var r = n(627968);
n(64700);
var i = n(660496),
    l = n(40160),
    s = n(324898),
    a = n(294363),
    c = n(400934),
    o = n(412977),
    d = n(652215),
    u = n(985018);
let f = (e) => {
    let t = [
        {
            renderComponent: () => (0, r.jsx)(o.A, { guild: e }, "verification-level"),
            enabled: !0,
        },
        {
            renderComponent: () =>
                (0, r.jsx)(
                    c.A,
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
                    c.A,
                    {
                        title: u.intl.string(u.t["f+8F8F"]),
                        details: u.intl.string(u.t.qChrI2),
                    },
                    "filter-unknown-dms",
                ),
            enabled: !0,
        },
        {
            renderComponent: () => (0, r.jsx)(c.A, { title: u.intl.string(u.t.EkSAHZ) }, "outbound-links-warn"),
            enabled: !0,
        },
        {
            renderComponent: () => (0, r.jsx)(c.A, { title: u.intl.string(u.t["7cAQmj"]) }, "delete-spam"),
            enabled: !0,
        },
    ].filter((e) => null != e);
    return {
        [i.C.CAPTCHA_AND_RAID_PROTECTION]: [
            {
                renderComponent: () => (0, r.jsx)(a.A, { guild: e }, "raid-alerts"),
                enabled: !e.features.has(d.GuildFeatures.RAID_ALERTS_DISABLED),
            },
            {
                renderComponent: () =>
                    (0, r.jsx)(c.A, { title: u.intl.string(u.t.gOkFfI) }, "captcha-suspicious-joins"),
                enabled: !0,
            },
            {
                renderComponent: () => (0, r.jsx)(c.A, { title: u.intl.string(u.t.r3esyC) }, "captcha-raid-joins"),
                enabled: !0,
            },
        ],
        [i.C.DM_AND_SPAM_PROTECTION]: t,
        [i.C.PERMISSIONS]: [
            {
                renderComponent: () => (0, r.jsx)(l.A, { guild: e }, "guild-mfa"),
                enabled: e.mfaLevel === d.EkJ.ELEVATED,
            },
            {
                renderComponent: () => (0, r.jsx)(s.A, { guild: e }, "disable-risky-perms"),
                enabled: 0 === (0, s.W)(e).length,
            },
        ],
    };
};
