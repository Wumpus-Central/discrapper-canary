i.d(n, { A: () => a });
var e = {
    lessThanXSeconds: { one: "dưới 1 gi\xe2y", other: "dưới {{count}} gi\xe2y" },
    xSeconds: { one: "1 gi\xe2y", other: "{{count}} gi\xe2y" },
    halfAMinute: "nửa ph\xfat",
    lessThanXMinutes: { one: "dưới 1 ph\xfat", other: "dưới {{count}} ph\xfat" },
    xMinutes: { one: "1 ph\xfat", other: "{{count}} ph\xfat" },
    aboutXHours: { one: "khoảng 1 giờ", other: "khoảng {{count}} giờ" },
    xHours: { one: "1 giờ", other: "{{count}} giờ" },
    xDays: { one: "1 ng\xe0y", other: "{{count}} ng\xe0y" },
    aboutXWeeks: { one: "khoảng 1 tuần", other: "khoảng {{count}} tuần" },
    xWeeks: { one: "1 tuần", other: "{{count}} tuần" },
    aboutXMonths: { one: "khoảng 1 th\xe1ng", other: "khoảng {{count}} th\xe1ng" },
    xMonths: { one: "1 th\xe1ng", other: "{{count}} th\xe1ng" },
    aboutXYears: { one: "khoảng 1 năm", other: "khoảng {{count}} năm" },
    xYears: { one: "1 năm", other: "{{count}} năm" },
    overXYears: { one: "hơn 1 năm", other: "hơn {{count}} năm" },
    almostXYears: { one: "gần 1 năm", other: "gần {{count}} năm" },
};
let a = function (t, n, i) {
    var a,
        h = e[t];
    if (
        ((a = "string" == typeof h ? h : 1 === n ? h.one : h.other.replace("{{count}}", String(n))),
        null != i && i.addSuffix)
    )
        if (i.comparison && i.comparison > 0) return a + " nữa";
        else return a + " trước";
    return a;
};
