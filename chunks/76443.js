var r = n(567220),
    i = n(384404),
    a = n(571785),
    o = n(550773);
e.exports = function (e) {
    var t = o(
        e,
        function (e) {
            var t = e.getSelection(),
                n = t.getStartOffset(),
                i = t.getStartKey(),
                o = e.getCurrentContent().getBlockForKey(i).getText().slice(n);
            return a(e, r.getForward(o).length || 1);
        },
        "forward",
    );
    return t === e.getCurrentContent() ? e : i.push(e, t, "remove-range");
};
