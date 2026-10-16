r.d(e, { z: () => o });
var i = r(92551),
    n = r(105292);
function o(t) {
    if ("premiumTab" !== t.properties.properties.oneofKind) return null;
    let { premiumTab: e } = t.properties.properties,
        r = t.getFormatVariableValues(n.intl.currentLocale),
        o = (0, i.n)(e.badgeLabel, r);
    if (!o.ok) return null;
    let l = (0, i.n)(e.acknowledgedBadgeLabel, r);
    return l.ok ? { badgeCopy: o.content, acknowledgedBadgeCopy: l.content } : null;
}
