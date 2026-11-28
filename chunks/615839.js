var e = l(258576),
    i = l(792996);
function u(t) {
    let n = Number.isFinite(t) ? Math.max(0, Math.floor(t / 1e3)) : 0;
    return { hours: Math.floor(n / 3600), minutes: Math.floor(n / 60) % 60, seconds: n % 60 };
}
l.d(
    n,
    {},
    {
        C7: function (t) {
            let { hours: n, minutes: l, seconds: a } = u(t);
            return n > 0
                ? i.intl.formatToPlainString(e.default["rIbuN/"], { hours: n, minutes: l, seconds: a })
                : l > 0
                  ? i.intl.formatToPlainString(e.default["/D79R7"], { minutes: l, seconds: a })
                  : i.intl.formatToPlainString(e.default.KrqS00, { seconds: a });
        },
        MB: function (t) {
            let n = Math.max(1, Math.round(t / 1e3));
            if (n < 60) return i.intl.formatToPlainString(e.default["Cn+5go"], { count: n });
            let l = Math.round(n / 60);
            return l < 60
                ? i.intl.formatToPlainString(e.default.lUCXD2, { count: l })
                : i.intl.formatToPlainString(e.default.Y1OsON, { hours: Math.floor(l / 60), minutes: l % 60 });
        },
        Us: function (t) {
            let { hours: n, minutes: l } = u(t);
            return n > 0
                ? i.intl.formatToPlainString(e.default.HEBIhT, { hours: n, minutes: l })
                : l > 0
                  ? i.intl.formatToPlainString(e.default.vvpiqt, { minutes: l })
                  : i.intl.string(e.default.dCg2BH);
        },
        nY: function (t) {
            let n = Math.max(1, Math.round(t / 1e3));
            if (n < 60) return i.intl.formatToPlainString(e.default.yUXWd9, { count: n });
            let l = Math.round(n / 60);
            return l < 60
                ? i.intl.formatToPlainString(e.default.v7Gf5b, { count: l })
                : i.intl.formatToPlainString(e.default.kyqrd4, { hours: Math.floor(l / 60), minutes: l % 60 });
        },
    },
);
