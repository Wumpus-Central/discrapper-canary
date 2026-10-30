e.d(l, { A: () => d });
var n = e(350835),
    a = e(599026),
    i = e(440594),
    o = e(541806),
    r = e(765379),
    s = e(90644),
    u = e(189117),
    p = e(82149),
    c = e(105292);
function d(t) {
    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        e = t?.name === "" ? null : t?.name,
        d = t?.details === "" ? null : t?.details,
        A = t?.state === "" ? null : t?.state,
        m = t?.type === n.$.STREAMING ? (d ?? e) : e;
    if (
        (t?.status_display_type === a.A.NAME && null != e
            ? (m = e)
            : t?.status_display_type === a.A.STATE && null != A
              ? (m = A)
              : t?.status_display_type === a.A.DETAILS && null != d && (m = d),
        (0, r.A)(t) || (0, u.$_)(t))
    ) {
        let t = (0, i.A)(e);
        return { text: t, tooltip: t };
    }
    if (t?.type === n.$.PLAYING && null != m)
        return { text: m, tooltip: c.intl.formatToPlainString(c.t.lFApmz, { game: m }) };
    if ((0, s.A)(t) && l && null != A) {
        let t = A.split("; ")?.join(", ");
        return { text: t, tooltip: c.intl.formatToPlainString(c.t.Vnuxue, { name: t }) };
    }
    return (0, p.Cy)(t) && null != e
        ? { text: e, tooltip: c.intl.formatToPlainString(c.t.pW3Ip3, { name: e }) }
        : t?.type === n.$.LISTENING && null != m
          ? { text: m, tooltip: c.intl.formatToPlainString(c.t.Vnuxue, { name: m }) }
          : (0, o.A)(t) && l && null != d
            ? { text: d, tooltip: c.intl.formatToPlainString(c.t.pW3Ip3, { name: d }) }
            : t?.type === n.$.WATCHING && null != m
              ? { text: m, tooltip: c.intl.formatToPlainString(c.t.pW3Ip3, { name: m }) }
              : t?.type === n.$.COMPETING && null != m
                ? { text: m, tooltip: c.intl.formatToPlainString(c.t.QQ2wVE, { name: m }) }
                : t?.type === n.$.STREAMING && null != m
                  ? { text: m, tooltip: c.intl.formatToPlainString(c.t["0wJXSh"], { name: m }) }
                  : {};
}
