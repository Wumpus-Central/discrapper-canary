"use strict";
n.d(t, { o: () => o, J: () => d });
var i,
    r,
    s = n(894279),
    a =
        (((i = {}).DATA = "data"),
        (i.CUSTOM_STRING = "custom_string"),
        (i.APPLICATION_ASSET = "application_asset"),
        (i.APPLICATION_LOCALIZED_STRING = "application_localized_string"),
        i),
    o = (((r = {}).STRING = "string"), (r.NUMBER = "number"), (r.MEDIA = "media"), r);
let l = { [s.P.TEXT]: ["string"], [s.P.NUMBER]: ["number"], [s.P.IMAGE]: ["media"], [s.P.DURATION]: ["number"] };
function d(e) {
    return function (t, n) {
        return (function e(t, n, i) {
            let { data: r, applicationAssets: o, getApplicationAssetUrl: d } = i;
            if (null == t) return null;
            if (t.value_type === a.DATA) {
                let s = r[t.value],
                    a = t.presentation_type;
                return null != s && l[a]?.includes(s.type) && n.includes(s.type)
                    ? { ...s, presentationType: a }
                    : "fallback" in t && null != t.fallback
                      ? e(t.fallback, n, i)
                      : null;
            }
            if (t.value_type === a.CUSTOM_STRING)
                return t.presentation_type === s.P.TEXT && n.includes("string")
                    ? { type: "string", value: t.value, presentationType: s.P.TEXT }
                    : null;
            if (t.value_type === a.APPLICATION_ASSET) {
                if (!n.includes("media")) return null;
                let e = o.find((e) => e.key === t.value);
                return null == e
                    ? null
                    : {
                          type: "media",
                          media: { url: d(e), width: e.metadata.width, height: e.metadata.height },
                          presentationType: s.P.IMAGE,
                      };
            }
            return null;
        })(t, n, e);
    };
}
