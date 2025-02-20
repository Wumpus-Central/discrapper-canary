n.d(t, { Z: () => a });
var i = n(192379),
    r = n(817460),
    l = n(293810),
    o = n(474936),
    s = n(388032);
function a(e) {
    return i.useMemo(() => {
        var t;
        let n = l.DN.map((e) => ({
                value: e,
                label: e.interval === o.rV.DAY && 7 === e.interval_count ? s.NW.formatToPlainString(s.t.XfSsr6, { defaultLimit: (0, r.iG)(e) }) : (0, r.iG)(e),
                isDefault: e.interval === o.rV.DAY && 7 === e.interval_count
            })),
            i = null != e ? (null === (t = n.find((t) => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) || void 0 === t ? void 0 : t.value) : e;
        return {
            options: n,
            selectedOption: i
        };
    }, [e]);
}
