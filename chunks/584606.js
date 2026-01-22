var r = n(494277);

function i(e) {
    if (r(e)) {
        var t = e,
            n = t.getAttribute("data-offset-key");
        if (n) return n;
        for (var a = 0; a < t.childNodes.length; a++) {
            var s = i(t.childNodes[a]);
            if (s) return s;
        }
    }
    return null;
}
e.exports = i;
