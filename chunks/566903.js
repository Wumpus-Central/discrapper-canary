"use strict";
r.d(t, { A: () => u });
var n = r(599026),
    i = r(440594),
    a = r(541806),
    s = r(765379),
    l = r(90644),
    o = r(82149),
    c = r(652215),
    d = r(985018);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e?.name === "" ? null : e?.name,
        u = e?.details === "" ? null : e?.details,
        _ = e?.state === "" ? null : e?.state,
        p = e?.type === c.$pd.STREAMING ? (u ?? r) : r;
    if (
        (e?.status_display_type === n.A.NAME && null != r
            ? (p = r)
            : e?.status_display_type === n.A.STATE && null != _
              ? (p = _)
              : e?.status_display_type === n.A.DETAILS && null != u && (p = u),
        (0, s.A)(e))
    ) {
        let e = (0, i.A)(r);
        return { text: e, tooltip: e };
    }
    if (e?.type === c.$pd.PLAYING && null != p)
        return { text: p, tooltip: d.intl.formatToPlainString(d.t.lFApmz, { game: p }) };
    if ((0, l.A)(e) && t && null != _) {
        let e = _.split("; ")?.join(", ");
        return { text: e, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: e }) };
    }
    return (0, o.Cy)(e) && null != r
        ? { text: r, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: r }) }
        : e?.type === c.$pd.LISTENING && null != p
          ? { text: p, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: p }) }
          : (0, a.A)(e) && t && null != u
            ? { text: u, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: u }) }
            : e?.type === c.$pd.WATCHING && null != p
              ? { text: p, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: p }) }
              : e?.type === c.$pd.COMPETING && null != p
                ? { text: p, tooltip: d.intl.formatToPlainString(d.t.QQ2wVE, { name: p }) }
                : e?.type === c.$pd.STREAMING && null != p
                  ? { text: p, tooltip: d.intl.formatToPlainString(d.t["0wJXSh"], { name: p }) }
                  : {};
}
