e.d(l, { A: () => c });
var n = e(599026),
    a = e(440594),
    i = e(541806),
    o = e(765379),
    r = e(90644),
    s = e(869843),
    u = e(82149),
    p = e(652215),
    d = e(375708);
function c(t) {
    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        e = t?.name === "" ? null : t?.name,
        c = t?.details === "" ? null : t?.details,
        A = t?.state === "" ? null : t?.state,
        m = t?.type === p.$pd.STREAMING ? (c ?? e) : e;
    if (
        (t?.status_display_type === n.A.NAME && null != e
            ? (m = e)
            : t?.status_display_type === n.A.STATE && null != A
              ? (m = A)
              : t?.status_display_type === n.A.DETAILS && null != c && (m = c),
        (0, o.A)(t) || (0, s.$_)(t))
    ) {
        let t = (0, a.A)(e);
        return { text: t, tooltip: t };
    }
    if (t?.type === p.$pd.PLAYING && null != m)
        return { text: m, tooltip: d.intl.formatToPlainString(d.t.lFApmz, { game: m }) };
    if ((0, r.A)(t) && l && null != A) {
        let t = A.split("; ")?.join(", ");
        return { text: t, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: t }) };
    }
    return (0, u.Cy)(t) && null != e
        ? { text: e, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: e }) }
        : t?.type === p.$pd.LISTENING && null != m
          ? { text: m, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: m }) }
          : (0, i.A)(t) && l && null != c
            ? { text: c, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: c }) }
            : t?.type === p.$pd.WATCHING && null != m
              ? { text: m, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: m }) }
              : t?.type === p.$pd.COMPETING && null != m
                ? { text: m, tooltip: d.intl.formatToPlainString(d.t.QQ2wVE, { name: m }) }
                : t?.type === p.$pd.STREAMING && null != m
                  ? { text: m, tooltip: d.intl.formatToPlainString(d.t["0wJXSh"], { name: m }) }
                  : {};
}
