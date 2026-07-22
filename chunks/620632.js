"use strict";
n.d(t, { J: () => o, o: () => s });
var i,
    r = n(894279),
    a = n(500620),
    s = (((i = {}).STRING = "string"), (i.NUMBER = "number"), (i.MEDIA = "media"), i);
let l = { [r.P.TEXT]: ["string"], [r.P.NUMBER]: ["number"], [r.P.IMAGE]: ["media"], [r.P.DURATION]: ["number"] };
function o(e) {
    return function (t, n) {
        return (function e(t, n, i) {
            let { data: s, applicationAssets: o, getApplicationAssetUrl: d } = i;
            if (null == t) return null;
            if (t.value_type === a.o.DATA) {
                let a = s[t.value],
                    o = t.presentation_type;
                return null != a && l[o]?.includes(a.type) && n.includes(a.type)
                    ? "playtime_hours" === t.value && "number" === a.type && o === r.P.DURATION
                        ? { type: a.type, value: Math.floor(60 * a.value * 6e4), presentationType: o }
                        : { ...a, presentationType: o }
                    : "fallback" in t && null != t.fallback
                      ? e(t.fallback, n, i)
                      : null;
            }
            if (t.value_type === a.o.CUSTOM_STRING)
                return t.presentation_type === r.P.TEXT && n.includes("string")
                    ? { type: "string", value: t.value, presentationType: r.P.TEXT }
                    : null;
            if (t.value_type === a.o.APPLICATION_ASSET) {
                if (!n.includes("media")) return null;
                let e = o.find((e) => e.key === t.value);
                return null == e
                    ? null
                    : {
                          type: "media",
                          media: { url: d(e), width: e.metadata.width, height: e.metadata.height },
                          presentationType: r.P.IMAGE,
                      };
            }
            return null;
        })(t, n, e);
    };
}
