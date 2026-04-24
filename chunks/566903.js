a.d(t, { A: () => u });
var n = a(599026),
    r = a(440594),
    l = a(541806),
    i = a(765379),
    s = a(90644),
    o = a(82149),
    c = a(652215),
    d = a(985018);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = e?.name === "" ? null : e?.name,
        u = e?.details === "" ? null : e?.details,
        h = e?.state === "" ? null : e?.state,
        p = e?.type === c.$pd.STREAMING ? (u ?? a) : a;
    if (
        (e?.status_display_type === n.A.NAME && null != a
            ? (p = a)
            : e?.status_display_type === n.A.STATE && null != h
              ? (p = h)
              : e?.status_display_type === n.A.DETAILS && null != u && (p = u),
        (0, i.A)(e))
    ) {
        let e = (0, r.A)(a);
        return { text: e, tooltip: e };
    }
    if (e?.type === c.$pd.PLAYING && null != p)
        return { text: p, tooltip: d.intl.formatToPlainString(d.t.lFApmz, { game: p }) };
    if ((0, s.A)(e) && t && null != h) {
        let e = h.split("; ")?.join(", ");
        return { text: e, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: e }) };
    }
    return (0, o.Cy)(e) && null != a
        ? { text: a, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: a }) }
        : e?.type === c.$pd.LISTENING && null != p
          ? { text: p, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: p }) }
          : (0, l.A)(e) && t && null != u
            ? { text: u, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: u }) }
            : e?.type === c.$pd.WATCHING && null != p
              ? { text: p, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: p }) }
              : e?.type === c.$pd.COMPETING && null != p
                ? { text: p, tooltip: d.intl.formatToPlainString(d.t.QQ2wVE, { name: p }) }
                : e?.type === c.$pd.STREAMING && null != p
                  ? { text: p, tooltip: d.intl.formatToPlainString(d.t["0wJXSh"], { name: p }) }
                  : {};
}
