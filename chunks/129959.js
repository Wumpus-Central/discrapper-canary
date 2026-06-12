var i = n(50613),
    r = n(817584),
    s = n(467957),
    a = i ? i.isConcatSpreadable : void 0;
e.exports = function (e) {
    return s(e) || r(e) || !!(a && e && e[a]);
};
