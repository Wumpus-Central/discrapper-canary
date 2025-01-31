n.d(t, { I: () => l });
var i = n(914552);
let l = function (e) {
    let { intl: t, t: l } = n(388032),
        o = l[(0, i.runtimeHashMessageKey)(e)],
        a = t.currentLocale;
    t.currentLocale = 'en-US';
    let s = t.string(o);
    return (t.currentLocale = a), s;
};
