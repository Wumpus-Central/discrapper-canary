n.d(t, {
    g: () => l,
    p: () => o
});
var r = n(399606),
    a = n(581883),
    i = n(592204);
let l = () => {
        var e, t, n;
        let i = (0, r.cj)([a.Z], () => {
            var e, t;
            return null != (t = null == (e = a.Z.settings.textAndImages) ? void 0 : e.keywordFilterSettings) ? t : {};
        });
        return {
            profanity: null == (e = i.profanity) ? void 0 : e.value,
            sexualContent: null == (t = i.sexualContent) ? void 0 : t.value,
            slurs: null == (n = i.slurs) ? void 0 : n.value
        };
    },
    o = () => {
        var e;
        let { profanity: t, sexualContent: n, slurs: r } = l();
        return !!(0, i.Xo)({ location: 'use-should-filter-keywords' }) && null != (e = t || n || r) && e;
    };
