l.d(t, { J: () => o, o: () => i });
var n,
    a = l(894279),
    s = l(500620),
    i = (((n = {}).STRING = "string"), (n.NUMBER = "number"), (n.MEDIA = "media"), n);
let r = { [a.P.TEXT]: ["string"], [a.P.NUMBER]: ["number"], [a.P.IMAGE]: ["media"], [a.P.DURATION]: ["number"] };
function o(e) {
    return function (t, l) {
        return (function e(t, l, n) {
            let { data: i, applicationAssets: o, getApplicationAssetUrl: u } = n;
            if (null == t) return null;
            if (t.value_type === s.o.DATA) {
                let s = i[t.value],
                    o = t.presentation_type;
                return null != s && r[o]?.includes(s.type) && l.includes(s.type)
                    ? "playtime_hours" === t.value && "number" === s.type && o === a.P.DURATION
                        ? { type: s.type, value: Math.floor(60 * s.value * 6e4), presentationType: o }
                        : { ...s, presentationType: o }
                    : "fallback" in t && null != t.fallback
                      ? e(t.fallback, l, n)
                      : null;
            }
            if (t.value_type === s.o.CUSTOM_STRING)
                return t.presentation_type === a.P.TEXT && l.includes("string")
                    ? { type: "string", value: t.value, presentationType: a.P.TEXT }
                    : null;
            if (t.value_type === s.o.APPLICATION_ASSET) {
                if (!l.includes("media")) return null;
                let e = o.find((e) => e.key === t.value);
                return null == e
                    ? null
                    : {
                          type: "media",
                          media: { url: u(e), width: e.metadata.width, height: e.metadata.height },
                          presentationType: a.P.IMAGE,
                      };
            }
            return null;
        })(t, l, e);
    };
}
