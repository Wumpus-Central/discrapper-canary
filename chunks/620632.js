"use strict";
n.d(t, { J: () => o, o: () => r });
var i,
    l = n(894279),
    s = n(500620),
    r = (((i = {}).STRING = "string"), (i.NUMBER = "number"), (i.MEDIA = "media"), i);
let a = { [l.P.TEXT]: ["string"], [l.P.NUMBER]: ["number"], [l.P.IMAGE]: ["media"], [l.P.DURATION]: ["number"] };
function o(e) {
    return function (t, n) {
        return (function e(t, n, i) {
            let { data: r, applicationAssets: o, getApplicationAssetUrl: c } = i;
            if (null == t) return null;
            if (t.value_type === s.o.DATA) {
                let l = r[t.value],
                    s = t.presentation_type;
                return null != l && a[s]?.includes(l.type) && n.includes(l.type)
                    ? { ...l, presentationType: s }
                    : "fallback" in t && null != t.fallback
                      ? e(t.fallback, n, i)
                      : null;
            }
            if (t.value_type === s.o.CUSTOM_STRING)
                return t.presentation_type === l.P.TEXT && n.includes("string")
                    ? { type: "string", value: t.value, presentationType: l.P.TEXT }
                    : null;
            if (t.value_type === s.o.APPLICATION_ASSET) {
                if (!n.includes("media")) return null;
                let e = o.find((e) => e.key === t.value);
                return null == e
                    ? null
                    : {
                          type: "media",
                          media: { url: c(e), width: e.metadata.width, height: e.metadata.height },
                          presentationType: l.P.IMAGE,
                      };
            }
            return null;
        })(t, n, e);
    };
}
