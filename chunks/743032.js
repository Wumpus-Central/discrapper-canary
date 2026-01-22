var r = n(797686);
function i(e) {
    var t = e.length;
    if (
        ((Array.isArray(e) || ("object" != typeof e && "function" != typeof e)) && r(!1),
        "number" != typeof t && r(!1),
        0 === t || t - 1 in e || r(!1),
        "function" == typeof e.callee && r(!1),
        e.hasOwnProperty)
    )
        try {
            return Array.prototype.slice.call(e);
        } catch (e) {}
    for (var n = Array(t), i = 0; i < t; i++) n[i] = e[i];
    return n;
}
function a(e) {
    return (
        !!e &&
        ("object" == typeof e || "function" == typeof e) &&
        "length" in e &&
        !("setInterval" in e) &&
        "number" != typeof e.nodeType &&
        (Array.isArray(e) || "callee" in e || "item" in e)
    );
}
e.exports = function (e) {
    return a(e) ? (Array.isArray(e) ? e.slice() : i(e)) : [e];
};
