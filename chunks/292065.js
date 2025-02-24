e.exports = function (e, t) {
    if (('constructor' !== t || 'function' != typeof e[t]) && '__proto__' != t) return e[t];
};
