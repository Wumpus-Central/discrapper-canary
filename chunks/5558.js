n.d(t, { N: () => m });
var i = n(627968);
n(64700);
var l = n(660496),
    s = n(40160),
    r = n(324898),
    a = n(294363),
    o = n(400934),
    d = n(412977),
    c = n(652215),
    u = n(985018);
let m = (e) => {
    let t = [
        { renderComponent: () => (0, i.jsx)(d.A, { guild: e }, "verification-level"), enabled: !0 },
        {
            renderComponent: () =>
                (0, i.jsx)(
                    o.A,
                    { title: u.intl.string(u.t.QiONL5), details: u.intl.string(u.t.dSRTMB) },
                    "hide-suspicious-dms",
                ),
            enabled: !0,
        },
        {
            renderComponent: () =>
                (0, i.jsx)(
                    o.A,
                    { title: u.intl.string(u.t["f+8F8F"]), details: u.intl.string(u.t.qChrI2) },
                    "filter-unknown-dms",
                ),
            enabled: !0,
        },
        {
            renderComponent: () => (0, i.jsx)(o.A, { title: u.intl.string(u.t.EkSAHZ) }, "outbound-links-warn"),
            enabled: !0,
        },
        { renderComponent: () => (0, i.jsx)(o.A, { title: u.intl.string(u.t["7cAQmj"]) }, "delete-spam"), enabled: !0 },
    ].filter((e) => null != e);
    return {
        [l.C.CAPTCHA_AND_RAID_PROTECTION]: [
            {
                renderComponent: () => (0, i.jsx)(a.A, { guild: e }, "raid-alerts"),
                enabled: !e.features.has(c.GuildFeatures.RAID_ALERTS_DISABLED),
            },
            {
                renderComponent: () =>
                    (0, i.jsx)(o.A, { title: u.intl.string(u.t.gOkFfI) }, "captcha-suspicious-joins"),
                enabled: !0,
            },
            {
                renderComponent: () => (0, i.jsx)(o.A, { title: u.intl.string(u.t.r3esyC) }, "captcha-raid-joins"),
                enabled: !0,
            },
        ],
        [l.C.DM_AND_SPAM_PROTECTION]: t,
        [l.C.PERMISSIONS]: [
            {
                renderComponent: () => (0, i.jsx)(s.A, { guild: e }, "guild-mfa"),
                enabled: e.mfaLevel === c.EkJ.ELEVATED,
            },
            {
                renderComponent: () => (0, i.jsx)(r.A, { guild: e }, "disable-risky-perms"),
                enabled: 0 === (0, r.W)(e).length,
            },
        ],
    };
};
