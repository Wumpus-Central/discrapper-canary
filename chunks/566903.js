l.d(t, { A: () => u });
var n = l(599026),
    i = l(440594),
    r = l(541806),
    a = l(765379),
    s = l(90644),
    o = l(82149),
    c = l(652215),
    d = l(375708);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        l = e?.name === "" ? null : e?.name,
        u = e?.details === "" ? null : e?.details,
        h = e?.state === "" ? null : e?.state,
        E = e?.type === c.$pd.STREAMING ? (u ?? l) : l;
    if (
        (e?.status_display_type === n.A.NAME && null != l
            ? (E = l)
            : e?.status_display_type === n.A.STATE && null != h
              ? (E = h)
              : e?.status_display_type === n.A.DETAILS && null != u && (E = u),
        (0, a.A)(e))
    ) {
        let e = (0, i.A)(l);
        return { text: e, tooltip: e };
    }
    if (e?.type === c.$pd.PLAYING && null != E)
        return { text: E, tooltip: d.intl.formatToPlainString(d.t.lFApmz, { game: E }) };
    if ((0, s.A)(e) && t && null != h) {
        let e = h.split("; ")?.join(", ");
        return { text: e, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: e }) };
    }
    return (0, o.Cy)(e) && null != l
        ? { text: l, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: l }) }
        : e?.type === c.$pd.LISTENING && null != E
          ? { text: E, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: E }) }
          : (0, r.A)(e) && t && null != u
            ? { text: u, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: u }) }
            : e?.type === c.$pd.WATCHING && null != E
              ? { text: E, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: E }) }
              : e?.type === c.$pd.COMPETING && null != E
                ? { text: E, tooltip: d.intl.formatToPlainString(d.t.QQ2wVE, { name: E }) }
                : e?.type === c.$pd.STREAMING && null != E
                  ? { text: E, tooltip: d.intl.formatToPlainString(d.t["0wJXSh"], { name: E }) }
                  : {};
}
