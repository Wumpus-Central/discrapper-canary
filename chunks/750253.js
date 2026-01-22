var r = n(438495);
function i(e, t) {
    if (!e || !t) return !1;
    if (e === t) return !0;
    if (r(e)) return !1;
    if (r(t)) return i(e, t.parentNode);
    if ("contains" in e) return e.contains(t);
    else if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(t));
    else return !1;
}
e.exports = i;
