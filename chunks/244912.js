"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(500345),
    a = n(2242),
    s = n(788868),
    o = n(985018);
function l(e) {
    return r.useMemo(() => {
        let t = a.p$.map((e) => ({
                value: e,
                label:
                    e.interval === s.WT.DAY && 7 === e.interval_count
                        ? o.intl.formatToPlainString(o.t.XfSsr1, { defaultLimit: (0, i.Gg)(e) })
                        : (0, i.Gg)(e),
                isDefault: e.interval === s.WT.DAY && 7 === e.interval_count,
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
