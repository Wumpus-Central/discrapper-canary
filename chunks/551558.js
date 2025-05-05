var e = {};
t.exports = function () {
    for (var t; void 0 === t || e.hasOwnProperty(t) || !isNaN(+t); ) t = Math.floor(16777216 * Math.random()).toString(32);
    return (e[t] = !0), t;
};
