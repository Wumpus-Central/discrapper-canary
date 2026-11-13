var n = l(582128),
    i = l(35236),
    a = l(652215);
function r(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [, l] = n.useReducer((e) => e + 1, 0),
        a = e?.getTime();
    return (
        n.useEffect(() => {
            let e;
            if (null == a) return;
            let n = a - i.XF,
                r = () => {
                    let i = Date.now();
                    if (i < n) {
                        e = setTimeout(r, Math.min(n - i, 0x7fffffff));
                        return;
                    }
                    (l(), i < a && (e = setTimeout(r, Math.min(t ? 6e4 : 0x7fffffff, a - i))));
                };
            return (r(), () => clearTimeout(e));
        }, [a, t]),
        (0, i.dn)(e)
    );
}
l.d(
    t,
    {},
    {
        Ay: r,
        Ge: function (e) {
            let t = e.sku?.productLine;
            return t === a.EZt.SOCIAL_LAYER_GAME_ITEM || t === a.EZt.COLLECTIBLES || t === a.EZt.PREMIUM;
        },
        SJ: function (e) {
            return null != r((0, i.wq)(e), !1);
        },
    },
);
