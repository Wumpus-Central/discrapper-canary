var r = n(108993);
function i(e) {
    if (r(e)) {
        var t = e,
            n = t.getAttribute("data-offset-key");
        if (n) return n;
        for (var a = 0; a < t.childNodes.length; a++) {
            var o = i(t.childNodes[a]);
            if (o) return o;
        }
    }
    return null;
}
e.exports = i;
