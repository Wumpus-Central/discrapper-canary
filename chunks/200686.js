l.d(t, { Ge: () => r, Ay: () => s, SJ: () => u });
var n = l(582128),
    i = l(993408),
    a = l(652215);
function r(e) {
    let t = e.sku?.productLine;
    return t === a.EZt.SOCIAL_LAYER_GAME_ITEM || t === a.EZt.COLLECTIBLES || t === a.EZt.PREMIUM;
}
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [, l] = n.useReducer((e) => e + 1, 0),
        a = e?.getTime();
    return (
        n.useEffect(() => {
            let e;
            if (null == a) return;
            let n = a - 2592e6,
                i = () => {
                    let r = Date.now();
                    if (r < n) {
                        e = setTimeout(i, Math.min(n - r, 0x7fffffff));
                        return;
                    }
                    (l(), r < a && (e = setTimeout(i, Math.min(t ? 6e4 : 0x7fffffff, a - r))));
                };
            return (i(), () => clearTimeout(e));
        }, [a, t]),
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if (null == e) return null;
            let l = e.getTime() - t;
            if (l <= 0 || l > 2592e6) return null;
            let n = (0, i.WU)(e, t);
            return n <= 1 ? { unit: "hours", hours: Math.max(1, Math.floor(l / 36e5)) } : { unit: "days", days: n };
        })(e)
    );
}
function u(e) {
    return (
        null !=
        s(
            (function (e) {
                let t,
                    l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                for (let n of e) {
                    if (null == n) continue;
                    let e = n.getTime();
                    e > l && (null == t || e < t.getTime()) && (t = n);
                }
                return t;
            })(e),
            !1,
        )
    );
}
