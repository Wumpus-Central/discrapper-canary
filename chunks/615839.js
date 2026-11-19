var e = n(191850),
    i = n(792996);
function a(t) {
    let l = Number.isFinite(t) ? Math.max(0, Math.floor(t / 1e3)) : 0;
    return { hours: Math.floor(l / 3600), minutes: Math.floor(l / 60) % 60, seconds: l % 60 };
}
n.d(
    l,
    {},
    {
        C7: function (t) {
            let { hours: l, minutes: n, seconds: u } = a(t);
            return l > 0
                ? i.intl.formatToPlainString(e.default["rIbuN/"], { hours: l, minutes: n, seconds: u })
                : n > 0
                  ? i.intl.formatToPlainString(e.default["/D79R7"], { minutes: n, seconds: u })
                  : i.intl.formatToPlainString(e.default.KrqS00, { seconds: u });
        },
        MB: function (t) {
            let l = Math.max(1, Math.round(t / 1e3));
            if (l < 60) return i.intl.formatToPlainString(e.default["Cn+5go"], { count: l });
            let n = Math.round(l / 60);
            return n < 60
                ? i.intl.formatToPlainString(e.default.lUCXD2, { count: n })
                : i.intl.formatToPlainString(e.default.Y1OsON, { hours: Math.floor(n / 60), minutes: n % 60 });
        },
        Us: function (t) {
            let { hours: l, minutes: n } = a(t);
            return l > 0
                ? i.intl.formatToPlainString(e.default.HEBIhT, { hours: l, minutes: n })
                : n > 0
                  ? i.intl.formatToPlainString(e.default.vvpiqt, { minutes: n })
                  : i.intl.string(e.default.dCg2BH);
        },
        nY: function (t) {
            let l = Math.max(1, Math.round(t / 1e3));
            if (l < 60) return i.intl.formatToPlainString(e.default.yUXWd9, { count: l });
            let n = Math.round(l / 60);
            return n < 60
                ? i.intl.formatToPlainString(e.default.v7Gf5b, { count: n })
                : i.intl.formatToPlainString(e.default.kyqrd4, { hours: Math.floor(n / 60), minutes: n % 60 });
        },
    },
);
