var l,
    s = t(894279),
    a = t(500620),
    i = (((l = {}).STRING = "string"), (l.NUMBER = "number"), (l.MEDIA = "media"), l);
let r = { [s.P.TEXT]: ["string"], [s.P.NUMBER]: ["number"], [s.P.IMAGE]: ["media"], [s.P.DURATION]: ["number"] };
t.d(
    n,
    {},
    {
        J: function (e) {
            return function (n, t) {
                return (function e(n, t, l) {
                    let { data: i, applicationAssets: o, getApplicationAssetUrl: u } = l;
                    if (null == n) return null;
                    if (n.value_type === a.o.DATA) {
                        let a = i[n.value],
                            o = n.presentation_type;
                        return null != a && r[o]?.includes(a.type) && t.includes(a.type)
                            ? "playtime_hours" === n.value && "number" === a.type && o === s.P.DURATION
                                ? { type: a.type, value: Math.floor(60 * a.value * 6e4), presentationType: o }
                                : { ...a, presentationType: o }
                            : "fallback" in n && null != n.fallback
                              ? e(n.fallback, t, l)
                              : null;
                    }
                    if (n.value_type === a.o.CUSTOM_STRING)
                        return n.presentation_type === s.P.TEXT && t.includes("string")
                            ? { type: "string", value: n.value, presentationType: s.P.TEXT }
                            : null;
                    if (n.value_type === a.o.APPLICATION_ASSET) {
                        if (!t.includes("media")) return null;
                        let e = o.find((e) => e.key === n.value);
                        return null == e
                            ? null
                            : {
                                  type: "media",
                                  media: { url: u(e), width: e.metadata.width, height: e.metadata.height },
                                  presentationType: s.P.IMAGE,
                              };
                    }
                    return null;
                })(n, t, e);
            };
        },
        o: i,
    },
);
