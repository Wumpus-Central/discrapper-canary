n.d(t, { Z: () => a });
let i = new (n(113638).Z)(r);
function r(e) {
    {
        let t = n(160170).B[e];
        return void 0 !== t ? t().then((e) => e.default) : Promise.resolve({});
    }
}
let a = {
    setEmojiLocale: function (e) {
        i.setParams(e);
    },
    getTermsForEmoji: function (e) {
        let t = i.get();
        return void 0 !== t ? t[e] : [];
    }
};
