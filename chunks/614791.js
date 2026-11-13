var r = i(92551),
    n = i(792996);
i.d(
    e,
    {},
    {
        n: function (t, e) {
            return "" !== (e ? t.acknowledgedBadgeCopy : t.badgeCopy).trim();
        },
        z: function (t) {
            if ("premiumTab" !== t.properties.properties.oneofKind) return null;
            let { premiumTab: e } = t.properties.properties,
                i = t.getFormatVariableValues(n.intl.currentLocale),
                o = (0, r.n)(e.badgeLabel, i);
            if (!o.ok) return null;
            let l = (0, r.n)(e.acknowledgedBadgeLabel, i);
            return l.ok ? { badgeCopy: o.content, acknowledgedBadgeCopy: l.content } : null;
        },
    },
);
