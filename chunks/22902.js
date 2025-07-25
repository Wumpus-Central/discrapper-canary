n.d(t, { Z: () => a });
var r = n(73800),
    i = n(817460),
    l = n(293810),
    s = n(474936),
    o = n(388032);
function a(e) {
    return r.useMemo(() => {
        var t;
        let n = l.DN.map((e) => ({
                value: e,
                label: e.interval === s.rV.DAY && 7 === e.interval_count ? o.intl.formatToPlainString(o.t.XfSsr6, { defaultLimit: (0, i.iG)(e) }) : (0, i.iG)(e),
                isDefault: e.interval === s.rV.DAY && 7 === e.interval_count
            })),
            r = null != e ? (null == (t = n.find((t) => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) ? void 0 : t.value) : e;
        return {
            options: n,
            selectedOption: r
        };
    }, [e]);
}
