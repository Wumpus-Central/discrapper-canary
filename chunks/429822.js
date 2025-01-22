r(771008);
var i = r(327192),
    a = r(141603),
    o = r(875604),
    s = r(996211),
    l = Array.prototype,
    u = {
        DOMTokenList: !0,
        NodeList: !0
    };
e.exports = function (e) {
    var n = e.values;
    return e === l || (o(l, e) && n === l.values) || a(u, i(e)) ? s : n;
};
