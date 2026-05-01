n.d(t, { A: () => _ });
var i = n(599026),
    a = n(440594),
    r = n(541806),
    s = n(765379),
    l = n(90644),
    o = n(82149),
    d = n(652215),
    c = n(985018);
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e?.name === "" ? null : e?.name,
        _ = e?.details === "" ? null : e?.details,
        E = e?.state === "" ? null : e?.state,
        u = e?.type === d.$pd.STREAMING ? (_ ?? n) : n;
    if (
        (e?.status_display_type === i.A.NAME && null != n
            ? (u = n)
            : e?.status_display_type === i.A.STATE && null != E
              ? (u = E)
              : e?.status_display_type === i.A.DETAILS && null != _ && (u = _),
        (0, s.A)(e))
    ) {
        let e = (0, a.A)(n);
        return { text: e, tooltip: e };
    }
    if (e?.type === d.$pd.PLAYING && null != u)
        return { text: u, tooltip: c.intl.formatToPlainString(c.t.lFApmz, { game: u }) };
    if ((0, l.A)(e) && t && null != E) {
        let e = E.split("; ")?.join(", ");
        return { text: e, tooltip: c.intl.formatToPlainString(c.t.Vnuxue, { name: e }) };
    }
    return (0, o.Cy)(e) && null != n
        ? { text: n, tooltip: c.intl.formatToPlainString(c.t.pW3Ip3, { name: n }) }
        : e?.type === d.$pd.LISTENING && null != u
          ? { text: u, tooltip: c.intl.formatToPlainString(c.t.Vnuxue, { name: u }) }
          : (0, r.A)(e) && t && null != _
            ? { text: _, tooltip: c.intl.formatToPlainString(c.t.pW3Ip3, { name: _ }) }
            : e?.type === d.$pd.WATCHING && null != u
              ? { text: u, tooltip: c.intl.formatToPlainString(c.t.pW3Ip3, { name: u }) }
              : e?.type === d.$pd.COMPETING && null != u
                ? { text: u, tooltip: c.intl.formatToPlainString(c.t.QQ2wVE, { name: u }) }
                : e?.type === d.$pd.STREAMING && null != u
                  ? { text: u, tooltip: c.intl.formatToPlainString(c.t["0wJXSh"], { name: u }) }
                  : {};
}
