var i = r(875604),
    a = r(537828),
    o = Function.prototype;
e.exports = function (e) {
    var n = e.bind;
    return e === o || (i(o, e) && n === o.bind) ? a : n;
};
