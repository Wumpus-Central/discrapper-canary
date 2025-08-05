n.d(t, {
    g: () => a,
    p: () => o
});
var r = n(399606),
    i = n(581883),
    l = n(592204);
let a = () => {
        var e, t, n;
        let l = (0, r.cj)([i.Z], () => {
            var e, t;
            return null != (t = null == (e = i.Z.settings.textAndImages) ? void 0 : e.keywordFilterSettings) ? t : {};
        });
        return {
            profanity: null == (e = l.profanity) ? void 0 : e.value,
            sexualContent: null == (t = l.sexualContent) ? void 0 : t.value,
            slurs: null == (n = l.slurs) ? void 0 : n.value
        };
    },
    o = () => {
        var e;
        let { profanity: t, sexualContent: n, slurs: r } = a();
        return !!(0, l.Xo)({ location: 'use-should-filter-keywords' }) && null != (e = t || n || r) && e;
    };
