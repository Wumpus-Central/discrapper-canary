var i = d(888091);
d.d(
    t,
    {},
    {
        t: function () {
            let { userAgent: l, platform: t, maxTouchPoints: d } = (0, i.t)();
            if (!l) return "desktop";
            let e = l.toLowerCase();
            return /iphone|ipad|ipod/.test(e) || ("MacIntel" === t && d > 1)
                ? "ios"
                : /android/.test(e)
                  ? "android"
                  : "desktop";
        },
    },
);
