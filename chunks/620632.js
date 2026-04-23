"use strict";
n.d(t, { J: () => l, o: () => a });
var r,
    i = n(894279),
    s = n(500620),
    a = (((r = {}).STRING = "string"), (r.NUMBER = "number"), (r.MEDIA = "media"), r);
let o = { [i.P.TEXT]: ["string"], [i.P.NUMBER]: ["number"], [i.P.IMAGE]: ["media"], [i.P.DURATION]: ["number"] };
function l(e) {
    return function (t, n) {
        return (function e(t, n, r) {
            let { data: a, applicationAssets: l, getApplicationAssetUrl: u } = r;
            if (null == t) return null;
            if (t.value_type === s.o.DATA) {
                let i = a[t.value],
                    s = t.presentation_type;
                return null != i && o[s]?.includes(i.type) && n.includes(i.type)
                    ? { ...i, presentationType: s }
                    : "fallback" in t && null != t.fallback
                      ? e(t.fallback, n, r)
                      : null;
            }
            if (t.value_type === s.o.CUSTOM_STRING)
                return t.presentation_type === i.P.TEXT && n.includes("string")
                    ? { type: "string", value: t.value, presentationType: i.P.TEXT }
                    : null;
            if (t.value_type === s.o.APPLICATION_ASSET) {
                if (!n.includes("media")) return null;
                let e = l.find((e) => e.key === t.value);
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
