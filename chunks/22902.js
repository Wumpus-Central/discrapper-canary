r.d(t, { Z: () => a });
var n = r(192379),
    i = r(817460),
    s = r(293810),
    o = r(474936),
    l = r(388032);
function a(e) {
    return n.useMemo(() => {
        var t;
        let r = s.DN.map((e) => ({
                value: e,
                label: e.interval === o.rV.DAY && 7 === e.interval_count ? l.intl.formatToPlainString(l.t.XfSsr6, { defaultLimit: (0, i.iG)(e) }) : (0, i.iG)(e),
                isDefault: e.interval === o.rV.DAY && 7 === e.interval_count
            })),
            n = null != e ? (null == (t = r.find((t) => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) ? void 0 : t.value) : e;
        return {
            options: r,
            selectedOption: n
        };
    }, [e]);
}
