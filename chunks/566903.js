"use strict";
n.d(t, { A: () => u });
var a = n(599026),
    r = n(440594),
    i = n(541806),
    l = n(765379),
    s = n(90644),
    o = n(82149),
    c = n(652215),
    d = n(985018);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e?.name === "" ? null : e?.name,
        u = e?.details === "" ? null : e?.details,
        _ = e?.state === "" ? null : e?.state,
        p = e?.type === c.$pd.STREAMING ? (u ?? n) : n;
    if (
        (e?.status_display_type === a.A.NAME && null != n
            ? (p = n)
            : e?.status_display_type === a.A.STATE && null != _
              ? (p = _)
              : e?.status_display_type === a.A.DETAILS && null != u && (p = u),
        (0, l.A)(e))
    ) {
        let e = (0, r.A)(n);
        return { text: e, tooltip: e };
    }
    if (e?.type === c.$pd.PLAYING && null != p)
        return { text: p, tooltip: d.intl.formatToPlainString(d.t.lFApmz, { game: p }) };
    if ((0, s.A)(e) && t && null != _) {
        let e = _.split("; ")?.join(", ");
        return { text: e, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: e }) };
    }
    return (0, o.Cy)(e) && null != n
        ? { text: n, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: n }) }
        : e?.type === c.$pd.LISTENING && null != p
          ? { text: p, tooltip: d.intl.formatToPlainString(d.t.Vnuxue, { name: p }) }
          : (0, i.A)(e) && t && null != u
            ? { text: u, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: u }) }
            : e?.type === c.$pd.WATCHING && null != p
              ? { text: p, tooltip: d.intl.formatToPlainString(d.t.pW3Ip3, { name: p }) }
              : e?.type === c.$pd.COMPETING && null != p
                ? { text: p, tooltip: d.intl.formatToPlainString(d.t.QQ2wVE, { name: p }) }
                : e?.type === c.$pd.STREAMING && null != p
                  ? { text: p, tooltip: d.intl.formatToPlainString(d.t["0wJXSh"], { name: p }) }
                  : {};
}
