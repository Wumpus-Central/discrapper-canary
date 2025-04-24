n.d(t, { Z: () => a });
var r = n(192379),
    s = n(817460),
    i = n(293810),
    o = n(474936),
    l = n(388032);
function a(e) {
    return r.useMemo(() => {
        var t;
        let n = i.DN.map((e) => ({
                value: e,
                label: e.interval === o.rV.DAY && 7 === e.interval_count ? l.intl.formatToPlainString(l.t.XfSsr6, { defaultLimit: (0, s.iG)(e) }) : (0, s.iG)(e),
                isDefault: e.interval === o.rV.DAY && 7 === e.interval_count
            })),
            r = null != e ? (null == (t = n.find((t) => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) ? void 0 : t.value) : e;
        return {
            options: n,
            selectedOption: r
        };
    }, [e]);
}
