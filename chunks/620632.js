n.d(t, {
    g: () =>
        function e(t, n, i) {
            if (null == t) return null;
            if (t.value_type === l.o.DATA) {
                let a = n[t.value],
                    l = t.presentation_type;
                return null != a && r[l]?.includes(a.type) && i.includes(a.type)
                    ? { ...a, presentationType: l }
                    : "fallback" in t && null != t.fallback
                      ? e(t.fallback, n, i)
                      : null;
            }
            return t.value_type === l.o.CUSTOM_STRING
                ? t.presentation_type === a.P.TEXT && i.includes("string")
                    ? { type: "string", value: t.value, presentationType: a.P.TEXT }
                    : null
                : null;
        },
    o: () => s,
});
var i,
    a = n(894279),
    l = n(500620),
    s = (((i = {}).STRING = "string"), (i.NUMBER = "number"), (i.UNFURLED_MEDIA = "unfurled_media"), i);
let r = {
    [a.P.TEXT]: ["string"],
    [a.P.NUMBER]: ["number"],
    [a.P.IMAGE]: ["unfurled_media"],
    [a.P.DURATION]: ["number"],
};
