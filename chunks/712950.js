n.d(t, {
    g: () => i,
    p: () => s
});
var r = n(399606),
    l = n(581883),
    o = n(592204);
let i = () => {
        var e, t, n;
        let o = (0, r.cj)([l.Z], () => {
            var e, t;
            return null != (t = null == (e = l.Z.settings.textAndImages) ? void 0 : e.keywordFilterSettings) ? t : {};
        });
        return {
            profanity: null == (e = o.profanity) ? void 0 : e.value,
            sexualContent: null == (t = o.sexualContent) ? void 0 : t.value,
            slurs: null == (n = o.slurs) ? void 0 : n.value
        };
    },
    s = () => {
        var e;
        let { profanity: t, sexualContent: n, slurs: r } = i();
        return !!(0, o.Xo)({ location: 'use-should-filter-keywords' }) && null != (e = t || n || r) && e;
    };
