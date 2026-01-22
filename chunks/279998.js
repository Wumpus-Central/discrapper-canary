var t = {},
    n = 0x1000000;
e.exports = function () {
    for (var e; void 0 === e || t.hasOwnProperty(e) || !isNaN(+e); ) e = Math.floor(Math.random() * n).toString(32);
    return (t[e] = !0), e;
};
