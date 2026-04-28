n.d(t, { A: () => c });
var r = n(599026),
    l = n(440594),
    i = n(541806),
    a = n(765379),
    u = n(90644),
    o = n(82149),
    s = n(652215),
    d = n(985018);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e?.name === "" ? null : e?.name,
        c = e?.details === "" ? null : e?.details,
        A = e?.state === "" ? null : e?.state,
        f = e?.type === s.$pd.STREAMING ? (c ?? n) : n;
    if (
        (e?.status_display_type === r.A.NAME && null != n
            ? (f = n)
            : e?.status_display_type === r.A.STATE && null != A
              ? (f = A)
              : e?.status_display_type === r.A.DETAILS && null != c && (f = c),
        (0, a.A)(e))
    ) {
        let e = (0, l.A)(n);
        return { text: e, tooltip: e };
    }
    if (e?.type === s.$pd.PLAYING && null != f)
        return { text: f, tooltip: d.intl.formatToPlainString(d.t.lFApmz, { game: f }) };
    if ((0, u.A)(e) && t && null != A) {
        let e = A.split("; ")?.join(", ");
        return { text: e, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: e }) };
    }
    return (0, o.Cy)(e) && null != n
        ? { text: n, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: n }) }
        : e?.type === s.$pd.LISTENING && null != f
          ? { text: f, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: f }) }
          : (0, i.A)(e) && t && null != c
            ? { text: c, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: c }) }
            : e?.type === s.$pd.WATCHING && null != f
              ? { text: f, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: f }) }
              : e?.type === s.$pd.COMPETING && null != f
                ? { text: f, tooltip: d.intl.formatToPlainString(d.t.QQ2wVE, { name: f }) }
                : e?.type === s.$pd.STREAMING && null != f
                  ? { text: f, tooltip: d.intl.formatToPlainString(d.t["0wJXSh"], { name: f }) }
                  : {};
}
