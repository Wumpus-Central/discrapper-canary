r.d(t, { Z: () => o });
var n = r(192379),
    h = r(817460),
    v = r(293810),
    i = r(474936),
    l = r(388032);
function o(e) {
    return n.useMemo(() => {
        var t;
        let r = v.DN.map((e) => ({
                value: e,
                label: e.interval === i.rV.DAY && 7 === e.interval_count ? l.NW.formatToPlainString(l.t.XfSsr6, { defaultLimit: (0, h.iG)(e) }) : (0, h.iG)(e),
                isDefault: e.interval === i.rV.DAY && 7 === e.interval_count
            })),
            n = null != e ? (null == (t = r.find((t) => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) ? void 0 : t.value) : e;
        return {
            options: r,
            selectedOption: n
        };
    }, [e]);
}
