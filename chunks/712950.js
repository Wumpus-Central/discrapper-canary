n.d(t, {
    g: () => i,
    p: () => l
});
var r = n(399606),
    o = n(581883),
    a = n(592204);
let i = () => {
        var e, t, n;
        let a = (0, r.cj)([o.Z], () => {
            var e, t;
            return null != (t = null == (e = o.Z.settings.textAndImages) ? void 0 : e.keywordFilterSettings) ? t : {};
        });
        return {
            profanity: null == (e = a.profanity) ? void 0 : e.value,
            sexualContent: null == (t = a.sexualContent) ? void 0 : t.value,
            slurs: null == (n = a.slurs) ? void 0 : n.value
        };
    },
    l = () => {
        var e;
        let { profanity: t, sexualContent: n, slurs: r } = i();
        return !!(0, a.Xo)({ location: 'use-should-filter-keywords' }) && null != (e = t || n || r) && e;
    };
