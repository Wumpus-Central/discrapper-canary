n.d(t, { A: () => s });
var i = n(64700),
    l = n(500345),
    r = n(2242),
    o = n(788868),
    a = n(985018);
function s(e) {
    return i.useMemo(() => {
        let t = r.p$.map((e) => ({
                value: e,
                label:
                    e.interval === o.WT.DAY && 7 === e.interval_count
                        ? a.intl.formatToPlainString(a.t.XfSsr1, { defaultLimit: (0, l.Gg)(e) })
                        : (0, l.Gg)(e),
                isDefault: e.interval === o.WT.DAY && 7 === e.interval_count,
            })),
            n =
                null != e
                    ? t.find(
                          (t) =>
                              null != t.value &&
                              t.value.interval === e.interval &&
                              t.value.interval_count === e.interval_count,
                      )?.value
                    : e;
        return { options: t, selectedOption: n };
    }, [e]);
}
