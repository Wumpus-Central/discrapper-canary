"use strict";
n.d(t, { J: () => o, o: () => r });
var l,
    i = n(894279),
    s = n(500620),
    r = (((l = {}).STRING = "string"), (l.NUMBER = "number"), (l.MEDIA = "media"), l);
let a = { [i.P.TEXT]: ["string"], [i.P.NUMBER]: ["number"], [i.P.IMAGE]: ["media"], [i.P.DURATION]: ["number"] };
function o(e) {
    return function (t, n) {
        return (function e(t, n, l) {
            let { data: r, applicationAssets: o, getApplicationAssetUrl: u } = l;
            if (null == t) return null;
            if (t.value_type === s.o.DATA) {
                let s = r[t.value],
                    o = t.presentation_type;
                return null != s && a[o]?.includes(s.type) && n.includes(s.type)
                    ? "playtime_hours" === t.value && "number" === s.type && o === i.P.DURATION
                        ? { type: s.type, value: Math.floor(60 * s.value * 6e4), presentationType: o }
                        : { ...s, presentationType: o }
                    : "fallback" in t && null != t.fallback
                      ? e(t.fallback, n, l)
                      : null;
            }
            if (t.value_type === s.o.CUSTOM_STRING)
                return t.presentation_type === i.P.TEXT && n.includes("string")
                    ? { type: "string", value: t.value, presentationType: i.P.TEXT }
                    : null;
            if (t.value_type === s.o.APPLICATION_ASSET) {
                if (!n.includes("media")) return null;
                let e = o.find((e) => e.key === t.value);
                return null == e
                    ? null
                    : {
                          type: "media",
                          media: { url: u(e), width: e.metadata.width, height: e.metadata.height },
                          presentationType: i.P.IMAGE,
                      };
            }
            return null;
        })(t, n, e);
    };
}
