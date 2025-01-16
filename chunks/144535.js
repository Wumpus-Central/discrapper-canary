n.d(t, {
    I: function () {
        return i;
    }
});
var o = n(969090);
let i = function (e) {
    let { intl: t, t: i } = n(388032),
        a = i[(0, o.runtimeHashMessageKey)(e)],
        l = t.currentLocale;
    t.currentLocale = 'en-US';
    let s = t.string(a);
    return (t.currentLocale = l), s;
};
