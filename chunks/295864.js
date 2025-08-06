var r = n(613078);
function i(e) {
    if (r(e)) {
        var t = e,
            n = t.getAttribute("data-offset-key");
        if (n) return n;
        for (var o = 0; o < t.childNodes.length; o++) {
            var a = i(t.childNodes[o]);
            if (a) return a;
        }
    }
    return null;
}
e.exports = i;
