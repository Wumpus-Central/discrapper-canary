n.d(t, { A: () => a });
let r = new (n(762490).A)(i);
function i(e) {
    {
        let t = n(14206).S[e];
        return void 0 !== t ? t().then((e) => e.default) : Promise.resolve({});
    }
}
let a = {
    setEmojiLocale: function (e) {
        r.setParams(e);
    },
    getTermsForEmoji: function (e) {
        let t = r.get();
        return void 0 !== t ? t[e] : [];
    },
};
