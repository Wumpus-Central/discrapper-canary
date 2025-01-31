n.d(t, { Z: () => o });
var i = n(192379),
    l = n(817460),
    r = n(293810),
    s = n(474936),
    a = n(388032);
function o(e) {
    return i.useMemo(() => {
        var t;
        let n = r.DN.map((e) => ({
                value: e,
                label: e.interval === s.rV.DAY && 7 === e.interval_count ? a.intl.formatToPlainString(a.t.XfSsr6, { defaultLimit: (0, l.iG)(e) }) : (0, l.iG)(e),
                isDefault: e.interval === s.rV.DAY && 7 === e.interval_count
            })),
            i = null != e ? (null === (t = n.find((t) => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) || void 0 === t ? void 0 : t.value) : e;
        return {
            options: n,
            selectedOption: i
        };
    }, [e]);
}
