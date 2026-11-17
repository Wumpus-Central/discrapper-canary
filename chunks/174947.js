var l = n(993408),
    i = n(652215),
    r = n(792996);
n.d(
    t,
    {},
    {
        Fu: function (e, t) {
            return "compact" === t
                ? "hours" === e.unit
                    ? r.intl.formatToPlainString(r.t.WJieZ2, { hours: e.hours })
                    : r.intl.formatToPlainString(r.t.DkxLY0, { days: e.days })
                : "hours" === e.unit
                  ? r.intl.string(r.t.Bc13HF)
                  : r.intl.formatToPlainString(r.t.Io7ozn, { days: e.days });
        },
        G3: 2592e6,
        _z: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if (null == e) return null;
            let n = e.getTime() - t;
            if (n <= 0 || n > 2592e6) return null;
            let i = (0, l.WU)(e, t);
            return i <= 1 ? { unit: "hours", hours: Math.max(1, Math.floor(n / 36e5)) } : { unit: "days", days: i };
        },
        fH: function (e) {
            let t,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            for (let l of e) {
                if (null == l) continue;
                let e = l.getTime();
                e > n && (null == t || e < t.getTime()) && (t = l);
            }
            return t;
        },
        xZ: function (e) {
            let t = e.sku?.productLine;
            return t === i.EZt.SOCIAL_LAYER_GAME_ITEM || t === i.EZt.COLLECTIBLES || t === i.EZt.PREMIUM;
        },
    },
);
