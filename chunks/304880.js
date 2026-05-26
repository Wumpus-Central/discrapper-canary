var n = o(324988),
    a = String;
r.exports = function (r) {
    if ("Symbol" === n(r)) throw TypeError("Cannot convert a Symbol value to a string");
    return a(r);
};
