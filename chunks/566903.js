n.d(t, { A: () => d });
var i = n(599026),
    r = n(440594),
    a = n(541806),
    s = n(765379),
    _ = n(90644),
    l = n(82149),
    o = n(652215),
    E = n(985018);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e?.name === "" ? null : e?.name,
        d = e?.details === "" ? null : e?.details,
        c = e?.state === "" ? null : e?.state,
        u = e?.type === o.$pd.STREAMING ? (d ?? n) : n;
    if (
        (e?.status_display_type === i.A.NAME && null != n
            ? (u = n)
            : e?.status_display_type === i.A.STATE && null != c
              ? (u = c)
              : e?.status_display_type === i.A.DETAILS && null != d && (u = d),
        (0, s.A)(e))
    ) {
        let e = (0, r.A)(n);
        return { text: e, tooltip: e };
    }
    if (e?.type === o.$pd.PLAYING && null != u)
        return { text: u, tooltip: E.intl.formatToPlainString(E.t.lFApmz, { game: u }) };
    if ((0, _.A)(e) && t && null != c) {
        let e = c.split("; ")?.join(", ");
        return { text: e, tooltip: E.intl.formatToPlainString(E.t.Vnuxue, { name: e }) };
    }
    return (0, l.Cy)(e) && null != n
        ? { text: n, tooltip: E.intl.formatToPlainString(E.t.pW3Ip3, { name: n }) }
        : e?.type === o.$pd.LISTENING && null != u
          ? { text: u, tooltip: E.intl.formatToPlainString(E.t.Vnuxue, { name: u }) }
          : (0, a.A)(e) && t && null != d
            ? { text: d, tooltip: E.intl.formatToPlainString(E.t.pW3Ip3, { name: d }) }
            : e?.type === o.$pd.WATCHING && null != u
              ? { text: u, tooltip: E.intl.formatToPlainString(E.t.pW3Ip3, { name: u }) }
              : e?.type === o.$pd.COMPETING && null != u
                ? { text: u, tooltip: E.intl.formatToPlainString(E.t.QQ2wVE, { name: u }) }
                : e?.type === o.$pd.STREAMING && null != u
                  ? { text: u, tooltip: E.intl.formatToPlainString(E.t["0wJXSh"], { name: u }) }
                  : {};
}
