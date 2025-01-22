e.d(n, {
    Z: function () {
        return a;
    }
});
var i = e(192379),
    r = e(817460),
    l = e(293810),
    u = e(474936),
    o = e(388032);
function a(t) {
    return i.useMemo(() => {
        var n;
        let e = l.DN.map((t) => ({
                value: t,
                label: t.interval === u.rV.DAY && 7 === t.interval_count ? o.intl.formatToPlainString(o.t.XfSsr6, { defaultLimit: (0, r.iG)(t) }) : (0, r.iG)(t),
                isDefault: t.interval === u.rV.DAY && 7 === t.interval_count
            })),
            i = null != t ? (null === (n = e.find((n) => null != n.value && n.value.interval === t.interval && n.value.interval_count === t.interval_count)) || void 0 === n ? void 0 : n.value) : t;
        return {
            options: e,
            selectedOption: i
        };
    }, [t]);
}
