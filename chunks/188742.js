var i = r(113638);
let a = new i.Z(s);
function o(e) {
    a.setParams(e);
}
function s(e) {
    {
        let n = r(160170).B[e];
        return void 0 !== n ? n().then((e) => e.default) : Promise.resolve({});
    }
}
function l(e) {
    let n = a.get();
    return void 0 !== n ? n[e] : [];
}
n.Z = {
    setEmojiLocale: o,
    getTermsForEmoji: l
};
