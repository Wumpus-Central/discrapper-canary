"use strict";
n.d(t, { o: () => r, J: () => c });
var l,
    i,
    s = n(894279),
    a =
        (((l = {}).DATA = "data"),
        (l.CUSTOM_STRING = "custom_string"),
        (l.APPLICATION_ASSET = "application_asset"),
        (l.APPLICATION_LOCALIZED_STRING = "application_localized_string"),
        l),
    r = (((i = {}).STRING = "string"), (i.NUMBER = "number"), (i.MEDIA = "media"), i);
let o = { [s.P.TEXT]: ["string"], [s.P.NUMBER]: ["number"], [s.P.IMAGE]: ["media"], [s.P.DURATION]: ["number"] };
function c(e) {
    return function (t, n) {
        return (function e(t, n, l) {
            let { data: i, applicationAssets: r, getApplicationAssetUrl: c } = l;
            if (null == t) return null;
            if (t.value_type === a.DATA) {
                let s = i[t.value],
                    a = t.presentation_type;
                return null != s && o[a]?.includes(s.type) && n.includes(s.type)
                    ? { ...s, presentationType: a }
                    : "fallback" in t && null != t.fallback
                      ? e(t.fallback, n, l)
                      : null;
            }
            if (t.value_type === a.CUSTOM_STRING)
                return t.presentation_type === s.P.TEXT && n.includes("string")
                    ? { type: "string", value: t.value, presentationType: s.P.TEXT }
                    : null;
            if (t.value_type === a.APPLICATION_ASSET) {
                if (!n.includes("media")) return null;
                let e = r.find((e) => e.key === t.value);
                return null == e
                    ? null
                    : {
                          type: "media",
                          media: { url: c(e), width: e.metadata.width, height: e.metadata.height },
                          presentationType: s.P.IMAGE,
                      };
            }
            return null;
        })(t, n, e);
    };
}
