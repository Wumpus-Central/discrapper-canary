n.d(t, {
    g: () => i,
    p: () => a
});
var r = n(399606),
    o = n(581883),
    l = n(592204);
let i = () => {
        var e, t, n;
        let l = (0, r.cj)([o.Z], () => {
            var e, t;
            return null != (t = null == (e = o.Z.settings.textAndImages) ? void 0 : e.keywordFilterSettings) ? t : {};
        });
        return {
            profanity: null == (e = l.profanity) ? void 0 : e.value,
            sexualContent: null == (t = l.sexualContent) ? void 0 : t.value,
            slurs: null == (n = l.slurs) ? void 0 : n.value
        };
    },
    a = () => {
        var e;
        let { profanity: t, sexualContent: n, slurs: r } = i();
        return !!(0, l.Xo)({ location: 'use-should-filter-keywords' }) && null != (e = t || n || r) && e;
    };
