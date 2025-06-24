n.d(t, {
    g: () => a,
    p: () => l
});
var r = n(399606),
    i = n(581883),
    o = n(592204);
let a = () => {
        var e, t, n;
        let o = (0, r.cj)([i.Z], () => {
            var e, t;
            return null != (t = null == (e = i.Z.settings.textAndImages) ? void 0 : e.keywordFilterSettings) ? t : {};
        });
        return {
            profanity: null == (e = o.profanity) ? void 0 : e.value,
            sexualContent: null == (t = o.sexualContent) ? void 0 : t.value,
            slurs: null == (n = o.slurs) ? void 0 : n.value
        };
    },
    l = () => {
        var e;
        let { profanity: t, sexualContent: n, slurs: r } = a();
        return !!(0, o.Xo)({ location: 'use-should-filter-keywords' }) && null != (e = t || n || r) && e;
    };
