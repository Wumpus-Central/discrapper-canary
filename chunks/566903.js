r.d(t, { A: () => d });
var n = r(599026),
    l = r(440594),
    i = r(541806),
    o = r(765379),
    a = r(90644),
    s = r(82149),
    E = r(652215),
    u = r(375708);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e?.name === "" ? null : e?.name,
        d = e?.details === "" ? null : e?.details,
        I = e?.state === "" ? null : e?.state,
        _ = e?.type === E.$pd.STREAMING ? (d ?? r) : r;
    if (
        (e?.status_display_type === n.A.NAME && null != r
            ? (_ = r)
            : e?.status_display_type === n.A.STATE && null != I
              ? (_ = I)
              : e?.status_display_type === n.A.DETAILS && null != d && (_ = d),
        (0, o.A)(e))
    ) {
        let e = (0, l.A)(r);
        return { text: e, tooltip: e };
    }
    if (e?.type === E.$pd.PLAYING && null != _)
        return { text: _, tooltip: u.intl.formatToPlainString(u.t.lFApmz, { game: _ }) };
    if ((0, a.A)(e) && t && null != I) {
        let e = I.split("; ")?.join(", ");
        return { text: e, tooltip: u.intl.formatToPlainString(u.t.Vnuxue, { name: e }) };
    }
    return (0, s.Cy)(e) && null != r
        ? { text: r, tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, { name: r }) }
        : e?.type === E.$pd.LISTENING && null != _
          ? { text: _, tooltip: u.intl.formatToPlainString(u.t.Vnuxue, { name: _ }) }
          : (0, i.A)(e) && t && null != d
            ? { text: d, tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, { name: d }) }
            : e?.type === E.$pd.WATCHING && null != _
              ? { text: _, tooltip: u.intl.formatToPlainString(u.t.pW3Ip3, { name: _ }) }
              : e?.type === E.$pd.COMPETING && null != _
                ? { text: _, tooltip: u.intl.formatToPlainString(u.t.QQ2wVE, { name: _ }) }
                : e?.type === E.$pd.STREAMING && null != _
                  ? { text: _, tooltip: u.intl.formatToPlainString(u.t["0wJXSh"], { name: _ }) }
                  : {};
}
