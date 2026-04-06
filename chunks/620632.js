"use strict";
n.d(t, { J: () => l, o: () => s });
var r = n(894279),
    i = n(500620),
    s = (function (e) {
        return (e.STRING = "string"), (e.NUMBER = "number"), (e.MEDIA = "media"), e;
    })({});
let a = { [r.P.TEXT]: ["string"], [r.P.NUMBER]: ["number"], [r.P.IMAGE]: ["media"], [r.P.DURATION]: ["number"] };
function o(e, t, n) {
    let { data: s, applicationAssets: l, getApplicationAssetUrl: u } = n;
    if (null == e) return null;
    if (e.value_type === i.o.DATA) {
        let r = s[e.value],
            i = e.presentation_type;
        return null != r && a[i]?.includes(r.type) && t.includes(r.type)
            ? { ...r, presentationType: i }
            : "fallback" in e && null != e.fallback
              ? o(e.fallback, t, n)
              : null;
    }
    if (e.value_type === i.o.CUSTOM_STRING)
        return e.presentation_type === r.P.TEXT && t.includes("string")
            ? { type: "string", value: e.value, presentationType: r.P.TEXT }
            : null;
    if (e.value_type === i.o.APPLICATION_ASSET) {
        if (!t.includes("media")) return null;
        let n = l.find((t) => t.key === e.value);
        return null == n
            ? null
            : {
                  type: "media",
                  media: { url: u(n), width: n.metadata.width, height: n.metadata.height },
                  presentationType: r.P.IMAGE,
              };
    }
    return null;
}
function l(e) {
    return function (t, n) {
        return o(t, n, e);
    };
}
