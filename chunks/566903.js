"use strict";
n.d(t, { A: () => d });
var i = n(599026),
    r = n(440594),
    s = n(541806),
    a = n(765379),
    o = n(90644),
    l = n(82149),
    u = n(652215),
    c = n(375708);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e?.name === "" ? null : e?.name,
        d = e?.details === "" ? null : e?.details,
        _ = e?.state === "" ? null : e?.state,
        f = e?.type === u.$pd.STREAMING ? (d ?? n) : n;
    if (
        (e?.status_display_type === i.A.NAME && null != n
            ? (f = n)
            : e?.status_display_type === i.A.STATE && null != _
              ? (f = _)
              : e?.status_display_type === i.A.DETAILS && null != d && (f = d),
        (0, a.A)(e))
    ) {
        let e = (0, r.A)(n);
        return { text: e, tooltip: e };
    }
    if (e?.type === u.$pd.PLAYING && null != f)
        return { text: f, tooltip: c.intl.formatToPlainString(c.t.lFApmz, { game: f }) };
    if ((0, o.A)(e) && t && null != _) {
        let e = _.split("; ")?.join(", ");
        return { text: e, tooltip: c.intl.formatToPlainString(c.t.Vnuxue, { name: e }) };
    }
    return (0, l.Cy)(e) && null != n
        ? { text: n, tooltip: c.intl.formatToPlainString(c.t.pW3Ip3, { name: n }) }
        : e?.type === u.$pd.LISTENING && null != f
          ? { text: f, tooltip: c.intl.formatToPlainString(c.t.Vnuxue, { name: f }) }
          : (0, s.A)(e) && t && null != d
            ? { text: d, tooltip: c.intl.formatToPlainString(c.t.pW3Ip3, { name: d }) }
            : e?.type === u.$pd.WATCHING && null != f
              ? { text: f, tooltip: c.intl.formatToPlainString(c.t.pW3Ip3, { name: f }) }
              : e?.type === u.$pd.COMPETING && null != f
                ? { text: f, tooltip: c.intl.formatToPlainString(c.t.QQ2wVE, { name: f }) }
                : e?.type === u.$pd.STREAMING && null != f
                  ? { text: f, tooltip: c.intl.formatToPlainString(c.t["0wJXSh"], { name: f }) }
                  : {};
}
