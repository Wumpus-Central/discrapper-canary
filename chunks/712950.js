r.d(n, {
    g: function () {
        return s;
    }
});
var i = r(399606),
    a = r(581883);
r(592204);
let s = () => {
    var e, n, r;
    let s = (0, i.cj)([a.Z], () => {
        var e, n;
        return null !== (n = null === (e = a.Z.settings.textAndImages) || void 0 === e ? void 0 : e.keywordFilterSettings) && void 0 !== n ? n : {};
    });
    return {
        profanity: null === (e = s.profanity) || void 0 === e ? void 0 : e.value,
        sexualContent: null === (n = s.sexualContent) || void 0 === n ? void 0 : n.value,
        slurs: null === (r = s.slurs) || void 0 === r ? void 0 : r.value
    };
};
