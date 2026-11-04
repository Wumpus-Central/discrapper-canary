var n = i(582128),
    l = i(500345),
    r = i(2242),
    o = i(682901),
    s = i(792996);
i.d(
    t,
    {},
    {
        A: function (e) {
            return n.useMemo(() => {
                let t = r.p$.map((e) => ({
                        value: e,
                        label:
                            e.interval === o.WT.DAY && 7 === e.interval_count
                                ? s.intl.formatToPlainString(s.t.XfSsr1, { defaultLimit: (0, l.Gg)(e) })
                                : (0, l.Gg)(e),
                        isDefault: e.interval === o.WT.DAY && 7 === e.interval_count,
                    })),
                    i =
                        null != e
                            ? t.find(
                                  (t) =>
                                      null != t.value &&
                                      t.value.interval === e.interval &&
                                      t.value.interval_count === e.interval_count,
                              )?.value
                            : e;
                return { options: t, selectedOption: i };
            }, [e]);
        },
    },
);
