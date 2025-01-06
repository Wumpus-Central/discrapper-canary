n.d(e, {
    Z: function () {
        return a;
    }
});
var i = n(192379),
    r = n(817460),
    l = n(293810),
    o = n(474936),
    u = n(388032);
function a(t) {
    return i.useMemo(() => {
        var e;
        let n = l.DN.map((t) => ({
                value: t,
                label: t.interval === o.rV.DAY && 7 === t.interval_count ? u.intl.formatToPlainString(u.t.XfSsr6, { defaultLimit: (0, r.iG)(t) }) : (0, r.iG)(t),
                isDefault: t.interval === o.rV.DAY && 7 === t.interval_count
            })),
            i = null != t ? (null === (e = n.find((e) => null != e.value && e.value.interval === t.interval && e.value.interval_count === t.interval_count)) || void 0 === e ? void 0 : e.value) : t;
        return {
            options: n,
            selectedOption: i
        };
    }, [t]);
}
