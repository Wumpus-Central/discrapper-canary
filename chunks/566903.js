e.d(l, { A: () => d });
var n = e(599026),
    a = e(440594),
    i = e(541806),
    s = e(765379),
    o = e(90644),
    r = e(82149),
    u = e(652215),
    p = e(375708);
function d(t) {
    let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        e = t?.name === "" ? null : t?.name,
        d = t?.details === "" ? null : t?.details,
        c = t?.state === "" ? null : t?.state,
        A = t?.type === u.$pd.STREAMING ? (d ?? e) : e;
    if (
        (t?.status_display_type === n.A.NAME && null != e
            ? (A = e)
            : t?.status_display_type === n.A.STATE && null != c
              ? (A = c)
              : t?.status_display_type === n.A.DETAILS && null != d && (A = d),
        (0, s.A)(t))
    ) {
        let t = (0, a.A)(e);
        return { text: t, tooltip: t };
    }
    if (t?.type === u.$pd.PLAYING && null != A)
        return { text: A, tooltip: p.intl.formatToPlainString(p.t.lFApmz, { game: A }) };
    if ((0, o.A)(t) && l && null != c) {
        let t = c.split("; ")?.join(", ");
        return { text: t, tooltip: p.intl.formatToPlainString(p.t.Vnuxue, { name: t }) };
    }
    return (0, r.Cy)(t) && null != e
        ? { text: e, tooltip: p.intl.formatToPlainString(p.t.pW3Ip3, { name: e }) }
        : t?.type === u.$pd.LISTENING && null != A
          ? { text: A, tooltip: p.intl.formatToPlainString(p.t.Vnuxue, { name: A }) }
          : (0, i.A)(t) && l && null != d
            ? { text: d, tooltip: p.intl.formatToPlainString(p.t.pW3Ip3, { name: d }) }
            : t?.type === u.$pd.WATCHING && null != A
              ? { text: A, tooltip: p.intl.formatToPlainString(p.t.pW3Ip3, { name: A }) }
              : t?.type === u.$pd.COMPETING && null != A
                ? { text: A, tooltip: p.intl.formatToPlainString(p.t.QQ2wVE, { name: A }) }
                : t?.type === u.$pd.STREAMING && null != A
                  ? { text: A, tooltip: p.intl.formatToPlainString(p.t["0wJXSh"], { name: A }) }
                  : {};
}
