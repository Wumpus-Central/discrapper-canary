var a,
    n = l(894279),
    s = l(500620),
    i = (((a = {}).STRING = "string"), (a.NUMBER = "number"), (a.MEDIA = "media"), a);
let r = { [n.P.TEXT]: ["string"], [n.P.NUMBER]: ["number"], [n.P.IMAGE]: ["media"], [n.P.DURATION]: ["number"] };
l.d(
    t,
    {},
    {
        J: function (e) {
            return function (t, l) {
                return (function e(t, l, a) {
                    let { data: i, applicationAssets: o, getApplicationAssetUrl: u } = a;
                    if (null == t) return null;
                    if (t.value_type === s.o.DATA) {
                        let s = i[t.value],
                            o = t.presentation_type;
                        return null != s && r[o]?.includes(s.type) && l.includes(s.type)
                            ? "playtime_hours" === t.value && "number" === s.type && o === n.P.DURATION
                                ? { type: s.type, value: Math.floor(60 * s.value * 6e4), presentationType: o }
                                : { ...s, presentationType: o }
                            : "fallback" in t && null != t.fallback
                              ? e(t.fallback, l, a)
                              : null;
                    }
                    if (t.value_type === s.o.CUSTOM_STRING)
                        return t.presentation_type === n.P.TEXT && l.includes("string")
                            ? { type: "string", value: t.value, presentationType: n.P.TEXT }
                            : null;
                    if (t.value_type === s.o.APPLICATION_ASSET) {
                        if (!l.includes("media")) return null;
                        let e = o.find((e) => e.key === t.value);
                        return null == e
                            ? null
                            : {
                                  type: "media",
                                  media: { url: u(e), width: e.metadata.width, height: e.metadata.height },
                                  presentationType: n.P.IMAGE,
                              };
                    }
                    return null;
                })(t, l, e);
            };
        },
        o: i,
    },
);
