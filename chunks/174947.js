var n = l(993408),
    i = l(652215),
    a = l(792996);
l.d(
    t,
    {},
    {
        Fu: function (e, t) {
            return "compact" === t
                ? "hours" === e.unit
                    ? a.intl.formatToPlainString(a.t.WJieZ2, { hours: e.hours })
                    : a.intl.formatToPlainString(a.t.DkxLY0, { days: e.days })
                : "hours" === e.unit
                  ? a.intl.string(a.t.Bc13HF)
                  : a.intl.formatToPlainString(a.t.Io7ozn, { days: e.days });
        },
        G3: 2592e6,
        _z: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if (null == e) return null;
            let l = e.getTime() - t;
            if (l <= 0 || l > 2592e6) return null;
            let i = (0, n.WU)(e, t);
            return i <= 1 ? { unit: "hours", hours: Math.max(1, Math.floor(l / 36e5)) } : { unit: "days", days: i };
        },
        fH: function (e) {
            let t,
                l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            for (let n of e) {
                if (null == n) continue;
                let e = n.getTime();
                e > l && (null == t || e < t.getTime()) && (t = n);
            }
            return t;
        },
        xZ: function (e) {
            let t = e.sku?.productLine;
            return t === i.EZt.SOCIAL_LAYER_GAME_ITEM || t === i.EZt.COLLECTIBLES || t === i.EZt.PREMIUM;
        },
    },
);
