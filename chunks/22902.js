n.d(t, { Z: () => l });
var r = n(73800),
    i = n(817460),
    s = n(293810),
    o = n(474936),
    a = n(388032);
function l(e) {
    return r.useMemo(() => {
        var t;
        let n = s.DN.map((e) => ({
                value: e,
                label: e.interval === o.rV.DAY && 7 === e.interval_count ? a.intl.formatToPlainString(a.t.XfSsr6, { defaultLimit: (0, i.iG)(e) }) : (0, i.iG)(e),
                isDefault: e.interval === o.rV.DAY && 7 === e.interval_count
            })),
            r = null != e ? (null == (t = n.find((t) => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) ? void 0 : t.value) : e;
        return {
            options: n,
            selectedOption: r
        };
    }, [e]);
}
