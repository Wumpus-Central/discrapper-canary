var n = r(581079);
t.exports = function (t) {
    if (!(t && ('object' == typeof t || 'function' == typeof t) && 'length' in t && !('setInterval' in t) && 'number' != typeof t.nodeType && (Array.isArray(t) || 'callee' in t || 'item' in t))) return [t];
    if (Array.isArray(t)) return t.slice();
    var e = t.length;
    if (((Array.isArray(t) || ('object' != typeof t && 'function' != typeof t)) && n(!1), 'number' != typeof e && n(!1), 0 === e || e - 1 in t || n(!1), 'function' == typeof t.callee && n(!1), t.hasOwnProperty))
        try {
            return Array.prototype.slice.call(t);
        } catch (t) {}
    for (var r = Array(e), i = 0; i < e; i++) r[i] = t[i];
    return r;
};
