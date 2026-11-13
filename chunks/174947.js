var n = l(993408);
l.d(
    t,
    {},
    {
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
    },
);
