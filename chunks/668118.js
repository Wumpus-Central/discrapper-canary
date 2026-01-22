var r = n(750253);
e.exports = function (e) {
    var t = e.ownerDocument.documentElement;
    if (!("getBoundingClientRect" in e) || !r(t, e))
        return {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        };
    var n = e.getBoundingClientRect();
    return {
        left: Math.round(n.left) - t.clientLeft,
        right: Math.round(n.right) - t.clientLeft,
        top: Math.round(n.top) - t.clientTop,
        bottom: Math.round(n.bottom) - t.clientTop,
    };
};
