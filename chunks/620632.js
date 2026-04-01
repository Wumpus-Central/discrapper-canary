"use strict";
n.d(t, { g: () => o, o: () => s });
var r = n(894279),
    i = n(500620),
    s = (function (e) {
        return (e.STRING = "string"), (e.NUMBER = "number"), (e.UNFURLED_MEDIA = "unfurled_media"), e;
    })({});
let a = {
    [r.P.TEXT]: ["string"],
    [r.P.NUMBER]: ["number"],
    [r.P.IMAGE]: ["unfurled_media"],
    [r.P.DURATION]: ["number"],
};
function o(e, t, n) {
    if (null == e) return null;
    if (e.value_type === i.o.DATA) {
        let r = t[e.value],
            i = e.presentation_type;
        return null != r && a[i]?.includes(r.type) && n.includes(r.type)
            ? { ...r, presentationType: i }
            : "fallback" in e && null != e.fallback
              ? o(e.fallback, t, n)
              : null;
    }
    return e.value_type === i.o.CUSTOM_STRING
        ? e.presentation_type === r.P.TEXT && n.includes("string")
            ? { type: "string", value: e.value, presentationType: r.P.TEXT }
            : null
        : null;
}
