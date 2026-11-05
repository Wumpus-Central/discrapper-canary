var e = n(350835),
    a = n(599026),
    i = n(440594),
    o = n(541806),
    r = n(765379),
    s = n(90644),
    u = n(189117),
    c = n(82149),
    p = n(792996);
n.d(
    l,
    {},
    {
        A: function (t) {
            let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = t?.name === "" ? null : t?.name,
                d = t?.details === "" ? null : t?.details,
                A = t?.state === "" ? null : t?.state,
                m = t?.type === e.$.STREAMING ? (d ?? n) : n;
            if (
                (t?.status_display_type === a.A.NAME && null != n
                    ? (m = n)
                    : t?.status_display_type === a.A.STATE && null != A
                      ? (m = A)
                      : t?.status_display_type === a.A.DETAILS && null != d && (m = d),
                (0, r.A)(t) || (0, u.$_)(t))
            ) {
                let t = (0, i.A)(n);
                return { text: t, tooltip: t };
            }
            if (t?.type === e.$.PLAYING && null != m)
                return { text: m, tooltip: p.intl.formatToPlainString(p.t.lFApmz, { game: m }) };
            if ((0, s.A)(t) && l && null != A) {
                let t = A.split("; ")?.join(", ");
                return { text: t, tooltip: p.intl.formatToPlainString(p.t.Vnuxue, { name: t }) };
            }
            return (0, c.Cy)(t) && null != n
                ? { text: n, tooltip: p.intl.formatToPlainString(p.t.pW3Ip3, { name: n }) }
                : t?.type === e.$.LISTENING && null != m
                  ? { text: m, tooltip: p.intl.formatToPlainString(p.t.Vnuxue, { name: m }) }
                  : (0, o.A)(t) && l && null != d
                    ? { text: d, tooltip: p.intl.formatToPlainString(p.t.pW3Ip3, { name: d }) }
                    : t?.type === e.$.WATCHING && null != m
                      ? { text: m, tooltip: p.intl.formatToPlainString(p.t.pW3Ip3, { name: m }) }
                      : t?.type === e.$.COMPETING && null != m
                        ? { text: m, tooltip: p.intl.formatToPlainString(p.t.QQ2wVE, { name: m }) }
                        : t?.type === e.$.STREAMING && null != m
                          ? { text: m, tooltip: p.intl.formatToPlainString(p.t["0wJXSh"], { name: m }) }
                          : {};
        },
    },
);
