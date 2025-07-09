n.d(t, {
    g: () => r,
    p: () => c
});
var a = n(399606),
    o = n(581883),
    i = n(592204);
let r = () => {
        var e, t, n;
        let i = (0, a.cj)([o.Z], () => {
            var e, t;
            return null != (t = null == (e = o.Z.settings.textAndImages) ? void 0 : e.keywordFilterSettings) ? t : {};
        });
        return {
            profanity: null == (e = i.profanity) ? void 0 : e.value,
            sexualContent: null == (t = i.sexualContent) ? void 0 : t.value,
            slurs: null == (n = i.slurs) ? void 0 : n.value
        };
    },
    c = () => {
        var e;
        let { profanity: t, sexualContent: n, slurs: a } = r();
        return !!(0, i.Xo)({ location: 'use-should-filter-keywords' }) && null != (e = t || n || a) && e;
    };
