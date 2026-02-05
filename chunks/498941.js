t.d(e, { A: () => n });
var i = {
    lessThanXSeconds: { one: "bir saniyeden az", other: "{{count}} saniyeden az" },
    xSeconds: { one: "1 saniye", other: "{{count}} saniye" },
    halfAMinute: "yarım dakika",
    lessThanXMinutes: { one: "bir dakikadan az", other: "{{count}} dakikadan az" },
    xMinutes: { one: "1 dakika", other: "{{count}} dakika" },
    aboutXHours: { one: "yaklaşık 1 saat", other: "yaklaşık {{count}} saat" },
    xHours: { one: "1 saat", other: "{{count}} saat" },
    xDays: { one: "1 g\xfcn", other: "{{count}} g\xfcn" },
    aboutXWeeks: { one: "yaklaşık 1 hafta", other: "yaklaşık {{count}} hafta" },
    xWeeks: { one: "1 hafta", other: "{{count}} hafta" },
    aboutXMonths: { one: "yaklaşık 1 ay", other: "yaklaşık {{count}} ay" },
    xMonths: { one: "1 ay", other: "{{count}} ay" },
    aboutXYears: { one: "yaklaşık 1 yıl", other: "yaklaşık {{count}} yıl" },
    xYears: { one: "1 yıl", other: "{{count}} yıl" },
    overXYears: { one: "1 yıldan fazla", other: "{{count}} yıldan fazla" },
    almostXYears: { one: "neredeyse 1 yıl", other: "neredeyse {{count}} yıl" },
};
let n = function (a, e, t) {
    var n,
        r = i[a];
    if (
        ((n = "string" == typeof r ? r : 1 === e ? r.one : r.other.replace("{{count}}", e.toString())),
        null != t && t.addSuffix)
    )
        if (t.comparison && t.comparison > 0) return n + " sonra";
        else return n + " \xf6nce";
    return n;
};
